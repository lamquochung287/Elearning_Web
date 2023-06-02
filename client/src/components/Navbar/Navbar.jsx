import Logo from '../Logo/Logo'
import './Navbar.scss'
export const Navbar = () => {
  const isLogin = false
  return (
    <nav className="navbar_container">
      <Logo />
      <input
        type="text"
        className="navbar_search"
        placeholder="Search for anything"
      />
      <div className="navbar_tab">Your Video</div>
      <div className="navbar_tab">Your Quiz</div>
      <div className="navbar_tab">
        Your Result
      </div>
      {isLogin ? (
        <img
          src="default_avatar.png"
          alt="avatar"
          className="avatar"
        />
      ) : (
        <div className="navbar_btn_container">
          <button className="navbar_btn blackText_whiteBackground">
            Log in
          </button>
          <button className="navbar_btn whiteText_blackBackground">
            Sign up
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
