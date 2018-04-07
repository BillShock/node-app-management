//Actions Corso

export const addAction = corso => ({
    type: "ADD_CORSO",
    //payload: {task: text}
    corso:corso
});


export const setCorsiAction = corsi => ({

    type: "SET_CORSI",
    //payload: {task: text}
    corsi: corsi

});