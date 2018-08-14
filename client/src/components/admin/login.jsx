import React, { Component } from 'react';
import axios from 'axios';
const Promise = require('bluebird');
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '', 
            pass: ''
        }
        this.input = this.input.bind(this);
        this.submit = this.submit.bind(this);
    }

    input(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    submit(event) {
        event.preventDefault();
        console.log('submitting', this.state);
        if (!this.state.user && !this.state.pass) {
            alert('Please enter a username and password');
        } else if (!this.state.user) {
            alert('Please enter a username');
        } else if (!this.state.pass) {
            alert('Please enter a password');
        } else {
            axios
            .get(`/signin/${this.state.user}/${this.state.pass}`)
            .then(response => {
                if (response.data === 'wrong') {
                    alert('Username or Password is incorrect');
                } else {
                    console.log(response);
                    sessionStorage.setItem('jwtToken', response.data.token);
                }
            })
            .catch(err => {
                console.log('Login error', err);
            });
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.user}, {this.state.pass}</h1>
                <form onSubmit={(event) => this.submit(event)}>
                    <input name='user' onChange={event => this.input(event)}/><br/>
                    <input name='pass' type='password' onChange={event => this.input(event)}/><br/>
                    <button type='submit'>Enter</button>
                </form>
            </div>
        )
    }
}