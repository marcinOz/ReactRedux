import React, { Component } from 'react';
import axios from 'axios';

const CardComp = (props) => {
  return (
    <div style={{marginTop: '1em'}}>
      <img width="75" src={props.avatar_url}  alt="foto"/>
      <div style={{display: 'inline-block', marginLeft: 10}}>
        <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>
          {props.name}
        </div>
        <div>{props.company}</div>
      </div>
    </div>
  );
};

const CardList = (props) => {
  return (
    <div>
      {props.cards.map(card => <CardComp key={card.id} {...card} />)}
    </div>
  );
};

class Form extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { userName: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log('Event: From Submit', this.state.userName);
    axios.get(`https://api.github.com/users/${this.state.userName}`)
      .then(resp => {
        this.props.onSubmit(resp.data);
        this.setState({ userName: ''});
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" 
          value={this.state.userName}
          onChange={(event) => this.setState({ userName: event.target.value})}
          placeholder="Github username" />
        <button type="submit">Add card</button>
      </form>
    );
  }
}

class GithubUsers extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      cards: []
    };
    this.addNewCard = this.addNewCard.bind(this);
  }

  addNewCard(cardInfo) {
    this.setState(prevState => ({
      cards: [].concat(cardInfo, prevState.cards)
    }));
  }

  render() {
    return (
      <div className="body">
        <Form onSubmit={this.addNewCard} />
        <CardList cards={this.state.cards}/>
    </div>
    );
  }
}

export default GithubUsers;