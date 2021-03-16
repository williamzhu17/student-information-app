import React from "react";
import StudentScoreList from "./StudentScoreList.js";

function Scores(props) {
    return(
        <div>
            <p>Scores</p>
            {/* Pass Data of Specific Grade */}
            <StudentScoreList data={props.data[0]}/>
            <StudentScoreList data={props.data[1]} />
            <StudentScoreList data={props.data[2]} />
        </div>
    );
}

export default Scores;