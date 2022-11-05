import React, { Fragment, useEffect, useState } from "react";
import School from "./new/School";
import data from "./components/mock-data.json";
import ClassesTable from "./ClassesTable";

function SchoolTable(props) {
  return (
    <Fragment key ={props.startIndex}>
      {props.school.readAllRows(props.startIndex, props.headers)}
    </Fragment>
  );
}

export default SchoolTable;
