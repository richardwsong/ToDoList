import React from "react";

function Item({ data, removeItem }) {
  return (
    <div className="item">
      <p className="title">
        <b>{data.title}</b>
      </p>
      <p className="date">{data.date.toDateString()}</p>
      <input
        type="checkbox"
        className="checkBox"
        onChange={() => removeItem(data)}
      />
    </div>
  );
}

export default Item;
