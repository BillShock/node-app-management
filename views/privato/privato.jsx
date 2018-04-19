import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { addAction,setAction,deleteAction,setTextFilter,setPageAction } from '../commonsJSX/actions';
import Table from '../commonsJSX/components/table';


 class Privato extends React.Component{

    constructor(props,state){
        super(props,state);
        this.state = ({
            showModal:""
        });
        this.showModal = this.showModal.bind(this);
        this.handleInputChange=this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.props.setTextFilter(event.target.value);
    }

    showModal(){
        this.setState({
            showModal:"is-active"
        })
    }

    render(){
        return (
            <div>
                <h1>Privato</h1>

                <div>
                    <nav className="level">
                    <div className="level-left">
                        <div className="level-item">
                        <p className="subtitle is-5">
                            <strong>{this.props.privati.length}</strong> posts
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
                            <p className="level-item"><Link className="button is-success" to={"/privato/add"}>Add Course</Link></p>
                        </div>
                    </nav>
                </div>

                <Table throws={["ID","Nome","Cognome","CF","Data di Nascita"]} showBtn={{lbl:"Show",tag:"id",link:"/show"}} editBtn={{lbl:"Edit",tag:"id",link:"/edit"}} deleteBtn={{lbl:"Delete",tag:"id",action:this.props.deleteCorso}}  lblRows={['id','nome','cognome','cf','dataNascita']} rows={this.props.privati} />

            </div>
        );
    }
}


function mapStateToProps(state){
    console.log(state);
    return{
        privati: state.privatoReducer.elements.filter((element)=>{return element.nome.toLowerCase().includes(state.privatoReducer.searchText.toLowerCase())}),
        loading: state.privatoReducer.loading,
        filter: state.filterReducer
    }
}


function mapDispatchToProps(dispatch){
   
    return{
        addNewCorso: (element) => bindActionCreators(addAction,dispatch)(element,"corso"),
        setTextFilter: (text) => bindActionCreators(setTextFilter,dispatch)(text,"privato"),
        setCorsi: (elements) => bindActionCreators(setAction,dispatch)(elements,"corso"),
        deleteCorso: (id) => bindActionCreators(deleteAction,dispatch)(id,"corso")
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Privato);