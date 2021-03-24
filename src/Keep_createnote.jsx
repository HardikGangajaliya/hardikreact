import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
const Kpcreatetext = (props) => {
  const [note, setNote] = useState({
    title: "",
    msg: "",
  });
  const InputEvent = (e) => {
    const { name, value } = e.target;
    setNote((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };

  const addNote = (e) => {
    e.preventDefault();
    props.passNote(note);
    setNote({
      title: "",
      msg: "",
    });
  };

  return (
    <>
      <div className="kp-text">
        <form onSubmit={addNote} method="post">
          <div className="input_div">
            <input
              type="text"
              name="title"
              value={note.title}
              onChange={InputEvent}
              placeholder="Title"
              autoComplete="off"
              required
            />

            <textarea
              name="msg"
              value={note.msg}
              onChange={InputEvent}
              placeholder="Enter Note..."
              column=" "
              rows=""
              required
            />
          </div>
          <div className="div_btn">
            <Button className="add_btn" type="submit">
              <AddIcon className="plus_sign" />
            </Button>
          </div>
        </form>
      </div>
      <br />
      <br />
      <br />
    </>
  );
};

export default Kpcreatetext;
