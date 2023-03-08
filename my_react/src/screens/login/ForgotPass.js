import React from 'react';
import BG from '../Image/BG.jpg';

function ForgotPass(props) {
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

        </div>
    );
}

export default ForgotPass;