import Image from "next/image";
import Scraper from "./components/Scraper";
import Rentals from "./components/Rentals";

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-between px-4 pt-24 lg:px-40 lg:pt-28 xl:px-60">
			<h1 className="absolute w-full text-center bg-gray-800 py-4 text-3xl text-white top-0">
				Web Scraper
			</h1>

			<div className="w-full mb-8">
				<Scraper />
			</div>
			<Rentals />
		</main>
	);
}
