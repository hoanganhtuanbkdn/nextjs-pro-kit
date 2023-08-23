'use client';

import { CartIcon, CloseIcon } from '@/assets/icons/';
import { useCartStore } from '@/store/cart/cart.store';
import React, { useState } from 'react';
import Image from 'next/image';
import { convertCarts } from '@/utils';

const CartStore: React.FC = () => {
	const [isShowCart, setShowCart] = useState(false);
	const { carts, removeToCart } = useCartStore((state) => state);
	const cartGroup = convertCarts(carts);
	const toggleShowCart = () => setShowCart(!isShowCart);

	return (
		<div className="">
			<div className="relative cursor-pointer" onClick={toggleShowCart}>
				<CartIcon />
				<p className="top-[-10px] right-[-10px] absolute z-10 font-semibold text-sm">
					{carts.length}
				</p>
			</div>
			{isShowCart && (
				<div className="fixed inset-0 bg-black bg-opacity-70 z-40">
					<div className="w-full lg:w-[450px] h-full col bg-white float-right z-50">
						<div className="px-[35px] py-[15px] row-between bg-[#dcdcdc]">
							<p>Your Basket ({carts.length})</p>
							<button
								className="bg-transparent"
								onClick={toggleShowCart}
							>
								<CloseIcon />
							</button>
						</div>
						<div className="p-[35px] pb-[55px] flex flex-1 flex-col justify-between">
							<div className="">
								<p>
									Buy{' '}
									<span className="text-[#DF4141]">$949</span>{' '}
									more for get{' '}
									<span className="font-semibold">
										Free Shipping!!
									</span>
								</p>
								<div className="col gap-2 max-h-full overscroll-auto my-4">
									{cartGroup.map((product) => (
										<div
											key={product.productId}
											className="flex fle-row justify-between w-full"
										>
											<div className="flex flex-row gap-3">
												<div className="w-[72px] h-[90px] relative">
													<Image
														src={product.image}
														alt={product.name}
														fill
														className="object-cover"
													/>
												</div>
												<div className="">
													<p className="text-sm">
														{product.name}
													</p>
													<div className="border border-[#d0d0d0] h-[30px] row mt-2 w-[75px]">
														<button className="w-[25px] center">
															<span>-</span>
														</button>
														<div className="w-[25px] center">
															<p>
																{
																	product
																		.items
																		?.length
																}
															</p>
														</div>
														<button className=" w-[25px] center">
															<span>+</span>
														</button>
													</div>
												</div>
											</div>
											<div className="col items-end gap-2">
												<button
													onClick={() =>
														removeToCart(
															product.productId
														)
													}
												>
													<CloseIcon width={18} />
												</button>
												<p className="text-sm">
													${' '}
													{product.price *
														Number(
															product.items
																?.length
														)}
												</p>
											</div>
										</div>
									))}
								</div>
							</div>
							<div className="col gap-[15px] ">
								<button className="py-[11px] px-6 bg-[#EAEAEB]">
									View Cart
								</button>
								<button className="py-[11px] px-6 bg-black text-white">
									Checkout
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default CartStore;
