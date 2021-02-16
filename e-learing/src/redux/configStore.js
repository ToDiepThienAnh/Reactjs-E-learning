import { applyMiddleware, combineReducers, createStore } from 'redux';
import { CoursesPopularReducer } from './reducers/CoursesPopularReducer'

import reduxThunk from 'redux-thunk'
const rootReducer = combineReducers({
    // khai báo reducer tại đây
    CoursesPopularReducer
})


const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default store;