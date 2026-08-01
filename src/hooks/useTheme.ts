import { useEffect, useState } from "react";

export const useTheme = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark",
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);

    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return {
    darkMode,
    toggleTheme,
  };
};
