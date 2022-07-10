import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function MerchAdminItemAdd(){
  const merch = useSelector(store => store.merch)
  const dispatch = useDispatch()
  const [imgUrl, setImgUrl] = useState('');
  const [productName, setProductName] = useState('');
  const [productType, setProductType] = useState('');
  const [size, setSize] = useState('');
  const [price, setPrice] = useState('');

  const appendMerchToDb = (event) => {
    event.preventDefault();
    dispatch({
      type: "REGISTER_MERCH_TO_DB",
      payload: {
          img_url: imgUrl,
          product_name: productName,
          product_type: productType,
          size: size,
          price: price,
      }
    })
    setImgUrl('');
    setProductName('');
    setProductType('');
    setSize('');
    setPrice('');
  }
//Dispatching all the inputs over to the saga
  return (
    <div className='md:container md:mx-auto '>
    <form className="merchInputForm" onSubmit={appendMerchToDb}>
    <div className="text-xl mb-2">Merch Input Form</div>
    <div>
      <label htmlFor="url">
        Image Url:
      <input
      type="text"
      name="Image Url"
      value={imgUrl}
      onChange={(event) => setImgUrl(event.target.value)}
      />
       </label>
    </div>
    <div className='my-2'>
    <div>
      <label htmlFor="product_name">
        Product Name: 
      <input
      type="text"
      name="Product Name"
      value={productName}
      onChange={(event) => setProductName(event.target.value)}
      />
       </label>
    </div>
    </div>
    <div>
      <label htmlFor="product_type">
        Product Type:
      <input
      type="text"
      name="Product Type"
      value={productType}
      onChange={(event) => setProductType(event.target.value)}
      />
       </label>
    </div>
    <div className='my-2'>
    <div>
      <label htmlFor="size">
        Size: 
      <input
      type="text"
      name="Size"
      value={size}
      onChange={(event) => setSize(event.target.value)}
      />
       </label>
    </div>
    </div>
    <div>
      <label htmlFor="price">
        Price: 
        {/* you already started doing everything as a string, don't stop now */}
      <input
      type="text"
      name="Price"
      value={price}
      onChange={(event) => setPrice(event.target.value)}
      />
       </label>
    </div>
    {/* forms you can put in an input incase you hit enter so that it submits */}
      <input className="text-white border mt-2 bg-orange-400 border-orange-400
    hover:bg-transparent hover:text-orange-500 rounded-md px-2 py-2" type="submit" value="submit" />
    </form>
    </div>
   

  )
}
export default MerchAdminItemAdd;