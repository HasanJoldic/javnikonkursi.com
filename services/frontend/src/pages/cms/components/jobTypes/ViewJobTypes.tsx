import React from "react";
import { useSelector } from "react-redux";

import { IApplicationState } from "store";

import { IColumn, View } from "../View";

const columns: IColumn[] = [
  { id: "title", label: "Naziv" },
  { id: "notes", label: "Opis" },
];

export const ViewJobTypes: React.FC = () => {
  const jobTypes = useSelector((state: IApplicationState) => state.jobTypes.data);

  return <View url="vrste-poslova" data={jobTypes} columns={columns} />;
};
