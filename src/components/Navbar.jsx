import {BiMoon} from 'react-icons/bi'
import { useFetch } from '../context/Fetchprovider'
export default function Navbar(params) {
    const {toggleTheme}=useFetch()
    return(
        <div className="navbar">
            <h2 className="where">Where in the world?</h2>
            <div className="colorscheme">
                <BiMoon onClick={toggleTheme} />
                <span>Dark Mode</span>
            </div>
        </div>
    )
}