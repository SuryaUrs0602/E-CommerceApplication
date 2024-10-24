import React from 'react'
import { useWishListContext } from '../../Context/WishListContext'
import WishListItem from './WishListItem';

const WishList = () => {

    const { wishListCart = [] } = useWishListContext();

    if (wishListCart.length === 0) {
        return <div><h1>No Items in WishList</h1></div>
    }

  return (      
    <div>
      <div>
        {wishListCart.map((currData) => (
          <WishListItem key={currData.id} {...currData} />
        ))}
      </div>
    </div>
  )
}

export default WishList
