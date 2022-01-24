import React from "react";
import { useSelector } from "react-redux";

import { IApplicationState } from "store";

import { IColumn, View } from "../View";
import { jobTagsUrl } from "./Routes";

const columns: IColumn[] = [
  { id: "title", label: "Naziv" },
  { id: "notes", label: "Opis" },
];

export const ViewJobTags: React.FC = () => {
  const jobTags = useSelector((state: IApplicationState) => state.jobTags.data);

  return <View url={jobTagsUrl} data={jobTags} columns={columns} />;
};
