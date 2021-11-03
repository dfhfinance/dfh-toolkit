import { darkColors } from "../../theme/colors";

export interface NavThemeType {
  background: string;
}

export const light: NavThemeType = {
  background: "#ECD277",
};

export const dark: NavThemeType = {
  background: darkColors.backgroundAlt,
};
