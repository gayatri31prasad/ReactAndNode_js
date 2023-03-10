import React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import ForgotPass from '../screens/login/ForgotPass';
import LogIn from '../screens/login/LogIn';
import LogInSignUp from '../screens/login/LogInSignUp';
import SignUp from '../screens/login/SignUp';

function Loginstack(props) {
    /* 
        const [MyObj, setMyObj] = useState()
    
        const setSeccion = () => {
            try {
                // localStorage.setItem('','')
                sessionStorage.setItem("MyObj", JSON.stringify({ name: 'Gayatry Prasad', age: '23', gender: 'Mail' }));
            } catch (err) {
                console.log('', err);
            }
            alert('seccion added.....')
        }
    
        const getSeccion = () => {
            try {
                setMyObj(JSON.parse(sessionStorage.getItem("MyObj")));
            } catch (err) {
                console.log('', err);
            }
        }
    
        const removeSeccion = () => {
            try {
                sessionStorage.removeItem("MyObj")
                //sessionStorage.clear() clear all session
            } catch (err) {
                console.log('', err);
            }
            alert('remove seccion .....')
        }
     */
    return (
        <Routes>
            <Route path="/" element={<LogInSignUp />} />
            {/* <Route path="/LogInOld" element={<LogIn />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/ForgotPass" element={<ForgotPass />} /> */}
        </Routes>
    );
    {/* <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/blogs">Blogs</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                    <Outlet />
                </div> */}

    {/* <Route index element={
                    <body style={{ alignItems: 'center' }}>
                        <h1>Home</h1>
                        <p>this is index page</p>
                        <Link to='/blogs'>blogs</Link>
                    </body>} />
                <Route path="/blogs" element={
                    <body>
                        <h1>blogs</h1>
                        <p>this is index page</p>
                        <Link to='/Contact'>Contact</Link>
                    </body>} />
                <Route path="/Contact" element={
                    <body>
                        <h1>Contact</h1>
                        <p>this is index page</p>
                        <button onClick={() => setSeccion()}>session Storage</button>
                        <Link to='/Data' onClick={() => { getSeccion() }}>Data</Link>
                    </body>} />
                <Route path="/Data" element={
                    <body>
                        <h1>Data</h1>
                        <p>this is Data page</p>
                        <p>Name {MyObj?.name}</p>
                        <p>Age {MyObj?.age}</p>
                        <Link to='/' onClick={() => { removeSeccion() }} >Home</Link>
                    </body>} />
            </Route> */}
}

export default Loginstack;