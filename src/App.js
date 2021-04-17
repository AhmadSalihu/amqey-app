import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import Footer from './components/footercomponent/Footer';
import Header from './components/Headercomponent/Header';
import Shop from './components/ShopComponent/Shop';
import HomePage from './Pages/homepage.compponent/homepage';
import { auth, createUserProfileDocument } from './Firebase/firebase.utils';
import { setCurrentUser } from './redux-store/user/user.actions';
import SignInAndSignOutPage from './Pages/sign-in-sign-up';
import CheckoutPage from './Pages/homepage.compponent/checkout-page/checkout-page';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux-store/user/user.selector';
import SubHeader from './components/Headercomponent/SubHeader';
import SubNavigationBar from './components/subnavbar/subnavigation';
import CustomerRegister from './components/RegisterF/RegisterForm'
import VendorRegister from './components/RegisterF/customerRegister';
// import descriptionMapPage from './components/description-page/descriptionMapPage';
 

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
        <Header />
        <SubNavigationBar />
        <SubHeader />
        <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/Shop" component={Shop} />
        {/* <Route path='/decriptionpage' component={descriptionMapPage} />   */}
        <Route  path="/checkout" component={CheckoutPage} />
        <Route  path="/vendor" component={VendorRegister} />
        <Route path="/customer" component={CustomerRegister} />
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
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(App);
 