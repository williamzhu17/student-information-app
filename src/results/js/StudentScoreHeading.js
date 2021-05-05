import React from "react";
import "../css/StudentScoreHeading.css"

function StudentScoreHeading(props) {
    return(
        <div>
            <h2>Grade {props.data}</h2>
        </div>
    );
}

export default StudentScoreHeading;