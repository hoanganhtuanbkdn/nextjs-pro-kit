import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type CartStoreType = {
	carts: any[];
	addToCart: (product: any) => void;
	removeToCart: (productId: number) => void;
};

export const useCartStore = create(
	persist<CartStoreType>(
		(set, get) => ({
			carts: [],
			profile: null,
			addToCart: (item: any) =>
				set((state) => ({ carts: [item, ...state.carts] })),
			removeToCart: (productId: number) => {
				set((state) => ({
					carts: state.carts.filter(
						(item) => Number(item.id) !== Number(productId)
					),
				}));
			},
		}),
		{
			name: 'cart-storage', // unique name
			storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
		}
	)
);
