import {createStore,combineReducers} from 'redux';
import todoApp from './todoApp';
import filterReducer from './filter';


export default () => {
    const store = createStore(
      combineReducers({
        todoApp,
        filterReducer
      })
    );
  
    return store;
  };