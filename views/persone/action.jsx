

//const ADD_PERSONA = "ADD_PERSONA";

export const addAction = persona => ({
        type: "ADD_PERSONA",
        //payload: {task: text}
        persona:{name:persona}
});


export const setPersoneAction = persone => ({
 
    
        type: "SET_PERSONA",
        //payload: {task: text}
        persone: persone
    
});


//export default addAction;