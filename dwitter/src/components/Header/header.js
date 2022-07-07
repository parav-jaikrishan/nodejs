import "./header.css";

export default function Header() {
    return (
        <div className="header">
            <h4 className="nav-heading">dwitter</h4>
            <div className="section">
                <div className="part">
                    <h3>Share your thing,<br/>if it's interesting.</h3>
                    <button>Dweet now!</button>
                </div>
                <img src="assets/splash-img.png" alt="Connected"/>
            </div>
        </div>
    )
}