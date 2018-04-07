
import arrayReducer from "../commonsJSX/reducer";

const initialState = {
    elements: [{nome:"OSS"},{nome:"OSA"},{nome:"OSSS"},{nome:"BLSD"}],
    searchText: '',
    pagination:{initial:0,final:10,perPage:10}
}

/*
 export default function corsoReducer(state = initialState, action) {
    switch (action.type) {
      case "ADD_CORSO":
        //return [...state.corsi,{nome:'provola'}]
        return Object.assign({},{corsi:[...state.corsi,action.corso]});
       
      case "SET_CORSI":
        return Object.assign({},{corsi:action.corsi});
      default:
        return state
    }
}
*/

export default function corsoReducer(state = initialState, action) {
    if(action.name=="corso")
      return arrayReducer(state,action);
    else return state;
}
