import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/common/header/header';
import Footer from './components/common/footer/footer';
import UsersList from './components/userList/usersList';
import UserDetails from './components/userDetsils/userDetails';
import Test from './components/test/test';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: {}
    }
  }
  selectedUser = (data) => {
    this.setState({
      user: data
    });
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' render={(props) => <UsersList {...props} selectedUser={this.selectedUser}/>}/>
          <Route path='/userdetails/:id' render={(props) => <UserDetails {...props} userId={this.state.user}/>}/>
          <Route path='/test' component={Test}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
