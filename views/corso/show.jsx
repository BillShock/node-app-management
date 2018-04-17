import React from "react";
import ReactDOM from 'react-dom';
import Table from '../commonsJSX/components/table';
import axios from 'axios';
import { connect } from 'react-redux';


class Show extends React.Component{
    constructor(props,state){
        super(props,state);
        this.state={course: {}, subscribers: []};
        this.addSubscriber = this.addSubscriber.bind(this);
    }

    componentDidMount(){

        var course = this.props.getCorso(this.props.match.params.id);
        this.setState({
            course: course[0],
            subscriber: this.state.subscribers
        });
       
        axios.get('/corso/show/'+ this.props.match.params.id)
        .then(res => {
                this.setState({ course: this.state.course,subscribers: res.data.rows });
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
                <Table throws={["CF","Nome","Cognome","Prezzo",""]}  lblRows={["cf","nome","cognome","prezzo"]} rows={this.state.subscribers} showBtn={false} editBtn={false} deleteBtn={false} />

                <button className="btn btn-success" onClick={this.addSubscriber}>Aggiungi Persona</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state.corsoReducer);
    return{
        getCorso: (id)=>(state.corsoReducer.elements.filter((element)=>{return element.id == id})),
    }
}

export default connect(mapStateToProps)(Show);
