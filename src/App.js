import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Home from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import Header from './components/header'
import SigninandSignoutPage from './pages/SigninandSignoutPage'
import { auth, createUserProfileDocument } from './firebase'

class App extends React.Component { 
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        });
      }
      this.setState({ currentUser: userAuth});
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
         <Route exact path='/' component={Home} />
         <Route exact path='/shop' component={ShopPage} />
         <Route exact path='/signin' component={SigninandSignoutPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
