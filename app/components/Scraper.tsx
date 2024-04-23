"use client";

import { useState } from "react";
import useStore from "../hooks/propertyState";
import { scrapeProperty } from "../actions/scrape-properties";

const Scraper = () => {
	const urls = [
		"https://www.airbnb.co.uk/rooms/20669368",
		"https://www.airbnb.co.uk/rooms/50633275",
		"https://www.airbnb.co.uk/rooms/33571268",
	];
	const [isLoading, setIsLoading] = useState(false);
	const rentals = useStore((state: any) => state.rentals);
	const setRentals = useStore((state: any) => state.setRental);

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		setIsLoading(true);

		for (const url of urls) {
			try {
				const rental = await scrapeProperty(url);
				console.log(rental);
				setRentals(rental);
			} catch (err) {
				console.error(err);
			}
			setIsLoading(false);
		}
	};

	return (
		<div className="flex flex-col lg:flex-row w-full item-left gap-3">
			<div className="flex gap-2 flex-2">
				<button
					onClick={handleSubmit}
					className={`cursor-pointer bg-gray-800 w[150px] disabled:bg-gray-400 rounded-md px-5 py-3 text-white`}
				>
					{isLoading ? "Loading..." : "Scrape"}
				</button>
			</div>
		</div>
	);
};

export default Scraper;
