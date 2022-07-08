import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const MerchAdminView = () => {
  const [imgUrl, setImgUrl] = useState('');
  const [productName, setProductName] = useState('');
  const [productType, setProductType] = useState('');
  const [size, setSize] = useState('');
  const [price, setPrice] = useState('');

  const dispatch = useDispatch();

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
    <form className="merchInputForm" onSubmit={appendMerchToDb}>
    <h3>Merch Input Form</h3>
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
      <input type="submit" value="submit" />
    </form>
   

  )
}
