import React from 'react';

// import { Container } from './styles';

const CloseIcon: React.FC<{ width?: number }> = ({ width = 28 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={width}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="feather feather-x"
		>
			<line x1="18" y1="6" x2="6" y2="18"></line>
			<line x1="6" y1="6" x2="18" y2="18"></line>
		</svg>
	);
};

export default CloseIcon;
