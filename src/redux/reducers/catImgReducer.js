import {initialState} from '../initialState'
import {GET_IMG} from '../types'

export const catImgReducer = (state = initialState, action) => {
    const {payload, type} = action
    switch (type) {
        case GET_IMG:
            return payload
        default:
            return state
    }
}
