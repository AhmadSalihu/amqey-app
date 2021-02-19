import React from 'react';
import { Link } from 'react-router-dom';
import CollectionItem from '../collectionItem.component/CollectionItem';

import './collection-preview.styles.scss';



export default function CollectionPreview({ title, items }) {
  return (
    <div className='collection-preview'>
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className='preview'>
        {
          items.filter((item, idx) => idx < 4).map(({ id, ...otherItemsProps}) => (
            <CollectionItem key={id}{...otherItemsProps} 
            onClick={<Link to='/welcom'>Product Page</Link>}
          />
          ))}
          </div>
    </div>
  )
}
