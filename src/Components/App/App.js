import React from 'react';
import './App.css';
import {Heading} from "../FunctionalComponent/Heading";
import Layout from "../ClassComponent/Layout";
import {BrowserRouter as Router, Route, Switch, Link, NavLink, Redirect} from 'react-router-dom';
import Home from "../Home/Home";
import Dashboard from "../Dashboard/Dashboard";
import Login from "../Login/Login";

const App = () => {
  return (
    <div>
        <Router>
            <ul style={{listStyleType:"none"}}>
                <li>
                    <NavLink exact activeClassName={"active"} to={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName={"active"} to={'/dashboard'}>Dashboard</NavLink>
                </li>
                <li>
                    {/*<Link to={'/dashboard/heading'}>Dashboard Heading</Link>*/}
                    <NavLink activeClassName={"active"} to={{pathname:'/dashboard/heading', state:{name:"usman"}}}>Dashboard Heading</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={"active"}  to={'/dashboard/layout'}>Dashboard Layout</NavLink>
                </li>
            </ul>

            <Switch>
                <Route path={'/login'} component={Login}/>
                <Route path={"/dashboard/heading"} component={Heading}/>
                <Route path={"/dashboard/layout"} component={Layout}/>
                <Route path={"/dashboard"} component={Dashboard}/>
                <Redirect to={'/login'}/>
            </Switch>
        </Router>
    </div>
  );
};

export default App;
