import React from "react";
import { Container, Row } from "react-bootstrap";
import { Droppable } from "react-beautiful-dnd";
import "./LayOut.css";
import img1 from "./img/singleLayout.PNG";
import img2 from "./img/equalLayout.PNG";
import img3 from "./img/9by3layout.PNG";
import img4 from "./img/3by9layout.PNG";
import img5 from "./img/3equalLayout.PNG";
import img6 from "./img/4equalLayout.PNG";
import SingleLayout from "./SingleLayout";
const LayOut = () => {
  const arr = [
    {
      id: 1,
      img: <img src={img1} />,
    },
    {
      id: 2,
      img: <img src={img2} />,
    },
    {
      id: 3,
      img: <img src={img3} />,
    },
    {
      id: 4,
      img: <img src={img4} />,
    },
    {
      id: 5,
      img: <img src={img5} />,
    },
    {
      id: 6,
      img: <img src={img6} />,
    },
  ];
  return (
    <div className="layout">
      <div className="showLayout">LayOut</div>

      <Container>
        <Droppable droppableId="droppable-1" type="droppableItem">
          {(provided, _) => (
            <Row ref={provided.innerRef}>
              {arr.map((item) => (
                <SingleLayout key={item.id} item={item} />
              ))}

              {provided.placeholder}
            </Row>
          )}
        </Droppable>
      </Container>
    </div>
  );
};

export default LayOut;
