import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';
import {compose, applyMiddleware, combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';
import userReducer from './Reducers/UserReducer';
import productReducer from './Reducers/ProductReducer';

const rootReducer = combineReducers({
    user: userReducer,
    products: productReducer
});

const allEnhancers = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(rootReducer,
{
    products: ['Kitap', 'Defter', 'Kalem'],
    user: 'Halit'
},
allEnhancers
);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
 
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
