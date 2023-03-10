import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ForgotPass from '../screens/login/ForgotPass';

function MainNavigation() {

    const [MyObj, setMyObj] = useState()

    useEffect(() => {
        try {
            setMyObj(JSON.parse(sessionStorage.getItem("MyObj")));
        } catch (err) {
            console.log('', err);
        }
    }, [])

    return (
        <Routes>
            <Route path="/ForgotPass" element={<ForgotPass />} />
        </Routes>)
}
export default MainNavigation