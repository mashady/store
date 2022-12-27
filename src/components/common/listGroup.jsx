import React from "react";
import "../../styles/listGroup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
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
            fontSize: "1rem",
            fontWeight: "500",
            marginBottom: "0.5rem",
            marginLeft: "0.2rem",
            cursor: "pointer",
            padding: "0.6rem",
            borderRadius: "0.3rem",
            color: "#9e9ea7",
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
          <span class="" style={{ color: "#9e9ea7" }}>
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
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
