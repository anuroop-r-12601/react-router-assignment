export const GET_USERS_REQUEST = 'GET_USERS_REQUEST';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE';

export const getUser = () => {
    return {
        type: GET_USERS_REQUEST,
    }
}


export const getUserSuccess = (users) => {
    console.log("Success")
    return {
        type: GET_USERS_SUCCESS,
        payload: users
    }
}

export const getUserFailure = (error) => {
    return {
        type: GET_USERS_FAILURE,
        payload: error
    }
}
