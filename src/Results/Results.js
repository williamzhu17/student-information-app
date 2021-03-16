import React from "react";
import SearchBar from "./SearchBar.js";
import Scores from "./Scores.js";

function Results(props) {
    return(
        <div>
            <p>Results</p>
            <SearchBar />
            {/* Pass Full JSON Data */}
            <Scores data={props.data} />
        </div>
    );
}

export default Results;