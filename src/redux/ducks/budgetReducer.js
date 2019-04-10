import axios from 'axios';

const initialState = {
    purchases: [],
    budgetLimit: null,
    loading: false
};


// ACTION TYPES //

const REQUEST_BUDGET_DATA = "REQUEST_BUDGET_DATA";
const PURCHASE_ITEM = "PURCHASE_ITEM"
const DELETE_ITEM = "DELETE_ITEM"

// ACTION CREATORS //

export function requestBudgetData() {
    let budget = axios.get('/api/budget-data').then(res => {
        return res.data;
    });
    return {
        type: REQUEST_BUDGET_DATA,
        payload: budget
    };
};

export function addPurchase(price, description, category) {
    let addItem = axios.post('/api/budget-data/purchase', {description: description, price: price, category: category}).then(res => {
        console.log(res.data);
        return res.data
    });
    return {
        type: PURCHASE_ITEM,
        payload: addItem
    };
}

export function deletePurchase(id) {
    let deleteItem = axios.delete(`/api/budget-data/purchase/${id}`).then(res => {
        return res.data
    });
    return {
        type: DELETE_ITEM,
        payload: deleteItem
    };
}

// REDUCER FUNCTION //
export default function reducer(state = initialState, action) {
    switch(action.type) {
        case REQUEST_BUDGET_DATA + "_PENDING": {
            return {...state, loading: true}
        }
        case REQUEST_BUDGET_DATA + "_FULFILLED": {
            return {...state, purchases: action.payload.purchases, budgetLimit: action.payload.budgetLimit, loading: false};
        }
        case REQUEST_BUDGET_DATA + "_REJECTED": {
            return {...state, loading: false}
        }
        case PURCHASE_ITEM + "_PENDING": {
            return {...state, loading: true}
        }
        case PURCHASE_ITEM + "_FULFILLED": {
            return {...state, purchases: action.payload, loading: false};
        }
        case PURCHASE_ITEM + "_REJECTED": {
            return {...state, loading: false}
        }
        case DELETE_ITEM + "_PENDING": {
            return {...state, loading: true}
        }
        case DELETE_ITEM + "_FULFILLED": {
            return {...state, purchases: action.payload, loading: false};
        }
        case DELETE_ITEM + "_REJECTED": {
            return {...state, loading: false}
        }
        default: {
            return state;
        }
    }
};



