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
    <div>
        MerchStore

    </div>
  )
}

export default MerchStore;
