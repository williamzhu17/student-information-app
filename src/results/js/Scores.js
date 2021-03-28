import React from "react";
import StudentScoreList from "./StudentScoreList.js";

function Scores(props) {

    let studentScoreData = props.data.map((value, index) => {
        return <StudentScoreList data={props.data[index]} key={value.grade}/>
    });

    return(
        <div>
            {/* Pass Data of Specific Grade */}
            {studentScoreData}
        </div>
    );
}

export default Scores;