import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";

function MerchAdminEdit() {
  const history = useHistory();
  const dispatch = useDispatch();
  const params = useParams();
  const merch = useSelector((store) => store.merch);

  function handleSubmit(event) {
    //prevent the page from refreshing when you use forms
    event.preventDefault();
    dispatch({
      type: "SAVE_MERCH_EDIT",
      payload: merch,
    });
    //once you send the edit, it will bring you back to the merch page
    history.push("/merch");
  }
  useEffect(() => {
    dispatch({
      // upon page load, FETCH the merch of the /:id you're clicking on
      // payload is the id of what item you're clicking on
      type: "FETCH_MERCH_ITEM_TO_EDIT",
      // needs to be sent as object with id as property
      // this is useParams hook - grab that id
      payload: { id: params.id },
    });
    //calling params.id allows you to change the id in the top to move pages
  }, [params.id]);

  //gives you back the object with the id
  // render inputs but set equal to values of state
  return (
    <div className="inputContainer">
      <div className="inputCard">
        <form className="merchInputForm" onSubmit={handleSubmit}>
          <div className="text-xl mb-2">Merch Edit Form</div>
          <div>
            <label htmlFor="url">
              Image Url:
              <input
                type="text"
                name="Image Url"
                value={merch.img_url}
                onChange={(event) =>
                  dispatch({
                    type: "UPDATE_IMGURL",
                    payload: { img_url: event.target.value },
                  })
                }
              />
            </label>
          </div>
          <div className="my-2">
            <div>
              <label htmlFor="product_name">
                Product Name:
                <input
                  type="text"
                  name="Product Name"
                  value={merch.product_name}
                  onChange={(event) =>
                    dispatch({
                      type: "UPDATE_PRODUCT_NAME",
                      payload: { product_name: event.target.value },
                    })
                  }
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
                value={merch.product_type}
                onChange={(event) =>
                  dispatch({
                    type: "UPDATE_PRODUCT_TYPE",
                    payload: { product_type: event.target.value },
                  })
                }
              />
            </label>
          </div>
          <div className="my-2">
            <div>
              <label htmlFor="size">
                Size:
                <input
                  type="text"
                  name="Size"
                  value={merch.size}
                  onChange={(event) =>
                    dispatch({
                      type: "UPDATE_SIZE",
                      payload: { size: event.target.value },
                    })
                  }
                />
              </label>
            </div>
          </div>
          <div>
            <label htmlFor="price">
              Price:
              <input
                type="text"
                name="Price"
                value={merch.price}
                onChange={(event) =>
                  dispatch({
                    type: "UPDATE_PRICE",
                    payload: { price: event.target.value },
                  })
                }
              />
            </label>
          </div>
          {/* forms you can put in an input incase you hit enter so that it submits */}
          <input
            className="text-white border mt-2 bg-orange-400 border-orange-400
        hover:bg-transparent hover:text-orange-500 rounded-md px-2 py-2"
            type="submit"
            value="submit"
          />
        </form>
      </div>
    </div>
  );
}

export default MerchAdminEdit;
