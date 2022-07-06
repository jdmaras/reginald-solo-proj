import React from 'react'
//import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import AddToCart from './AddToCart';

function MerchStore() {
    const dispatch = useDispatch();
    const cart = useSelector(store => store.cart)
    const merch = useSelector(store => store.merch)
    //const params = useParams()
    //console.log ('What are the params', params)
    console.log('this is the merch', merch)


    useEffect(() => {
        getMerchDetails()
    }, [])



    const getMerchDetails = () => {
        dispatch({
            type: 'FETCH_MERCH',
            //payload: params.id
        })
    }
  return (
    <div className='merchContainer'>
        <div className='merchCard'>
            <h4>cart: {cart.length}</h4>
            <ul>
                {merch.map(item => {
                return(
                    <li key={item.id}>
                        {item.product_name}
                        <img src={item.img_url} />
                        {item.price}
                        {/* grabbing the value of every item you click with the id={item.id} */}
                        <AddToCart item={item} />
                    </li>
                    )
                })}
                
            </ul>
            
        </div>
    </div>
  )
}

export default MerchStore;
