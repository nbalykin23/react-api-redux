import {combineReducers} from 'redux'
import {catImgReducer} from './catImgReducer'
import {dogImgReducer} from './dogImgReducer'
import {likedReducer} from './likedReducer'
import {blackListReducer} from './blackListReducer'


export const rootReducer = combineReducers({
    catImg: catImgReducer,
    dogImg: dogImgReducer,
    liked: likedReducer,
    blackList: blackListReducer
})
