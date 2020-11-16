import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  var t, b;
  useEffect(async () => {
    const result = await axios("http://localhost:4000/getpost/" + id);

    setData(result.data);
  });
  console.log(data);

  return (
    <div>
      <h1> {t}</h1>
      <p>{b}</p>
    </div>
  );
};

export default Detail;
