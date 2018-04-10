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
           
            course:{
               id:"",
               codice:"",
               nome:""
            },
           formActionText:"",
           formAction:(event)=> event.preventDefault()
       }
       this.addCorso=this.addCorso.bind(this);
       this.updateCorso=this.updateCorso.bind(this);
       this.handleChange=this.handleChange.bind(this);
    }

    componentDidMount(nextProps){
        if(this.props.match.params.id === undefined){
            this.setState({
                formActionText:"Inserisci",
                formAction:this.addCorso
            });
        }
        else{
            var course = this.props.getCorso(this.props.match.params.id)[0];

            this.setState({
                course,
                formActionText:"Aggiorna",
                formAction:this.updateCorso
            });
        }

        
    }

    addCorso(event){
       // axios.get('/corso/create?codice='+this.state.codice+'&nome='+this.state.nome)
      //  .then(res => {
     //      console.log(res.data);
     // })
        
        event.preventDefault();
        this.props.addNewCorso(this.state.course);

       
        
    }

    updateCorso(event){
        event.preventDefault();
        this.props.updateCorso({id:10,codice:4000,nome:"OSS"});
    }

    handleChange(event) {
        event.preventDefault();
        let course = this.state.course;
        let name = event.target.name;
        let value = event.target.value;
        course[name] = value;
        this.setState({course,formActionText:this.state.formActionText,formAction:this.state.formAction})
    }


    
    render(){


        return(
            <div>
            <form onSubmit={this.state.formAction}>
                <h1>Inserisci Corso</h1>
                <div className="field">
                    <input value={this.state.course.codice} onChange={this.handleChange}  type="text" name="codice" className="input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Codice Corso" required/>
                </div>
                <div className="field">
                    <input value={this.state.course.nome} onChange={this.handleChange} type="text" name="nome" className="input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nome Corso"/>
                </div>

                <div className="field is-horizontal">
                    <div className="field-body">
                        <div className="field">
                            <p className="control is-expanded">
                                <input type="text" className="input" placeholder="Ore"/>
                            </p>
                        </div>
                        <div className="field">
                            <p className="control s-expanded">
                                <input type="text" className="input" placeholder="Aula"/>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="field is-horizontal">
                    <div className="field-body">
                        <div className="field">
                            <input type="text" className="input" placeholder="Data Inizio"/>
                        </div>
                        <div className="field">
                            <input type="text" className="input" placeholder="Data Termine 10%"/>
                        </div>
                    </div>
                </div>

                <div className="field is-horizontal">
                    <div className="field-body">
                        <div className="field">
                            <input type="text" className="input" placeholder="Inizio Stage"/>
                        </div>
                        <div className="field">
                            <input type="text" className="input" placeholder="Data Termine 10%"/>
                        </div>
                    </div>
                </div>

                <div className="field">
                    <textarea className="textarea" id="exampleFormControlTextarea1" rows="3" placeholder="Note"></textarea>
                </div>
                <input type="submit" className="button is-success" value={this.state.formActionText}/>
            </form>
            </div>
        )
    }
}




function mapStateToProps(state){

    return{
        getCorso: (id)=>{return state.corsoReducer.elements.filter((element)=>element.id==id)}
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