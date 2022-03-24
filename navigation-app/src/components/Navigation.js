import {Link} from 'react-router-dom'
import { AiOutlineBars,AiFillHome,AiFillCloseCircle } from "react-icons/ai";
import {useState} from "react";
import "./Navigation.css";
import MenuData from "../data/MenuData";

const Navigation=()=>{
    const [showMenu,setShowMenu] = useState(false)
    const toggleMenu = () =>{
        setShowMenu(!showMenu)
    }
    return(
        <aside>
            <div className="navbar">
                <div className="navbar-toggle">
                    <Link to="#" className="menu-bar">
                        <AiOutlineBars onClick={toggleMenu}/>
                    </Link>
                </div>
            </div>
            <nav className={showMenu ? "nav-menu active": "nav-menu"}>
                <ul className="nav menu-item" onclick={toggleMenu}>
                    <Link to="#" className="menu-text">
                    <AiFillCloseCircle onClick={toggleMenu}/>
                    </Link>
                    {MenuData.map((menu,index) => {
                        return (
                        <li className="menu-text" key={index}>
                                <Link to={menu.path}>{menu.icon}<span>{menu.title}</span></Link>
                        </li>
                        )
                    })}

                </ul>
            </nav>
        </aside>
    )
}

export default Navigation;