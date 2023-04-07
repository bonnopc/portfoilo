import { useTheme } from "@/contexts/ThemeProvider";
import DarkModeIcon from "@/assets/icons/dark_mode.svg";
import LightModeIcon from "@/assets/icons/light_mode.svg";
import IconButton, { IIconButtonProps } from "../IconButton";

export interface IThemeSwitchProps extends Omit<IIconButtonProps, "aria-label"> {}

export default function ThemeSwitch(props: IThemeSwitchProps) {
  const { theme, handleTheme } = useTheme();

  //   return (
  //     <Switch
  //       checked={theme === "dark"}
  //       onChange={(val) => {
  //         handleTheme!(val ? "dark" : "light");
  //       }}
  //       size="lg"
  //       icons={{ checked: <LightModeIcon />, unchecked: <DarkModeIcon /> }}
  //     />
  //   );

  return (
    <IconButton
      onClick={() => {
        handleTheme!(theme === "light" ? "dark" : "light");
      }}
      aria-label="Toggle dark mode"
      {...props}
    >
      {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
}
