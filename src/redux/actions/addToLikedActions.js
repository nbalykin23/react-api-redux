import {ADD_TO_LIKED} from '../types'

export const addToLikedAction = (catOrDog) => {
    return {
        type: ADD_TO_LIKED,
        payload: catOrDog
    }
}