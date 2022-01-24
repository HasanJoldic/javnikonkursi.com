import { GetRegionsQuery } from "generated/types";

export enum ERegionsActionType {
  SET_REGIONS = "@@regions/SET_REGIONS",
}
export interface IRegionsState {
  data: GetRegionsQuery["regions"]["nodes"];
}
