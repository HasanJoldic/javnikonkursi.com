import { SelectOption } from "react-select-material-ui";

export enum EFiltersActionTypes {
  SET_FILTERS = "@@filters/SET_FILTERS",
  UPDATE_FILTERS = "@@filters/UPDATE_FILTERS",
  RESET_FILTERS = "@@filters/RESET_FILTERS",
}

export interface IFiltersState {
  regions: SelectOption[];
  jobTypes: SelectOption[];
  companies: SelectOption[];
  shouldIncludeExpired: boolean;
}
