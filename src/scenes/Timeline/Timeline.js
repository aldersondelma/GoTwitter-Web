import React, { Component } from 'react';
import socket from 'socket.io-client';

import './Timeline.css';
import Logo from '../../twitter.svg';
import Tweet from '../../components/Tweet'

import data from '../../config/api';

export default class Timeline extends Component {

  state = { 
    newTweet: '',
    tweets: []
  }

  likeUpdateEvent = () => {
    const io = socket("http://localhost:4005");

    io.on("Tweet",  resp => {
      this.setState({ tweets: [resp, ...this.state.tweets]})
    });
    io.on("Like", resp => {
      this.setState({ tweets: this.state.tweets.map(tweet => (
        tweet._id === resp._id ? resp : tweet 
      ))});
    });
  }
  async componentDidMount() {
    this.likeUpdateEvent();
    const resp = await data.get('list_tweets');
    this.setState({ tweets: resp.data });
  }

  handleChange = e => {
    this.setState({ newTweet: e.target.value });
  }
  handlePost = async e => {
    if(e.keyCode!==13) return;

    const content = this.state.newTweet;
    const author = localStorage.getItem("@GoTwitter:username");
    //console.log(content,author)
    await data.post("tweet", { content, author });
    this.setState({ newTweet: '' })
  }

  render() {
    return (
      <div className="timeline-wrapper">
        <img src={ Logo } alt="GoTwitter"/>
        <form>
          <textarea value={ this.state.newTweet }
              onKeyDown={ this.handlePost }
              onChange={ this.handleChange }
          />
        </form>
        <ul className="tweet-list">
          { this.state.tweets.map(tweet => (
            <Tweet key={ tweet._id } 
            tweet={ tweet }
            />  
          ))}
        </ul>
      </div>
               
    );
  }
}
