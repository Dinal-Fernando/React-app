import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

import Create from "./components/create.component";
import Edit from "./components/edit.component";
import Index from "./components/index.component";

class App extends  Component{
    render() {
        return(
            <Router>
                <div >


                    <h2>Welcome to react crud by Dinal</h2><br/>
                    <nav className="navbar navbar-expand-lg navbar-light ">
                        {/*<Link to={'/'} className="navbar-brand">React Crud Example by Dinal</Link>*/}
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link to={'/'} className="nav-link">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/create'} className="nav-link">Create</Link>

                                </li>

                                <li className="nav-item">
                                    <Link to={'/index'} className="nav-link">Index</Link>

                                </li>
                            </ul>
                </div>
                    </nav><br/>

                    <switch>
                        <Route exact path='/create' component={Create}/>
                        <Route exact path='/edit/:id' component={Edit}/>
                        <Route exact path='/index' component={Index}/>
                    </switch>
                </div>
            </Router>
        );
    }
}

export default App;