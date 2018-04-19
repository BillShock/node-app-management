//Actions Corso
import { setAction } from '../commonsJSX/actions';
import axios from 'axios';



export function loadPrivati() {
    return function(dispatch) {
        axios.get('/privato')
        .then(res => {
            console.log(res.data);
                dispatch(setAction(res.data,"privato"));
        })
        
    };
  }
