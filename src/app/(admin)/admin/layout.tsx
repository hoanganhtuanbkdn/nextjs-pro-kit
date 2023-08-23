import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

export default function GuestLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			<Sidebar />
			<div>
				<Header />
				{children}
				<Footer />
			</div>
		</div>
	);
}
