
import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Add from './add.jsx';
import Persone from './persone.jsx';



class Router1 extends React.Component{
    render(){
        return(
           <Switch>
                <Route path={this.props.path + "/add"} component={Add} />
                <Route path={this.props.path} component={Persone} exact={true} />
                <Route path="/persone/add/:pippo" component={Add} />
                <Route path={this.props.path + "/edit"} component={Add} />
            </Switch>
        )
    }
}






export default Router1;