import React, { useState, useEffect, useDebugValue, Fragment } from "react";
import styles from "./Main.css";
import SchoolsTable from "./components/SchoolsTable";

function Main() {
  const [isShowing, setIsShowing] = useState(true);
  // const [navBtn, setNavBtn] = useState("All Schools");
  // useEffect(() => {
  //   setNavBtn(isShowing === true ? "Main" : "All Schools");
  // }, [isShowing]);

  return (
    <Fragment>
      <div className={styles.btn_container}>
        <button onClick={() => setIsShowing(!isShowing)}>
          {isShowing ? "Hide Table" : "Show Table"}
        </button>
      </div>
      {isShowing ? <SchoolsTable /> : <div>Welcome To My Schools Table !</div>}
    </Fragment>
  );
}

export default Main;
