import React from "react";
import { Route } from "react-router-dom";

import { ENavTab } from "../navTabs";

import { ViewJobTypes } from "./ViewJobTypes";
import { AddJobType } from "./AddJobType";
import { EditJobType } from "./EditJobType";

export const jobTypesUrl = ENavTab["Vrste poslova"];

export const JobTypeRoutes: React.FC = () => (
  <>
    <Route exact path={`/cms/${jobTypesUrl}/add`} component={AddJobType} />
    <Route exact path={`/cms/${jobTypesUrl}/edit/:id`} component={EditJobType} />
    <Route exact path={`/cms/${jobTypesUrl}`} component={ViewJobTypes} />
  </>
);
