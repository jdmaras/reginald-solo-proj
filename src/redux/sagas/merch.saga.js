import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

//
function* getMerch(action) {
  try {
    const items = yield axios.get("/api/merch", action.payload);
    yield put({
      type: "SET_MERCH",
      payload: items.data,
    });
  } catch (err) {
    console.log("Error merch.saga GET", err);
  }
}

//
function* checkoutCart(action) {
  try {
    const items = yield axios.post("/api/merch/cart", action.payload);
    yield put({
      type: "CLEAR_CART",
    });
  } catch (err) {
    console.log("Err", err);
  }
}

//Delete item from DB - only can be used logged in as Admin
function* deleteItem(action) {
  console.log("in delete item");
  try {
    yield axios.delete(`/api/merch/${action.payload.id}`);
  } catch (err) {
    console.log("err in saga delete", err);
  }
  yield put({
    type: "FETCH_MERCH",
  });
}
//
function* addMerchToDB(action) {
  try {
    yield axios.post("/api/merch", action.payload);
  } catch (err) {
    console.log("Err with Adding Merch Saga", err);
  }
}
//function grabs items details for the edit
function* fetchMerchItemToEdit(action) {
  console.log("in edit saga");
  try {
    //GET request and setting res equal to what its finding for that id
    const res = yield axios.get(`/api/merch/${action.payload.id}`);
    yield put({
      //merch item is then setting to get the payload of "res.data"
      type: "SET_MERCH_ITEM",
      payload: res.data,
    });
  } catch (err) {
    console.log(`err in edit merch saga`, err);
  }
}

//PUT - sending the merch that was edited back to db and pulling down the edited info
function* saveMerchEdit(action) {
  yield axios.put(`/api/merch/${action.payload.id}/edit`, action.payload);
  // Refresh the list after you made an edit by grabbing the merch from DB
  yield put({
    type: "FETCH_MERCH",
  });
}
function* merchSaga() {
  yield takeLatest("FETCH_MERCH", getMerch);
  yield takeLatest("CHECKOUT_CART", checkoutCart);
  yield takeLatest("DELETE_ITEM", deleteItem);
  yield takeLatest("REGISTER_MERCH_TO_DB", addMerchToDB);
  yield takeLatest("FETCH_MERCH_ITEM_TO_EDIT", fetchMerchItemToEdit);
  yield takeLatest("SAVE_MERCH_EDIT", saveMerchEdit);
}

export default merchSaga;
