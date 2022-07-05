import { all, fork } from 'redux-saga/effects';
import {
    watchSales,
} from './salesSaga';

export default function* rootSaga() {
  yield all([
    fork(watchSales),

  ]);
}