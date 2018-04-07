import React from 'react';
import { Link } from 'react-router-dom';


class MainLayout extends React.Component{
    render(){
        return(
        <div className="container-fluid">
            <div className="row">
                <div className="sidenav">
                        <ul className="menu">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/privato">Privato</Link></li>
                            <li><Link to="/persone">Persone</Link></li>
                            <li><Link to="/corso">Corso</Link></li>
                        </ul>
                    </div> 
                <main className="col-md-9 main">
                    {this.props.children}
                </main>
            </div>
        </div>
        )
    }
}





export default MainLayout;