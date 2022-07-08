import { all, fork } from 'redux-saga/effects';
import {
    watchSales,
} from './chart/salesSaga';

export default function* rootSaga() {
  yield all([
    fork(watchSales),

  ]);
}