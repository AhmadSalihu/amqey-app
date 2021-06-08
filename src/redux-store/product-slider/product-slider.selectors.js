import { createSelector } from 'reselect';

const selectProductSlider = state => state.product;

export const sliderProduct = createSelector(
	[selectProductSlider],
	product => product.products
);
