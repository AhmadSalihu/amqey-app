import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import Footer from './components/footercomponent/Footer';
import Header from './components/Headercomponent/Header';
import Shop from './components/ShopComponent/Shop';
import HomePage from './Pages/homepage.compponent/homepage';
import SignInAndSignOutPage from './components/sign-in.component/sign-in-sign-up';
import CheckoutPage from './Pages/homepage.compponent/checkout-page/checkout-page';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux-store/user/user.selector';
import SubNavigationBar from './components/subnavbar/subnavigation';
 import { checkUserSession } from './redux-store/user/user.actions'
import SearchBox from './components/SearchBox/SearchBox';
import DescriptionPage from './components/description-page/description-page';
import SubHeaderComponent from './components/Headercomponent/Subheader.component';
import VendorStepsForm from './components/Vendor-Register-form/vendor-steps.form';



class App extends React.Component {
  state = {
    loading: true
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession()
    this.setState({ loading: false })
  }
 
  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }

  render() { 
    return (
      <div> 
        <Header  />
        <SearchBox />
        <SubNavigationBar />
        <SubHeaderComponent />
        <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/Shop" component={Shop} />
        <Route path='/decriptionpage/:id' component={DescriptionPage} />  
        <Route  path="/checkout" component={CheckoutPage} />
        <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to='/' />
        ) : (
              <SignInAndSignOutPage />)} />
        <Route exact path='/vendor' component={VendorStepsForm} />
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
  checkUserSession: () => dispatch(checkUserSession())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
 