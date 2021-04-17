import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import CollectionsOverview from '../../components/collection-overview/collection-overview';
import CollectionPage from '../../Pages/collectionPage/collectionPage';
import { fetchCollectionAsync  } from '../../redux-store/shop/shop.actions';
import { isCollectionFetching } from '../../redux-store/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner';

import './Shop.styles.scss';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);


class Shop extends React.Component {

  componentDidMount() {
    const { fetchCollectionAsync } = this.props;
    fetchCollectionAsync()
  }

  render() {
    const { match, collectionFetching } = this.props;
    return (
     <div className="shop-page">
        <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={collectionFetching} {...props} /> } />
      <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={collectionFetching} {...props} /> } />
    </div>
      
    )
  }
} 


const mapStateToProps = createStructuredSelector({
  collectionFetching: isCollectionFetching
})

const mapDispatchToProps = dispatch => ({
 fetchCollectionAsync: () => dispatch(fetchCollectionAsync())
})


export default connect(mapStateToProps, mapDispatchToProps)(Shop);  