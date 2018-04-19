import React from "react";
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

class ModalSearch extends React.Component{
    constructor(props,state){
        super(props,state);

        this.state=({
            privati: this.props.privati,
            autocompleteActive: 'is-hidden'
        });
        this.modalFilter = this.modalFilter.bind(this);
    }

    componentDidMount(){
        
    }

    modalFilter(event){
       
        event.preventDefault();
        if(event.target.value.length==0) {
            this.setState({autocompleteActive:'is-hidden'});
        }else{
            this.setState({
                privati:  this.props.privati.filter((privato)=>{return privato.nome.toLowerCase().includes(event.target.value)}),
                autocompleteActive: ''
            })
        }
       
    }
    render(){
        const privati = this.state.privati.map((privato,index) =>
           
            <li key={index}>{privato.cf} {privato.nome} {privato.cognome}</li>
      
        );
        return(
            <div className={"modal modal-search " + this.props.isActive}>
                    <div className="modal-background"></div>
                    <div className="modal-card">
                        <header className="modal-card-head">
                        <p className="modal-card-title">Aggiungi un Privato</p>
                        <button onClick={this.props.closeAction} className="delete" aria-label="close"></button>
                        </header>
                        <section className="modal-card-body">
                        <input className="input" type="text" onChange={this.modalFilter} placeholder="Cerca Privato"/>
                        <input className="input" type="text" placeholder="Prezzo"/>

                        <div className={"autocomplete-menu " + this.state.autocompleteActive}>
                            <ul>
                                {privati.slice(0,10)}
                            </ul>
                        </div>
                        </section>
                        <footer className="modal-card-foot">
                        <button className="button is-success">Save changes</button>
                        <button className="button">Cancel</button>
                        </footer>
                    </div>
            </div>
        )
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


export default connect(mapStateToProps,mapDispatchToProps)(ModalSearch);