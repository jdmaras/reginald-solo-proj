import React from 'react'
//import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

function MerchStore() {
    const dispatch = useDispatch();
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
            <ul>
                {merch.map(item => {
                return(
                    <li key={item.id}>
                        {item.product_name}
                        <img src={item.img_url} />
                        {item.price}
                    </li>
                    )
                })}
            </ul>
        </div>
    </div>
  )
}

export default MerchStore;
