import React from 'react';
import { Route } from 'react-router-dom';

import collectionPage from '../../Pages/collectionPage/collectionPage';

import collectionOverview from '../collection-overview/collection-overview';

import './Shop.styles.scss';

const Shop = ({ match }) => {
 
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={collectionOverview} />
        <Route path={`${match.path}/:collectionId`} component={collectionPage} />  
    </div>
      
    )
  }


export default Shop;   