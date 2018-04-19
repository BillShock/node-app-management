import React from "react";
import ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux'
import { addAction,setAction } from '../commonsJSX/actions';
import axios from 'axios';
//import Layout from "../layout";


class Persone extends React.Component {

    constructor(){
        super();
        this.addPersona=this.addPersona.bind(this);
    }

    componentDidMount() {
        axios.get('/persone/getPersone')
          .then(res => {
                //this.props.setPersone( res.data );
        })
    }

    addPersona(event){
        event.preventDefault();
        //this.props.dispatch(addAction("Provola"));
        this.props.addNewPersona({name:"Provola"});
        //console.log(this.props.persone);
    }

    render() {

        const persone = this.props.persone.elements.map((persona, index) => 
            <li key={index}> {persona.nome} </li>
        );

      return(
        <div>
           persone {this.props.persone.elements.length}

           <ul>{persone}</ul>
           <button onClick={this.addPersona}>
               Aggiungi
           </button>
        </div>
      );
      
     
    }
    
}

//export default Persone;

/*

const personeList = (props) => (

      
       <div>
           persone

           <ul>{props.persone}</ul>
           <button>
               Aggiungi
           </button>
        </div>

);
*/


function mapStateToProps(state){
    console.log(state);
    return{
        persone: state.personeReducer,
        filter:state.filterReducer
    }
}


function mapDispatchToProps(dispatch){
    return{
        addNewPersona:(element)=>{bindActionCreators(addAction,dispatch)(element,"persone")},
        setPersone: bindActionCreators(setAction,dispatch)
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Persone);