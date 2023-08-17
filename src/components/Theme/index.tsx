import { useEffect, FC, KeyboardEvent } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { RootState } from "../../types/state";
import { Brightness4, Brightness7 } from "@mui/icons-material";

import { set } from "../../store/theme-slice";
import classes from "./index.module.scss";

const Theme: FC = () => {
  const theme = useAppSelector((state: RootState) => state.theme.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleChange = () => dispatch(set(theme === "dark" ? "light" : "dark"));

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === "Enter") {
      handleChange();
    }
  };

  return (
    <div
      className={classes.switch}
      onClick={handleChange}
      onKeyDown={handleKeyDown}
      aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
      tabIndex={0}>
      <p className={classes.text}>
        <span className={classes.text}>Switch theme</span>
        <span className={classes.icon}>
          {theme === "dark" ? <Brightness7 sx={{ fontSize: "1.6rem" }} /> : <Brightness4 sx={{ fontSize: "1.6rem" }} />}
        </span>
      </p>
    </div>
  );
};

export default Theme;
