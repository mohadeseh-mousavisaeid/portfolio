import { useThemeContext } from "../context/ThemeContext";

const BgColors = ({ className }) => {
  const { themeHandler } = useThemeContext();

  return (
    <button
      className={className}
      onClick={() => themeHandler(className)}
    ></button>
  );
};

export default BgColors;
