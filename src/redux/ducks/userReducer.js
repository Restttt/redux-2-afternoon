import axios from 'axios'

const initialState = {
    email: null,
    firstName: null,
    lastName: null
};

// ACTION TYPES //

const REQUEST_USER_DATA = "REQUEST_USER_DATA";

// ACTION CREATORS //

export function requestUserData() {
    let user = axios.get('/auth/user-data').then(res => {
        return res.data;
    });
    return {
        type: REQUEST_USER_DATA,
        payload: user
    };
};

// REDUCER FUNCTION //
export default function reducer(state = initialState, action) {
    switch(action.type) {
        case REQUEST_USER_DATA + "_PENDING": {
            return {...state}
        }
        case REQUEST_USER_DATA + "_FULFILLED": {
            return {...state, email: action.payload.user.email, firstName: action.payload.user.firstName, lastName: action.payload.user.lastName};
        }
        case REQUEST_USER_DATA + "_REJECTED": {
            return {...state}
        }
        default: {
            return state;
        }
    }
};