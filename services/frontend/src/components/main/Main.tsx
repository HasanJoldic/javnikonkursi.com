import React from "react";
import { useDispatch } from "react-redux";
import _orderBy from "lodash/orderBy";

import { Box, CssBaseline } from "@mui/material";

import { useGetCompanies, useGetJobs, useGetJobTypes, useGetJobTags, setIsDrawerOpen, useGetRegions } from "store";

import { AppBar } from "components";

interface IProps {
  noMenu?: boolean;
}

export const Main: React.FC<IProps> = ({ noMenu, children }) => {
  const dispatch = useDispatch();

  useGetRegions();
  useGetCompanies();
  useGetJobs();
  useGetJobTypes();
  useGetJobTags();

  return (
    <Box display="flex" minHeight="100vh">
      <CssBaseline />
      <AppBar onMenuClick={() => dispatch(setIsDrawerOpen(true))} noMenu={noMenu} />
      {children}
    </Box>
  );
};
