import React, { Component } from 'react';
import './Main.css';
import Header from './Header';
import Content from './Content';
import Navbar from './Navbar';
import * as firebase from 'firebase';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';




class Main extends Component {
    render() {


        return (
            <div>
            <nav className="navbar navbar-default">
                <div className="container-fluid">

                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
                            aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Elder Assist</a>
                    </div>


                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li><a href="#"><span className="glyphicon glyphicon-th" aria-hidden="true"></span> Dashboard</a></li>

                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Notifications <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Übersicht</a></li>
                                    <li><a href="#">New Contact</a></li>
                                    <li role="separator" className="divider"></li>
                                    <li><a href="#">Categories</a></li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Notes <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Overview</a></li>
                                    <li><a href="#">New Notiz</a></li>
                                    <li role="separator" class="divider"></li>
                                    <li><a href="#">Notebooks</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Accounts</a></li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Learnings <span class="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Overview</a></li>
                                    <li><a href="#">New Learning</a></li>
                                    <li role="separator" className="divider"></li>
                                    <li><a href="#">Categories</a></li>
                                </ul>
                            </li>
                            
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li className="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span className="glyphicon glyphicon-link" aria-hidden="true"></span> Links<span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a href="http://www.google.ch" target="_blank">My Webmail</a></li>
                                    <li role="separator" class="divider"></li>
                                    <li><a href="http://www.google.ch" target="_blank">Timelogger</a></li>
                                    <li><a href="http://www.cubetech.ch" target="_blank">cubetech.ch</a></li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span className="glyphicon glyphicon-user" aria-hidden="true"></span> Jack Bass<span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a href="http://www.fgruber.ch/" target="_blank"><span className="glyphicon glyphicon-cog" aria-hidden="true"></span> User Settings</a></li>
                                    <li><a href="/logout"><span className="glyphicon glyphicon-log-out" aria-hidden="true"></span> Logout</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
            <div class="row">
                <div class="col-md-12">
                    <div class="col-md-12">Simple Bootstrap Navigation with responsive Style. Easy to customize.</div>
                </div>
            </div>
</div>
    
        );
    }

}

export default Main;

