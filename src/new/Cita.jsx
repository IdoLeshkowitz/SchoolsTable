import { Fragment } from "react";
import styles from "./../components/Cita.module.css";
import Rating from "./Rating";
function Cita(classData) {
  let key = classData.key;
  let className = classData.className;
  let rating = classData.rating;
  let comments = classData.comments;
  let teacher = classData.teacher;
  let getStars= function () {
    return <Rating rating ={rating}/>
  }
  Object.defineProperties(this, {
    key: {
      value: key,
      writable: false,
    },
    className: {
      value: className,
      writable: true,
    },
    rating: {
      value: getStars(),
      writable: true,
    },
    comments: {
      value: comments,
      writable: true,
    },
    teacher: {
      value: teacher,
      writable: true,
    },
  });

  this.readLine = function (absoluteIndex,classHeaders) {
    console.log(classHeaders);
      let sIndex = String (absoluteIndex);
      return (
        <Fragment>
          {classHeaders.map((header,index) => <td key ={sIndex+String (index)}>{this[header]}</td> )}
        </Fragment>
      );
    
  };
}

export default Cita;
