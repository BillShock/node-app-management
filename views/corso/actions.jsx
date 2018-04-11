//Actions Corso
import { setAction } from '../commonsJSX/actions';
import axios from 'axios';

/*
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
*/

export function loadCourses() {
    return function(dispatch) {
        axios.get('/corso/getCorsi')
        .then(res => {
                dispatch(setAction(res.data,"corso"));
        })
        
    };
  }



