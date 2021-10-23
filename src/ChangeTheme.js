import React, { useState, useEffect } from "react";

// const THEMES = [
//   { primaryColor: "deepskyblue", secondaryColor: "coral" },
//   { primaryColor: "orchid", secondaryColor: "mediumseagreen" },
// ];

function ThemeItem({ theme, active, onClick }) {
  return (
    <span
      onClick={onClick}
      style={{
        cursor: "pointer",
        paddingLeft: 8,
        fontWeight: active ? "bold" : "normal",
      }}
    >
      <span style={{ color: theme.primaryColor }}>Primary</span> /
      <span style={{ color: theme.secondaryColor }}>Secondary</span>
    </span>
  );
}

export default function ChangeTheme({ theme, setTheme }) {
  const [themes, setThemes] = useState([]);

  useEffect(() => {
    fetch("/api/themes") // Go to setupServer to get the Path
      .then((result) => result.json()) // Get the string and transform it into json object
      .then((themes) => setThemes(themes)); // Then call Setthemes to pass that json object
  }, []);
  function isActive(t) {
    // Take the current theme and check to see which theme is currently active
    return (
      t.primaryColor === theme.primaryColor &&
      t.secondaryColor === theme.secondaryColor
    );
  }
  return (
    <div>
      Change theme:
      {themes.map((t, i) => (
        <ThemeItem
          key={"theme-" + i}
          theme={t}
          active={isActive(t)}
          onClick={() => setTheme(t)}
        />
      ))}{" "}
    </div>
  );
}
