import { combineReducers } from "redux";
import dmcReducer from "./dmcReducer"
import { drizzleReducers } from 'drizzle'

export default combineReducers({
    dmcReducer,
    ...drizzleReducers
})