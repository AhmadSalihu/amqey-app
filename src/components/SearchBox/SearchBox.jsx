import React from 'react'
import { Link } from 'react-router-dom'
import CartIcon from '../cart-icon/cart-icon.component'

import { LogoContainer, LogoImage } from '../Headercomponent/Header.styles';
import { selectCurrentUser } from '../../redux-store/user/user.selector';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { signOutStart } from '../../redux-store/user/user.actions';

import './box-bar.styles.css';

//value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}

const SearchBox = ({ currentUser, signOutStart }) => {
  // const [userQuery, setUserQuery] = useState(null);
  // const [searchQuery, setSearchQuery] = useState([]);
  return(
    <div className="search-header">
      <div>
      <LogoContainer to='/'>
       <LogoImage src='/favicon.ico.png' alt="" className='logo' /> 
      </LogoContainer>
    </div>
      <div className="search-container">       
        <input className='search-box' type="search" placeholder="Search products, brands and categories" /><br/>  
        <button className="search-button">search</button>
        {/* <Button variant="light">Search</Button> */}
      </div>
      <div className="search-icon">
        <CartIcon />
      </div>
        <div class="user-login">
        {
          currentUser ? (
        <Link as='div' onClick={signOutStart}><i class="fas fa-user-check"></i></Link>   
        ) : (
        <Link to='/signin'><i class="fas fa-user"></i> Login</Link>
          )}
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox)