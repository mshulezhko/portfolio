import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeaderContainer from './components/Header/HeaderContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserContainer from './components/Users/UsersContainer'
import LoginFormContainer from './components/Login/LoginFormContainer';

function App(props) {
  // debugger;
  return (
    <BrowserRouter>
      <div className="app-wrapper">

        <HeaderContainer />
        <Navbar />
        <Routes>
          <Route path="/dialog/*" element={<DialogsContainer />} />
          <Route path="/profile/:userId?" element={<ProfileContainer />} />
          <Route path="/users" element={<UserContainer />} />
          <Route path="/login" element={<LoginFormContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
