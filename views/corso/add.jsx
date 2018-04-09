import React from "react";
import ReactDOM from 'react-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { addAction,updateAction } from '../commonsJSX/actions';


class Add extends React.Component{
    constructor(props,state){
        super(props,state);
       // this.state.codice="";
       this.state={
           data:{
               codice:""
           }
       }
       this.addCorso=this.addCorso.bind(this);
    }

    componentDidMount(nextProps){
        if(this.props.match.params.id === undefined){
            alert("Si");
        }
        else{
            alert(this.props.match.params.id)
        }

       if(this.props.data !== undefined){
         if(this.props.data.codice !== undefined){
            this.setState({
                codice: this.props.data.codice
            })
        }  
       }
        
    }

    addCorso(event){
       // axios.get('/corso/create?codice='+this.state.codice+'&nome='+this.state.nome)
      //  .then(res => {
      //      console.log(res.data);
       // })

        event.preventDefault();
        this.props.addNewCorso({id:10,codice:4000,nome:"OSS"});

       
        
    }

    updateCorso(event){
        event.preventDefault();
        this.props.updateCorso({id:10,codice:4000,nome:"OSS"});
    }

    
    render(){
        return(
            <div>
            <form onSubmit={this.addCorso}>
                <h1>Inserisci Corso</h1>
                <div className="form-group">
                    <input onChange={(e)=>(this.setState({codice: e.target.value}))} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Codice Corso" required/>
                </div>
                <div className="form-group">
                    <input onChange={(e)=>(this.setState({nome: e.target.value}))} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nome Corso"/>
                </div>
                <div className="form-group">
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Ore"/>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Aula"/>
                    </div>
                </div>
                </div>
                <div className="form-group">
                 <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Data Inizio"/>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Data Termine 10%"/>
                    </div>
                </div>
                </div>
                <div className="form-group">
                 <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Inizio Stage"/>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Data Termine 10%"/>
                    </div>
                </div>
                </div>

                <div className="form-group">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Note"></textarea>
                </div>
                <input type="submit" className="btn btn-primary" value="Inserisci"/>
            </form>
            </div>
        )
    }
}



function mapStateToProps(state){
    console.log(state.corsoReducer);
    return{
        corsi: state.corsoReducer.elements.filter((element)=>{return element.nome.toLowerCase().includes(state.corsoReducer.searchText.toLowerCase())}),
        //corsi: state.corsoReducer.elements,
        filter:state.filterReducer
    }
}


function mapDispatchToProps(dispatch){
   
    return{
        addNewCorso: (element) => bindActionCreators(addAction,dispatch)(element,"corso"),
        updateCorso: (element) => bindActionCreators(updateAction,dispatch)(element,"corso")
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Add);

//export default Add;