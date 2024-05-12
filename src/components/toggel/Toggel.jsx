import { useContext } from "react";
import "./toggel.css";
import { ThemeContext } from "../../context";

export default function Toggel() {
  const theme = useContext(ThemeContext);
  const hendleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="toggel">
      <img
        src="https://static-00.iconduck.com/assets.00/sun-icon-512x511-57u646dm.png"
        alt="light"
        className="t-icon"
      />
      <img
        src="https://cdn-icons-png.flaticon.com/512/179/179295.png"
        alt="dark"
        className="t-icon"
      />
      <div
        className="t-button"
        onClick={hendleClick}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></div>
    </div>
  );
}
