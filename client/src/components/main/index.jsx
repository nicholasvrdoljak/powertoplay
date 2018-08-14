import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from '../home/index.jsx';
import About from '../about/index.jsx';
import Contribute from '../contribute/index.jsx';

import Platforms from '../platforms/index.jsx';
import NintendoSwitch from '../platforms/switch.jsx';
import Xbone from '../platforms/xbone.jsx';
import PS4 from '../platforms/ps4.jsx';
import PC from '../platforms/pc.jsx';

import Game from '../game/index.jsx';
import Trends from '../trends/index.jsx';
// import Login from '../admin/login.jsx';
// import Dashboard from '../admin/dashboard.jsx';


const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' render={() => <Redirect to={{ pathname: '/home' }} />} />
            <Route exact path='/home' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/contribute' component={Contribute}/>
            
            <Route exact path='/trends' component={Trends}/>

            <Route exact path='/platforms' component={Platforms}/>
            <Route exact path='/platforms/ps4' component={PS4}/>
            <Route exact path='/platforms/pc' component={PC}/>
            <Route exact path='/platforms/xbone' component={Xbone}/>
            <Route exact path='/platforms/switch' component={NintendoSwitch}/>
            
            <Route exact path='/game/:gameTitle' render={(props) => <Game {...props} />}/>

            {/* <Route exact path='/login' component={Login}/> */}
            {/* <Route exact path='/dashboard' render={() => sessionStorage.getItem('jwtToken') ? (<Dashboard />) : (<Redirect to={{ pathname: '/home' }}/>)} /> */}
        </Switch>
    </main>
);

export default Main;