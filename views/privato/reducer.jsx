
import arrayReducer from "../commonsJSX/reducer";

const initialState = {
    elements: [],
    searchText: '',
    pagination:{initial:0,final:10,perPage:10},
    loading: true
}


export default function privatoReducer(state = initialState, action) {
    if(action.name=="privato")
      return arrayReducer(state,action);
    else return state;
}
