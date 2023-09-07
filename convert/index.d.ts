export declare function formatPrice(price: number | string): number;

export declare function currencyToSymbol(
  currency: string,
  language: string
): string;

export declare function objectToStr(message: any): string;

export declare function errorToString(error: any): string;

export declare function rgbToHex(
  red: number | string,
  green: number | string,
  blue: number | string
): string;

export declare function hexToRgb(hex: string): {
  red: number;
  green: number;
  blue: number;
} | null;
