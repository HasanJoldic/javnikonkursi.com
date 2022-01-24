import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { gql, useQuery } from "@apollo/client";

import { ArrayElement } from "@javnikonkursi/shared";

import { GetJobTypesQuery, GetJobTypesQueryVariables } from "generated/types";

import { useApiClient } from "api";

import { IJobTypesState, EJobTypesActionType } from "./types";

export const setJobTypes = (data: IJobTypesState["data"]) => ({
  type: EJobTypesActionType.SET_JOB_TYPES,
  payload: { data },
});

export const setJobType = (id: string, jobType: ArrayElement<IJobTypesState["data"]>) => ({
  type: EJobTypesActionType.SET_JOB_TYPE,
  payload: { id, jobType },
});

const GET_JOB_TYPES = gql`
  query GetJobTypes {
    jobTypes {
      nodes {
        id
        title
        notes
      }
    }
  }
`;

export const useGetJobTypes = () => {
  const dispatch = useDispatch();
  const apiClient = useApiClient();

  const query = useQuery<GetJobTypesQuery, GetJobTypesQueryVariables>(GET_JOB_TYPES);
  const jobTypes = query?.data?.jobTypes?.nodes;

  useEffect(() => {
    dispatch(setJobTypes(jobTypes));
  }, [dispatch, apiClient, jobTypes]);

  return query;
};
