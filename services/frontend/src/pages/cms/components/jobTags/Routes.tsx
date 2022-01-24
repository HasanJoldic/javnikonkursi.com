import React from "react";
import { Route } from "react-router-dom";

import { ENavTab } from "../navTabs";

import { ViewJobTags } from "./ViewJobTags";
import { AddJobTag } from "./AddJobTag";
import { EditJobTag } from "./EditJobTag";

export const jobTagsUrl = ENavTab["Oznake poslova"];

export const JobTagRoutes: React.FC = () => (
  <>
    <Route exact path={`/cms/${jobTagsUrl}/add`} component={AddJobTag} />
    <Route exact path={`/cms/${jobTagsUrl}/edit/:id`} component={EditJobTag} />
    <Route exact path={`/cms/${jobTagsUrl}`} component={ViewJobTags} />
  </>
);
