import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

const Favorite = () => {
    const dispatch = useDispatch()
    const catsDogs = useSelector((state) => state.liked)
    console.log(catsDogs[1])

    return (
        <div>
            {catsDogs.map((catOrDog) => {
                return (
                    <div key={Date.now() + Math.random()}>
                        {catOrDog &&
                            <img height="400" src={catOrDog} alt="..."/>
                        }
                    </div>
                )
            })}
        </div>

    )
}

export default Favorite