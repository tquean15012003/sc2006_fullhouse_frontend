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
        {/* Do exactly the same as figma */}
        <Route path='/' element={<LandingPage />} />

        {/* Do exactly the same as figma */}
        <Route path='/signin' element={<SignInPage />} />

        {/* Same theme as SignInPage - including 5 fields
          username
          password
          confirmPassword
          email
          phoneNumber
          Sign up button
        */}
        <Route path='/signup' element={<SignUpPage />} />
        {/* Same theme as SignUpPage - including 1 field
          OTP
          Verify button
        */}
        <Route path='/confirmsignup' element={<ConfirmSignUp />} />

        {/* Same theme as figma but add some more fields
          email + Get OTP button
          verificationCode
          newPassword
          confirmNewPassword
        */}
        <Route path='/resetpassword' element={<ResetPasswordPage />} />
        <Route path='/feedback' element={<Feedback />} />
        {/* Do exactly the same as figma */}
        <Route path='/profile' element={<ProfilePage />} />
      </Routes>
    </Fragment>
  )
}
export default App
