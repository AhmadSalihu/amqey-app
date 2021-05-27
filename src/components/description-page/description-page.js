import React from 'react';
import { withRouter } from 'react-router-dom';


const DescriptionPage = ({ item, match, history }) => {
	const { imageUrl, name, price } = item;
	console.log(item)
	console.log(match)
	console.log(match.path)
	// const detailItems = (details, detailsview) => {
	// 	const existingItem = item.find(details => details.id === detailsview.id)
	// 	console.log(existingItem)
	// }
	return (
		<>
					<div className="row">
				DescriptionPage
						<div className="col-2">
							<img src={imageUrl} alt="item" onClick={() => history.push(`/de/${item.id}`)} />
						</div>
						<div className="col-1">
							<ul>
								<li>
									<h1>{name}</h1>
								</li>
							</ul>
						</div>
						<div className="col-1">
							<ul>
								<li>
									<h1>{price}</h1>
								</li>
							</ul>
						</div>
					</div>
		</>
	)
}

export default withRouter(DescriptionPage);
