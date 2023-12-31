/**
 * Make first latter uppercase
 */
export const firstUpper = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);

/**
 *
 * @param str
 * @returns
 */
export const capitalize = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);

/**
 * make string looks pretty
 */
export const strLooks = (str: string) => {
    let _str: string = str.replace("-", " ");
    if (_str.split(" ").length > 0) {
        _str = _str
            .split(" ")
            .map((text) => firstUpper(text) + " ")
            .toString();
    }
    return _str;
};

export function removeHtml(html: string) {
    return html.toString().replace(/<[^>]*(>|$)|&nbsp;|&zwnj;|&raquo;|&laquo;|&gt;/g, "");
}

/**
 * @function stringToMillisecond
 * @param cssDuration
 * @returns {number}
 */
export function stringToMillisecond(cssDuration: string | number = "1s"): number {
    const duration = String(cssDuration);
    const numericValue = parseFloat(duration);
    const unit = duration.match(/[a-z]+/)?.toString();
    if (unit == "s") {
        return numericValue * 1000;
    } else if (unit == "ms") {
        return numericValue;
    } else {
        return numericValue;
    }
}
