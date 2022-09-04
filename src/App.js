import { Fragment, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import GuestMode from './pages/GuestMode/GuestMode';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import Register from './pages/Register/Register';
import Report from './pages/Report/Report';
import ProfileTemplate from './templates/ProfileTemplate/ProfileTemplate';
import LogInTemplate from './templates/LogInTemplate/LogInTemplate';
import { useDispatch } from 'react-redux';
import { setNavigationAction } from './redux/actions/NavigationActions';
import GuestModeTemplate from './templates/GuestModeProfile/GuestModeTemplate';
import Profile from './pages/Profile/Profile';

function App() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNavigationAction(navigate))
  }, [dispatch, navigate])

  return (
    <Fragment>
      <Routes>
        {/*Default page || Log in page*/}
        <Route path='/' element={<LogInTemplate Component={Login} />} />    
        <Route path='/login' element={<LogInTemplate Component={Login} />} />

        {/*Register page*/}
        <Route path='/register' element={<LogInTemplate Component={Register} />} />    

        {/*Guest mode page*/}
        <Route path='/guestmode' element={<GuestModeTemplate Component={GuestMode} />} />    

        {/*User page*/}
        <Route path='/profile' element={<ProfileTemplate Component={Profile} />} />    

        {/*Report page*/}
        <Route path='/report' element={<ProfileTemplate Component={Report} />} />  
        <Route path='/guestmodereport' element={<GuestModeTemplate Component={Report} />} />  

        {/*Not found page*/}
        <Route path='*' element={<GuestModeTemplate Component={NotFound} />} />    

      </Routes>
    </Fragment>
  )
}
export default App;
