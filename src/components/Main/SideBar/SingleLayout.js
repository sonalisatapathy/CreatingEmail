import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Col } from "react-bootstrap";

const SingleLayout = ({ item }) => {
  return (
    <Draggable draggableId={`draggableLayout${item.id}`} index={item.id}>
      {(provided, snapshot) => (
        <Col
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          md={6}
        >
          {item.img}
        </Col>
      )}
    </Draggable>
  );
};

export default SingleLayout;
