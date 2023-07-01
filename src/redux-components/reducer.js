import { GET_USERS_FAILURE, GET_USERS_REQUEST, GET_USERS_SUCCESS } from "./actions"


const initialState={
    isLoading : false,
    error : {},
    users: {}
}

export const userReducer = (state=initialState,action ) => {
    switch(action.type){
        case GET_USERS_REQUEST: return {...state,isLoading:true}
        case GET_USERS_SUCCESS: return {...state,isLoading:false,users:action.payload}
        case GET_USERS_FAILURE: return {...state,error:action.payload}
        default: return state;
    }    
}