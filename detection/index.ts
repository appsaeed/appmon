type ThemeType = "dark" | "light" | "auto";

/**
 * detect device dark schema
 * @returns {boolean}
 */
export const isDark = (): boolean =>
  window.matchMedia("(prefers-color-scheme: dark)").matches;

/**
 *@method deviceTheme
 */
export const deviceTheme = (): ThemeType => {
  if (isDark()) {
    return "dark";
  }
  return "light";
};
