import React from "react";
import "../css/StudentScore.css";

function StudentScore(props) {
    
    const [viewAllClicked, setViewAllClicked] = React.useState(false);

    let studentList = props.data.students.map((value, index) => {
        if (index < 3) {
            return <tr key={value.id}><td>{value.name}</td><td>{value.score}</td></tr>
        } else {
            return viewAllClicked ? <tr className="moreStudentData" key={value.id}><td>{value.name}</td><td>{value.score}</td></tr> : null;
        }
    });

    function handleViewAllClick() {
        if (viewAllClicked === true) {
            setViewAllClicked(false);
        } else {
            setViewAllClicked(true);
        }
    }

    return(
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Score</th>
                </tr>
                {studentList}
            </table>
            <p className="viewAllLink" onClick={handleViewAllClick}>{viewAllClicked ? "Collapse" : "View All"}</p>
        </div>
        
    );
}

export default StudentScore;