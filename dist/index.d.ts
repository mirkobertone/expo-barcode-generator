import type { BarcodeOptions } from './types';
export interface BarcodeProps {
    value: string;
    options?: BarcodeOptions;
    rotation?: number;
}
export declare const Barcode: ({ value, options, rotation }: BarcodeProps) => import("react").JSX.Element;
