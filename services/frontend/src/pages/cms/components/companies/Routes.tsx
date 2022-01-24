import React from "react";
import { Route } from "react-router-dom";

import { ENavTab } from "../navTabs";

import { ViewCompanies } from "./ViewCompanies";
import { AddCompany } from "./AddCompany";
import { EditCompany } from "./EditCompany";

export const companiesUrl = ENavTab["Javne ustanove/preduzeca"];

export const CompanyRoutes: React.FC = () => (
  <>
    <Route exact path={`/cms/${companiesUrl}/add`} component={AddCompany} />
    <Route path={`/cms/${companiesUrl}/edit/:id`} component={EditCompany} />
    <Route exact path={`/cms/${companiesUrl}`} component={ViewCompanies} />
  </>
);
