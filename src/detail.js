import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [data, setData] = useState([]);
  const [comment, setComment] = useState([]);
  const [commentNew, setCommentNew] = useState("");

  const { id } = useParams();
  useEffect(async () => {
    const result = await axios("http://localhost:4000/getpost/" + id);

    setData(result.data);
  }, []);
  useEffect(async () => {
    const result = await axios(`http://localhost:4000/comments/${id}`);

    setComment(result.data);
  }, []);
  console.log(comment);

  const sendComment = (id) => {
    axios.post(`http://localhost:4000/addcomment/${id}`, {
      commentNew: commentNew,
    });
  };
  // const deleteData = (id) => {
  //   var answer = window.confirm("Ban co chac muon xoa?");
  //   if (answer) {
  //     axios.delete(`http://localhost:4000/deletecomment/${id}`);
  //   } else {
  //     return;
  //   }
  // };
  return (
    <div>
      <div></div>
      <h1> {data.title}</h1>
      <p>{data.des}</p>
      <div className="commentF">
        <input
          name="comment"
          id="comment"
          type="text"
          placeholder="comment..."
          onChange={(e) => {
            setCommentNew(e.target.value);
          }}
        />
        <button
          className="update"
          onClick={() => {
            sendComment(data.id);
          }}
        >
          {" "}
          Send
        </button>
      </div>

      <div className="Comment">
        {comment.map((item) => (
          <p>
            {" "}
            {item.id}
            {item.cmt}{" "}
            {/* <button
              className="deleteData"
              onClick={() => {
                deleteData(item.id);
              }}
            >
              {" "}
              Delete
            </button> */}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Detail;
