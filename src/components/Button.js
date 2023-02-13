import "../App.css";
import { useTheme } from "../ThemeContext";

const Button = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <label className="button">
            <input
                type="checkbox"
                checked={theme === "light"}
                onChange={toggleTheme}
            />
            <span className="slider round" />
        </label>
    );
};

export default Button;
