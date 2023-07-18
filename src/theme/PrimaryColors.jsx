import { useThemeContext } from "../context/ThemeContext";

const PrimaryColors = ({ className }) => {
  const { themeHandler } = useThemeContext();
  return (
    <button
      className={className}
      onClick={() => themeHandler(className)}
    ></button>
  );
};

export default PrimaryColors;
