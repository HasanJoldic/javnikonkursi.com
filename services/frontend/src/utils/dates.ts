import moment from "moment";

export enum EDateFormat {
  // 27.10.2020
  "DD.MM.YYYY" = "DD.MM.YYYY",
  // 27.10.2020 16:21:23
  "DD.MM.YYYY HH:mm:ss" = "DD.MM.YYYY HH:mm:ss",
}

export const momentFormat = (date: string, format: EDateFormat) => {
  const momentObj = moment(date);
  if (!momentObj.isValid()) return "";
  return momentObj.format(format);
};
