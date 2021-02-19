import React from 'react';
import Rating from './Rating';

export default function Products({ data }) {
  return (
    <div key={data._id} className="card">
    <a href={`/data/${data._id}`}>
      <img className="small" src={data.image} alt={data.name} />
    </a>
      <div className="card-body">
        <a href={`data/${data._id}`}>
          <h2>{data.name}</h2>
        </a>
        <Rating rating={data.rating} numReviews={data.numReviews} />
      </div>
      <div className="price">₦{data.price}</div>
    </div>
  )
}
