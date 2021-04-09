import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { firestore, convertCollectionSnapshotToMap } from '../../Firebase/firebase.utils';

import CollectionPage from '../../Pages/collectionPage/collectionPage';

import CollectionOverview from '../collection-overview/collection-overview';
import { updateCollections } from '../../redux-store/shop/shop.actions'
import './Shop.styles.scss';
import WithSpinner from '../with-spinner/with-spinner';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class Shop extends React.Component {
  state = {
    loading: true
  }
  unSubscribeFromSnapshot = null
  

  componentDidMount() {
    const { updateCollections } = this.props
    const collectionRef = firestore.collection('collections');
    this.unSubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { loading } = this.state
  const { match } = this.props
    return (
    <div className="shop-page">
        <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props}  />} />
      <Route path={`${match.path}/:collectionId`}  render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props}  />} />
    </div>
      
    )
  }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
  })
 

  export default connect(null, mapDispatchToProps)(Shop); 