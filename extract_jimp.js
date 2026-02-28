const Jimp = require('jimp');

async function extractColors() {
    try {
        const image = await Jimp.read('../IMG_7551.PNG');
        const colorCounts = {};

        // Resize down to speed up extraction and group similar colors
        image.resize(100, jimp.AUTO);

        image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
            const r = this.bitmap.data[idx + 0];
            const g = this.bitmap.data[idx + 1];
            const b = this.bitmap.data[idx + 2];

            // Round to nearest 10 for grouping
            const rR = Math.round(r / 10) * 10;
            const rG = Math.round(g / 10) * 10;
            const rB = Math.round(b / 10) * 10;

            const hex = '#' +
                rR.toString(16).padStart(2, '0') +
                rG.toString(16).padStart(2, '0') +
                rB.toString(16).padStart(2, '0');

            if (!colorCounts[hex]) {
                colorCounts[hex] = 0;
            }
            colorCounts[hex]++;
        });

        const sortedColors = Object.keys(colorCounts).sort((a, b) => colorCounts[b] - colorCounts[a]);

        console.log('EXTRACTED_COLORS:');
        sortedColors.slice(0, 15).forEach(c => {
            console.log(c + ' (' + colorCounts[c] + 'px)');
        });
    } catch (err) {
        console.error('Error:', err);
    }
}

extractColors();
