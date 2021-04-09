import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import Footer from './components/footercomponent/Footer';
import Header from './components/Headercomponent/Header';
import Shop from './components/ShopComponent/Shop';
import HomePage from './Pages/homepage.compponent/homepage';
import { auth, createUserProfileDocument } from './Firebase/firebase.utils';
// import HomeScreen from './HomeScreen'
import { setCurrentUser } from './redux-store/user/user.actions';
import SignInAndSignOutPage from './Pages/sign-in-sign-up';
import CheckoutPage from './Pages/homepage.compponent/checkout-page/checkout-page';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux-store/user/user.selector';

 

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
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
      <div> 
        <Header  /> 
        <Switch>
        <Route exact path="/" component={HomePage} />
        <Route  path="/Shop" component={Shop} />
        <Route  path="/checkout" component={CheckoutPage} />
        <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to='/' />
        ) : (
         <SignInAndSignOutPage />)} />
        </Switch>
        <Footer />
      </div>
    );
  } 
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(App);
 