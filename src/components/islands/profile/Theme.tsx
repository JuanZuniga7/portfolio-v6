import { useState, useEffect } from "preact/hooks";
import Sun from "../../../assets/svg/islands/darkMode/Sun";
import Moon from "../../../assets/svg/islands/darkMode/Moon";

export default function Theme() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    if (!isMounted) {
      const theme = localStorage.getItem("theme");
      if (theme === "dark") {
        setIsDarkMode(true);
      }
      setIsMounted(true);
      return;
    }
    if (isDarkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <div
      onClick={() => setIsDarkMode(!isDarkMode)}
      className={`dark:bg-transparent relative w-8 h-8 rounded-full hover:text-white cursor-pointer transition-all duration-500 ${
        isDarkMode ? "rotate-[360deg]" : "rotate-0"
      }`}
    >
      <figure
        className={`scale-90 absolute transition-opacity duration-500 text-gray-500 dark:text-white ${
          isDarkMode ? "opacity-0" : "opacity-100"
        }`}
      >
        <Moon />
      </figure>
      <figure
        className={`scale-90 absolute transition-opacity duration-500 dark:text-yellow-500 text-gray-500 ${
          isDarkMode ? "opacity-100" : "opacity-0"
        }`}
      >
        <Sun />
      </figure>
    </div>
  );
}
