import React from "react";
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import Cleave from 'cleave.js/react';

class ModalSearch extends React.Component{
    constructor(props,state){
        super(props,state);

        this.state=({
            privati: this.props.privati,
            privatoInputValue:'',
            autocompleteActive: 'is-hidden',
            privatoSelected:null,
            price:"",
            privatiAdded:[]
        });
        this.modalFilter = this.modalFilter.bind(this);
        this.addPrivato = this.addPrivato.bind(this);
        this.formValidation = this.formValidation.bind(this);
    }

    componentDidMount(){
        
    }

    modalFilter(event){
       
        event.preventDefault();
        if(event.target.value.length==0) {
            this.setState({privatoInputValue:'', autocompleteActive:'is-hidden'});
        }else{
            this.setState({
                privati: this.props.privati.filter((privato)=>{return privato.nome.toLowerCase().includes(event.target.value)}),
                privatoInputValue:event.target.value,
                autocompleteActive: ''
            })
        }
       
    }
    selectPrivato(privato){
        var text = privato.cf + " " + privato.nome + " " + privato.cognome;
        this.setState({privatoInputValue:text,autocompleteActive:'is-hidden',privatoSelected:privato,privatiAdded:this.state.privatiAdded});
    }
    addPrivato(){
        //this.setState({privatoInputValue:'',autocompleteActive:'is-hidden',privatoSelected:{},privatiAdded:[...this.state.privatiAdded,this.state.privatoSelected]});
        if(this.formValidation()){
            var privato = this.state.privatoSelected;
            privato['prezzo'] = this.state.price;
            this.props.addAction(privato);
            this.setState({privatoInputValue:'',autocompleteActive:'is-hidden',privatoSelected:{},price:''})
            this.props.closeAction();
        }
    }
    formValidation(){
        if(this.state.privatoSelected===null){
            return false;
        }
        else return true;
    }
    render(){
        const privati = this.state.privati.map((privato,index) =>
            <li key={index}><a onClick={()=>{this.selectPrivato(privato)}}>{privato.cf} {privato.nome} {privato.cognome}</a></li>
        );

        const privatiAdded = this.state.privatiAdded.map((privato,index) =>
            <li key={index}><a>{privato.cf} {privato.nome} {privato.cognome}</a></li>
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
                        <div className="field">
                            <p className="control has-icons-left has-icons-right">
                                <input className="input" value={this.state.privatoInputValue} type="text" onChange={this.modalFilter} placeholder="Cerca Privato"/>
                                <span className="icon is-small is-left">
                                    <i className="fas fa-user"></i>
                                </span>
                                <span className="icon is-small is-right">
                                    <i className="fas fa-check"></i>
                                </span>
                            </p>
                        </div>

                        <div className="field field-autocomplete">
                            <p className="control has-icons-left has-icons-right">
                                
                            <Cleave className="input" placeholder="Inserisci il Prezzo"
                                value={this.state.price}
                                options={{numeral: true, numeralThousandsGroupStyle: 'thousand'}}
                                onFocus={this.onCreditCardFocus}
                                onChange={(event)=>{this.setState({price:event.target.value})}} />

                                <span className="icon is-small is-left">
                                    <i className="fas fa-euro-sign"></i>
                                </span>
                                <span className="icon is-small is-right">
                                    <i className="fas fa-check"></i>
                                </span>
                            </p>

                            <div className={"autocomplete-menu " + this.state.autocompleteActive}>
                                <ul>
                                    {privati.slice(0,10)}
                                </ul>
                            </div>
                        </div>


                        
                        </section>
                        <footer className="modal-card-foot">
                        <button onClick={this.addPrivato} className="button is-info">Aggiungi al Corso</button>
                        <button className="button">Annulla</button>
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