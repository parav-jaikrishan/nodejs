import "./dweets.css";
import moment from "moment";
import { Link } from "react-router-dom";

export default function Dweets(props) {
    const dweets = props.dweets;
    return(
        <div className="dweets-container">
            {dweets.map(dweet => {
                if(dweet.posted_by.length > 20) {
                    dweet.posted_by = `${dweet.posted_by.substring(0, 20)}...`
                }
                return(
                    <div key={dweet._id}>
                        <h1>{dweet.posted_by} <span>@{dweet.posted_by.toLowerCase().replace(/[` ~!@#$%^&*()|+\-=?;:'",<>\\{\\}\\[\]\\\\/]/gi, '')}</span></h1>
                        <p style={{whiteSpace: "pre-wrap"}} className="dweet">{dweet.dweet}</p>
                        <p className="post-info">Posted {moment(dweet.posted_at).format("hh:mm A, Do MMM YYYY")} <span className={dweet.posted_at === dweet.last_updated_at ? "hide": "show"}>&#x2022; Edited {moment(dweet.last_updated_at).format("hh:mm A, Do MMM YYYY")}</span></p>
                        <div className="separate"></div>
                        <div className="icons">
                            <Link to="/"><button onClick={() => {props.handleDelete(dweet._id)}} className="material-icons">delete</button></Link> <Link to={{pathname: `/update/${dweet._id}`}}><button className="material-icons">edit</button></Link>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}