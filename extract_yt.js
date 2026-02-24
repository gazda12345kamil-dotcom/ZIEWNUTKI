const https = require('https');

https.get('https://www.youtube.com/@Ziewnutki', (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
        const searchString = '"externalId":"UC';
        const startIndex = data.indexOf(searchString);
        if (startIndex !== -1) {
            const id = data.substring(startIndex + 14, startIndex + 14 + 24);
            console.log("FOUND_ID: " + id);
        } else {
            console.log("NOT_FOUND");
        }
    });
});
