import React from 'react'
import { Link } from 'react-router-dom'
import data from '../../components/Carousel/productData'

import './detail.styles.css'

const DetailPage = (props) => {
	const product = data.products.find((item) => item.id === Number(props.match.params.id))
	if (!product) {
		return (
			<h1>Product Not Found</h1>
		)
	}
	return (
		<div>
			<Link to="/">Back to shop</Link>
			<div className="row top">
				<div className="col-one">
					<img className="medium" src={product.imageUrl} alt={product.name} />
				</div>
				<div className="col-two body">
					<ul>
						<li>
							<h1>{product.name}</h1>
						</li>
						<li>Price: ₦{product.price}</li>
						<li>Description: {product.description}</li>
					</ul>
				</div>
				<div className="col-one card">
					<div className="card card-body">
						<ul>
							<li>
								<div className="row">
									<div>Price</div>
									<div className="price">₦{product.price}</div>
								</div>
							</li>
							<li>
								<div className="row">
									<div>Status</div>
									<div>{product.countInStock > 0 ? (
										<span className="success">IN STOCK</span>
									) : (
											<span className="error">Unavailbale</span>
									)}
									</div>
								</div>
							</li>
							<li>
								<button className="primary block">Add to Cart</button>
							</li>
						</ul>
					</div>	
				</div>
			</div>
		</div>
	)

}


export default DetailPage