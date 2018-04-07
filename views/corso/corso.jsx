import React from "react";
import ReactDOM from 'react-dom';
import Table from '../commonsJSX/components/table';
import Loading from '../commonsJSX/components/loading';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addAction,setAction,setTextFilter,setPageAction } from '../commonsJSX/actions';
import axios from 'axios';

class Corso extends React.Component{

    constructor(){
        super();
        this.state = ({ loading: false });
        this.addCorso=this.addCorso.bind(this);
        this.handleInputChange=this.handleInputChange.bind(this);
    }

    componentDidMount() {
        
        this.setState({loading: true});

        axios.get('/corso/getCorsi')
        .then(res => {
              console.log(res.data);
                this.props.setCorsi(res.data);
                this.setState({ loading: false });
        })

        
    }

    addCorso(event){
        event.preventDefault();
        //this.props.dispatch(addAction("Provola"));
        this.props.addNewCorso({nome:"Aldo"});
        //console.log(this.props.addNewCorso);
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
        
        if(this.state.loading){
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
                <input className="form-control" type="text" onChange={this.handleInputChange} placeholder="Ricerca"/>
                <button onClick={this.addCorso}>Inserisci</button>
                <Table throws={["ID","Codice","Nome Corso","Ore","Data Inizio","Data Fine",""]} lblRows={['id','codice','nome','ore','data_inizio','data_fine']} rows={this.props.corsi} />
                <Link className="btn btn-primary" to="/corso/add">Add Course</Link>
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
        //addNewCorso: bindActionCreators(addAction,dispatch),
        addNewCorso: (element) => bindActionCreators(addAction,dispatch)(element,"corso"),
        setTextFilter: (text) => bindActionCreators(setTextFilter,dispatch)(text,"corso"),
        setCorsi: (elements) => bindActionCreators(setAction,dispatch)(elements,"corso")
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Corso);

//export default Corso;