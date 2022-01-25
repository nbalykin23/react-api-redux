import {ADD_TO_BLACKLIST} from '../types'

export const blackListActions = (blackAnimal) => {
    return {
        type: ADD_TO_BLACKLIST,
        payload: blackAnimal
    }
}