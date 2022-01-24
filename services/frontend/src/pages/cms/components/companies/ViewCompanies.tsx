import React from "react";
import { useSelector } from "react-redux";

import { IApplicationState } from "store";

import { IColumn, View } from "../View";

const columns: IColumn[] = [
  { id: "title", label: "Naziv" },
  { id: "url", label: "URL" },
  { id: "_updatedAt", label: "Azurinano" },
];

export const ViewCompanies: React.FC = () => {
  const companies = useSelector((state: IApplicationState) => state.companies.data);

  return <View url="javne-ustanove-preduzeca" data={companies} columns={columns} />;
};
