import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Loginstack from './navigation/Loginstack';
import ForgotPass from './screens/login/ForgotPass';
import { useEffect, useState } from 'react';
import LogInSignUp from './screens/login/LogInSignUp';
import HomePage from './screens/Home/HomePage';

function App(props) {

  const [MyObj, setMyObj] = useState()
  const [isLiggedIn, setisLiggedIn] = useState({ login: false })
  const [Token, setToken] = useState()
  // const loc = useLocation()

  // window.location.reload()

  useEffect(() => {
    try {
      let obj = JSON.parse(localStorage.getItem("MyObj"))
      let token = JSON.parse(localStorage.getItem("Token"))
      console.log('obj... ', obj);
      if (obj?.user != null) {
        setMyObj(obj);
        setToken(token);
        setisLiggedIn({ ...isLiggedIn, login: true })
      } else {
        setisLiggedIn({ ...isLiggedIn, login: false })
      }
    } catch (err) {
      console.log('err......', err);
    }
  }, [])

  // console.log('isLiggedIn......', isLiggedIn);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLiggedIn.login == false ? <Navigate to='LogIn' /> : <Navigate to='HomePage' />} />
        <Route path="/LogIn" element={<LogInSignUp />} />
        <Route path="/HomePage" element={<HomePage />} />
      </Routes>
      {/* {MyObj == null ? <Loginstack /> : <ForgotPass />} */}
    </BrowserRouter>
  )
}

export default App;
