import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const SaveBtn = props => {
  return (
    <div className="btn-container">
      <button className="save-btn" {...props} tabIndex="0">
        {props.children}
      </button>
    </div>
  );
}

export default SaveBtn;
