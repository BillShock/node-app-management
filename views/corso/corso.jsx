import React from "react";
import ReactDOM from 'react-dom';
import Table from '../commonsJSX/components/table';
import Loading from '../commonsJSX/components/loading';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addAction,setAction,deleteAction,setTextFilter,setPageAction } from '../commonsJSX/actions';
import axios from 'axios';

class Corso extends React.Component{

    constructor(){
        super();
        //this.state = ({ loading: false });
        this.handleInputChange=this.handleInputChange.bind(this);
    }

    componentDidMount() {
        
    }


    handleInputChange(event) {
        this.props.setTextFilter(event.target.value);
    }

    setPage(){
        var p = {initial:5,final:10,perPage:5};
        this.props.setPage(p);
        console.log(this.props);
    }


    render(){

        const corsi = this.props.corsi.map((corso, index) => 
            <li key={index}> {corso.nome}  </li>
        );
        
        if(this.props.loading){
            return (
                <div>
                    <h1>Corso View</h1>
                    <Loading />
                </div>
            )
        }

        return(
            <div>
                <h1>Corso View</h1>

                <div>
                    <nav className="level">
                    <div className="level-left">
                        <div className="level-item">
                        <p className="subtitle is-5">
                            <strong>{this.props.corsi.length}</strong> posts
                        </p>
                        </div>
                        <div className="level-item">
                        <div className="field has-addons">
                                <p className="control">
                                    <input className="input" type="text" onChange={this.handleInputChange} placeholder="Ricerca"/>
                                </p>
                                <p className="control">
                                
                                <button className="button">
                                    Search
                                </button>
                                </p>
                                
                            </div>
                        </div>
                    </div>

                        <div className="level-right">
                            <p className="level-item"><strong>All</strong></p>
                            <p className="level-item"><a>Published</a></p>
                            <p className="level-item"><a>Drafts</a></p>
                            <p className="level-item"><a>Deleted</a></p>
                            <p className="level-item"><Link className="button is-success" to={"/corso/add"}>Add Course</Link></p>
                        </div>
                    </nav>
                </div>
                
                <Table throws={["ID","Codice","Nome Corso","Ore","Data Inizio","Data Fine",""]} showBtn={{lbl:"Show",tag:"id",link:"/show"}} editBtn={{lbl:"Edit",tag:"id",link:"/edit"}} deleteBtn={{lbl:"Delete",tag:"id",action:this.props.deleteCorso}}  lblRows={['id','codice','nome','ore','dataInizio','dataFine']} rows={this.props.corsi} />
            </div>
        )
    }
}



function mapStateToProps(state){
    console.log(state.corsoReducer);
    return{
        corsi: state.corsoReducer.elements.filter((element)=>{return element.nome.toLowerCase().includes(state.corsoReducer.searchText.toLowerCase())}),
        loading: state.corsoReducer.loading,
        filter: state.filterReducer
    }
}


function mapDispatchToProps(dispatch){
   
    return{
        addNewCorso: (element) => bindActionCreators(addAction,dispatch)(element,"corso"),
        setTextFilter: (text) => bindActionCreators(setTextFilter,dispatch)(text,"corso"),
        setCorsi: (elements) => bindActionCreators(setAction,dispatch)(elements,"corso"),
        deleteCorso: (id) => bindActionCreators(deleteAction,dispatch)(id,"corso")
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Corso);

