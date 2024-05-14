import createSagaMiddleware from "redux-saga"
import { createStore, applyMiddleware } from "redux"
import appReducer from "./reducers"
import rootSaga from "./root-saga"

const sagaMiddleware = createSagaMiddleware()

const bindMiddleware = (middleware) => {
    if (process.env.REACT_APP_NODE_ENV !== "production") {
        const { composeWithDevTools } = require("redux-devtools-extension")
        return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
}

const store = createStore(appReducer, bindMiddleware([sagaMiddleware]))

sagaMiddleware.run(rootSaga)

export default store;