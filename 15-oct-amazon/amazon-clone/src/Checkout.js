import React from 'react'
import { useStateValue } from './StateProvider'
import CheckoutProduct from "./CheckoutProduct"
import "./Checkout.css"
import Subtotal from "./Subtotal"

function Checkout() {
  const [{basket}] = useStateValue();

  return (
    <div className="checkout">
      <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/I/81ZB62prn-L._AC_SX679_.jpg" alt="" />
      {basket?.length === 0 ? (
        <div>
          <h2>Your Shopping Basket is empty</h2>
        </div>
      ) : (
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket?.map((item) => (
            <CheckoutProduct 
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      )}
    
    {basket.length > 0 && (
      <div className="checkout__right">
        <Subtotal />
      </div>
    )}
    </div>
    
  )
}

export default Checkout
