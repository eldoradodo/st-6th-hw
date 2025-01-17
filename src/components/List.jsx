import React, { memo } from "react";

const List = memo(({ items }) => {
  console.log("List component re-rendered");
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
});

export default List;
