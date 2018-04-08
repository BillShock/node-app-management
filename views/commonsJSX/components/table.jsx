import React from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { setPageAction } from '../../commonsJSX/actions';

class Table extends React.Component{
    constructor(state,props){
        super(state,props);
        this.state={actionsBtn:this.props.actionsBtn}
        this.setPage = this.setPage.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if(this.props.actionsBtn === undefined){
            console.log(nextProps);
            this.setState({
                actionsBtn: []
            });
        }
    }

    setPage(event){
        var num = event.target.innerText; // Ottengo il valore dell'elemento corrente
        var pagination = {initial:this.props.perPage*(num-1),final:this.props.perPage*num,perPage:this.props.perPage};
        this.props.setPage(pagination);
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
                       const actionsBtn = this.state.actionsBtn.map((btn,index) => {
                            if(btn.tag !== undefined)
                                return <a key={index} href={"/corso" + btn.link + "/" + row[btn.tag]}>{btn.lbl}</a>
                            else
                                return <a key={index} href={"/corso" + btn.link + "/"}>{btn.lbl}</a>
                        });

                        


                return <tr key={index}>{lbl}{this.state.actionsBtn.length > 0 &&  <td>{actionsBtn}</td> }</tr>
        });

        // Itero i numeri della pagination
        const pagination = ([...Array(Math.ceil(this.props.rows.length/this.props.perPage))]).map((x,i) =>
           <li className="page-item" key={i}> <a className="page-link" onClick={this.setPage} href="#">{i+1}</a> </li>
        );

        return (
            <div>
            <table className="table">
                 <thead className="thead-dark">
                   <tr>{throws}</tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>

            <div>
                <ul className="pagination">
                    {pagination}
                </ul>
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
