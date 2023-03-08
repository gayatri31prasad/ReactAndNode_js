import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBeer } from 'react-icons/fa';
import { AiOutlineUserAdd, AiFillGooglePlusCircle, AiFillFacebook, AiFillTwitterCircle } from 'react-icons/ai';
import BG from '../Image/BG.jpg';
import nature from '../Image/nature.jpg';
import N4Knature from '../Image/4KNature.jfif';
import N4BG from '../Image/4KBG.jfif';
const img = `https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_960_720.jpg`

const LogIn = () => {
    const [Uname, setUname] = useState('')
    const [pass, setpass] = useState('')

    const InputSty = {
        width: '80%',
        border: '0px',
        padding: 12,
        borderRadius: 4,
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'center',
        // boxShadow: "2px 2px 2px 2px #dfe1eb",
    }

    return (
        <div
            style={{
                backgroundColor: '#fff',
                height: '100vh',
                // width: '100%',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                // background: `url(${'https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_960_720.jpg'})`,
                background: `url(${'https://img.uhdpaper.com/wallpaper/sports-car-futuristic-mountain-sunset-scenery-digital-art-537@0@i-preview.jpg?dl'})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}>
            <div
                style={{
                    width: '400px',
                    // border: '2px solid green',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: 10,
                    padding: '10px',
                    margin: '20px',
                    textAlign: 'center',
                    // boxShadow: "2px 2px 2px 2px #dfe1eb",
                    // '@media (maxWidth: 480px)': {
                    //     width: '400px',
                    //     margin: '10px',
                    // },
                    // '@media (maxWidth: 1024px ||maxWidth: 768px)': {
                    //     width: '420px',
                    // },
                }}>
                <p style={{ fontFamily: 'fantasy', fontSize: 46, color: '#fff ', margin: '0px' }}>LogIn </p>
                <AiOutlineUserAdd style={{ fontSize: 100, color: '#fff' }} />
                {/* <img style={{ marginBottom: 10 }} src={'../Image/nature.jpg'} alt="Logo" /> */}
                <br />
                <input
                    placeholder='UserName'
                    name='username'
                    style={InputSty}
                    value={Uname}
                    onChange={(value) => { setUname(value.target.value) }} />
                <br />
                <input
                    placeholder='Password'
                    name='password'
                    style={InputSty}
                    type={'password'}
                    value={pass}
                    onChange={(value) => { setpass(value.target.value) }} />
                <br />
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0px 8% 0px 8%' }}>
                    <Link style={{ color: '#fff', textDecorationLine: 'none' }} to='/ForgotPass'>Forgot Password?</Link>
                    <Link style={{ color: '#fff', textDecorationLine: 'none' }} to='/SignUp'>SignUp</Link>
                </div>
                <button
                    onClick={() => { }}
                    style={{
                        padding: 10,
                        width: '50%',
                        margin: '15px',
                        border: '0px',
                        borderRadius: 4,
                        background: '#F99746',
                        color: '#FFF',
                        fontFamily: 'inherit',
                        fontSize: 16,
                        fontWeight: 'bold',
                        // boxShadow: "2px 1px 2px 1px #b2cfdb"
                    }}>LOGIN</button>
            </div>
            <div
                style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: 10,
                    padding: 10,
                    display: 'flex',
                    width: '300px',
                    justifyContent: 'space-between'
                }}>
                <AiFillGooglePlusCircle style={{ fontSize: 70, color: '#FED43A' }} />
                <AiFillFacebook style={{ fontSize: 60, color: '#2B478B', backgroundColor: '#FFF', borderRadius: '100px' }} />
                <AiFillTwitterCircle style={{ fontSize: 70, color: '#71daf5' }} />
            </div>
        </div >
    )
}

export default LogIn

