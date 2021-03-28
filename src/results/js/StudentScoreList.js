import React from "react";
import StudentScore from "./StudentScore.js";
import StudentScoreHeading from "./StudentScoreHeading.js"

function StudentScoreList(props) {

    return(
        <div>
            <StudentScoreHeading data={props.data.grade} />
            {/* Pass data of particular grade */}
            <StudentScore data={props.data} />
            
        </div>
    );
}

export default StudentScoreList;