import { GetJobTypesQuery } from "generated/types";

export enum EJobTypesActionType {
  SET_JOB_TYPES = "@@job-types/SET_JOB_TYPES",
  SET_JOB_TYPE = "@@job-types/SET_JOB_TYPE",
}

export interface IJobTypesState {
  data: GetJobTypesQuery["jobTypes"]["nodes"];
}
