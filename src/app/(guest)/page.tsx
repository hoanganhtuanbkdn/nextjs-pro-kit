import Image from 'next/image';
import Products from './home/Product';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col ">
			<Products />
		</main>
	);
}
