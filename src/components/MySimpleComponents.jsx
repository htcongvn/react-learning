import React from "react";

function FullName(props) {
  return (
    <h3
      className="heading"
      style={{ color: "purple" }}
      contentEditable="true"
      spellCheck="false"
    >
      {props.fName} {props.lName}
    </h3>
  );
}

function CopyrightAndYear() {
  const today = new Date();
  const currentYear = today.getFullYear();
  return <p>© {currentYear}</p>;
}

export { FullName, CopyrightAndYear };
