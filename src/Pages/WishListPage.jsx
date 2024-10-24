import React from 'react'
import WishList from '../Components/WishListComponent/WishList'
import { Typography } from '@mui/material'

const WishListPage = () => {
  return (
    <div>
      <Typography variant="h4" sx={{ marginBottom: '10px', color: '#1976d2' }}>WishList Page</Typography>
      <WishList />
    </div>
  )
}

export default WishListPage
