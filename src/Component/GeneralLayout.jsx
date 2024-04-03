/** @format */

import React from "react";
import Nav from "./Nav";
import Stack from "@mui/material/Stack";
import { Outlet } from "react-router-dom";
const GeneralLayout = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        padding: "0px",
        margin: "0px",
        display: "flex",

        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Nav />
      <Stack sx={{ marginTop: "3rem" }}>
        <Outlet />
      </Stack>
    </div>
  );
};

export default GeneralLayout;
