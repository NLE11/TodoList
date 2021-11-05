import React, { useEffect } from "react";
//import { useState } from "react"; // No longer needed
import { useResource } from "react-request-hook";
import { NavDropdown } from "react-bootstrap";

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
  //const [themes, setThemes] = useState([]); // No longer need this because the state is now being managed bby Resource

  // useEffect(() => {
  //   fetch("/api/themes") // Go to setupServer to get the Path
  //     .then((result) => result.json()) // Get the string and transform it into json object
  //     .then((themes) => setThemes(themes)); // Then call Setthemes to pass that json object. The "themes" here is not the "themes" in useState.
  // }, []);

  const [themes, getThemes] = useResource(() => ({
    url: "/themes",
    method: "get",
  }));

  // eslint-disable-next-line
  useEffect(getThemes, []); // Once useEffect invoke getThemes, the response is present in the "themes" variable

  const { data, isLoading } = themes;

  function isActive(t) {
    // Take the current theme and check to see which theme is currently active
    return (
      t.primaryColor === theme.primaryColor &&
      t.secondaryColor === theme.secondaryColor
    );
  }
  return (
    // isLoading check if the data is actually present before execution
    <>
      {isLoading && "Loading themes..."}
      <NavDropdown title="ChangeTheme" id="basic-nav-dropdown">
        {/* Add NavDropdown here */}
        {data &&
          data.map((t, i) => (
            <NavDropdown.Item>
              <ThemeItem
                key={"theme-" + i}
                theme={t}
                active={isActive(t)}
                onClick={() => setTheme(t)}
              />
            </NavDropdown.Item>
          ))}{" "}
      </NavDropdown>
    </>
  );
}
