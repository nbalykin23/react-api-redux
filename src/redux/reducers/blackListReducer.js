import {ADD_TO_BLACKLIST} from '../types'
import {initialState} from '../initialState'

export const blackListReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TO_BLACKLIST:
            return [...state, action.payload]
        default:
            return state
    }
}