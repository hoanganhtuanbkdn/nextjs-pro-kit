'use client';

import { useCartStore } from '@/store/cart/cart.store';
import React from 'react';

// import { Container } from './styles';

const AddCartButton: React.FC<{ product: any }> = ({ product }) => {
	const addToCart = useCartStore((state) => state.addToCart);
	const onAddToCart = () => {
		addToCart(product);
	};
	return (
		<div className="absolute z-30 delay-150 -bottom-20 left-0 right-0 flex items-center justify-center group-hover:bottom-10 transition-all duration-200 ease-linear">
			<button
				className="hover:bg-[#DF4141]  py-[10px] px-5 text-sm hover:text-white bg-white transition-all duration-200"
				onClick={onAddToCart}
			>
				Add to cart
			</button>
		</div>
	);
};

export default AddCartButton;
