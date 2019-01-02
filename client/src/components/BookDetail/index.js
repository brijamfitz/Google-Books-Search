import React from "react";

const BookDetail = props => {
  return (
    <span className="text-center">
      <p><img alt={props.title} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} /></p>
      <p style={{ fontSize: "30px" }}>{props.title}</p>
      <p><strong>Author(s):</strong> {props.authors}</p>
      <p><strong>Publish Date:</strong> {props.date}</p>
      <p><strong>Description:</strong> {props.description}</p>
      <p><strong>Google Books Link:</strong> <a href={props.link}>{props.title}</a></p>
      <button onClick={props.handleSaveBook} className="btn btn-primary">
        Save Book
      </button>
      <hr />
    </span>
  );
}

export default BookDetail;
