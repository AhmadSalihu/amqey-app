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
            imageUrl: '/amqey-images/sun-bum-shine.jpg',
            id: 1,
          },
          {
            title: 'Restaurant',
            imageUrl: '/amqey-images/Shawarma.jpg',
            id: 2,
          },
          {
            title: 'Computers',
            imageUrl: '/amqey-images/Computers.jpg',
            id: 3,
          },
          {
            title: 'Accessories',
            imageUrl: '/amqey-images/accessories.jpg',
            id: 4,
          },
          {
            title: 'Hair Oil',
            imageUrl: '/amqey-images/hair-oil.png',
            id: 5,
          },
          {
            title: 'Beaty',
            imageUrl: '/amqey-images/felge.jpg',
            id: 6,
          },
          {
            title: 'Make-up Kits',
            imageUrl: '/amqey-images/face-make-up.jpg',
            id: 7,
            size: 'large',
          },
          {
            title: 'Mobile Phones',
            imageUrl: '/amqey-images/amqey-phones.jpg',
            id: 8,
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