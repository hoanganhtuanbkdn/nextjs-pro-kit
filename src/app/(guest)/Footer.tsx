import React from 'react';

export default function Footer() {
	return (
		<>
			<div className="w-full border-y-[#DEDCDC] border-y  ">
				<div className="container mx-auto flex flex-col items-center py-[54px]">
					<p className="text-4xl  mb-5">Subscribe newsletter</p>
					<p className="mb-6 text-[#666666] text-lg">
						Subscribe Now and get more offers
					</p>
					<div className="flex flex-row gap-4 ">
						<input className="border border-[#27272740] p-[10px] text-2xl w-[460px] " />
						<button className="bg-black p-[10px] text-white">
							Subscribe Now
						</button>
					</div>
				</div>
			</div>
			<div className=" flex py-4 items-center justify-center">
				<p>
					Designed by :{' '}
					<span className="font-semibold">Wpignite</span>
				</p>
			</div>
		</>
	);
}
