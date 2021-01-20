import { useLocalStorage } from "./useLocalStorage";

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("Light/Dark Mode");
  if (darkMode) {
    return darkMode;
  }
  return darkMode;
};

export default useDarkMode;
