import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux-store/directory/directory.selector';

import MenuItem from '../menu-item.component/menu-item';


import './directory.styles.scss';

// onClick={() => history.push(`${match.url}${linkUrl}`)}

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionpProps }) => (
        <MenuItem key={id} {...otherSectionpProps} />
      ))}
    </div>
  )
}


  const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});


export default connect(mapStateToProps)(Directory)