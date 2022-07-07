import "./create.css";

export default function Create(props) {
    return(
        <form onSubmit={e => props.handleCreate(e)}>
            <div className="group">
                <label htmlFor="username">Username</label>
                <input name="username" type="text" placeholder="Enter your username here" required/>
            </div>
            <div className="group">
                <label htmlFor="dweet">Dweet</label>
                <textarea name="dweet" type="text" placeholder="Write your dweet here" maxLength="140" required></textarea>
            </div>
            <div className="group">
                <input type="submit" value="Create Dweet"/>
            </div>
            <div className="group"></div>
        </form>
    );
}