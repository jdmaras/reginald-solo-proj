import axios from "axios";
import { put, takeLatest } from 'redux-saga/effects';

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

function* addCart(action){
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

function* merchSaga() {
    yield takeLatest('FETCH_MERCH', getMerch)
    yield takeLatest('ADD_CART', addCart)
    yield takeLatest('FETCH_CART', fetchCart)
}

export default merchSaga;