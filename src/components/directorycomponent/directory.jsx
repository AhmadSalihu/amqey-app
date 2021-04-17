import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux-store/directory/directory.selector';

import MenuItem from '../menu-item.component/menu-item';
import { HomepageContainer } from './directory.styles';


const Directory = ({ sections }) => {
  return (
    <HomepageContainer>
      {sections.map(({ id, ...otherSectionpProps }) => (
        <MenuItem key={id} {...otherSectionpProps} />
      ))}
    </HomepageContainer>
  )
}


  const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});


export default connect(mapStateToProps)(Directory)