const initialState = {
    persone:[{nome:"Coppola"}]
}

export default function todoApp(state = [], action) {
    switch (action.type) {
      case "ADD_PERSONA":
        return [...state,{nome: action.persona.name}]
    case "SET_PERSONA":
        return action.persone
      default:
        return state
    }
}
