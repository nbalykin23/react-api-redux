import catSagaWatcher from './catSagas'
import {all} from 'redux-saga/effects'

export function* rootSaga() {
    yield all([(catSagaWatcher())])
}