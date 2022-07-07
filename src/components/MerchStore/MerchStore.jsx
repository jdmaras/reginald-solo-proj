import React from 'react'
//import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import AddToCart from './AddToCart';
import DeleteButton from '../DeleteButton/DeleteButton';

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
    <>
    <div className='merchContainer'>
        <div className='merchCard'>
            <h4>cart: {cart.length}</h4>
            <ul>
                {merch.map(item => {
                return(
                    <li key={item.id}>
                        {item.product_name}
                        <img src={item.img_url} />
                        <div className='mt-2 mb-1'>
                        {item.price}
                        </div>
                        
                        {/* grabbing the value of every item you click with the id={item.id} */}
                        <AddToCart item={item} />
                        <h1>NOTE: DELETE NEEDS TO CONDITIONAL TO BEING ONLY AVAILABLE FOR ADMIN VIEW</h1>
                        <DeleteButton itemId={item.id}/>
                    </li>
                    )
                })}
                
            </ul>
            
        </div>
    </div>
    <div>
        
    </div>
    <div>
        <Link to="/merchcartview">Proceed To Checkout</Link>
    </div>
    </>
  )
}

export default MerchStore;
