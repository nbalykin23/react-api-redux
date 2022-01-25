export const catAction = (data) => {
    console.log(data)
    return {
        type: 'GET_IMG',
        payload: data
    }
}


export const catSagaAction = () => {
    return {
        type: 'GET_SAGA_IMG'

    }
}