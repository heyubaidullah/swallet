const Tesseract = require('tesseract.js');

async function processCheckImage(imagePath) {
    const result = await Tesseract.recognize(imagePath, 'eng');
    return result.data.text; // Extracted text
}
