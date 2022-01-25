import axios from 'axios'
import {call, put, takeEvery} from 'redux-saga/effects'
import {catAction} from '../actions/catAction'


const getCatsFromBack = () => {
    return axios.get('https://api.thecatapi.com/v1/images/search?size=full')
        .then(res => res.data[0].url)
}


function* catSagaWorker() {
    try {
        const cats = yield call(getCatsFromBack)
        console.log(cats)
        yield put(catAction(cats))
    } catch (e) {
        console.log('No no no no')
    }
}

function* catSagaWatcher() {
    yield takeEvery('GET_SAGA_IMG', catSagaWorker)
}

export default catSagaWatcher