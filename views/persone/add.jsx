import React from "react";
import ReactDOM from 'react-dom';

class Add extends React.Component{
    constructor(state,props){
        super(state,props);
    }


    prova(){
        alert(1);
    }

    render(){

        console.log(this.props);

    return(
        
        <div>
            <h1>Add {this.props.match.params.id}</h1>
            <button onClick={()=>{alert(this.props.match.params.id)}}>
                Clicca
            </button>
        </div>
    )
    }
}

export default Add;