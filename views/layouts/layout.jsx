import React from 'react';
import { Link } from 'react-router-dom';


class MainLayout extends React.Component{
    render(){
        return(
<div id="app"> 
    <div className="hero-head">
        <header className="navbar has-shadow is-desktop is-fullheight">
            <div className="container">
                <div className="navbar-brand">
                    <Link to="/"><strong>WEBAPP</strong></Link>
                    <span className="navbar-burger burger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-end">
                        <a className="navbar-item">PROVA</a>
                        <a className="navbar-item">PROVA</a>
                        <a className="navbar-item">PROVA</a>
                        <a className="navbar-item">PROVA</a>
                    </div>
                </div>
            </div>
        </header>
    </div>
      
    <div className="columns">
        <aside className="column is-2 is-desktop is-fullheight section" id="menu">
            <div className="menu-label">GENERAL<hr className="navbar-divider"/></div>
                <ul className="menu-list">
                    <li><Link to="/"><i className="fas fa-home"></i>    Home</Link></li>
                    <li><Link to="/"><i className="fas fa-link"></i>    Link</Link></li>
                    <li><Link to="/privato"><i className="fas fa-link"></i>    Privato</Link></li> 
                </ul>
            <div className="menu-label">ADMINISTRATION<hr className="navbar-divider"/></div>
                <ul className="menu-list">
                    <li><Link to="/"><i className="fas fa-table"></i>    Visualizza corsi</Link></li>
                    <li><Link to="/corso"><i className="fas fa-wrench"></i>    Gestisci corsi</Link></li>
                </ul>
            <div className="menu-label">SETTINGS<hr className="navbar-divider"/></div>
                <ul className="menu-list">
                    <li><Link to="/"><i className="fas fa-cogs"></i>   Impostazioni account</Link></li>
                    <li><Link to="/"><i className="fas fa-sign-out-alt"></i>   Effettua logout</Link></li>
                </ul>
        </aside>

        <div className="container"> 
            <div className="column is-desktop">
                <main>
                    {this.props.children}
                </main>
            </div>
        </div>
    </div>
</div>
        )
    }
}

export default MainLayout;