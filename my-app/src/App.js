import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">

        <Header />
        <Navbar />
        <Routes>
          <Route path="/dialog/*" element={<Dialogs gialogsItem={props.gialogsItem} messages={props.messages} />} />
          <Route path="/profile" element={<Profile postsInfo={props.postsInfo} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
