import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Container } from "reactstrap";
import Toggle from "react-toggle";
import "bootstrap/dist/css/bootstrap.min.css";

import "./layout.scss";

import sun from "../assets/sun.png";
import moon from "../assets/moon.png";

const Layout = ({ children }) => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    window.__onThemeChange = () => {
      setTheme(window.__theme);
    };

    setTheme(window.__theme);
  }, []);

  return (
    <div className="bg-color h-100 d-flex flex-column" style={{
      transition: 'color 0.5s ease-out, background 0.2s ease-out'
    }}>
      <div className="top-nav">
        <div className="w-100 d-flex justify-content-end align-items-center py-3 pr-5" style={{minHeight:56}}>
          {theme !== null && (
            <Toggle
              checked={theme === "dark"}
              onChange={(e) => {
                window.__setPreferredTheme(e.target.checked  ? "dark" : "light");
              }}
              icons={{
                unchecked: (
                  <img
                    alt="sun"
                    src={sun}
                    width="16"
                    height="16"
                    role="presentation"
                    style={{ pointerEvents: "none" }}
                  />
                ),
                checked: (
                  <img
                    alt="moon"
                    src={moon}
                    width="16"
                    height="16"
                    role="presentation"
                    style={{ pointerEvents: "none" }}
                  />
                )
              }}
            />
          )}
        </div>
      </div>
      <Container className="flex-fill d-flex flex-column">{children}</Container>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
