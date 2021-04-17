import React from 'react';


const DescriptionPage = ({ item: { imageUrl, price, name }  }) => {
	return (
		<>
					<div  className="row">
					DescriptionPage
						<div className="col-2">
							<img src={imageUrl} alt="" />
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



export default DescriptionPage;
