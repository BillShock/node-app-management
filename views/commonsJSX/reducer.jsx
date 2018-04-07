


export default function arrayReducer(state, action) {
    switch (action.type) {
      case "ADD_ELEMENT":
        //return [...state.corsi,{nome:'provola'}]
        return Object.assign({},{elements:[...state.elements,action.element]},{searchText: state.searchText},{pagination:state.pagination});
      case "SET_ELEMENTS":
        return Object.assign({},{elements:action.elements},{searchText: state.searchText},{pagination:state.pagination});
      case "TEXT_FILTER":
        return Object.assign({},{elements:state.elements},{searchText: action.text},{pagination:{initial:0,final:state.pagination.perPage,perPage:state.pagination.perPage}});
      case "SET_PAGE":
        return Object.assign({},{elements:state.elements},{searchText: state.searchText === undefined ? "" : state.searchText },{pagination:action.pagination});
      default:
        return state
    }
}


function prova(state,action){

  return state.elements;

 return state.elements.filter((valore) => {
   const match = valore.nome.includes("O");
   
   return match
  })
}