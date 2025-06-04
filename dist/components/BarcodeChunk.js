"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarcodeChunk = void 0;
const react_native_svg_1 = require("react-native-svg");
const getBarsFromBinary_1 = require("../services/getBarsFromBinary");
const BarcodeChunk = ({ binary, padding, options }) => {
    const bars = (0, getBarsFromBinary_1.getBarsFromBinary)(binary, options.width);
    const y = options.textPosition == 'top' ? options.fontSize + options.textMargin : 0;
    return (<react_native_svg_1.G x={padding}>
      {bars.map((bar, i) => (<react_native_svg_1.Rect key={i} x={bar.x} y={y} width={bar.width} height={options.height}/>))}
    </react_native_svg_1.G>);
};
exports.BarcodeChunk = BarcodeChunk;
