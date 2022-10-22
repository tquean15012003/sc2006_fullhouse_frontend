import { Fragment, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import { useDispatch } from 'react-redux'
import { setNavigationAction } from './redux/actions/NavigationActions'
import LandingPage from './pages/LandingPage/LandingPage'
import SignInPage from './pages/SignInPage/SignInPage'
import SignUpPage from './pages/SignUpPage/SignUpPage'
import ConfirmSignUp from './pages/SignUpPage/ConfirmSignUp'
import ResetPasswordPage from './pages/ResetPasswordPage/ResetPasswordPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import Feedback from './pages/Feedback/Feedback'

function App() {
  const navigate = useNavigate()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setNavigationAction(navigate))
  }, [dispatch, navigate])

  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/signin' element={<SignInPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/confirmsignup' element={<ConfirmSignUp />} />
        <Route path='/resetpassword' element={<ResetPasswordPage />} />
        <Route path='/feedback' element={<Feedback />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Routes>
    </Fragment>
  )
}
export default App
