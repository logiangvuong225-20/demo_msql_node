import React, { useState, useEffect } from "react";
import "./App.css";

import axios from "axios";
import { Link } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");

  useEffect(async () => {
    const result = await axios("http://localhost:4000/getposts");

    setData(result.data);
  }, []);
  const submitReview = () => {
    axios.post("http://localhost:4000/insert", { title: title, des: des });

    setData([...data, { title: title, des: des }]);
  };
  const deleteData = (id) => {
    var answer = window.confirm("Ban co chac muon xoa?");
    if (answer) {
      axios.delete(`http://localhost:4000/delete/${id}`);
    } else {
      return;
    }
  };

  return (
    <div>
      <div className="formAdd">
        <h2>DEMO</h2>
        <label htmlFor="title">Title:</label>
        <br />
        <input
          type="text"
          id="title"
          name="title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <br />
        <label htmlFor="body">Body:</label>
        <br />
        <input
          type="text"
          id="body"
          name="body"
          onChange={(e) => {
            setDes(e.target.value);
          }}
        />
        <br />
        <br />
        <button onClick={submitReview}>ADD</button>
      </div>

      <div className="all-item">
        {data.map((d) => (
          <div>
            <Link to={`/detail/${d.id}`}>
              {" "}
              <h3>{d.title}</h3>
            </Link>
            <p>{d.des}</p>
            <button
              className="deleteData"
              onClick={() => {
                deleteData(d.id);
              }}
            >
              {" "}
              Delete
            </button>

            <button>Update</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
