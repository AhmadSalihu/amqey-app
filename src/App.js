import React, { useEffect } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './client.js'

import SearchBox from './components/SearchBox/search-box-header';
import SubNavigationBar from './components/subnavbar/subnavigation';
import SubHeaderComponent from './components/Headercomponent/Subheader.component';
import HomePage from './Pages/homepage.compponent/homepage';
import Shop from './components/ShopComponent/Shop';


import CheckoutPage from './Pages/homepage.compponent/checkout-page/checkout-page';

import { selectCurrentUser } from './redux-store/user/user.selector';
import { checkUserSession } from './redux-store/user/user.actions'
import SignIn from './components/sign-in.component/sign-in'
import SignUp from './components/sign-up/sign-up.component'

import Footer from './components/footercomponent/Footer';


import { GlobalStyle } from './Global.styles'

import ProductPage from './Pages/ProductDetailPages/ProductPage';
import DetailPage from './components/Carousel/Details.page';
import VendorForm from './components/Vendor-Register-form/vendorForm';
import VendorPage from './Pages/vendorPage/VendorPage';


const App = ({ checkUserSession, currentUser }) => {
  // const [searchfield, setSearchField] = useState('');
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);


 
//  const onSearchChange = e => {
//    setSearchField(e.target.value);
//   }

//     const filteredProduct = collections.filter(collection => {
//       return collection.items.map(items => {
//         return items.name.toLowerCase().includes(searchfield.toLowerCase())
//       })
//     })
  
//   console.log(filteredProduct)
  
    return (
      <div> 
      <GlobalStyle /> 
        {/* <ErrorBoundary></ErrorBoundary> */}
        <SearchBox />
        <SubNavigationBar />
        <SubHeaderComponent />
        <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route path='/product/:id' component={DetailPage} />  
        <Route path='/detail/:id' component={ProductPage} />  
        <Route exact path="/signup" render={() => currentUser ? (<Redirect to='/' />
        ) : (
              <SignUp />)} />
        <Route exact path="/signin" render={() => currentUser ? (<Redirect to='/' />
        ) : (
              <SignIn />)} />
        <Route path='/vendor' component={VendorForm} />
          <Route exact path="/dashboard" component={VendorPage} /> 
        </Switch>
        <Footer />
      </div>
    );
  } 

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
 