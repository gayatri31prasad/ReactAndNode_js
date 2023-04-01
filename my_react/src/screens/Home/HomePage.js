import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import HomeBase from './HomeBase';
// import BG from '../image/BG.jpg';

const HomePage = () => {
    const navigate = useNavigate()
    const [showDrower, setshowDrower] = useState(false)

    return (
        <div
            style={{
                backgroundColor: '#fff',
                height: '100vh',
                // width: '100%',
                display: 'flex',
                // background: `url(${BG})`,
                background: `url(${'https://img.uhdpaper.com/wallpaper/sports-car-futuristic-mountain-sunset-scenery-digital-art-537@0@i-preview.jpg?dl'}) no-repeat center center fixed`,
                backgroundSize: 'cover',
                // backgroundRepeat: 'no-repeat',
                // justifyContent: 'center',
                // paddingLeft: 20,
                // paddingRight: 20,
                flexDirection: 'column'
            }}>
            <div
                style={{
                    display: 'flex',
                    height: 60,
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    justifyContent: 'space-between',
                    paddingRight: 20,
                    paddingLeft: 20,
                }}>
                <button
                    style={{ alignSelf: 'center', backgroundColor: 'transparent', border: '0px' }}
                    onClick={() => {
                        setshowDrower(!showDrower)
                    }}>
                    Open D
                </button>
                <div>
                    <p>hellow</p>
                </div>
            </div>
            <div
                style={{
                    display: 'flex',
                }}>
                {showDrower && (
                    <div
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            paddingRight: 20,
                            paddingLeft: 20,
                        }}>
                        <p>Drower</p>
                    </div>)}
                <HomeBase />
            </div>
        </div>
    )
}

export default HomePage
