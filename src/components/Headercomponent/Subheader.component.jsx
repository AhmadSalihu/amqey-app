import React from 'react';
import CategoryList from '../categoryPage/category-list';
import SubHeader from './SubHeader';

import { SubHeaderComponentStyle } from './Header.styles'

const SubHeaderComponent = () => {
	return (
	<SubHeaderComponentStyle>
		<CategoryList /> 
		<SubHeader />
	</SubHeaderComponentStyle>
		
	)
}

export default SubHeaderComponent;