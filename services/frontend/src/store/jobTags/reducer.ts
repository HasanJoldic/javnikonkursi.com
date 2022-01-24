import { Reducer } from "redux";

import { EJobTagsActionType, IJobTagsState } from "./types";
import { setJobTags, setJobTag } from "./actions";

const INITIAL_STATE: IJobTagsState = {
  data: [],
};

const reducer: Reducer<IJobTagsState> = (state = INITIAL_STATE, action): IJobTagsState => {
  switch (action.type) {
    case EJobTagsActionType.SET_JOB_TAGS: {
      const { data } = (action as ReturnType<typeof setJobTags>).payload;
      return { ...INITIAL_STATE, data: data || [] };
    }

    case EJobTagsActionType.SET_JOB_TAG: {
      const { id, jobTag } = (action as ReturnType<typeof setJobTag>).payload;
      const newData = state.data.filter((c) => c.id === id);
      if (jobTag) {
        newData.push(jobTag);
      }
      return { ...INITIAL_STATE, data: newData };
    }

    default:
      return state;
  }
};

export default reducer;
