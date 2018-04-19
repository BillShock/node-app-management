

export default function arrayReducer(state, action) {
    switch (action.type) {
      case "ADD_ELEMENT":
        return Object.assign({},{elements:[...state.elements,action.element]},{searchText: state.searchText},{pagination:state.pagination},{loading:false});
      case "UPDATE_ELEMENT":
        //return Object.assign({},{elements: [...state.elements.filter(( element ) => element.id !== 10 ),action.element]},{searchText: state.searchText},{pagination:state.pagination},{loading:false});
        return Object.assign({},{elements: updateElement(state.elements,action.element.id,action.element)},{searchText: state.searchText},{pagination:state.pagination},{loading:false});

      case "DELETE_ELEMENT":
        return Object.assign({},{elements: state.elements.filter(( element ) => element.id !== action.id )},{searchText: state.searchText},{pagination:state.pagination},{loading:false});
      case "SET_ELEMENTS":
        return Object.assign({},{elements:action.elements},{searchText: state.searchText},{pagination:state.pagination},{loading:false});
      case "TEXT_FILTER":
        return Object.assign({},{elements:state.elements},{searchText: action.text},{pagination:{initial:0,final:state.pagination.perPage,perPage:state.pagination.perPage}},{loading:false});
      case "SET_PAGE":
        return Object.assign({},{elements:state.elements},{searchText: state.searchText === undefined ? "" : state.searchText },{pagination:action.pagination},{loading:false});
      default:
        return state
    }
}


function updateElement(elements,id,element){
  for(var i=0;i<elements.length;i++){
      if(elements[i].id==id){
          elements[i]=element;
      }
  }

  return elements;
}

