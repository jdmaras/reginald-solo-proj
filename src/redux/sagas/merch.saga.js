import axios from "axios";
import { put, takeLatest } from 'redux-saga/effects';

//
function* getMerch(action) {
    try {
        const items = yield axios.get('/api/merch', action.payload);
        yield put ({
            type: 'SET_MERCH',
            payload: items.data
        })
    }
    catch(err) {
        console.log('Error merch.saga GET', err)
    }
}
//
function* fetchCart() {
    try{
        const items = yield axios.get('/api/merch/cart')
        yield put({
            type: 'SET_CART',
            payload: items.data
        })
    }
    catch(err){
        console.log('err in FETCHCART', err)
    }
}
//
function* checkoutCart(action){
    try {
        const items = yield axios.post('/api/merch/cart', action.payload)
        yield put ({
            type: 'FETCH_CART',
        })
    }
    catch(err) {
        console.log('Err', err)
    }
}
//Delete item from DB - only can be used logged in as Admin
function* deleteItem(action){
    console.log('in delete item')
    try{
         yield axios.delete(`/api/merch/${action.payload.id}`);
     }
     catch(err) {
         console.log("err in saga delete", err)
     }
     yield put({
         type:'FETCH_MERCH'
     })
}

function* addMerchToDB(action){
    try{
        yield axios.post('/api/merch', action.payload)
    }
    catch (err){
        console.log('Err with Adding Merch Saga', err)
    }
}

function* merchSaga() {
    yield takeLatest('FETCH_MERCH', getMerch)
    yield takeLatest('CHECKOUT_CART', checkoutCart)
    yield takeLatest('FETCH_CART', fetchCart)
    yield takeLatest('DELETE_ITEM', deleteItem)
    yield takeLatest('REGISTER_MERCH_TO_DB', addMerchToDB)
}

export default merchSaga;