import React from 'react'
import CartCard from "../components/CartCard"


const CartScreen = ({cartItems}) => {
  return (
    <div className='h-[95%] text-6xl grid grid-cols-3 gap-4'>
      {
        cartItems.map((elem)=>{
          return <CartCard product={elem} key={(elem.id)}/>
        })
      }
    </div>
  )
}

export default CartScreen
