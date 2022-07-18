import React from "react";
//import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AddToCart from "../AddToCart/AddToCart";
import DeleteButton from "../DeleteButton/DeleteButton";
import EditButton from "../EditButton/EditButton";
import MerchAdminItemAdd from "../MerchAdminItemAdd/MerchAdminItemAdd";

function MerchStore() {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);
  const merch = useSelector((store) => store.merch);
  const user = useSelector((store) => store.user);
  //const params = useParams()
  //console.log ('What are the params', params)
  console.log("this is the merch", merch);

  useEffect(() => {
    getMerchDetails();
  }, []);

  const getMerchDetails = () => {
    dispatch({
      type: "FETCH_MERCH",
    });
  };

  return (
    <>
      <div className="inputContainer">
        <div className="inputCard">
          <div className="text-3xl font-semibold">Welcome, Razor Blades!</div>
          <div className="text-2xl ml-24 mb-4">
            Items In Cart: {cart.length}
          </div>
        </div>
      </div>
      <div className="merchContainer">
        {merch[0] &&
          merch.map((item, i) => {
            return (
              // have to make that key unique, so "i"
              <div className="merchCard mt-8" key={i}>
                <div className="text-3xl font-bold">{item.product_name}</div>
                <img src={item.img_url} />
                <div className="mt-2 mb-1">
                  <div className="text-3xl font-semibold">{item.price}</div>
                </div>

                {/* grabbing the value of every item you click with the id={item.id} */}
                <AddToCart item={item} />
                <br></br>
                {/* user must be logged in as an admin in order to see these buttons */}
                {user.admin && (
                  <>
                    <div className="text-2xl mt-2">
                      Administrative Powers Activated
                    </div>
                    <DeleteButton itemId={item.id} />
                    <Link to={`/merch/${item.id}/edit`}>
                      <EditButton itemId={item.id} />
                    </Link>
                  </>
                )}
              </div>
            );
          })}
      </div>
      <div className="inputContainer mt-4">
        <div className="inputCard">
          <Link
            to="/merchcartview"
            className="text-white border mt-8 bg-orange-400 border-orange-400
    hover:bg-transparent hover:text-orange-500 rounded-md px-2 py-3"
          >
            Proceed To Checkout
          </Link>
          {user.admin && (
            <Link to="/merchadd">
              <button className="px-2 py-2 ml-4">Add Merch To Store</button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default MerchStore;
