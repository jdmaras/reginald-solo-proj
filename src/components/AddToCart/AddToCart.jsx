import { useDispatch } from "react-redux";
function AddToCart({ item }) {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch({
      type: "ADD_CART",
      payload: {
        product_id: item.id,
        product_name: item.product_name,
        img_url: item.img_url,
        price: item.price,
      },
    });
  };

  return (
    <>
      <button
        className="text-white border mt-2 bg-orange-400 border-orange-400
    hover:bg-transparent hover:text-orange-500 rounded-md px-2 py-2"
        id={item.id}
        onClick={addToCart}
      >
        Add To Cart
      </button>
    </>
  );
}

export default AddToCart;
