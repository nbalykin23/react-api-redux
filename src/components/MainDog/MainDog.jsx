import React, {useEffect} from 'react'
import style from './Main.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {thunkDogImgAction} from '../../redux/actions/thunkDogImgAction'
import {addToLikedAction} from '../../redux/actions/addToLikedActions'
import {blackListActions} from '../../redux/actions/blackListActions'


const MainDog = () => {
    const dispatch = useDispatch()
    const dogImg = useSelector(state => state.dogImg)
    useEffect(() => {
        dispatch(thunkDogImgAction())
    }, [])

    const arr = useSelector((state) => state.blackList)

    const dogHandler = () => {
        dispatch(thunkDogImgAction())
    }

    const addDogToLiked = () => {
        dispatch(addToLikedAction(dogImg))
        dispatch(thunkDogImgAction())
    }

    const dogBlackList = () => {
        dispatch(blackListActions(dogImg))
        dispatch(thunkDogImgAction())
    }

    const temp = {width: '18rem'}
    return (
        <div className={style.cart}>
            <div className="card" style={temp}>
                <img
                    src={dogImg}
                    alt="Dog"/>
                <table className="centra">
                    <tr>
                        <td>
                            <button onClick={addDogToLiked} className="btn btn-info mx-4 btn-lg">👍</button>
                        </td>
                        <td>
                            <button onClick={dogHandler} className="btn btn-info mx-2 btn-lg">😶</button>
                        </td>
                        <td>
                            <button onClick={dogBlackList} className="btn btn-info mx-4 btn-lg">👎</button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default MainDog