import React from "react";
import ReactDOM from 'react-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { addAction,updateAction,setAction } from '../commonsJSX/actions';
import Notification from '../commonsJSX/components/notification';


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
           formAction:(event)=> event.preventDefault(),
           formSent:false
       }
       this.addCorso=this.addCorso.bind(this);
       this.updateCorso=this.updateCorso.bind(this);
       this.handleChange=this.handleChange.bind(this);
       this.reloadCourses=this.reloadCourses.bind(this);
    }

    componentDidMount(nextProps){
        if(this.props.match.params.id === undefined){
            this.setState({
                course:this.state.course,
                formActionText:"Inserisci",
                formAction:this.addCorso,
                formSent:this.state.formSent
            });
        }
        else{
            var course = this.props.getCorso(this.props.match.params.id)[0];
            this.setState({
                course,
                formActionText:"Aggiorna",
                formAction:this.updateCorso,
                formSent:this.state.formSent
            });
        }
    }

    addCorso(event){
        
        event.preventDefault();

        axios.get('/corso/create?codice='+this.state.course.codice+'&nome='+this.state.course.nome)
        .then(res => {
           console.log(res.data);
           //this.props.addNewCorso(this.state.course);
           this.setState({
                course:this.state.course,
                formActionText:this.state.formActionText,
                formAction:this.state.formAction,
                formSent: true,
                notificationType:"is-success",
                notificationMessage:"Corso inserito con successo."
            });
           this.reloadCourses();
        })

        

       
        
    }

    updateCorso(event){
        event.preventDefault();
        this.props.updateCorso({id:10,codice:4000,nome:"OSS"});
    }

    reloadCourses(){
        axios.get('/corso/getCorsi')
        .then(res => {
                this.props.setCorsi(res.data);
        });
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
            <Notification isVisible={this.state.formSent} type={this.state.notificationType} message={this.state.notificationMessage} />
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
                            <input type="date" className="input" placeholder="Data Inizio"/>
                        </div>
                        <div className="field">
                            <input type="date" className="input" placeholder="Data Termine 10%"/>
                        </div>
                    </div>
                </div>

                <div className="field is-horizontal">
                    <div className="field-body">
                        <div className="field">
                            <input type="date" className="input" placeholder="Inizio Stage"/>
                        </div>
                        <div className="field">
                            <input type="date" className="input" placeholder="Data Termine 10%"/>
                        </div>
                    </div>
                </div>

                <div className="field">
                    <textarea className="textarea" id="exampleFormControlTextarea1" rows="3" placeholder="Note"></textarea>
                </div>
                <input type="submit" className="button is-success" value={this.state.formActionText} disabled={this.state.formSent}/>
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
        updateCorso: (element) => bindActionCreators(updateAction,dispatch)(element,"corso"),
        setCorsi: (elements) => bindActionCreators(setAction,dispatch)(elements,"corso"),

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Add);
