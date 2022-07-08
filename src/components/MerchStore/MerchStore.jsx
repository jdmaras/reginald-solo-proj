import React from 'react'
//import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import AddToCart from './AddToCart';
import DeleteButton from '../DeleteButton/DeleteButton';
import EditButton from '../EditButton/EditButton';

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
    <div className="text-3xl font-semibold">Welcome to the store?</div>
    <div className='text-xl'>cart: {cart.length}</div>
    <div className='merchContainer'>
        <div className='merchCard'>
        
            <ul>
                {merch.map(item => {
                return(
                    <li key={item.id}>
                        <div className='text-3xl font-bold'>{item.product_name}</div>
                        <img src={item.img_url} />
                        <div className='mt-2 mb-1'>
                        <div className='text-3xl font-semibold'>{item.price}</div>
                        </div>
                        
                        {/* grabbing the value of every item you click with the id={item.id} */}
                        <AddToCart item={item} />
                        <h1>NOTE: DELETE NEEDS TO CONDITIONAL TO BEING ONLY AVAILABLE FOR ADMIN VIEW</h1>
                        <DeleteButton itemId={item.id}/>
                        <EditButton itemId={item.id}/>
                    </li>
                    )
                })}
                
            </ul>
            
        </div>
    </div>
    <div>
        
    </div>
    <div>
        <Link to="/merchcartview" className="text-white border mt-2 bg-orange-400 border-orange-400
    hover:bg-transparent hover:text-orange-500 rounded-md px-2 py-2">Proceed To Checkout</Link>
    </div>
    </>
  )
}

export default MerchStore;
