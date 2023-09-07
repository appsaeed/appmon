/**
 * detect device dark schema
 * @returns {boolean}
 */
export const isDark = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
/**
 *@method deviceTheme
 */
export const deviceTheme = () => {
    if (isDark()) {
        return "dark";
    }
    return "light";
};
