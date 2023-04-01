import React from 'react'
import { useNavigate } from 'react-router-dom';
// import BG from '../image/BG.jpg';

const HomePage = () => {
    const navigate = useNavigate()
    return (
        <div
            style={{
                backgroundColor: '#frfrfr',
                height: '100vh',
                // width: '100%',
                display: 'flex',
                // background: `url(${BG})`,
                background: `url(${'https://img.uhdpaper.com/wallpaper/sports-car-futuristic-mountain-sunset-scenery-digital-art-537@0@i-preview.jpg?dl'}) no-repeat center center fixed`,
                backgroundRepeat: 'no-repeat',
                justifyContent: 'center',
                backgroundSize: 'cover',
                paddingLeft: 20,
                paddingRight: 20,
                flexDirection: 'column'
            }}>
            <p style={{ fontFamily: 'fantasy', fontSize: 46, color: '#fff', margin: '0px', textAlign: 'center', marginBottom: 20 }}>HomePage</p>

            <button
                style={{ alignSelf: 'center' }}
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
                style={{ alignSelf: 'center' }}
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

export default HomePage
