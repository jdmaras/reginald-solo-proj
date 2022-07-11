import React from 'react'
//import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AddToCart from '../AddToCart/AddToCart';
import DeleteButton from '../DeleteButton/DeleteButton';
import EditButton from '../EditButton/EditButton';
import MerchAdminItemAdd from '../MerchAdminItemAdd/MerchAdminItemAdd';


function MerchStore() {
    const dispatch = useDispatch();
    const cart = useSelector(store => store.cart)
    const merch = useSelector(store => store.merch)
    const user = useSelector(store => store.user)
    //const params = useParams()
    //console.log ('What are the params', params)
    console.log('this is the merch', merch)

    useEffect(() => {
        getMerchDetails()
    }, [])

    const getMerchDetails = () => {
        dispatch({
            type: 'FETCH_MERCH',
        })
    }

   
  return (
    <>
   
    <div className='merchContainer'>
        <div className='merchCard'>
        <div className="text-3xl font-semibold">Welcome to the store?</div>
        <div className='text-xl'>Cart: {cart.length}</div>
            <ul>
                {merch[0] && merch.map(item => {
                return(
                    <li key={item.id}>
                        <div className='text-3xl font-bold'>{item.product_name}</div>
                        <img src={item.img_url} />
                        <div className='mt-2 mb-1'>
                        <div className='text-3xl font-semibold'>{item.price}</div>
                        </div>
                        
                        {/* grabbing the value of every item you click with the id={item.id} */}
                        <AddToCart item={item} />
                        <div class="text-2xl">Administrative Powers Activated</div>
                        {/* user must be logged in as an admin in order to see these buttons */}
                        {user.admin && (
                            <>
                        <DeleteButton itemId={item.id}/>
                        <Link to={`/merch/${item.id}/edit`}>
                        <EditButton itemId={item.id}/>
                        </Link>
                        
                        </>
                        )}
                    </li>
                    )
                })}
                
            </ul>
            <Link to="/merchcartview" className="text-white border mt-2 bg-orange-400 border-orange-400
    hover:bg-transparent hover:text-orange-500 rounded-md px-2 py-2">Proceed To Checkout</Link>
            <Link to="/merchadd">
            <button className='px-2 py-2 ml-4'>Add Merch To Store</button>
            </Link>
        </div>

    </div>
    <div>
        
    </div>
    
       
    </>
  )
}

export default MerchStore;
