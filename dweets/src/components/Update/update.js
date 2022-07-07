import "./update.css";
import { useParams } from "react-router-dom";

export default function Update(props) {
    const paramId = useParams().id;
    const dweet = props.dweets.find(i => i._id === paramId);
    return (
        <form onSubmit={e => props.handleUpdate(e, paramId)}>        
            <div className="group">
                <label htmlFor="author">Author/Editor</label>
                <input name="author" type="text" placeholder={dweet.posted_by} required/>
            </div>
            <div className="group">
                <label htmlFor="dweet">Update Dweet</label>
                <textarea name="dweet" type="text" placeholder={dweet.dweet} maxLength="140" required></textarea>
            </div>
            <div className="group">
                <input type="submit" value="Update"/>
            </div>
        </form>
    )
}