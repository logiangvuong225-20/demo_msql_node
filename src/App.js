import React, { useState, useEffect } from "react";
import "./App.css";

import axios from "axios";
import { Link } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);
  useEffect(async () => {
    const result = await axios("http://localhost:4000/getposts");

    setData(result.data);
  }, []);

  return (
    <div>
      {data.map((d) => (
        <div>
          <Link to={"/detail/" + d.id}>
            {" "}
            <h1>{d.title}</h1>
          </Link>
          <p>{d.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
