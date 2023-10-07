import './App.css';
import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar/Navbar';
import HeaderContainer from './components/Header/HeaderContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserContainer from './components/Users/UsersContainer'
import LoginFormContainer from './components/Login/LoginFormContainer';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { initializeApp } from './redux/app-reducer'
import Preloader from './components/common/Preloader/Preloader';

function App(props) {
  // debugger;


  useEffect(() => {
    props.initializeApp()
  })

  if (!props.initializedSuccess) {
    return <Preloader />
  }

  const DialogsContainerLazy = lazy(() => import('./components/Dialogs/DialogsContainer'));

  return (
    <BrowserRouter>
      <div className="app-wrapper">

        <HeaderContainer />
        <Navbar />
        <Suspense fallback={'Loading ...'}>
          <Routes>

            <Route path="/dialog/*" element={<DialogsContainerLazy />} />

            <Route path="/profile/:userId?" element={<ProfileContainer />} />
            <Route path="/users" element={<UserContainer />} />
            <Route path="/login" element={<LoginFormContainer />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    initializedSuccess: state.app.initializedSuccess
  }
}

export default connect(mapStateToProps, { initializeApp })(App);
