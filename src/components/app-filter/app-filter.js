import "./app-filter.css";

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button type="button"
                    className="btn btn-dark">
                     All Notes
            </button>
            <button type="button"
                    className="btn btn-outline-dark">
                     Important Notes
            </button>
            <button type="button"
                    className="btn btn-outline-dark">
                    Trash Notes
            </button>
        </div>
    )
}

export default AppFilter;