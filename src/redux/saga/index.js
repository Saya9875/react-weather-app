import { all } from 'redux-saga/effects'
import searchSaga from './searchSaga'

export default function* rootSaga() {
  yield all([
    searchSaga()
  ])
}
//sagaの種類を増やすことを想定して配列にする。
