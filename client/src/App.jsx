import './App.scss';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import HomePage from './page/HomePage/HomePage';
import LoginPage from './page/LoginPage/LoginPage';

function App() {
  return (
    <div className="app_container">
      <Navbar />
      <div className="content_container">
        <HomePage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
