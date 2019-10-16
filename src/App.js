import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser }from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors'
import './App.css';

import Home from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import Checkout from './pages/Checkout'
import Header from './components/header'
import Contact from './pages/Contact'
import About from './pages/About'
import SigninandSignoutPage from './pages/SigninandSignoutPage'
import { auth, createUserProfileDocument } from './firebase'

class App extends React.Component { 

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser ({
              id: snapShot.id,
              ...snapShot.data()
            });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header  />
        <Switch>
         <Route exact path='/' component={Home} />
         <Route exact path='/shop' component={ShopPage} />
         <Route exact path='/checkout' component={Checkout} />
         <Route exact path='/about' component={About} />
         <Route exact path='/contact' component={Contact} />
         <Route 
            exact 
            path='/signin' 
            render={() => 
            this.props.currentUser ? (
              <Redirect to='/' />
            ) : (
              <SigninandSignoutPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser 
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
  )(App);
