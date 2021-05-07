import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import CollectionsOverviewContainer from '../../components/collection-overview/Collection-overview.Container';
import CollectionPageContainer from '../../Pages/collectionPage/CollectionPage.Container';
import { fetchCollectionsStart  } from '../../redux-store/shop/shop.actions';

import './Shop.styles.scss';



class Shop extends React.Component {

  componentDidMount() {
    // const { fetchCollectionsStart } = this.props;
    // fetchCollectionsStart();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
      {/* <Route path={`${match.path}/:collectionId`} component={DiscriptionPage} /> */}
    </div>
      
    )
  }
} 


const mapDispatchToProps = dispatch => ({
 fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})


export default connect(null, mapDispatchToProps)(Shop);   