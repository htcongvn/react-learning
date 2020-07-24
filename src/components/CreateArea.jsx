import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { v1 as uuidv1 } from "uuid";
import { Zoom } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { Fab } from "@material-ui/core";

function CreateArea(props) {
  const [note, setNote] = useState({ id: "", title: "", content: "" });
  const titleInput = useRef(null);
  const [isZoomedIn, setIsZoomedIn] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((previousNote) => {
      return {
        ...previousNote, // Spread out the previous note into current note
        [name]: value, // Update with partial change of title input or content textarea
      };
    });
  }

  function handleClick(event) {
    if (note.title.length !== 0 || note.content.length !== 0) {
      note.id = uuidv1(); // Update note's id with a uuid
      props.onAdd(note); // send the note back to the parent App component as parameter of the callback decleared up there
    }

    event.preventDefault(); // prevent the default action of the form submision which is refreshing/reloading the page
    setNote({ id: "", title: "", content: "" });
    titleInput.current.focus();
  }

  function handleZoom() {
    setIsZoomedIn(true);
  }

  return (
    <div>
      <form className="create-note" onClick={handleZoom}>
        {isZoomedIn && (
          <input
            name="title"
            placeholder="Title"
            onChange={handleChange}
            value={note.title}
            ref={titleInput}
            autoComplete="off"
          />
        )}
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isZoomedIn ? "3" : "1"}
          onChange={handleChange}
          value={note.content}
        />
        <Zoom in={isZoomedIn}>
          <Fab onClick={handleClick}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}
CreateArea.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default CreateArea;
