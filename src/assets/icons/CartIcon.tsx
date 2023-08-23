import React from 'react';

// import { Container } from './styles';

const CartIcon: React.FC = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
			className="feather feather-shopping-bag"
		>
			<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
			<line x1="3" y1="6" x2="21" y2="6"></line>
			<path d="M16 10a4 4 0 0 1-8 0"></path>
		</svg>
	);
};

export default CartIcon;