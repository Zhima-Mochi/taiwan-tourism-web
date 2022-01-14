import { NavLink } from 'react-router-dom';
import logo from '../assets/img/logo.jpeg';
import navbar_items from '../constants/navbar_items';
export default function Header() {
    return (
            <div className="wrap bg-white">
                <div className="flex justify-between items-center header">
                    <div className="flex-1">
                        <NavLink to='/'>
                            <div className="flex items-center">
                                <img src={logo} alt="Logo" className="logo" />
                                <div className="logo-word">樂遊台灣</div>
                            </div>
                        </NavLink>
                    </div>
                    <div>
                        <div className="hidden md:block">
                            <div className="flex justify-between">
                                {Object.entries(navbar_items).map((item) => (
                                    <NavLink key={item[0]} to={'/' + item[1].eng}>
                                        <div className="navbar-box df-ft-fm">
                                            <div className="text-xs hover-main-color">{item[1].name}</div>
                                            <div className="text-xs navbar-color">{item[1].eng.replace('_', '').toUpperCase()}</div>
                                        </div>
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="md:hidden">

                        </div>
                    </div>
                </div>
            </div>
    );
}