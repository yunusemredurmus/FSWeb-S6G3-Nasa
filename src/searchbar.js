import React, { useState } from "react";
import "./searchbar.css";
function Search() {
    const [arama, setArama] = useState();
    return (
        <div className="bar">
            <input value={arama} />
            <button>ARA</button>
        </div>
    )
}

export default Search;