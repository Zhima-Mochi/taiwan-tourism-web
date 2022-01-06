import { NavLink } from 'react-router-dom';
import logo from '../assets/img/logo.jpeg';
export default function Header() {
    return (
        <div className="wrap">
            <div className="flex justify-between items-center header">
                <NavLink to='/'>
                    <div className="flex items-center">
                        <img src={logo} alt="Logo" className="logo" />
                        <div className="logo-word">樂遊台灣</div>
                    </div>
                </NavLink>
                <div className="flex justify-between">
                    <NavLink to='/'>
                        <div className="navbar-box">
                        
                        </div>
                    </NavLink>
                    <NavLink to='/'>
                        <div></div>
                    </NavLink>
                    <NavLink to='/'>
                        <div></div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}