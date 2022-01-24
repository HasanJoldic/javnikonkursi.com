import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { gql, useQuery } from "@apollo/client";

import { ArrayElement } from "@javnikonkursi/shared";

import { GetJobsQuery, GetJobsQueryVariables } from "generated/types";

import { useApiClient } from "api";

import { IJobsState, EJobsActionType } from "./types";

export const setJobs = (data: IJobsState["data"]) => ({
  type: EJobsActionType.SET_JOBS,
  payload: { data },
});

export const setJob = (id: string, job: ArrayElement<IJobsState["data"]>) => ({
  type: EJobsActionType.SET_JOB,
  payload: { id, job },
});

const GET_JOBS = gql`
  query GetJobs {
    jobs {
      nodes {
        id
        title
        startDate
        endDate
        jobType {
          id
          title
        }
        region {
          id
          title
        }
        externalUrl
        internalUrl
        company {
          id
          title
        }
        _createdAt
        _updatedAt
      }
    }
  }
`;

export const useGetJobs = () => {
  const dispatch = useDispatch();
  const apiClient = useApiClient();

  const query = useQuery<GetJobsQuery, GetJobsQueryVariables>(GET_JOBS);
  const jobs = query?.data?.jobs?.nodes;

  useEffect(() => {
    dispatch(setJobs(jobs));
  }, [dispatch, apiClient, jobs]);

  return query;
};
