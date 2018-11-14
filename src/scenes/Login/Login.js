import React, { Component } from 'react';

import './Login.css';

import Logo from '../../twitter.svg';
//import Form from '../../components/Form';

export default class Login extends Component {
    /*constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }*/

    state = {
        username: ''
    }    

    handleChange = e => {
        this.setState({ username: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();

        const { username } = this.state;
        if(!username.length) return;

        localStorage.setItem("@GoTwitter:username", username);
        this.props.history.push("/timeline");
        this.setState({ username: '' });
    }

  render() {
    return (
        <div className="login-wrapper">
            <img src={ Logo } 
            height={24}
            alt="GoTwitter" />
            <form onSubmit={ this.handleSubmit }>
                <input  placeholder="Nome de usáurio"
                    value={ this.state.value }
                    onChange={ this.handleChange }      
                />
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
  }
}
