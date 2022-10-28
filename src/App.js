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
import SubmitProfilePage from './pages/SubmitProfilePage/SubmitProfilePage'
import SuggestionPage from './pages/SuggestionPage/SuggestionPage'
import UpdateProfilePage from './pages/UpdateProfilePage/UpdateProfilePage'
import ChangePasswordPage from './pages/ChangePasswordPage/ChangePasswordPage'
import ChangeEmailPage from './pages/ChangeEmailPage/ChangeEmailPage'
import VerifyChangeEmailPage from './pages/ChangeEmailPage/VerifyChangeEmailPage'
import GuestPage from './pages/GuestPage/GuestPage'
import RetrieveUsernamePage from './pages/RetrieveUsernamePage/RetrieveUsernamePage'

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
        <Route path='/submitprofile' element={<SubmitProfilePage />} />
        <Route path='/suggestion' element={<SuggestionPage />} />
        <Route path='/updateprofile' element={<UpdateProfilePage />} />
        <Route path='/changepassword' element={<ChangePasswordPage />} />
        <Route path='/changeemail' element={<ChangeEmailPage />} />
        <Route path='/verifyemail' element={<VerifyChangeEmailPage />} />
        <Route path='/guest' element={<GuestPage />} />
        <Route path='/retrieveusername' element={<RetrieveUsernamePage/>} />
      </Routes>
    </Fragment>
  )
}
export default App
