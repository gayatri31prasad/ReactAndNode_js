import React from 'react';
import { useNavigate } from 'react-router-dom';
import BG from '../image/BG.jpg';

function ForgotPass(props) {
    const navigate = useNavigate()
    return (
        <div
            style={{
                backgroundColor: '#frfrfr',
                height: '100vh',
                // width: '100%',
                display: 'flex',
                background: `url(${BG})`,
                backgroundRepeat: 'no-repeat',
                justifyContent: 'center',
                backgroundSize: 'cover',
                paddingLeft: 20,
                paddingRight: 20,
                flexDirection: 'column'
            }}>
            <p style={{ fontFamily: 'fantasy', fontSize: 46, color: '#fff', margin: '0px', textAlign: 'center', marginBottom: 20 }}>ForgotPass</p>

            <button
                style={{}}
                onClick={() => {
                    sessionStorage.removeItem("MyObj")
                    sessionStorage.removeItem("isLiggedIn")
                    navigate('/')
                }}>
                delete
            </button>
        </div >
    );
}

export default ForgotPass;