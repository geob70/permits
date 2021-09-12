import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { IPermit } from "../../models/IPermit";
import {
  fetchPermitsFailure,
  fetchPermitsSuccess,
} from "../actions/permitActions";
import { PermitTypes } from "../actionTypes/permitType";

const getPermits = () =>
  axios.get<IPermit[]>(
    "https://data.cityofchicago.org/resource/ydr8-5enu.json?$limit=10"
  );

function* fetchPermitsSaga(): any {
  try {
    const response = yield call(getPermits);
    yield put(fetchPermitsSuccess({ permits: response.data }));
  } catch (e: any) {
    yield put(
      fetchPermitsFailure({
        error: e.message,
      })
    );
  }
}

function* permitsSaga() {
  yield all([takeLatest(PermitTypes.FETCH_PERMIT_REQUEST, fetchPermitsSaga)]);
}

export default permitsSaga;
