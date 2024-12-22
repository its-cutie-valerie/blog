import React, { useState, useEffect } from "react";

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    if (prefersDark.matches) {
      document.body.classList.add("dark-mode");
      setDarkMode(true);
    }
  }, []);

  const handleToggle = () => {
    if (!darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    setDarkMode(!darkMode);
  };

  return (
    <header>
      <h1>Val the Nerdy gal</h1>
      <button onClick={handleToggle}>Toggle Dark Mode</button>
    </header>
  );
}

export default Header;
