import "./createbtn.css";
import { Link } from "react-router-dom";

export default function CreateButton() {
    return (
        <Link to="/create"><button className="create-btn">+</button></Link>
    )
}