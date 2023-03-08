import React from 'react';
import { useNavigate } from 'react-router-dom';
import BG from '../Image/BG.jpg';

const SignUp = (props) => {
    const navigate = useNavigate()
    const InputSty = {
        width: '300px',
        border: '0px',
        padding: 12,
        borderRadius: 4,
        fontSize: 16,
        marginBottom: 10,
        marginRight: 10,
        marginleft: 10,
        // textAlign: 'center',
        // boxShadow: "2px 2px 2px 2px #dfe1eb",
    }

    return (
        <div
            style={{
                backgroundColor: '#frfrfr',
                height: '100vh',
                // width: '100%',
                display: 'flex',
                background: `url(${'https://img.uhdpaper.com/wallpaper/sports-car-futuristic-mountain-sunset-scenery-digital-art-537@0@i-preview.jpg?dl'})`,
                backgroundRepeat: 'no-repeat',
                justifyContent: 'center',
                backgroundSize: 'cover',
                paddingLeft: 20,
                paddingRight: 20,
                flexDirection: 'column'
            }}>
            <p style={{ fontFamily: 'fantasy', fontSize: 46, color: '#fff', margin: '0px', textAlign: 'center', marginBottom: 20 }}>SignUp</p>
            <div style={{
                // '@media (max-width: 1000px)': {
                //     width: '690px',
                // },
                // '@media (max-width: 400px)': {
                //     width: '350px',
                // },
                width: '690px',
                display: 'flex',
                flexWrap: 'wrap',
                alignSelf: 'center',
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'center',
                padding: '10px',
                borderRadius: 16,
                // background: `linear-gradient(yellow,lightgreen)`,

            }}>
                <input
                    placeholder='First Name'
                    name=''
                    type={'text'}
                    style={InputSty}
                    // value={''}
                    onChange={(value) => { }} />
                <input
                    placeholder='Last Name'
                    name=''
                    type={'text'}
                    style={InputSty}
                    // value={''}
                    onChange={(value) => { }} />
                <input
                    placeholder='Mobile No.'
                    name=''
                    type={'no'}
                    style={InputSty}
                    // value={''}
                    onChange={(value) => { }} />
                <input
                    placeholder='Email Adress'
                    name=''
                    type={'text'}
                    style={InputSty}
                    // value={''}
                    onChange={(value) => { }} />
                <div style={{ alignItems: 'center' }}>
                    <textarea
                        placeholder='Residential Adress.'
                        name=''
                        type={'text'}
                        style={InputSty}
                        // value={''}
                        onChange={(value) => { }} />
                    <br />
                    {/* <input
                        placeholder='PinCode'
                        name=''
                        type={'text'}
                        style={InputSty}
                        // value={''}
                        onChange={(value) => { }} /> */}
                </div>
            </div>
            <button
                onClick={() => { navigate('/') }}
                style={{
                    padding: 10,
                    width: 200,
                    margin: '15px',
                    border: '0px',
                    borderRadius: 4,
                    background: '#F99746',
                    color: '#FFF',
                    fontFamily: 'inherit',
                    fontSize: 16,
                    fontWeight: 'bold',
                    alignSelf: 'center',
                    // boxShadow: "2px 1px 2px 1px #b2cfdb"
                }}>SignUp</button>
        </div>
    );
}

export default SignUp;