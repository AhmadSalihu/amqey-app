import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/footercomponent/Footer';
import Header from './components/Headercomponent/Header';
// import MyComponent from './components/Headercomponent/SubHeader';
import SHOP from './components/ShopComponent/Shop';
import HomePage from './Pages/homepage.compponent/homepage';
import signInAndSignOutPage from './Pages/sign-in-sign-up';
import { auth, createUserProfileDocument } from './Firebase/firebase.utils';
 

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

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
       }, () => {
         console.log(this.state.currentUser)
       });  
      });
      console.log(this.state)
    }
    this.setState({ currentUser: userAuth });
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div> 
        <Header currentUser={this.state.currentUser} />
        {/* <MyComponent /> */}
        <Switch>
        <Route exact path="/" component={HomePage} />
        <Route  path="/Shop" component={SHOP} />
        <Route  path="/signin" component={signInAndSignOutPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
