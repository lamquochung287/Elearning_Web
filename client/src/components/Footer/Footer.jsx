import { NodeIcon, ReactIcon } from '../Icon'
import Logo from '../Logo/Logo'
import './Footer.scss'

export const Footer = () => {
  return (
    <footer className="footer_container">
      <div className="center_content">
        <span>
          This website is make by Lam Quoc Hung
        </span>
      </div>
      <div
        className="flex_container"
        style={{ gap: '5rem' }}
      >
        <ReactIcon
          fill="white"
          width="5rem"
          height="5rem"
        />
        <NodeIcon
          fill="white"
          width="7rem"
          height="7rem"
        />
      </div>
      <div className="flex_container">
        <Logo className="logo_footer" />
        <p className="small_font">
          © 2023 Elearning, Inc
        </p>
      </div>
    </footer>
  )
}

export default Footer
