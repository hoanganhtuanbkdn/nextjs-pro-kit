import React from 'react';
import CartStore from './CartStore';
import Image from 'next/image';
export default function Header() {
	return (
		<div className=" h-[75px] border border-[rgba(204, 199, 199, 0.35)]">
			<div className="container mx-auto flex flex-row justify-between items-center h-full">
				<div className="">
					<Image
						src="/images/logo.webp"
						alt=""
						className="w-[175px] h-[45px]"
						width={175}
						height={45}
					/>
				</div>
				<div className="flex flex-row gap-5">
					<div>Home</div>
					<div>Product</div>
					<div>Contact</div>
				</div>
				<CartStore />
			</div>
		</div>
	);
}
