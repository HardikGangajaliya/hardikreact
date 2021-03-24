import React from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import Button from "@material-ui/core/Button";
const Kp_comp = (props) => {
  const delItem =() =>{
      props.deleteitem(props.id);
  }
  
    return (
    <>
      <div className="kp-comp">
        <h2>{props.title}</h2>
        <h5>{props.msg}</h5>
        <Button className="delbtn" onClick={delItem}>
          <DeleteOutlineIcon className="delicon" />
        </Button>
      </div>
    </>
  );
};

export default Kp_comp;
