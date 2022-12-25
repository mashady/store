import React from "react";
import "../../styles/listGroup.css";
const ListGroup = ({
  items,
  textProperty,
  valueProperty,
  selectedItem,
  onItemSelect,
}) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          style={{
            fontSize: "1.1rem",
            marginBottom: "0.5rem",
            marginLeft: "0.2rem",
            cursor: "pointer",
            padding: "0.2rem",
            borderRadius: "0.3rem",
          }}
          onClick={() => onItemSelect(item)}
          key={item[valueProperty]}
          className={
            item === selectedItem
              ? "active list-group-item d-flex justify-content-between align-items-center"
              : " d-flex justify-content-between align-items-center"
          }
        >
          {item[textProperty]}
          <span class="badge bg-primary rounded-pill">{items.length - 1}</span>
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
