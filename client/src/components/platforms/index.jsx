import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Platforms extends Component {
    render() {
        return (
            <div className='platforms'>
                <div className='platformsItem'>
                    <img src='https://picsum.photos/200/?random'/>
                </div>
                <div className='platformsItem'>
                    <img src='https://picsum.photos/200/?random' />
                </div>
                <div className='platformsItem'>
                    <img src='https://picsum.photos/200/?random' />
                </div>
            </div>
        )
    }
}