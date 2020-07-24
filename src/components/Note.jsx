import React from "react";
import PropTypes from "prop-types";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={() => {
          props.onDelete(props.id);
        }}
      >
        <DeleteIcon />
      </button>
    </div>
  );
}
Note.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  onDelete: PropTypes.func,
};

export default Note;
