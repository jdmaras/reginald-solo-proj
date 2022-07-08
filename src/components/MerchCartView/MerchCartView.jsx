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

  // function to loop through and add up the price of merchandise to display how much the order will cost you 
  const appendToDb = () => {
    for(let i = 0; i<+cart.length; i++){
    dispatch({
      type: 'CHECKOUT_CART',
      payload: cart[i]
    })
  }
  //once the order is processed, this clears out what is in your checkout
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
    <>
    <div className='checkoutContainer'></div>
    <div className="text-3xl font-semibold">Check Out</div>
    <div className='text-xl'> Cart: {cart.length} </div>
    <div className='text-xl'> Price: ${addUpPrices(cart)}</div>

    <div className='merchContainer'>
        <div className='merchCard'>
        <ul>
          {cart.map((item, i) => {
            return(
              <li key={item.id}>
                <div className='text-3xl font-bold'>{item.product_name}</div>
                <img src={item.img_url} />
                <div className='text-3xl font-semibold'>{item.price}</div>
                <br></br>
                    <button className="text-white border mt-2 bg-orange-400 border-orange-400
    hover:bg-transparent hover:text-orange-500 rounded-md px-2 py-2" onClick={(i) => cart.splice(i,1)}>Remove From Cart</button>
              </li>
              )
            })}
        </ul>
      <button className="text-white border mt-2 bg-orange-400 border-orange-400
    hover:bg-transparent hover:text-orange-500 rounded-md px-2 py-2" onClick={appendToDb}>Checkout</button>
    </div>
    </div>
    </>
  )
}

export default MerchCartView;

// THIS HAS TO POST! THE ORDER UPON CHECKOUT