import {dogAction} from './dogAction'
import axios from 'axios'

export const thunkDogImgAction = (arr) => async (dispatch) => {
    const image = await axios.get('https://dog.ceo/api/breeds/image/random')
    console.log(image)

    if (!arr) {
        dispatch(dogAction(image.data.message))
    } else if ((!(arr.includes(image.data.message)))) {
        {
            dispatch(dogAction(image.data.message))
        }

    }
    // let temp = await image.json()
    // console.log(temp)
    //
    // const imageRaw = await fetch('https://dog.ceo/api/breeds/image/random', {
    //     credentials: 'same-origin'
    // })
    // console.log(imageRaw)
    //
    // temp = await imageRaw.json()
    // console.log(temp.message)
    //
    //
    // dispatch(dogAction(temp.message))
}
