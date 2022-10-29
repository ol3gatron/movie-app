import { Link } from "react-router-dom"
import "./Header.scss"

import user from "../../images/user.png"

const Header = () => {
  return (
    <header>
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      <div className="user-image">
        <img src={user} alt="User image" />
      </div>
    </header>
  )
}
export default Header