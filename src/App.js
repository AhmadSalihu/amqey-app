import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import SearchBox from './components/SearchBox/SearchBox';
import SubNavigationBar from './components/subnavbar/subnavigation';
import SubHeaderComponent from './components/Headercomponent/Subheader.component';
import HomePage from './Pages/homepage.compponent/homepage';
import Shop from './components/ShopComponent/Shop';
import CollectionItem from './components/collectionItem.component/CollectionItem';

import CheckoutPage from './Pages/homepage.compponent/checkout-page/checkout-page';

import { selectCurrentUser } from './redux-store/user/user.selector';
import { checkUserSession } from './redux-store/user/user.actions'
import SignIn from './components/sign-in.component/sign-in'
import SignUp from './components/sign-up/sign-up.component'

import Footer from './components/footercomponent/Footer';


import { GlobalStyle } from './Global.styles'
import VendorUserForm from './components/Vendor-Register-form/VendorUserForm';



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
      <GlobalStyle />  
        <SearchBox />
        <SubNavigationBar />
        {/* <Header  /> */}
        <SubHeaderComponent />
        <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/" component={CollectionItem} />
        <Route path="/Shop" component={Shop} />
        {/* <Route path='/decriptionpage/:id' component={DescriptionPage} />   */}
        <Route  path="/checkout" component={CheckoutPage} />
        <Route exact path="/signup" render={() => this.props.currentUser ? (<Redirect to='/' />
        ) : (
              <SignUp />)} />
        <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to='/' />
        ) : (
              <SignIn />)} />
        <Route exact path='/vendor' component={VendorUserForm} />
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
 