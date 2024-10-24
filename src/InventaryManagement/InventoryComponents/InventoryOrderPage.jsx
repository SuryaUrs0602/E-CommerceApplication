import React, { useEffect, useState } from 'react'
import axios from 'axios';
import FormatPrice from '../../Utils/FormatPrice';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const InventoryOrderPage = () => {

  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    const fetchOrderDetails = async() => {
      try{
        // const response = await axios.get('http://localhost:4000/all_details');
        const response = await axios.get('http://localhost:5000/all_details');
        const Data = response.data;      
        setOrderData(Data)
      } catch (error) {
        console.log('Some problem occured');
      }
    }
    fetchOrderDetails();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Typography variant="h4" style={{ padding: '16px' }}>
        Orders Page Details
      </Typography>
      {orderData.length > 0 ? (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Order ID</strong></TableCell>
              <TableCell><strong>User Name</strong></TableCell>
              <TableCell><strong>Email</strong></TableCell>
              <TableCell><strong>Items</strong></TableCell>
              <TableCell><strong>Order Total</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderData.map((details) => (
              <TableRow key={details.id}>
                <TableCell>{details.id}</TableCell>
                <TableCell>{details.userName}</TableCell>
                <TableCell>{details.userEmail}</TableCell>
                <TableCell>
                  {details.orders.items.map((item, index) => (
                    <div key={item.id}>
                      {item.name} (Quantity: {item.quantity})
                      {index < details.orders.items.length - 1 && <br />}
                    </div>
                  ))}
                </TableCell>
                <TableCell><FormatPrice price={details.orders.total} /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <Typography variant="h6" style={{ padding: '16px' }}>
          No orders found.
        </Typography>
      )}
    </TableContainer>
  )
}

export default InventoryOrderPage
