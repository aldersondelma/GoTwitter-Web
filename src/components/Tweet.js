import React, { Component } from 'react';

import './Tweet.css';

import data from '../config/api';
import Like from '../like.svg'

export default class Tweet extends Component {

    handleClick = async () => {
        const { _id } = this.props.tweet;
        
        await data.post(`like/${ _id }`);
    }

    render() {
        return (
            <li className="tweet">                
                <strong>{ this.props.tweet.author }</strong>
                <p>{ this.props.tweet.content }</p>
                <button onClick={ this.handleClick }>
                    <img src={ Like } alt="Like" />
                    { this.props.tweet.likes }
                </button>    
            </li>
        );
    }
}