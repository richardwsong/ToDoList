import React, { useState } from "react";
import Item from "./Item";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function List() {
  let dummyData = [
    {
      title: "ISD PA",
    },
    {
      title: "Math HW",
    },
  ];

  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState([]);
  const [date, setDate] = useState(new Date());
  function onSubmit() {
    setTodo([...todo, { title: title, date: date.toDateString() }]);
    setTitle("");
  }
  const removeItem = (data) => {
    console.log(data);
    const todoFiltered = todo.filter((item) => item.title !== data.title);
    setTodo(todoFiltered);
  };
  return (
    <div className="listItself">
      <div className="inputs">
        <input
          type="text"
          name="textbox"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <DatePicker selected={date} onChange={(date) => setDate(date)} />
        <input type="button" name="button" value="Add" onClick={onSubmit} />
      </div>
      {todo.map((data, index) => (
        <Item
          key={JSON.stringify(data)}
          value
          data={data}
          removeItem={removeItem}
        />
      ))}
    </div>
  );
}

export default List;
