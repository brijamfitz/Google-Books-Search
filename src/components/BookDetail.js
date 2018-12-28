import React from "react";

function BookDetail(props) {
  return (
    <div className="text-center">
      <img alt={props.title} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
      <h3>{props.title}</h3>
      <p><strong>Author(s):</strong> {props.authors}</p>
      <p><strong>Description:</strong> {props.description}</p>
      <a href={props.link}>{props.title}</a>
    </div>
  );
}

export default BookDetail;
