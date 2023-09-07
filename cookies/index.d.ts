export declare function setCookie(
  cname: string,
  cvalue: string,
  exdays: number,
  path?: string
): void;

export declare function getCookie(cname: string): string | null;

export declare function hasCookie(name: string): boolean;
