import { takeLatest } from 'redux-saga/effects';
import { searchAndAddUser } from 'redux/sagas/map';
import { Types as MapTypes } from 'redux/ducks/map';

export default function* root() {
  yield [
    takeLatest(MapTypes.SEARCH, searchAndAddUser),
  ];
}
