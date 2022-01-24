import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { gql, useQuery } from "@apollo/client";
import { GetRegionsQuery, GetRegionsQueryVariables } from "generated/types";

import { useApiClient } from "api";

import { IRegionsState, ERegionsActionType } from "./types";

export const setRegions = (data: IRegionsState["data"]) => ({
  type: ERegionsActionType.SET_REGIONS,
  payload: { data },
});

const GET_REGIONS = gql`
  query GetRegions {
    regions {
      nodes {
        id
        title
      }
    }
  }
`;

export const useGetRegions = () => {
  const dispatch = useDispatch();
  const apiClient = useApiClient();
  const query = useQuery<GetRegionsQuery, GetRegionsQueryVariables>(GET_REGIONS);
  const regions = query?.data?.regions?.nodes;

  useEffect(() => {
    dispatch(setRegions(regions));
  }, [dispatch, apiClient, regions]);

  return query;
};
