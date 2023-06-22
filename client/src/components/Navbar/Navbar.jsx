import Logo from '../Logo/Logo';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import TippyCustom from '../TippyCustom/TippyCustom';
export const Navbar = () => {
  const isLogin = false;
  return (
    <nav className="navbar_container">
      <Link
        to="/"
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <Logo />
      </Link>
      <input
        type="text"
        className="navbar_search"
        placeholder="Search for anything"
      />
      <div className="display_flex">
        <TippyCustom>
          <div className="navbar_tab">Categories</div>
        </TippyCustom>
        <div className="navbar_tab">Your Video</div>
        {isLogin ? (
          <img
            src="default_avatar.png"
            alt="avatar"
            className="avatar"
          />
        ) : (
          <div className="navbar_btn_container">
            <button className="navbar_btn blackText_whiteBackground">
              <Link
                style={{ textDecoration: 'none', color: 'inherit' }}
                to="/login"
              >
                Login
              </Link>
            </button>
            <button className="navbar_btn whiteText_blackBackground">
              <Link
                style={{ textDecoration: 'none', color: 'inherit' }}
                to="/signup"
              >
                Sign up
              </Link>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
