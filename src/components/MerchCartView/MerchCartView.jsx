import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert2";

function MerchCartView() {
  const cartItems = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  //running the addUpPrices funtion so that it loops through the card to add the sums up
  useEffect(() => {
    addUpPrices;
  }, [cartItems]);

  // function to loop through and add up the price of merchandise to display how much the order will cost you
  const appendToDb = () => {
    dispatch({
      type: "CHECKOUT_CART",
      //posting one item at a time with [i]
      payload: { cart: cartItems },
    });
    // once the order is processed, this clears out what is in your checkout
    dispatch({
      type: "CLEAR_CART",
    });
    checkoutAlert();
  };

  function checkoutAlert() {
    swal.fire({
      title: "Your order details were sent to your email!",
      html: "<div style='width: 50&; display: flex; justify-content: center;'><img src='https://i.imgur.com/Odj5saj.png' /></div>",
      backdrop: `
            url('https://i.imgur.com/2FxZVw0.png')
            center top
          `,
    });
  }

  //need to convert the string to a number
  function addUpPrices(cartItems) {
    console.log("this is cart", cartItems);
    let sum = 0;
    for (let i = 0; i < cartItems.length; i++) {
      sum += Number(cartItems[i].price);
    }
    return sum;
  }

  return (
    <>
      <div className="inputContainer">
        <div className="inputCard">
          <div className="text-3xl font-semibold">Check Out</div>
          <div className="text-2xl"> Cart: {cartItems.length} </div>
          <div className="text-2xl"> Price: ${addUpPrices(cartItems)}</div>
        </div>
      </div>
      <div className="merchContainer">
        {cartItems.map((item, i) => {
          return (
            <div className="merchCard" key={i}>
              <div className="text-3xl font-bold">{item.product_name}</div>
              <img src={item.img_url} />
              <div className="text-3xl font-semibold">{item.price}</div>
              <br></br>
              <button
                className="text-white border mt-2 bg-orange-400 border-orange-400
    hover:bg-transparent hover:text-orange-500 rounded-md px-2 py-2"
                onClick={() => {
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: i,
                  });
                }}
              >
                Remove From Cart
              </button>
            </div>
          );
        })}
      </div>
      <div className="inputContainer mt-4">
        <div className="inputCard">
          <Link to="/home">
            <button
              className="text-white border mt-2 bg-orange-400 border-orange-400
            hover:bg-transparent hover:text-orange-500 rounded-md px-2 py-2"
              onClick={appendToDb}
            >
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default MerchCartView;
