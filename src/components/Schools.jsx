import React from "react";
import School from "./School";

function Schools(schoolsData) {
  let schools = schoolsData.map((schoolData) => new School(schoolData));
  let currIndex = 0;


    Object.defineProperties(this,{
        currIndex:{
            value : currIndex,
            writable: true
        },
        schools:{
            value : schools,
            writable:true 
        },
    });


  this.readLines = function (headers) {
    let output = [];
    schools.map(school =>[output.push(school.readLines(this.currIndex,headers)) , 
    this.currIndex+=school.numberOfRows()] )
    return output;
  };

  this.summary = function (){
    return <tr key={String (currIndex+1)}><td colSpan={5}>Total experience :</td></tr>
  }
}

export default Schools;
