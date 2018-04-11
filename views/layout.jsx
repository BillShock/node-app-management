import React from 'react';
import { Link } from 'react-router-dom';


class MainLayout extends React.Component{
    render(){
        return(
<div id="app"> 
    <div class="hero-head">
        <header class="navbar has-shadow is-fullheight">
            <div class="container">
                <div class="navbar-brand">
                    <Link to="/">
                        <a class="navbar-item">
                            <strong>WEBAPP</strong>
                        </a>
                    </Link>
                    <span class="navbar-burger burger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </div>
                <div class="navbar-menu">
                    <div class="navbar-end">
                        <a class="navbar-item">
                        PROVA
                        </a>
                        <a class="navbar-item">
                        PROVA
                        </a>
                        <a class="navbar-item">
                        PROVA
                        </a>
                        <a class="navbar-item">
                        <span>PROVA</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    </div>
      
    <div class="columns">
        <aside class="column is-2 is-narrow-mobile is-fullheight section" id="menu">
            <p class="menu-label">
                GENERAL
                <hr class="navbar-divider"></hr>
            </p>
                <ul class="menu-list">
                    <li><a><Link to="/"><i class="fas fa-home"></i>    Home</Link></a></li>
                    <li><a><Link to="/privato"><i class="fas fa-link"></i>    Link</Link></a></li>
                    <li><a><Link to="/persone"><i class="fas fa-link"></i>    Persone</Link></a></li> 
                </ul>
            <p class="menu-label">
                ADMINISTRATION
                <hr class="navbar-divider"></hr>
            </p>
                <ul class="menu-list">
                    <li><a><i class="fas fa-table"></i>    Visualizza corsi</a></li>
                    <li><a><Link to="/corso"><i class="fas fa-wrench"></i>    Gestisci corsi</Link></a></li>
                </ul>
            <p class="menu-label">
                SETTINGS
                <hr class="navbar-divider"></hr>
            </p>
                <ul class="menu-list">
                    <li><a><i class="fas fa-cogs"></i>   Impostazioni account</a></li>
                    <li><a><i class="fas fa-sign-out-alt"></i>   Effettua logout</a></li>
                </ul>
        </aside>
        <div class="section">
            <div class="container">
                <div class="column">
                    <main className="col-md-9 main">
                        {this.props.children}
                    </main>
                </div>
            </div>
        </div>
    </div>
</div>
        )
    }
}

export default MainLayout;