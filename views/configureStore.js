import {createStore,combineReducers,applyMiddleware} from 'redux';
import corsoReducer from './corso/reducer';
import privatoReducer from './privato/reducer';
import personeReducer from './persone/reducer';
import thunk from 'redux-thunk';


import filterReducer from './persone/filter';
function terzo(state = [], action) {
        return state
    
}


export default () => {
    const store = createStore(
      combineReducers({
        corsoReducer,
        privatoReducer,
        filterReducer,
        terzo
      }),
      applyMiddleware(thunk)
    );
  
    return store;
  };