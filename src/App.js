import './App.css';
import React, {useEffect, useState} from "react";
import NavBar from "./navbar/NavBar.js";
import Results from "./results/js/Results.js";

function App() {

  const [studentData, setStudentData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    fetch("./student-information.json", {
      headers : {
        "Content-Type": 'application/json', 
        "Accept": "application/json",
      }
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setStudentData(data);
      });
  }

  return(
    <div>
      <NavBar />
      {/* Pass Full JSON Data */}
      {studentData === null ? <p>Loading</p> : <Results data={studentData} />}
    </div>
  );
}

export default App;
