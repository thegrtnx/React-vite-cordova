import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Auth from './Auth';

import ErrorScreen from '../components/error/ErrorScreen';

import Signup from '../pages/auth/Signup';
import Signin from '../pages/auth/Signin';


const Routers = () => {

  return (
    <Router>
        <div className="App">
        <Routes>
            <Route path='*' element={<ErrorScreen/>} />
            <Route path='/' element={<Auth/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/signin' element={<Signin/>} />
        </Routes>
        
        </div>
  </Router>
  )
}

export default Routers