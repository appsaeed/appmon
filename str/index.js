/**
 * Make first latter uppercase
 */
export const firstUpper = (str) => str.charAt(0).toUpperCase() + str.slice(1);
/**
 *
 * @param str
 * @returns
 */
export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
/**
 * make string looks pretty
 */
export const strLooks = (str) => {
    let _str = str.replace("-", " ");
    if (_str.split(" ").length > 0) {
        _str = _str
            .split(" ")
            .map((text) => firstUpper(text) + " ")
            .toString();
    }
    return _str;
};
export function removeHtml(html) {
    return html
        .toString()
        .replace(/<[^>]*(>|$)|&nbsp;|&zwnj;|&raquo;|&laquo;|&gt;/g, "");
}
