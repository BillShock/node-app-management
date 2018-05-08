import React from 'react';
import { Link } from 'react-router-dom';


class MainLayout extends React.Component{
    render(){
        return(

<div id="app"> {/* START DIV ROOT*/}

{/* START DIV COLUMNS*/}
    <div className="columns is-gapless">
    {/* START MENU - FIRST COLUMN IS-2*/}
        <aside className="column is-2 is-desktop is-fullheight section menu" id="menu">
            {/* START DIV LOGO*/}
            <div id="containerMyLogo">
                <div id="myLogo">
                    <h1>MAXWELL</h1>
                </div>
            </div>
            {/* END DIV LOGO*/}

            {/* START DIV DATA USER*/}
            <div id="data_user">
                <div id="welcome">
                    Benvenuto Utente
                </div>
                <div id="photo">
                    <img src="https://bulma.io/images/placeholders/96x96.png" id="img_user" title="Photo"/>
                </div>
                <div id="link_user">
                    <a><i className="fab fa-facebook-square fa-2x" title="Facebook"></i></a>
                    <a><i className="fab fa-twitter fa-2x" title="Twitter" id="link2"></i></a>
                    <a><i className="fas fa-envelope fa-2x" title="Mail" id="link3"></i></a>
                    <a><i className="fas fa-sign-out-alt fa-2x" title="Logout" id="link4"></i></a>
                </div>
            </div>
            {/* END DIV DATA USER*/}

            {/* START DIV SIDEBAR*/}
            <div id="sidebar">
                <div className="menu-label" id="sidebar-label"><i className="fas fa-chevron-circle-right"></i><span className="labels">GENERAL</span><hr className="navbar-divider" id="divider" /></div>
                    <ul className="menu-list">
                        <li><Link to="/"><i className="fas fa-home" title="Home"></i>    Home</Link></li>
                        <li><Link to="/"><i className="fas fa-link"></i>    Link</Link></li>
                        <li><Link to="/privato"><i className="fas fa-link"></i>    Privato</Link></li> 
                    </ul>
                <div className="menu-label" id="sidebar-label"><i className="fas fa-chevron-circle-right"></i><span className="labels">ADMINISTRATION</span><hr className="navbar-divider" id="divider" /></div>
                    <ul className="menu-list">
                        <li><Link to="/"><i className="fas fa-table"></i>    Visualizza corsi</Link></li>
                        <li><Link to="/corso"><i className="fas fa-wrench"></i>    Gestisci corsi</Link></li>
                        <li><Link to="/"><i className="far fa-calendar-alt"></i>    Calendario</Link></li>
                    </ul>
                <div className="menu-label" id="sidebar-label"><i className="fas fa-chevron-circle-right"></i><span className="labels">SETTINGS</span><hr className="navbar-divider" id="divider" /></div>
                    <ul className="menu-list">
                        <li><Link to="/"><i className="fas fa-cogs"></i>   Impostazioni account</Link></li>
                        <li><Link to="/"><i className="fas fa-sign-out-alt"></i>   Effettua logout</Link></li>
                    </ul>
                    <ul className="menu-list">
                        <li><Link to="/"><i className="fas fa-cogs"></i>   Impostazioni account</Link></li>
                        <li><Link to="/"><i className="fas fa-sign-out-alt"></i>   Effettua logout</Link></li>
                    </ul>
                    <ul className="menu-list">
                        <li><Link to="/"><i className="fas fa-cogs"></i>   Impostazioni account</Link></li>
                        <li><Link to="/"><i className="fas fa-sign-out-alt"></i>   Effettua logout</Link></li>
                    </ul>
                    <ul className="menu-list">
                        <li><Link to="/"><i className="fas fa-cogs"></i>   Impostazioni account</Link></li>
                        <li><Link to="/"><i className="fas fa-sign-out-alt"></i>   Effettua logout</Link></li>
                    </ul>
                    <ul className="menu-list">
                        <li><Link to="/"><i className="fas fa-cogs"></i>   Impostazioni account</Link></li>
                        <li><Link to="/"><i className="fas fa-sign-out-alt"></i>   Effettua logout</Link></li>
                    </ul>
                    <ul className="menu-list">
                        <li><Link to="/"><i className="fas fa-cogs"></i>   Impostazioni account</Link></li>
                        <li><Link to="/"><i className="fas fa-sign-out-alt"></i>   Effettua logout</Link></li>
                    </ul>
                    <ul className="menu-list">
                        <li><Link to="/"><i className="fas fa-cogs"></i>   Impostazioni account</Link></li>
                        <li><Link to="/"><i className="fas fa-sign-out-alt"></i>   Effettua logout</Link></li>
                    </ul>
                    <ul className="menu-list">
                        <li><Link to="/"><i className="fas fa-cogs"></i>   Impostazioni account</Link></li>
                        <li><Link to="/"><i className="fas fa-sign-out-alt"></i>   Effettua logout</Link></li>
                    </ul>
            </div>
                {/* END DIV SIDEBAR*/}
        </aside> 
        {/* END MENU - FIRST COLUMN IS-2*/}

        {/* START SECOND COLUMN AUTO-RESIZE*/} 
            <div className="column is-desktop" id="main">
                {/* START NAVBAR*/}
                <nav className="navbar has-shadow  is-desktop" id="topbar">
                    <nav className="navbar-menu">
                        {/* START NAVBAR - LEFT*/}     
                        <div className="navbar-start">
                            <nav className="navbar-item" id="topbar-item">
                                <p className="control has-icons-left">
                                    <input className="input is-small" type="text" placeholder="Cerca" />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-search" aria-hidden="true"></i>
                                    </span>
                                </p>
                            </nav>
                        </div>
                        {/* END NAVBAR - LEFT*/}
                    
                        {/* START NAVBAR - RIGHT*/}
                        <div className="navbar-end">
                          <div className="dropdown">
                            <div className="dropdown is-hoverable">
                              <a className="navbar-item" id="topbar-item"><i class="fas fa-user-circle"></i></a>
                                  <div className="dropdown-menu" id="dropdown-menu3" role="menu">
                                    <div className="dropdown-content" id="dropdownUser">
                                      <a href="#" className="dropdown-item" id="item1">
                                        <i className="fas fa-user" id="dropdownIcon"></i><span className="dropdownLabel">Profilo</span>
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        <i className="fas fa-envelope" id="dropdownIcon"></i><span className="dropdownLabel">Inbox</span>
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        <i className="fas fa-cogs" id="dropdownIcon"></i><span className="dropdownLabel">Impostazioni</span>
                                      </a>
                                      <hr className="dropdown-divider" />
                                      <a href="#" className="dropdown-item">
                                        <i class="fas fa-lock" id="dropdownIcon"></i><span className="dropdownLabel">Lock</span>
                                      </a>
                                      <a href="#" className="dropdown-item">
                                        <i className="fas fa-sign-out-alt" id="dropdownIcon"></i><span className="dropdownLabel">Logout</span>
                                      </a>
                                  </div>
                                </div>
                            </div>
                        </div>
                            <a className="navbar-item" id="topbar-item">PROVA</a>
                            <a className="navbar-item" id="topbar-item"><i className="fas fa-bell"></i></a>
                            <a className="navbar-item" id="topbar-item"><i className="fas fa-bars"></i></a>
                        </div>
                        {/* END NAVBAR - RIGHT*/}
                        </nav>
                    </nav>
                {/* END NAVBAR*/}

                {/* START DIV HERO*/}
                <div className="hero">
                    <div className="hero-body">
                        {/* START BREADCRUMB*/}
                        <nav className="breadcrumb has-succeeds-separator" aria-label="breadcrumbs" id="breadcrumb">
                            <ul>
                                <li><Link to="/">
                                <span className="icon is-small" id="breadcrumb-icon"><i className="fas fa-home" aria-hidden="true"></i></span>
                                    <span>Home</span></Link></li>
                                <li className="is-active"><a href="#" aria-current="page">Gestione Corsi</a></li> 
                            </ul>
                        </nav>
                        {/* END BREADCRUMB*/}

                        {/* START DIV MAIN*/}
                        <div className="is-fullheight" id="render"> 
                            <div className="container is-fluid">           
                                <main>
                                    {this.props.children}
                                </main>
                            </div>
                        </div>
                        {/* END DIV MAIN*/}
                    </div>
                </div> 
                {/* END DIV HERO*/}
            </div>
            {/* END SECOND COLUMN AUTO-RESIZE*/}
        </div>
        {/* END DIV COLUMNS*/}

    {/* START FOOTER*/}
    <footer className="footer is-gapless" id="footer">
        <div className="content has-text-centered">
            <p>
            <i className="fas fa-copyright"></i>  2018 - WEBAPP. All rights reserved
            </p>
        </div>
    </footer>
    {/* END FOOTER*/}

{/* END DIV ROOT*/}</div> 
        )
    }
}

export default MainLayout;