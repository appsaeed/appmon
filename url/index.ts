export function toSeoUrl(url: string): string {
    return url
        .toString()
        .normalize("NFD") // Change diacritics
        .replace(/[\u0300-\u036f]/g, "") // Remove illegal characters
        .replace(/\s+/g, "-") // Change whitespace to dashes
        .toLowerCase() // Change to lowercase
        .replace(/&/g, "-and-") // Replace ampersand
        .replace(/[^a-z0-9\\-]/g, "") // Remove anything that is not a letter, number or dash
        .replace(/-+/g, "-") // Remove duplicate dashes
        .replace(/^-*/, "") // Remove starting dashes
        .replace(/-*$/, ""); // Remove trailing dashes
}

/**
 * seo to string
 * @param url
 * @returns
 */
export function seoToString(url: string): string {
    return url
        .toString() // Convert to string
        .replace("-", " ") // Change whitespace to dashes
        .toLowerCase() // Change to lowercase
        .replace("-and-", " and ") // Replace ampersand
        .replace(/-+/g, " ") // Remove duplicate dashes
        .replace(/^-*/, "") // Remove starting dashes
        .replace(/-*$/, "")
        .trim(); // Remove trailing dashes
}

/**
 * reomve slash from last of url or string
 * @param str
 * @returns
 */
export const unslashEnd = (str: string): string => str.replace(/\/$/, "");

export const unslash = (str: string): string => str.replace(/(\/$)|(^\/)/g, "");

/**
 * add slash from last of url or string
 * @param str
 * @returns
 */
export const adslash = (str: string): string => unslash(str).replace(/$/, "/");

/**
 * convart url to plain text
 * @param url
 * @returns
 */
export const urlToString = (url: string): string => {
    return url.toString().replace(/-/g, " ").replace(/\//g, " ").replace(/\\/g, " ");
};
