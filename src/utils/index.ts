import { groupBy, keys, map } from 'ramda';

export const convertCarts = (carts: any[]) => {
	const groupCarts = groupBy(({ id }) => id)(carts);
	const listGroupProduct = map((key: number) => {
		const firstItem = groupCarts?.[key]?.[0] as any;
		return {
			productId: key,
			items: groupCarts[key],
			image: firstItem?.image,
			name: firstItem?.name,
			price: firstItem?.price,
		};
	})(keys(groupCarts));

	return listGroupProduct;
};
