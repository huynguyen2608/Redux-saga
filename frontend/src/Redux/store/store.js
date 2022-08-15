import React from "react";
import reducers from "../reducers/reducers";
import { createStore } from "redux";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(

)

sagaMiddleware.run()