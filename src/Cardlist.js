import React from "react";
import Human from 'humaaans';

const Cardlist = (props) => {
  return (
    <>
      <div className="card">
        <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="card" />
        {/* <img src={`https://i.pravatar.cc/200?img=${props.id}`} alt="card" /> */}
        <h1>{props.name}</h1>
        <p>{props.quali}</p>
        <p>{props.wentfrom}</p>
      </div>
    </>
  );
};

export default Cardlist;
