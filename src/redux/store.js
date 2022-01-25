import {applyMiddleware, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {initialState} from './initialState'
import {rootReducer} from './reducers/rootReducer'
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from './sagas/rootSaga'
import thunk from 'redux-thunk'

const sagas = createSagaMiddleware()

export const store = createStore(rootReducer, initialState(), composeWithDevTools(applyMiddleware(thunk, sagas)))

sagas.run(rootSaga)
