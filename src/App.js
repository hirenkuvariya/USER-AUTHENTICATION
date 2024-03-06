import React from 'react'
import { BrowserRouter , Routes ,Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './Components/Login';
import Registration from './Components/Registration';
import Protek from './services/protek';
const App = () => {
  return (
    <>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Login/>}/>
  <Route path='/Registration' element={<Registration/>}/>  
  <Route path='/' element={<Protek/>}>
  <Route path='/Home' element={<Home/>}/>
  </Route>
</Routes>
</BrowserRouter>
    </>
  )
}

export default App