import React, { tr, startTransition, useState } from "react";
import Cita from "./Cita";
import styles from "./School.module.css";
import Rating from "./Rating";
function School(schoolData) {
  let key = schoolData.key;
  let schoolName = schoolData.schoolName;
  let rating = schoolData.totalRating;
  let comments = schoolData.comments;
  let classes = schoolData.classes.map((classData) => new Cita(classData));
  Object.defineProperties(this, {
    key: {
      value: key,
      writable: false,
    },
    classes: {
      value: classes,
      writable: true,
    },
    schoolName: {
      value: schoolName,
      writable: true,
    },
    rating: {
      value: rating,
      writable: true,
    },
    comments: {
      value: comments,
      writable: true,
    },
  });

  this.readLines = function (StartIndex, headers) {
    let output = [];
    this.classes.map((cita, index) =>
      index === 0
        ? output.push(
            <tr key={String(StartIndex + index)}>
              <td
                key={String(StartIndex + index) + "0"}
                rowSpan={this.numberOfRows()}
              >
                {this.schoolName}
              </td>
              {cita.readLine(StartIndex + index, headers.slice(1))}
            </tr>
          )
        : output.push(
            <tr key={String(StartIndex + index)}>
              {cita.readLine(StartIndex + index, headers.slice(1))}
            </tr>
          )
    );
    output.push(this.summaryLine(StartIndex + this.numberOfRows()));
    return output;
  };

  this.summaryLine = function (index) {
    return (
      <tr key={String(index)} className={styles.summaryRow}
      >
        <td colSpan={3} >
          <div className={styles.rating}>
            <span>Total Rating :</span>{" "}
            <span>
              <Rating rating={this.rating}></Rating>
            </span>
          </div>{" "}
        </td>

        <td>{this.comments}</td>
      </tr>
    );
  };
  this.numberOfRows = function () {
    // returns number of classes in school plus one for summary row
    return this.classes.length + 1;
  };
  
}
export default School;
