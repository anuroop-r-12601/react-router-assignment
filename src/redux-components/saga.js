import { GET_USERS_REQUEST, getUserFailure, getUserSuccess } from "./actions";
import {takeEvery,call,put} from 'redux-saga/effects'

export function* watcherSaga(){
    yield takeEvery(GET_USERS_REQUEST,workerSaga);
}

function userFetch(){
    const users=fetch("https://jsonplaceholder.typicode.com/users");
    return users.then(res=>res.json());
}

function* workerSaga(){
    console.log("worker")
    try{
        const users = yield call(userFetch);
        console.log("fetched",users)
        yield put(getUserSuccess(users)); 
    }
    catch(error){
        yield put(getUserFailure(error))
    }
}