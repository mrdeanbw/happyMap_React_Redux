import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import { Provider } from 'react-redux'
import store from './store/store'
//const storeInstance = store();

// Now we can attach the router to the 'root' element like this:
ReactDOM.render(
    <Provider store={store}>
        <Router />            
    </Provider>,  
document.getElementById('root'));