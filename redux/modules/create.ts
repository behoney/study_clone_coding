import { applyMiddleware, createStore } from "redux"

const create = () => {
    const store = createStore(reducer, composeWithDevTools(applyMiddleware()))
    return store
}

export default create;