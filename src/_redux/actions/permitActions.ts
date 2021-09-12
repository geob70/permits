import { PermitTypes } from "../actionTypes/permitType";
import {
  FetchPermitFailure,
  FetchPermitsFailurePayload,
  FetchPermitRequest,
  FetchPermitSuccess,
  FetchPermitsSuccessPayload,
} from "../types/types";

export const fetchPermitsRequest = (): FetchPermitRequest => ({
  type: PermitTypes.FETCH_PERMIT_REQUEST,
});

export const fetchPermitsSuccess = (
  payload: FetchPermitsSuccessPayload
): FetchPermitSuccess => ({
  type: PermitTypes.FETCH_PERMIT_SUCCESS,
  payload,
});

export const fetchPermitsFailure = (
  payload: FetchPermitsFailurePayload
): FetchPermitFailure => ({
  type: PermitTypes.FETCT_PERMIT_FAILURE,
  payload,
});
