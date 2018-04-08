import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import { addAction, setPersoneAction,setTextFilter } from './commonsJSX/actions';
import MainLayout from './layout';
import configureStore from './configureStore';
import HomePage from './homepage';
import Router1 from './persone/route1.jsx';
import CorsoRouter from './corso/router.jsx';

let store = configureStore();
//console.log(store.getState());
//console.log(store.getState());
//store.dispatch(addAction({nome:"test"}));
//console.log(store.getState());
//store.subscribe(() =>
  //console.log(store)
//)



class App extends React.Component{
    render(){
        return(
        

         <Provider store={store}>
            <BrowserRouter>
                <MainLayout>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                    </Switch>
                    <Router1 path="/persone" />
                    <CorsoRouter path="/corso"/>
                </MainLayout>
            </BrowserRouter>
            </Provider>
                    
                
        )
    }
}

ReactDOM.render(<App /> , document.getElementById("app"));

