"use server";

import puppeteer from "puppeteer";
import { revalidatePath } from "next/cache";

export async function scrapeProperty(url: string) {
	try {
		// Scrape the rental information
		const browser = await puppeteer.launch({ headless: true });
		const page = await browser.newPage();
		const navigationPromise = page.waitForNavigation({
			waitUntil: "networkidle0",
			timeout: 60000,
		});
		await page.goto(url, { waitUntil: "networkidle0", timeout: 60000 });
		await navigationPromise;

		// Extract rental data from the page
		const rentalData = await page.evaluate(() => {
			const name =
				(
					document.querySelector("h1.hpipapi") as HTMLElement | null
				)?.innerText.trim() || "";
			const type =
				(
					document.querySelector("h2.hpipapi") as HTMLElement | null
				)?.innerText.trim() || "";
			const bedrooms =
				(
					document.querySelector(
						"ol.lgx66tx > li.l7n4lsf:nth-child(2)"
					) as HTMLElement | null
				)?.innerText
					.replace("·", "")
					.trim() || "";
			const bathrooms =
				(
					document.querySelector(
						"ol.lgx66tx > li.l7n4lsf:nth-child(2)"
					) as HTMLElement | null
				)?.innerText
					.replace("·", "")
					.trim() || "";

			// Select all amenities
			const amenitiesElements = document.querySelectorAll("div._19xnuo97");

			// Map through all amenities and return text content
			const amenities = Array.from(amenitiesElements).map((element) => {
				console.log(element);
				return element
					.querySelector("div._19xnuo97 > div.dir-ltr")
					?.textContent?.trim();
			});
			return {
				name,
				type,
				bedrooms,
				bathrooms,
				amenities,
			};
		});

		await browser.close();
		revalidatePath("/");
		return { ...rentalData, url };
	} catch (err) {
		console.error(err);
		return null;
	}
}
