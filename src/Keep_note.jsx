import React, { useState } from "react";
import "./keep_note.css";
import Kpcreatenote from "./Keep_createnote";
import KpComp from "./Keep_note_component";

const Keepnote = () => {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    setAddItem((prevsalue) => {
      return [...prevsalue, note];
    });
  };

  const deleteNote = (id) => {
    setAddItem((olditem) => 
      olditem.filter((val, indx) => {
        return indx !== id;
      })
    );
  };

  return (
    <>
      <Kpcreatenote passNote={addNote} />
      {addItem.map((val, index) => {
        return (
          <KpComp
            key={index}
            id={index}
            title={val.title}
            msg={val.msg}
            deleteitem={deleteNote}
          />
        );
      })}
    </>
  );
};

export default Keepnote;
