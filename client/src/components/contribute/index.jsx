import React, { Component } from 'react';

export default class Contribute extends Component {
    render() {
        return (
            <div className='contribute'>
                <div className='contributeTitle'>
                    <h1>Contribute</h1>
                    <p>Share your ideas with me and let's create something.</p>
                </div>

                <div className='contributeItem'>
                    <h3>Email: </h3><a href='mailto:kberjikian@gmail.com'>kberjikian@gmail.com</a>
                    <h3>LinkedIn: </h3><a target='blank' href='https://www.linkedin.com/in/karla-berjikian-900a359b/'>https://www.linkedin.com/in/karla-berjikian-900a359b/</a>
                </div>
            </div>

        )
    }
}