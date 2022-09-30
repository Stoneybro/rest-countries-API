import {BiMoon} from 'react-icons/bi'

export default function Navbar(params) {
    
    return(
        <div className="navbar">
            <h2 className="where">Where in the world?</h2>
            <div className="colorscheme">
                <BiMoon />
                <span>Dark Mode</span>
            </div>
        </div>
    )
}