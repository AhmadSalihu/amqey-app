import React from 'react'
import { connect } from 'react-redux';
import Directory from '../../components/directorycomponent/directory';
import { fetchCollectionsStart } from '../../redux-store/shop/shop.actions';



import './homepage.styles.scss'


class HomePage extends React.Component {

   componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
    console.log(fetchCollectionsStart())
  }

  render() { 
    return (
      <div className="homepage">
        <Directory />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
 fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(HomePage);