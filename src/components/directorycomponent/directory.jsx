import React from 'react';
import './directory.styles.scss'
import MenuItem from '../menu-item.component/menu-item'


class Directory extends React.Component {
  constructor() {
    super();
      this.state = {
        sections: [
          {
            title: 'Amqey Lotion',
            imageUrl: '/images/sun-bum.jpg',
            id: 1,
          },
          {
            title: 'Restaurant',
            imageUrl: '/images/amqey-restaurant.jpg',
            id: 2,
          },
          {
            title: 'Lotion',
            imageUrl: '/images/sun-bum.jpg',
            id: 3,
          },
          {
            title: 'Body Lotion',
            imageUrl: '/images/amqey-beauty.jpg',
            id: 4,
            size: 'large',
          },
          {
            title: 'Fashion',
            imageUrl: '/images/amqey-phones.jpg',
            id: 5,
            size: 'large',
          },
        ]
      }
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionpProps }) => (
          <MenuItem key={id} {...otherSectionpProps} />
        ))}
      </div>
    )
  }
}




export default Directory