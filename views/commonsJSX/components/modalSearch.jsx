import React from "react";
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

class ModalSearch extends React.Component{
    constructor(props,state){
        super(props,state);
    }
    render(){
        const privati = this.props.privati.map((privato,index) =>
            <tr key={index}>
                <td>{privato.cf}</td>
                <td>{privato.nome}</td>
                <td>{privato.cognome}</td>
                <td><input type="text"/></td>
            </tr>
        );
        return(
            <div className={"modal " + this.props.isActive}>
                    <div className="modal-background"></div>
                    <div className="modal-card">
                        <header className="modal-card-head">
                        <p className="modal-card-title">Aggiungi un Privato</p>
                        <button onClick={this.props.closeAction} className="delete" aria-label="close"></button>
                        </header>
                        <section className="modal-card-body">
                            <table>
                            <thead>
                                <tr>
                                    <td>CF</td>
                                    <td>Nome</td>
                                    <td>Cognome</td>
                                    <td>Prezzo</td>
                                    <td>Operazione</td>
                                </tr>
                            </thead>
                            <tbody>
                                {privati}
                            </tbody>
                            </table>
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