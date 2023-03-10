import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loginstack from './navigation/Loginstack';
import ForgotPass from './screens/login/ForgotPass';
import { useEffect, useState } from 'react';

function App() {

  const [MyObj, setMyObj] = useState()

  useEffect(() => {
    try {
      setMyObj(JSON.parse(sessionStorage.getItem("MyObj")));
    } catch (err) {
      console.log('', err);
    }
  }, [])
  console.log('', MyObj);
  return (
    <BrowserRouter>
      {MyObj == null ? <Loginstack /> : <ForgotPass />}
    </BrowserRouter>
  )
}

export default App;
