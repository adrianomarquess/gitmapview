import api from 'services/api';
import { call, put } from 'redux-saga/effects';
import { Types } from 'redux/ducks/map';

export function* searchAndAddUser(action) {
  const response = yield call(api.get, `/users/${action.payload.user.login}`);
  const user = { ...response.data, coordinate: action.payload.user.coordinate };

  yield put({
    type: Types.ADD,
    payload: {
      user,
    },
  });
}
