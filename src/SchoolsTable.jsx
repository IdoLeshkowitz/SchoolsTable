import React, { useState } from "react";
import data from "./components/mock-data.json";
import School from "./new/School";
import SchoolTable from "./SchoolTable";
import styles from "./components/SchoolsTable.module.css";
import Schools from "./new/Schools";



function SchoolsTable() {
  const [schools, setSchools] = useState(new Schools(data));
  const [headers, setHeaders] = useState([
    "schoolName",
    "className",
    "teacher",
    "rating",
    "comments",
  ]);
  const [numberOfRows, setNumberOfROws] = useState(0);

  return (
    <table>
      <thead>
        <tr key = {"-1"}>
          {headers.map((header,index) => (
            <th key ={"-1"+index.toString()}>{header}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {schools.readLines(headers) }
        {schools.summary()}
      </tbody>
    </table>
  );
}

export default SchoolsTable;
