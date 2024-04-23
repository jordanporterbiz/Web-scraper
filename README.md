## Overview

This project is a web scraper built with TypeScript, Next.js, and Puppeteer. It provides a simple and efficient way to scrape data from websites, making it suitable for various scraping tasks such as data collection & web monitoring.

## Technologies used

- **TypeScript**: Utilises TypeScript for static typing and enhanced developer experience.
- **Next.js**: Built on top of Next.js for server-side rendering and integration with React components.
- **Puppeteer**: Employs Puppeteer, a Node library, for controlling headless Chrome or Chromium, enabling scraping of dynamic websites.

## Installation

1. Clone the repository:

    ```bash
    git clone 
    ```

2. Install dependencies:

    ```bash
    cd rental-web-scraper
    npm install
    ```

3. Start the development server:

    ```bash
    npm run dev
    ```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to access the web scraper application.

## Usage

1. Define the URLs you want to scrape in the `urls` array within the project. This has been predefined for the purposes of the assignment. 
2. Customise the scraping logic in the provided TypeScript files (`Scraper.ts`, `scrape-rentals.ts`, etc.) to suit any specific scraping requirements.
3. Run the scraping script by running the project & executing it using the 'Scrape' button.
4. View the scraped data on a frontend. 


## Future Considarations 

I allocated 3hrs to this test. I started with a prototype Node JS app to rapidly test puppeteer. Once I was satisfied with it's functionality, the solution evolved into the full stack solution submitted to Travelnest. Future considerations to turn this solution into an enterprise grade application include:

1. Using Cloud infrastructure to explore distributed or parallel processing techniques to increase throughput and to speed up scraping tasks.
2. The addition of an IP address rotator. This will aid in avoiding IP blocking mechanisms from websites as well as improving scalability and redundancy.  
3. Log errors to a central logging system for monitoring and debugging purposes.
4. Include unit tests to test scraping functionality works as intended.
5. Improve the application's ability to handle changes in website layouts without breaking the scraping logic.
6. Include a search bar to allow scraping of any AirBnB URL the user wishes. 


## Areas of Improvement

Having allocated a small amount of time to complete this application, I cut a few corners in favour of speed. The areas of improvement are as follows:

1. Replace 'any' keyword with explicitly typed interfaces for stronger type checks. 
2. Extract type definitions to a separate file.
3. To eliminate any loading times, URLs can be processed concurrently by using Promise.all() to scrape all URLs concurrently. The state is updated only once all requests are completed.


## License

This project is licensed under the MIT License.

## Contact

For any inquiries or feedback, please contact [Jordan Porter](mailto:jordanporter94@outlook.com).

