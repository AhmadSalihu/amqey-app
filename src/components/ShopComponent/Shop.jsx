import React from 'react';
import { Route } from 'react-router-dom';

import CollectionPage from '../../Pages/collectionPage/collectionPage';

import CollectionOverview from '../collection-overview/collection-overview';

import './Shop.styles.scss';

const Shop = ({ match }) => (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  )
 

  export default Shop; 