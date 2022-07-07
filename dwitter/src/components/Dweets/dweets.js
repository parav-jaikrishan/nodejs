import "./dweets.css";

export default function Dweets(props) {
    const dweets = props.dweets;
    return(
        <div className="dweets-container">
            {dweets.map(dweet => {
                return(
                    <div key={dweet._id}>
                        <h1>{dweet.posted_by} <span>@{dweet.posted_by.toLowerCase().replace(/[` ~!@#$%^&*()_|+\-=?;:'",.<>\\{\\}\\[\]\\\\/]/gi, '')}</span></h1>
                        <p className="dweet">{dweet.dweet}</p>
                        <p className="post-info">{Date(dweet.posted_at)} &#x2022;</p>
                    </div>
                );
            })}
        </div>
    );
}