"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Barcode = void 0;
const react_native_svg_1 = __importStar(require("react-native-svg"));
const jsbarcode_1 = __importDefault(require("jsbarcode"));
const components_1 = require("./components");
const services_1 = require("./services");
const defaultOptions_1 = __importDefault(require("./defaultOptions"));
const Barcode = ({ value, options, rotation }) => {
    const barcode = {};
    (0, jsbarcode_1.default)(barcode, value, options);
    const encodings = barcode.encodings;
    const mergedOptions = { ...defaultOptions_1.default, ...options };
    const measuredEncoding = (0, services_1.calculateEncodingAttributes)(encodings, mergedOptions);
    const totalWidth = (0, services_1.getTotalWidthOfEncodings)(measuredEncoding);
    const maxHeight = (0, services_1.getMaximumHeightOfEncodings)(measuredEncoding);
    const width = totalWidth + mergedOptions.marginLeft + mergedOptions.marginRight;
    const xs = [mergedOptions.marginLeft];
    measuredEncoding.forEach(e => xs.push(xs[xs.length - 1] + e.width));
    return (<react_native_svg_1.default width={width} height={maxHeight} rotation={rotation} style={{ backgroundColor: mergedOptions.background }}>
      {measuredEncoding.map((encoding, i) => {
            const encodingOptions = { ...mergedOptions, ...encoding.options };
            return (<react_native_svg_1.G key={i} x={xs[i]} y={encodingOptions.marginTop} fill={encodingOptions.lineColor}>
            <components_1.BarcodeChunk binary={encoding.data} padding={encoding.barcodePadding} options={encodingOptions}/>
            <components_1.BarcodeText text={encoding.text} width={encoding.width} padding={encoding.barcodePadding} options={encodingOptions}/>
          </react_native_svg_1.G>);
        })}
    </react_native_svg_1.default>);
};
exports.Barcode = Barcode;
