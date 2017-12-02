import React, { Component } from 'react';
import './App.css';

class App extends Component {
  //Model
  state = {
    user: {
      firstName: 'Sally',
      lastName: 'wells',
      profileImageURL: 'https://randomuser.me/api/portraits/women/50.jpg'
    }
  }

  //Controller Actions

  //When user types in text field
  //This function is called
  //The event provides information about what happened on change event
  onChangeFirstName = (event) => {
    const input = event.target
    const newFirstName = input.value

    this.setState((prevState) => {
      const user = prevState.user
      const newUser = { ...user, firstName: newFirstName }
      return {
        user: newUser
      }
    })
  }


  //View

  render() {
    const user = this.state.user;

    return (
      <div className="App">
        <h1>Facebook profile editor</h1>
        <img src={ user.profileImageURL } />
        <p>Name: {user.firstName} {user.lastName}</p>

        <label>
          <input value={ user.firstName } onChange={ this.onChangeFirstName } />
        </label>

      </div>
    );
  }
}

export default App;
