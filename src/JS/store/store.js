// IMPORT createStore
import {createStore} from 'redux'
import rootReducer from '../reducers'

// Create Store
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store