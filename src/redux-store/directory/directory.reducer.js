const INITIAL_STATE = {
	sections: [
		{
			title: 'hats',
			imageUrl: '/amqey-images/sun-bum-shine.jpg',
			id: 1,
			linkUrl: 'shop/hats' 
		},
		{
			title: 'jackets',
			imageUrl: '/amqey-images/Shawarma.jpg',
			id: 2,
			linkUrl: 'shop/jackets'
		},
		{
			title: 'sneakers',
			imageUrl: '/amqey-images/Computers.jpg',
			id: 3,
			linkUrl: 'shop/sneakers'
		},
		{
			title: 'womens',
			imageUrl: '/amqey-images/accessories.jpg',
			id: 4,
			linkUrl: 'shop/womens'
			
		},
		{
			title: 'fashion',
			imageUrl: '/amqey-images/hair-oil.png',
			id: 5,
			linkUrl: 'shop/fashion'
		},
		{
			title: 'restaurant',
			imageUrl: '/amqey-images/felge.jpg',
			id: 6,
			linkUrl: 'shop/restaurant'
		},
		{
			title: 'cosmetics',
			imageUrl: '/amqey-images/face-make-up.jpg',
			id: 7,
			size: 'large',
			linkUrl: 'shop/cosmetics'
		},
		{
			title: 'Phones',
			imageUrl: '/amheader/amqey-phones.jpg',
			id: 8,
			size: 'large',
			linkUrl: 'shop/phones'
		},
		{
			title: 'Computers',
			imageUrl: '/amheader/computers.png',
			id: 9,
			size: 'large',
			linkUrl: 'shop/computers'
		},
		{
			title: 'Mens collection',
			imageUrl: '/amheader/mens-fabrics.jpg',
			id: 10,
			size: 'large',
			linkUrl: 'shop/mens'
		},
	]
};


const directoryReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
			default:
		return state;
		}
	}

export default directoryReducer;