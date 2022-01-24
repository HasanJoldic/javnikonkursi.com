import { GetJobTagsQuery } from "generated/types";

export enum EJobTagsActionType {
  SET_JOB_TAGS = "@@job-tags/SET_JOB_TAGS",
  SET_JOB_TAG = "@@job-tags/SET_JOB_TAG",
}

export interface IJobTagsState {
  data: GetJobTagsQuery["jobTags"]["nodes"];
}
