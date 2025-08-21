import express from 'express';
import cors from 'cors';
import pool from './models/db.js';

const app = express();
app.use(cors());
app.use(express.json());

// Get all orders
app.get('/api/orders', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM orders ORDER BY id ASC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get single order by ID
app.get('/api/orders/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const result = await pool.query('SELECT * FROM orders WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create new order
app.post('/api/orders', async (req, res) => {
  const { customer_name, order_date, total_amount, status } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO orders (customer_name, order_date, total_amount, status) VALUES ($1, $2, $3, $4) RETURNING *',
      [customer_name, order_date, total_amount, status]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update order by ID
app.put('/api/orders/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const { customer_name, order_date, total_amount, status } = req.body;
  try {
    const result = await pool.query(
      `UPDATE orders SET customer_name=$1, order_date=$2, total_amount=$3, status=$4 WHERE id=$5 RETURNING *`,
      [customer_name, order_date, total_amount, status, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete order by ID
app.delete('/api/orders/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const result = await pool.query('DELETE FROM orders WHERE id = $1', [id]);
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.json({ message: 'Order deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
