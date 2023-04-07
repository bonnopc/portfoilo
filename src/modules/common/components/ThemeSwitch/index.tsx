import { useTheme } from "@/contexts/ThemeProvider";
import DarkModeIcon from "@/assets/icons/dark_mode.svg";
import LightModeIcon from "@/assets/icons/light_mode.svg";
import IconButton, { IIconButtonProps } from "../IconButton";

export interface IThemeSwitchProps extends Omit<IIconButtonProps, "aria-label"> {}

export default function ThemeSwitch({ onClick, ...restProps }: IThemeSwitchProps) {
  const { theme, handleTheme } = useTheme();

  return (
    <IconButton
      onClick={(e) => {
        handleTheme!(theme === "light" ? "dark" : "light");
        if (onClick) onClick(e);
      }}
      aria-label="Toggle dark mode"
      {...restProps}
    >
      {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
}
