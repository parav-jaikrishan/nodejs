import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="header">
            <h4 className="nav-heading">dweets</h4>
            <div className="section">
                <div className="part">
                    <h3>Share your thing,<br/>if it's interesting.</h3>
                    <Link to="/create"><button>Dweet now!</button></Link>
                </div>
                <img src="assets/splash-img.png" alt="Connected"/>
            </div>
        </div>
    )
}