import React from 'react'
import style from '../MainCat/Main.module.css'
import {Link} from 'react-router-dom'


const Home = () => {
    const temp = {width: '18rem'}
    return (
        <>
            <div className={style.cart}>
                <div className="card" style={temp}>
                    <center><h1>Choose for whom are you?</h1></center>
                    <img
                        src="data:image/jpeg;base64,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"
                        className="card-img-top" alt="Cat"/>
                    <table className="centra">
                        <tr>
                            <td><Link to="/dog" className="btn btn-info mx-4 btn-lg">🐕</Link></td>

                            <td><Link to="/cat" className="btn btn-info mx-4 btn-lg">🐈</Link></td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    )
}


export default Home