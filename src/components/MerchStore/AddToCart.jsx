import { useDispatch } from 'react-redux'
function AddToCart({item}){
    const dispatch = useDispatch();
    const addToCart = () => {
     

        dispatch({
            type: 'ADD_CART',
            payload: {
                product_id: item.id,
                product_name: item.product_name,
                img_url: item.img_url
         }
        })
    }

    return(
        <>
        <button id={item.id} onClick={addToCart}>Add To Cart</button>
        </>
    )
}

export default AddToCart;