"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateEncodingAttributes = calculateEncodingAttributes;
const messureText_1 = require("./messureText");
const getBarcodePadding_1 = require("./getBarcodePadding");
const getEncodingHeight_1 = require("./getEncodingHeight");
function calculateEncodingAttributes(encodings, barcodeOptions) {
    return encodings.map(encoding => {
        const options = { ...barcodeOptions, ...encoding.options };
        // Calculate the width of the encoding
        let textWidth;
        if (options.displayValue) {
            textWidth = (0, messureText_1.messureText)(encoding.text, options);
        }
        else {
            textWidth = 0;
        }
        const barcodeWidth = encoding.data.length * options.width;
        return {
            ...encoding,
            width: Math.ceil(Math.max(textWidth, barcodeWidth)),
            height: (0, getEncodingHeight_1.getEncodingHeight)(encoding, options),
            barcodePadding: (0, getBarcodePadding_1.getBarcodePadding)(textWidth, barcodeWidth, options)
        };
    });
}
