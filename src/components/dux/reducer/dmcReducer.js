import * as types from "../constant"

const initialState = {
    account: ""
}



export default (state = initialState, action) => {
    switch(action.type) {
        case types.GET_ACCOUNT:
            return {
                ...state,
                account: state.payload
            }
        default:
            return {
                ...state
            }
    }
}


