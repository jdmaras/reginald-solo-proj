import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react'
//import { SweetAlert } from 'sweetalert/typings/core';

function MerchCartView(){
  const cart = useSelector(store => store.cart)
  const dispatch = useDispatch();

  //running the addUpPrices funtion so that it loops through the card to add the sums up
  useEffect(() => {
   addUpPrices
  },[cart])

  const appendToDb = () => {
    for(let i = 0; i<+cart.length; i++){
    dispatch({
      type: 'CHECKOUT_CART',
      payload: cart[i]
    })
  }
    dispatch({
      type: 'CLEAR_CART',
    })
  }
  
  

  //need to convert the string to a number
  function addUpPrices(cart){
    console.log('this is cart', cart)
    let sum = 0
    for( let i = 0; i < cart.length; i++){
      sum += Number(cart[i].price)
    }
    return sum
  }
  
  return (
    <div>
      <h2>MerchCartView</h2>
      <h4>Cart: {cart.length} Price: ${addUpPrices(cart)}</h4>
        <ul>
          {cart.map((item, i) => {
            return(
              <li key={item.id}>
                {item.product_name}
                <img src={item.img_url} />
                {item.price}
                    <button onClick={(i) => cart.splice(i,1)}>Remove</button>
              </li>
              )
            })}
        </ul>
      <button onClick={appendToDb}>Checkout</button>
    </div>
  )
}

export default MerchCartView;

// THIS HAS TO POST! THE ORDER UPON CHECKOUT