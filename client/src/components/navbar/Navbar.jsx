import { useContext } from "react"
import "./navbar.css"
import {Link} from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext"

const Navbar = () => {

  const {user} = useContext(AuthContext)

  return (
    <div className="navbar">
      <div className="navContainer">
      <Link href='/' style={{color:'inherit', textDecoration: 'none' }}>
        <span  className="logo">lamabooking</span>
        </Link>
        {user ? `Welcome ${user.userName}` : 
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>}
      </div>
    </div>
  )
}

export default Navbar