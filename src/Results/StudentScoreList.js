import React from "react";
import StudentScoreHeading from "./StudentScoreHeading.js";
import StudentScore from "./StudentScore.js";

function StudentScoreList(props) {
    return(
        <div>
            <p>StudentScoreHeading</p>
            {/* Pass data of grade number */}
            <StudentScoreHeading grade={props.data.grade} />
            {/* Pass data of particular grade */}
            <StudentScore data={props.data}/>
        </div>
    );
}

export default StudentScoreList;