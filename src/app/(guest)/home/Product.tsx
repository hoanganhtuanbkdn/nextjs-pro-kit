import { PRODUCTS } from '@/data/Product';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import AddCartButton from './AddCartButton';

const Products: React.FC = () => {
	return (
		<div className="container mx-auto py-10">
			<div className="card">
				<div className="text-center mb-6">
					<h2 className="text-3xl">Best selling fashion items</h2>
					<h4 className="mt-4">
						Base optimal relaxation unlock my. Asserts too invite
						web cause eow can breakout ocean create.
					</h4>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-4 gap-5">
					{PRODUCTS.map((item, index) => (
						<div key={index}>
							<div className="relative group  overflow-hidden aspect-[800/1128]">
								<Image
									src={item.image}
									alt={item.name}
									fill
									className="object-cover"
									placeholder="blur"
									blurDataURL={item.image}
								/>
								<Image
									src={item.imageHover}
									alt={item.name}
									fill
									className="z-20 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 ease-in"
								/>
								<AddCartButton product={item} />
							</div>
							<div className="text-center py-[15px] space-y-[5px]">
								<h5 className="text-xl font-medium">
									<Link href="/">{item.name}</Link>
								</h5>
								<p className="">${item.price}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Products;
