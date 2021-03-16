import React from "react";

function StudentScore(props) {
    
    let studentList = props.data.students.map((value) => {
        return <p>{value.name} {value.score}</p>
    });

    return(
        <div>
            {studentList}
        </div>
    );
}

export default StudentScore;