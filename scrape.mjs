import scrape from 'website-scraper';

class LogPlugin {
    apply(registerAction) {
        registerAction('beforeRequest', async ({ resource, requestOptions }) => {
            console.log('Downloading:', resource.url);
            return { requestOptions };
        });
        registerAction('afterResponse', async ({ response }) => {
            return response;
        });
    }
}

const options = {
    urls: ['https://southcoastepoxyflooring.com/'],
    directory: './site_export',
    recursive: true,
    maxDepth: 2, // reduced depth
    requestConcurrency: 3, // avoid overwhelming
    filenameGenerator: 'bySiteStructure',
    urlFilter: function (url) {
        if (url.includes('wp-json')) return false;
        return url.includes('southcoastepoxyflooring.com');
    },
    subdirectories: [
        { directory: 'images', extensions: ['.jpg', '.png', '.svg', '.gif', '.jpeg', '.webp'] },
        { directory: 'js', extensions: ['.js'] },
        { directory: 'css', extensions: ['.css'] },
        { directory: 'fonts', extensions: ['.woff', '.ttf', '.woff2', '.eot'] }
    ],
    plugins: [new LogPlugin()]
};

scrape(options).then((result) => {
    console.log("Website scraped successfully. Ready to move to HighLevel.");
}).catch((err) => {
    console.error("Error scraping website", err);
});
