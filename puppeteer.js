const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// List of routes to visit and capture
const routes = [
    '/',
    '/elsi/ethics',
    '/elsi/safety',
    '/project/description',
    '/project/experiments',
    '/project/modelling',
    '/project/notebook',
    '/project/results',
    '/team/members',
    '/team/sponsors',
];

(async () => {
    // Launch Puppeteer browser
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Loop through each route
    for (const route of routes) {
        const url = `http://localhost:3000${route}`;
        
        // Visit the page
        await page.goto(url, { waitUntil: 'networkidle2' });

        // Get the page's HTML content
        const html = await page.content();

        // Define the output file name (e.g., /project/description -> project_description.html)
        const outputFileName = route === '/' ? 'index.html' : `${route.replace(/\//g, '_')}.html`;
        const outputPath = path.join(__dirname, 'static', outputFileName);

        // Write the HTML content to a static file
        fs.writeFileSync(outputPath, html, 'utf8');

        console.log(`Captured static file for ${route} -> ${outputFileName}`);
    }

    // Close the browser
    await browser.close();
})();
