# Order Tracker

A full-stack **Order Tracker** application built with **React.js**, **AG Grid**, **Node.js (Express)**, and **PostgreSQL**.  
This app allows users to manage customer orders with full **CRUD capabilities**, advanced **grid interactions**, and validation on both frontend and backend.

## Tech Stack

- **Frontend:** React.js + AG Grid  
- **Backend:** Node.js + Express  
- **Database:** PostgreSQL  

## Project Structure

The project is organized as follows:
<pre> 
order-Tracking/
├── backend/ # Node.js + Express backend
└── frontend/ # React.js frontend with AG Grid
</pre>

## Features

### Frontend (AG Grid)

- Display orders with columns:  
  - **Order ID**, **Customer Name**, **Order Date**, **Total Amount**, **Status** (Pending, Shipped, Delivered)  
- Export grid data to **CSV**  
- Inline editing for **Status** and **Total Amount**  
- Sorting, filtering, and pagination  
- Row selection for bulk delete  
- Custom cell renderer for **status** (color-coded badges)  
- Add/Edit/Delete orders via modal or side panel  
- **Frontend validation** to ensure correct data entry  

### Backend

- Full **CRUD** API for orders  
- **Backend validation** to maintain data integrity  

## Installation

### Backend

1. Navigate to the backend folder:

```bash
cd order-Tracking/backend
npm install
node app.js
```
### Frontend
1. Navigate to the frontend folder:
```bash
cd order-Tracking/frontend
npm install
npm start
```

### Usage
- View Orders: See all orders in the AG Grid with sorting, filtering, and pagination.

- Add/Edit/Delete Orders: Use modals or side panels for CRUD operations.

- Bulk Delete: Select multiple rows and delete orders in bulk.

- Export CSV: Export the grid data for reporting or backups.

- Validation: Both frontend and backend validations prevent incorrect data entries.


## Screenshots

### Order Tracker Dashboard
The dashboard displays all customer orders in a table powered by **AG Grid**.  
Users can:

- **Add Order**: Add a new customer order using the modal.
- **Edit Selected**: Edit selected orders inline or via modal.
- **Delete Selected**: Remove selected orders in bulk.
- **Export CSV**: Export all orders to a CSV file.
- **Status Indicators**: Each order has a color-coded status badge for **Pending**, **Shipped**, and **Delivered**.
- Pagination – Navigate through orders with a page selector at the bottom of the table.

<img width="1876" height="656" alt="image" src="https://github.com/user-attachments/assets/fd270156-a6ea-47cc-8ebc-6aed777c011d" />
<img width="1848" height="862" alt="image" src="https://github.com/user-attachments/assets/2bda417f-bd6e-4012-8d14-67c1e55fc7fd" />

