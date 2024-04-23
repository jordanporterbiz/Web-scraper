"use client";
import React from "react";
import useStore from "../hooks/propertyState";

interface Rental {
	name: string;
	url: string;
	type: string;
	bedrooms: string;
	bathrooms: string;
	amenities?: string[];
}

const Rental = () => {
	const rentals = useStore((state: any) => state.rentals);

	if (!rentals.length) {
		return (
			<p className="text-center text-gray-600">
				No Properties displayed. Please Scrape AirBnb Properties.
			</p>
		);
	}

	return (
		<div className="w-full">
			{rentals?.length > 0 ? (
				<div className="space-y-4">
					{rentals?.map((rental: Rental, index: number) =>
						rental?.name ? (
							<div
								key={index}
								className="border-4 border-neutral-200 bg-white p-5 rounded-lg"
							>
								<div className="flex w-full items-top justify-between">
									<h3 className="text-xl font-bold text-gray-800">
										{rental?.name}
									</h3>
									<a
										href={rental?.url}
										target="_blank"
										rel="noopener noreferrer"
										className="hover:bg-gray-100 border px-3 py-1 ml-2 rounded-md h-[35px]"
									>
										📎
									</a>
								</div>

								<p className="text-md font-medium text-gray-600">
									{rental?.type}
								</p>

								<p className="text-md font-medium text-gray-600">
									{rental?.bedrooms}
								</p>

								<p className="text-md font-medium text-gray-600">
									{rental?.bathrooms}
								</p>

								{rental?.amenities?.map((amenity: string, index: number) => (
									<span
										key={index}
										className="p-2 m-1 text-sm bg-purple-700 rounded-lg text-white inline-block"
									>
										{amenity}
									</span>
								))}
							</div>
						) : (
							<p key={rental.url} className="bg-red-600 text-sm text-center">
								Invalid URL for {rental.url}
							</p>
						)
					)}
				</div>
			) : (
				<p className="text-center text-gray-600">
					No Properties displayed. Please Scrape AirBnb Properties.
				</p>
			)}
		</div>
	);
};

export default Rental;
