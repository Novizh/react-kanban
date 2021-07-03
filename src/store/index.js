import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import taskReducer from './reducers/taskReducer';

const reducers = combineReducers({
    taskReducer
})
const middleware = applyMiddleware(ReduxThunk);
const store = createStore(reducers, middleware);

export default store;