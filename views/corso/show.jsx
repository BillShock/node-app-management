import React from "react";
import ReactDOM from 'react-dom';
import Table from '../commonsJSX/components/table';
import axios from 'axios';

class Show extends React.Component{
    constructor(props,state){
        super(props,state);
        this.state={course: {}, subscribers: []};
        this.addSubscriber = this.addSubscriber.bind(this);
    }

    componentDidMount(){

        axios.get('/corso/showCourse/'+ this.props.match.params.id)
        .then(res => {
              console.log(res.data);
                //this.props.setCorsi(res.data);
                this.setState({ course: res.data.course[0], subscribers: res.data.subscribers });
        })
    }

    addSubscriber(){

        this.setState((prevState, props) => ({
            subscribers: [...prevState.subscribers,{nome:"Aldo"}]
        }));
          
        
    }
  
    render(){
        const subscribers = this.state.subscribers.map((subscriber,index)=>
            <div key={index}>
                {subscriber.nome} {subscriber.cognome} - {subscriber.prezzo}
            </div>
        )
        return(
            <div>
                <div>
                   <h2> Codice Corso: {this.state.course.codice} </h2> <h2>Nome Corso :{this.state.course.nome} </h2>
                </div>
                <Table throws={["CF","Nome","Cognome","Prezzo",""]}  lblRows={["cf","nome","cognome","prezzo"]} rows={this.state.subscribers} />

                <button className="btn btn-success" onClick={this.addSubscriber}>Aggiungi Persona</button>
            </div>
        )
    }
}

export default Show;