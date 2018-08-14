import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Main from '../main/index.jsx';

export default class Header extends Component {
    render() {
        return (
            // <div className='header'>
            <div>


                <div className='navBar'>

                <Link to='/home' className='nameHeader'><h2><em>POWER to PLAY</em></h2></Link>
                    <ul className='navBarContent'>
                        <li><Link to='/about'>ABOUT</Link></li>

                        <li className='dropdown'>
                            <Link to='/platforms'>PLATFORMS</Link>
                            <div className='dropdown-content'>
                                <p><Link to='/platforms/ps4'>PS4</Link></p>
                                <p><Link to='/platforms/xbone'>XBONE</Link></p>
                                <p title="master"><Link to='/platforms/pc'>PC</Link></p>
                                <p title="soy"><Link to='/platforms/switch'>SWITCH</Link></p>

                            </div>
                        </li>

                        <li><Link to='/topgames'>TOP GAMES</Link></li>
                        <li><Link to='/trends'>TRENDS</Link></li>
                        <li><Link to='/contribute'>CONTRIBUTE</Link></li>

                        <li><Link to='/game/gta5'>GTA5</Link></li>
                        <li><Link to='/game/gta6'>GTA6</Link></li>
                         {/* <li><Link to='/game/gta4'>GTA4</Link></li>
                        <li><Link to='/game/gta7'>GTA7</Link></li> */}

                    </ul>
                </div>

                <span className='content'>
                    <Main/>
                </span>

                <p className='copyright'>&#169; Nick Vr. 2018</p>

            </div>
        );
    }
}