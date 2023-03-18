import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Loginstack from './navigation/Loginstack';
import ForgotPass from './screens/login/ForgotPass';
import { useEffect, useState } from 'react';
import LogInSignUp from './screens/login/LogInSignUp';
import HomePage from './screens/Home/HomePage';

function App(props) {

  const [MyObj, setMyObj] = useState()
  const [isLiggedIn, setisLiggedIn] = useState({ login: false })
  const [Token, setToken] = useState()

  useEffect(() => {
    try {
      let obj = JSON.parse(sessionStorage.getItem("MyObj"))
      let token = JSON.parse(sessionStorage.getItem("Token"))
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

  console.log('isLiggedIn......', isLiggedIn);

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
