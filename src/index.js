import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import { Provider } from 'react-redux';
import { DrizzleContext } from "drizzle-react";
import { store, drizzle } from "./components/dux/store/store";

const Application = () => (
        <Provider store={store} >
                <App />
        </Provider>
)



ReactDOM.render(
       <DrizzleContext.Provider store={store} drizzle={drizzle} >
                <Application />
        </DrizzleContext.Provider>
, document.getElementById('root'));



