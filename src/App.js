import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [search, setSearch] = useState("");
  // useEffect(() => {
  //   console.log(" call search api for ", search);
  // }, [search]);
  useEffect(() => {
    let intervalId = null;
    clearInterval(intervalId);
    intervalId = setTimeout(() => Search(), 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [search]);

  function onChangeHandler(e) {
    setSearch(e.target.value);
  }

  function Search() {
    console.log(" hello calling api ", search);
  }

  return (
    <div className="App">
      <input value={search} onChange={onChangeHandler}></input>
      <button onClick={Search}>Search</button>
    </div>
  );
}
