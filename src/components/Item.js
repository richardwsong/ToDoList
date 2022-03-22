import React from "react";

function Item({ data, removeItem }) {
  return (
    <div className="item">
      <div>
        <p>{data.title}</p>
        <p>{data.date}</p>
      </div>
      <input type="checkbox" onChange={() => removeItem(data)} />
    </div>
  );
}

export default Item;
