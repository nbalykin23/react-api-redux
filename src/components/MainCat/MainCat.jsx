import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import style from './Main.module.css'
import {addToLikedAction} from '../../redux/actions/addToLikedActions'
import {blackListActions} from '../../redux/actions/blackListActions'
import {catSagaAction} from '../../redux/actions/catAction'


const MainCat = () => {
    const dispatch = useDispatch()
    const catImg = useSelector(state => state.catImg)
    useEffect(() => {
        dispatch(catSagaAction())
    }, [])

    const arr = useSelector((state) => state.blackList)


    const catHandler = () => {
        dispatch(catSagaAction())
    }

    const addCatToLiked = () => {
        dispatch(addToLikedAction(catImg))
        dispatch(catSagaAction())
    }
    // const blackAnimal = useSelector((state) => state.blackList)
    // console.log(blackAnimal)

    const catBlackList = () => {
        dispatch(blackListActions(catImg))
        dispatch(catSagaAction())
    }


    const temp = {width: '18rem'}
    return (
        <div className={style.cart}>
            <div className="card" style={temp}>
                <img src={catImg} className="card-img-top" alt="Cat"/>
                <table className="central">
                    <tr>
                        <td>
                            <button onClick={addCatToLiked} className="btn btn-info mx-4 btn-lg">👍</button>
                        </td>
                        <td>
                            <button onClick={catHandler} className="btn btn-info mx-2 btn-lg">😶</button>
                        </td>
                        <td>
                            <button onClick={catBlackList} className="btn btn-info mx-4 btn-lg">👎</button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default MainCat
