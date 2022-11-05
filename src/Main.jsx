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
    <div className={styles.cont}>
      <button onClick={() => setIsShowing(!isShowing)} >{isShowing ? 'Hide Table' : 'Show Table'}</button>
      {isShowing ? <SchoolsTable /> : <div>Welcome To My Schools Table !</div>}
    </div>
  );
}

export default Main;
