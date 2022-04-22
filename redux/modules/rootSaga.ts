import { all } from 'redux-saga/effects'
import { authSaga } from './create';
export default function* rootSaga() {
    yield all([authSaga()]);
}