import React from "react";
import "../css/SearchResult.css"

function SearchResult(props) {

    let searchValue = props.searchValue.toLowerCase();

    // Puts all of the student information into a list of table rows
    // Also includes function to determine whether or not to render a tr based on the searchValue
    let studentList = [];
    for (let i = 0; i < props.data.length; i++) {
        for (let j = 0; j < props.data[i].students.length; j++) {
            let name = props.data[i].students[j].name;
            let score = props.data[i].students[j].score;
            let grade = i + 1;

            studentList.push(
                name.toLowerCase().includes(searchValue) ? 
                <tr key={i}>
                    <td>{name}</td>
                    <td>{score}</td>
                    <td>{grade}</td>
                </tr> : null
            );
        }
    }

    return (
        <div>
            <h2>Search Results</h2>
            <table id="searchResult">
                <tr>
                    <th>Name</th>
                    <th>Score</th>
                    <th>Grade</th>
                </tr>
                {studentList}
            </table>
        </div>
    )
}

export default SearchResult;