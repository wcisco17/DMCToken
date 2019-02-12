import * as types from "./constant"



export const getAccounting = (props) => {
    return (dispatch, getState) => {
        console.log("State: ", getState())

    }
}



export const get = (accounts) => {
    return dispatch => {
        let account;
        for (let key in accounts) {
            account += accounts[key];
            account =  String(account).slice(9)
         }
         return account
    }
}