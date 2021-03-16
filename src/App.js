import './App.css';
import React, {useEffect, useState} from "react";
import NavBar from "./NavBar/NavBar.js"
import Results from "./Results/Results.js"

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
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data)
        setStudentData(data);
      });
  }

  return(
    <div>
      <NavBar />
      {/* Pass Full JSON Data */}
      {studentData && <Results data={studentData} />}
    </div>
  );
}

export default App;
