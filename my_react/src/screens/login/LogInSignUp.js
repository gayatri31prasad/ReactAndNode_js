import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { FaBeer } from 'react-icons/fa';
import { AiOutlineUserAdd, AiFillGooglePlusCircle, AiFillFacebook, AiFillTwitterCircle, AiOutlineUser, AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

// const img = `https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_960_720.jpg`

const PasswordInput = ({
    placeholder = '',
    name = 'password',
    value = '',
    style = {},
    BGSty = {},
    onChange,
}) => {
    const [Show, setShow] = useState(false)
    const eyeSty = {
        fontSize: '24px',
        padding: '4px 0px 0px'
    }
    const eyeBtn = {
        width: '20%',
        borderWidth: 0,
        borderRadius: '4px',
        backgroundColor: '#FFF',
        alignItems: 'center',
        padding: '0px',
        margin: '0px'
    }
    return (
        <div
            style={{
                ...BGSty,
                width: '86%',
                borderRadius: '5px',
                backgroundColor: '#fff',
                margin: 'auto',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                marginBottom: 10,
            }}>
            <input
                placeholder={placeholder}
                name={name}
                type={Show ? 'text' : 'password'}
                style={{ ...style, width: '80%', borderWidth: 0, borderColor: '#FFF', padding: 12, fontSize: 16, borderRadius: '4px' }}
                value={value}
                onChange={onChange} />
            {Show ?
                <button style={eyeBtn} onClick={() => { setShow(!Show) }}>
                    <AiOutlineEye style={eyeSty} />
                </button>
                :
                <button style={eyeBtn} onClick={() => { setShow(!Show) }}>
                    <AiOutlineEyeInvisible style={eyeSty} />
                </button>}
        </div>)
}

const LogInSignUp = () => {
    const [Uname, setUname] = useState('')
    const [pass, setpass] = useState('')
    const [Type, setType] = useState(1)
    const InputSty = {
        width: '80%',
        border: '0px',
        padding: 12,
        borderRadius: 4,
        fontSize: 16,
        marginBottom: 10,
        // textAlign: 'center',
        // boxShadow: "2px 2px 2px 2px #dfe1eb",
    }
    const CardStyle = {
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
    }

    const userlogin = () => {
        try {//http://172.20.1.68:3000/

            let data = {
                user: Uname,
                pass: pass
            }

            fetch(`http://localhost:8082/LogIn`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    // Authorization: 'Bearer ' + token,
                },
                body: JSON.stringify(data)
            },
            )
                .then(response => response.json())
                .then(res => {
                    console.log('get............', JSON.stringify(res));
                    if (res.SUCCESS) {
                        console.log('get............', JSON.stringify(res));
                        // setPastApp(res.DATA)
                        alert('login sucess')
                    } else {
                        alert(res.MESSAGE)
                    }
                })
                .catch(err => {
                    console.log('get............ err1', err);
                })
        } catch (err) {
            console.log('err.........', err);
        }
    }

    const OrComp = () => {
        const btn = {
            borderWidth: 0,
            backgroundColor: 'transparent',
        }
        return (<div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0px' }}>
                <hr style={{ width: '42%', height: 0, alignSelf: 'center' }} />
                <p style={{ padding: '0px', margin: '0px', color: '#FFF' }}>or</p>
                <hr style={{ width: '42%', height: 0, }} />
            </div>
            <div
                style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: 10,
                    padding: 10,
                    display: 'flex',
                    width: '260px',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    margin: 'auto'
                }}>
                <button style={{ ...btn }} onClick={() => { }}>
                    <AiFillGooglePlusCircle style={{ fontSize: 70, color: '#FED43A' }} />
                </button>
                <button style={{ ...btn }} onClick={() => { }}>
                    <AiFillFacebook style={{ fontSize: 60, color: '#2B478B', backgroundColor: '#FFF', borderRadius: '100px' }} />
                </button>
                <button style={{ ...btn }} onClick={() => { }}>
                    <AiFillTwitterCircle style={{ fontSize: 70, color: '#71daf5' }} />
                </button>
            </div>
        </div>)
    }
    return (
        <div
            style={{
                backgroundColor: '#fff',
                height: '100vh',
                // width: '100%',
                // justifyContent: 'center',
                padding: '5% 0px 0px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                // background: `url(${'https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_960_720.jpg'})`,
                background: `url(${'https://img.uhdpaper.com/wallpaper/sports-car-futuristic-mountain-sunset-scenery-digital-art-537@0@i-preview.jpg?dl'})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}>
            <div style={{ backgroundColor: 'rgba(220, 126, 237, 0.2)', borderRadius: 50, width: '280px', }}>
                <button
                    onClick={() => { setType(1) }}
                    style={{
                        padding: '6px 10px ',
                        width: '140px',
                        // margin: '15px',
                        border: '0px',
                        borderRadius: 50,
                        background: Type === 1 ? 'rgba(66, 83, 166, 0.75)' : 'transparent',
                        color: '#FFF',
                        fontFamily: 'inherit',
                        fontSize: 16,
                        fontWeight: 'bold',
                    }}>LogIn</button>
                <button
                    onClick={() => { setType(2) }}
                    style={{
                        padding: '6px 10px ',
                        width: '140px',
                        // margin: '15px',
                        border: '0px',
                        borderRadius: 50,
                        background: Type === 2 ? 'rgba(66, 83, 166, 0.75)' : 'transparent',
                        color: '#FFF',
                        fontFamily: 'inherit',
                        fontSize: 16,
                        fontWeight: 'bold',
                    }}>SignUp</button>
            </div>
            {Type === 1 ? (
                <div style={CardStyle}>
                    <p style={{ fontFamily: 'fantasy', fontSize: 46, color: '#fff ', margin: '0px' }}>LogIn </p>
                    <AiOutlineUser style={{ fontSize: 100, color: '#fff' }} />
                    {/* <img style={{ marginBottom: 10 }} src={'../Image/nature.jpg'} alt="Logo" /> */}
                    <br />
                    <input
                        placeholder='UserName'
                        name='username'
                        style={InputSty}
                        value={Uname}
                        onChange={(value) => { setUname(value.target.value) }} />
                    <br />
                    <PasswordInput
                        placeholder='Password'
                        name='password'
                        // style={InputSty}
                        // type={'password'}
                        value={pass}
                        onChange={(value) => { setpass(value.target.value) }} />
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0px 8% 10px', margin: '0px 0px 0px 0px' }}>
                        <Link style={{ color: '#000', textDecorationLine: 'none' }} to='/ForgotPass'>Forgot Password?</Link>
                        <Link style={{ color: '#000', textDecorationLine: 'none' }} onClick={() => { setType(2) }}>SignUp</Link>
                    </div>
                    <button
                        onClick={() => { userlogin() }}
                        style={{
                            padding: 10,
                            width: '200px',
                            margin: '10px 0px 0px 0px',
                            border: '0px',
                            borderRadius: 4,
                            background: 'rgba(78, 3, 252, 0.8)',
                            color: '#FFF',
                            fontFamily: 'inherit',
                            fontSize: 16,
                            fontWeight: 'bold',
                            // boxShadow: "2px 1px 2px 1px #b2cfdb"
                        }}>LOGIN</button>
                    <OrComp />
                </div>)
                :
                <div style={CardStyle}>
                    <p style={{ fontFamily: 'fantasy', fontSize: 46, color: '#fff ', margin: '0px' }}>SignUp</p>
                    <AiOutlineUserAdd style={{ fontSize: 100, color: '#fff' }} />
                    <div>
                        <input
                            placeholder='UserName'
                            name=''
                            type={'text'}
                            style={{ ...InputSty, textAlign: 'left' }}
                            // value={''}
                            onChange={(value) => { }} />
                        <PasswordInput
                            placeholder='Password'
                            name=''
                            // style={InputSty}
                            // value={''}
                            onChange={(value) => { }} />
                        <PasswordInput
                            placeholder='Confirm Password'
                            name=''
                            // style={InputSty}
                            // value={''}
                            onChange={(value) => { }} />
                    </div>
                    <button
                        onClick={() => { }}
                        style={{
                            padding: 10,
                            width: '200px',
                            margin: '15px',
                            border: '0px',
                            borderRadius: 4,
                            background: 'rgba(78, 3, 252, 0.8)',
                            color: '#FFF',
                            fontFamily: 'inherit',
                            fontSize: 16,
                            fontWeight: 'bold',
                            // boxShadow: "2px 1px 2px 1px #b2cfdb"
                        }}>SIGNUP</button>
                    <OrComp />
                </div>}
        </div >
    )
}

export default LogInSignUp