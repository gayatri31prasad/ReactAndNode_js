import React from 'react'
import { useNavigate } from 'react-router-dom'

function HomeBase() {
    const navigate = useNavigate()
    return (
        <div style={{ margin: 'auto' }}>
            <p style={{ fontFamily: 'fantasy', fontSize: 46, color: '#fff', margin: '0px', textAlign: 'center', marginBottom: 20 }}>HomePage</p>

            <button
                style={{ margin: '10px', }}
                onClick={() => {
                    let data = JSON.parse(localStorage.getItem("MyObj"))
                    // console.log('Data ....... ', data?.pass);
                    navigate('/')
                    // window.location.reload()
                }}>
                Nave Home
            </button>
            <br />
            <button
                style={{ margin: '10px' }}
                onClick={() => {
                    localStorage.removeItem("MyObj")
                    navigate('/')
                    window.location.reload()
                }}>
                removeItem
            </button>
        </div>
    )
}

export default HomeBase