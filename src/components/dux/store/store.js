import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import { generateContractsInitialState } from 'drizzle'
import rootSaga from "../saga"
import rootReducer from '../reducer'
import { Drizzle, generateStore } from "drizzle";
import DMCToken from "../../../components/assets/DMCToken.json";
import DMCTokenSale from "../../../components/assets/DMCTokenSale.json";
import createSagaMiddleware from 'redux-saga'

const options = { contracts: [DMCToken, DMCTokenSale] };
const drizzleStore = generateStore(options);
export const drizzle = new Drizzle(options, drizzleStore);

const sagaMiddleware = createSagaMiddleware()

const initialState = {
    contracts: generateContractsInitialState(options)
}

const middleWare = [thunk]



export const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(
            ...middleWare,
              sagaMiddleware
            ),
    )
)

sagaMiddleware.run(rootSaga)
