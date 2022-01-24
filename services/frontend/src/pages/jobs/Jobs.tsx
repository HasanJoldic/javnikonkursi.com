import React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import moment from "moment";
import _orderBy from "lodash/orderBy";

import { Box, Toolbar, styled, Typography } from "@mui/material";

import { IApplicationState, setIsDrawerOpen } from "store";

import { Main, Drawer } from "components";
import { Job } from "./job";

const Content = styled("main")(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(3),
}));

export const Jobs: React.FC = () => {
  const dispatch = useDispatch();

  const { isDrawerOpen, jobs, regionsFilter, jobTypesFilter, companiesFilter, shouldIncludeExpired } = useSelector(
    (state: IApplicationState) => ({
      isDrawerOpen: state.app.isDrawerOpen,
      jobs: state.jobs.data,
      regionsFilter: state.filters.regions,
      jobTypesFilter: state.filters.jobTypes,
      companiesFilter: state.filters.companies,
      shouldIncludeExpired: state.filters.shouldIncludeExpired,
    }),
    shallowEqual
  );

  const filteredJobs = _orderBy(
    jobs.filter((job) => {
      if (regionsFilter.length && !regionsFilter.includes(job.region.id)) {
        return false;
      }
      if (jobTypesFilter.length && !jobTypesFilter.includes(job.jobType?.id)) {
        return false;
      }
      if (companiesFilter.length && !companiesFilter.includes(job.company.id)) {
        return false;
      }
      if (!shouldIncludeExpired && moment().isAfter(job.endDate)) {
        return false;
      }
      return true;
    }),
    (job) => job._createdAt,
    "desc"
  );

  return (
    <Main>
      <Drawer open={isDrawerOpen} onClose={() => dispatch(setIsDrawerOpen(false))} />
      <Content>
        <Toolbar />
        <Box
          sx={{
            width: {
              xl: "50%",
            },
          }}
        >
          {!filteredJobs.length && <Typography variant="h3">Nema konkursa za date filtere.</Typography>}
          {filteredJobs.map((job) => (
            <Job key={job.id} job={job} />
          ))}
          {filteredJobs.map((job) => (
            <Job key={job.id} job={job} />
          ))}
          {filteredJobs.map((job) => (
            <Job key={job.id} job={job} />
          ))}
          {filteredJobs.map((job) => (
            <Job key={job.id} job={job} />
          ))}
          {filteredJobs.map((job) => (
            <Job key={job.id} job={job} />
          ))}
          {filteredJobs.map((job) => (
            <Job key={job.id} job={job} />
          ))}
          {filteredJobs.map((job) => (
            <Job key={job.id} job={job} />
          ))}
          {filteredJobs.map((job) => (
            <Job key={job.id} job={job} />
          ))}
          {filteredJobs.map((job) => (
            <Job key={job.id} job={job} />
          ))}
        </Box>
      </Content>
    </Main>
  );
};
