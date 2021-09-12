import { PermitTypes } from "../actionTypes/permitType";
import { PermitsActions, PermitState } from "../types/types";

const initialState: PermitState = {
  error: null,
  pending: false,
  permits: [],
};

const permitReducers = (state = initialState, action: PermitsActions) => {
  switch (action.type) {
    case PermitTypes.FETCH_PERMIT_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case PermitTypes.FETCH_PERMIT_SUCCESS:
      return {
        ...state,
        pending: false,
        permits: action.payload.permits,
        error: null,
      };
    case PermitTypes.FETCT_PERMIT_FAILURE:
      return {
        ...state,
        pending: false,
        permits: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default permitReducers;
