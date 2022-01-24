import React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { SelectOption } from "react-select-material-ui";

import {
  Box,
  Hidden,
  Divider,
  Drawer as MuiDrawer,
  DrawerProps,
  Toolbar,
  Switch,
  FormGroup,
  FormControlLabel,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import { IApplicationState, updateFilters } from "store";

import { MultipleSearchSelectInput } from "components";

import { drawerWidth } from "./utils";

export const DrawerComponent = styled(MuiDrawer)(() => ({
  minWidth: drawerWidth,
  maxWidth: "75vw",
  "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
}));

export const DrawerContainer: React.FC<DrawerProps> = ({ children, ...props }) => {
  const theme = useTheme();

  return (
    <>
      <Hidden mdUp>
        <DrawerComponent {...props} variant="temporary" ModalProps={{ keepMounted: true }}>
          {children}
        </DrawerComponent>
      </Hidden>
      <Hidden smDown>
        <DrawerComponent {...props} variant="permanent" open>
          <Toolbar sx={{ backgroundColor: theme.palette.primary.main }} />
          <Divider />
          {children}
        </DrawerComponent>
      </Hidden>
    </>
  );
};

export const Drawer: React.FC<DrawerProps> = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const { regions, jobTypes, companies, regionsFilter, jobTypesFilter, companiesFilter, shouldIncludeExpired } =
    useSelector(
      (state: IApplicationState) => ({
        regions: state.regions.data,
        jobTypes: state.jobTypes.data,
        companies: state.companies.data,
        regionsFilter: state.filters.regions,
        jobTypesFilter: state.filters.jobTypes,
        companiesFilter: state.filters.companies,
        shouldIncludeExpired: state.filters.shouldIncludeExpired,
      }),
      shallowEqual
    );

  const [regionOptions, setRegionOptions] = React.useState<SelectOption[]>([]);
  const [jobTypeOptions, setJobTypeOptions] = React.useState<SelectOption[]>([]);
  const [companyOptions, setCompanyOptions] = React.useState<SelectOption[]>([]);

  React.useEffect(() => {
    setRegionOptions(
      regions.map((region) => ({
        label: region.title,
        value: region.id,
      }))
    );
  }, [setRegionOptions, regions]);

  React.useEffect(() => {
    setJobTypeOptions(
      jobTypes.map((jobTypes) => ({
        label: jobTypes.title,
        value: jobTypes.id,
      }))
    );
  }, [setJobTypeOptions, jobTypes]);

  React.useEffect(() => {
    setCompanyOptions(
      companies.map((company) => ({
        label: company.title,
        value: company.id,
      }))
    );
  }, [setCompanyOptions, companies]);

  return (
    <DrawerContainer open={open} onClose={onClose}>
      <Box p={1} display="grid" rowGap="20px">
        <FormGroup row>
          <FormControlLabel
            control={
              <Switch
                checked={shouldIncludeExpired}
                onChange={(_event, checked) => {
                  dispatch(updateFilters({ shouldIncludeExpired: checked }));
                }}
                color="primary"
              />
            }
            label="Istekli konkursi"
          />
        </FormGroup>
        <MultipleSearchSelectInput
          label="Regija"
          options={regionOptions}
          values={regionsFilter}
          onChange={(value) => dispatch(updateFilters({ regions: value || [] }))}
          fullWidth
        />
        <MultipleSearchSelectInput
          label="Vrsta posla"
          options={jobTypeOptions}
          values={jobTypesFilter}
          onChange={(value) => dispatch(updateFilters({ jobTypes: value || [] }))}
        />
        <MultipleSearchSelectInput
          label="Javna ustanova/preduzeće"
          options={companyOptions}
          values={companiesFilter}
          onChange={(value) => dispatch(updateFilters({ companies: value || [] }))}
          fullWidth
        />
      </Box>
    </DrawerContainer>
  );
};
