import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { gql, useQuery } from "@apollo/client";

import { ArrayElement } from "@javnikonkursi/shared";

import { GetCompaniesQuery, GetCompaniesQueryVariables } from "generated/types";

import { useApiClient } from "api";

import { ICompaniesState, ECompaniesActionType } from "./types";

export const setCompanies = (data: ICompaniesState["data"]) => ({
  type: ECompaniesActionType.SET_COMPANIES,
  payload: { data },
});

export const setCompany = (id: string, company: ArrayElement<ICompaniesState["data"]>) => ({
  type: ECompaniesActionType.SET_COMPANY,
  payload: { id, company },
});

const GET_COMPANIES = gql`
  query GetCompanies {
    companies {
      nodes {
        id
        url
        title
        region {
          id
          title
        }
        _createdAt
        _updatedAt
      }
    }
  }
`;

export const useGetCompanies = () => {
  const dispatch = useDispatch();
  const apiClient = useApiClient();
  const query = useQuery<GetCompaniesQuery, GetCompaniesQueryVariables>(GET_COMPANIES);
  const companies = query?.data?.companies?.nodes;

  useEffect(() => {
    dispatch(setCompanies(companies));
  }, [dispatch, apiClient, companies]);

  return query;
};
