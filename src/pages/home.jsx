import React, { Component } from 'react';
import Grid from '../components/grid/grid'
import AddEvent from '../components/addevent/addevent'
import './home.css';
import { withAuthorization } from '../components/session';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className='header'>
          <h1>One-Page Journal</h1>
          <AddEvent/>
        </div>
        <Grid/>
      </div>
    );
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Home);