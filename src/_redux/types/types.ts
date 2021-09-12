import { IPermit } from "../../models/IPermit";
import { PermitTypes } from "../actionTypes/permitType";

export interface PermitState {
  pending: boolean;
  permits: IPermit[];
  error: string | null;
}

export interface FetchPermitsSuccessPayload {
  permits: IPermit[];
}

export interface FetchPermitsFailurePayload {
  error: string;
}

export interface FetchPermitRequest {
  type: typeof PermitTypes.FETCH_PERMIT_REQUEST;
}

export type FetchPermitSuccess = {
  type: typeof PermitTypes.FETCH_PERMIT_SUCCESS;
  payload: FetchPermitsSuccessPayload;
};

export type FetchPermitFailure = {
  type: typeof PermitTypes.FETCT_PERMIT_FAILURE;
  payload: FetchPermitsFailurePayload;
};

export type PermitsActions =
  | FetchPermitFailure
  | FetchPermitSuccess
  | FetchPermitRequest;
