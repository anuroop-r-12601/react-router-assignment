import { applyMiddleware, createStore } from "redux";
import { userReducer } from "./reducer";
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from "./saga";

let sagaMiddleware=createSagaMiddleware();
let store= createStore(userReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watcherSaga);

export default store;