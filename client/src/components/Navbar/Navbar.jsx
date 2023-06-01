import Logo from '../Logo/Logo'
import './Navbar.scss'
export const Navbar = () => {
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
      <img
        src="default_avatar.png"
        alt="avatar"
        className="avatar"
      />
    </nav>
  )
}

export default Navbar
