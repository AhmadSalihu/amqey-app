import React from 'react';
// import CategoryList from '../categoryPage/category-list';
import SubHeader from './SubHeader';
import { useLocation } from 'react-router-dom'

import { SubHeaderComponentStyle } from './Header.styles'

const SubHeaderComponent = () => {
	const location = useLocation();
	
	return (
		<SubHeaderComponentStyle>              
		{
				location.pathname === '/' && (
			<>
				<SubHeader />
			</>
			)
		}
		</SubHeaderComponentStyle>
		
	)
}

export default SubHeaderComponent;