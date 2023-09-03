import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App(props) {
  // debugger;
  return (
    <BrowserRouter>
      <div className="app-wrapper">

        <Header />
        <Navbar />
        <Routes>
          <Route path="/dialog/*" element={<DialogsContainer />} />
          <Route path="/profile" element={<ProfileContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
