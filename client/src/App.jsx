import './App.scss';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import HomePage from './page/HomePage/HomePage';
import LoginPage from './page/LoginPage/LoginPage';
import SignUpPage from './page/SignUpPage/SignUpPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className="app_container">
        <Navbar />
        <div className="content_container">
          <Routes>
            <Route
              path="/"
              element={<HomePage />}
            />
            <Route
              path="/login"
              element={<LoginPage />}
            />
            <Route
              path="/signup"
              element={<SignUpPage />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
