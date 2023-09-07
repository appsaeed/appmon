import { RangeOf } from "../types/number";

export declare function uuid(
  _length: number | null,
  prefix: string | null
): string;

export declare function uuidv1(
  _length: RangeOf<0, 36>,
  prefix?: string
): string;

//generate custom uudi with v4
export declare function uuidv4(): string;

/**
 * Get avatar placeholder image by shorts latters
 * uses api: https://github.com/LasseRafn/ui-avatars
 */
export declare function avatar(n: string): string;
