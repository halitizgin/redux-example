import React, { Component } from 'react';
import '../App.css';
import {connect} from 'react-redux';
import {changeUser, getUsers} from '../Actions/UserActions';
import { addProduct } from '../Actions/ProductActions';

const Urun = null;
class App extends Component {
  onChangeName = (e) => 
  {
    if (e.target.value === '')
      this.props.changeUser('yok');
    else
      this.props.changeUser(e.target.value);
    
  }
  componentDidMount() {
    this.props.getUsers();
  }
  
  render() {
    return (
      <div className="App">
        <div>
          <h1>{ this.props.user }</h1>
          <input type="text" onChange={this.onChangeName}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return state;
};

const mapDispatchToProps = {
  changeUser: changeUser,
  getUsers: getUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(App);