
import arrayReducer from "../commonsJSX/reducer";

const initialState = {
    elements: [],
    searchText: '',
    pagination:{initial:0,final:10,perPage:10},
    loading: true
}


export default function corsoReducer(state = initialState, action) {
    if(action.name=="corso")
      return arrayReducer(state,action);
    else return state;
}
