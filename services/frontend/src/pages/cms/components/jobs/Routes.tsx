import React from "react";
import { Route } from "react-router-dom";

import { ENavTab } from "../navTabs";

import { ViewJobs } from "./ViewJobs";
import { AddJob } from "./AddJob";
import { EditJob } from "./EditJob";

export const jobsUrl = ENavTab["Javni konkursi"];

export const JobRoutes: React.FC = () => (
  <>
    <Route exact path={`/cms/${jobsUrl}/add`} component={AddJob} />
    <Route exact path={`/cms/${jobsUrl}/edit/:id`} component={EditJob} />
    <Route exact path={`/cms/${jobsUrl}`} component={ViewJobs} />
  </>
);
