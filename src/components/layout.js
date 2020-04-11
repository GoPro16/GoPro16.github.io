import React, { useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";
import { Container, Util, Navbar } from "reactstrap";
import Toggle from "react-toggle";
import "bootstrap/dist/css/bootstrap.min.css";
import ThemeProvider from "./theme";

import "./layout.css";

import sun from "../assets/sun.png";
import moon from "../assets/moon.png";

const Layout = ({ children }) => (
  <ThemeProvider>
    {({ theme, cssModule, changeTheme }) => (
      <div className={Util.mapToCssModules("bg-color h-100 d-flex flex-column", cssModule)}>
        <div className={`nav-${theme}`}>
          <div className="w-100 d-flex justify-content-end align-items-center py-3 pr-5">
            <Toggle
              checked={theme === "dark"}
              onChange={changeTheme}
              icons={{
                unchecked: (
                  <img
                    src={sun}
                    width="16"
                    height="16"
                    role="presentation"
                    style={{ pointerEvents: "none" }}
                  />
                ),
                checked: (
                  <img
                    src={moon}
                    width="16"
                    height="16"
                    role="presentation"
                    style={{ pointerEvents: "none" }}
                  />
                )
              }}
            />
          </div>
        </div>
        <Container className="flex-fill d-flex flex-column" cssModule={cssModule}>
          {children}
        </Container>
      </div>
    )}
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
