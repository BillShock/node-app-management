import React from "react";
import axios from 'axios';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { setPageAction } from '../../commonsJSX/actions';

class Table extends React.Component{
    constructor(state,props){
        super(state,props);
        this.state={actionsBtn:this.props.actionsBtn}
        this.setPage = this.setPage.bind(this);
        this.deleteRow = this.deleteRow.bind(this);
    }

    componentWillReceiveProps(nextProps){
        /*
        if(this.props.actionsBtn === undefined){
            console.log(nextProps);
            this.setState({
                actionsBtn: []
            });
        }
        */
       if(this.props.editBtn === undefined){
        this.setState({
            editBtn: false
        });
       }

       if(this.props.deleteBtn === undefined){
        this.setState({
            deleteBtn: false
        });
       }
    }

    setPage(event){
        var num = event.target.innerText; // Ottengo il valore dell'elemento corrente
        var pagination = {initial:this.props.perPage*(num-1),final:this.props.perPage*num,perPage:this.props.perPage};
        this.props.setPage(pagination);
    }

    deleteRow(id){
        axios.delete('/corso/'+ id)
        .then(res => {
                this.props.deleteBtn.action(id);
        }).catch(function (error) {
            console.log(error);
        });
    }

    render(){


        // Itero le intestazioni tabelle
        const throws = this.props.throws.map((item,index)=>
            <th key={index}>{item}</th>
        );

        // Itero le righe della tabella
        const rows = this.props.rows.slice(this.props.initial,this.props.final).map((row,index) =>{
                const lbl = this.props.lblRows.map((lbl,index)=>(<td key={index}>{row[lbl]}</td>));
                        
                    // Crezione pulsanti azioni
                    var showBtn = <Link className="button is-success" to={"/corso" + this.props.showBtn.link + "/" + row[this.props.showBtn.tag] }>{this.props.showBtn.lbl}</Link>
                    var editBtn = this.props.editBtn == false ? false : <Link className="button is-link is-outlined" to={"/corso" + this.props.editBtn.link + "/" + row[this.props.editBtn.tag] }><span> {this.props.editBtn.lbl} </span> <span className="icon is-small"><i className="fas fa-edit"></i> </span></Link>
                    var deleteBtn =  this.props.deleteBtn == false ? false : <a className="button is-danger is-outlined" onClick={(id)=>this.deleteRow(row.id)}><span>{this.props.deleteBtn.lbl}</span> <span className="icon is-small"><i className="fas fa-times"></i> </span></a>

                return <tr key={index}>{lbl}{(showBtn || editBtn || deleteBtn) && <td>{showBtn} {editBtn} {deleteBtn}</td> }</tr>
        });

        // Itero i numeri della pagination
        const pagination = ([...Array(Math.ceil(this.props.rows.length/this.props.perPage))]).map((x,i) =>
           <li key={i}> <a className="pagination-link" onClick={this.setPage}>{i+1}</a> </li>
        );



        return (
            <div>
            <table className="table is-hoverable is-fullwidth">
                 <thead>
                   <tr>{throws}</tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>

            <div>
                <nav className="pagination is-centered" role="navigation" aria-label="pagination">
                    <ul className="pagination-list">
                        {pagination}
                    </ul>
                </nav>
            </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        initial:state.corsoReducer.pagination.initial,
        final:state.corsoReducer.pagination.final,
        perPage:state.corsoReducer.pagination.perPage
    }
}


function mapDispatchToProps(dispatch){
   
    return{
        setPage: (pagination) => bindActionCreators(setPageAction,dispatch)(pagination,"corso")
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Table);
