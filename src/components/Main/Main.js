import React, { useState } from "react";
import "./Main.css";
import SideBar from "./SideBar/SideBar";
import { IconContext } from "react-icons/lib";
import ImageUpload from "./MainPageForEmail/ImageUpload";
import SingleGridLayout from "./SideBar/SingleGridLayout";

import { DragDropContext, Droppable } from "react-beautiful-dnd";
import SixBySixLayout from "./SideBar/SixBySixLayout";

const Main = () => {
  const [changeLayout, setChangeLayout] = useState(1);
  // const changeVal = setChangeLayout(param.source.index);
  const onDragEventHandler = (param) => {
    // setChangeLayout(console.log(param.source.index));
    setChangeLayout(param.source.index);
  };
  return (
    <IconContext.Provider value={{ size: "2em" }}>
      <DragDropContext
        onDragEnd={(param) => {
          console.log(param);
          // setChangeLayout(console.log(param.source.index));
          {
            onDragEventHandler(param);
          }
        }}
      >
        <div className="mainContainer">
          <SideBar />
          {(() => {
            switch (changeLayout) {
              case 1:
                return (
                  <Droppable droppableId="droppable-2" type="droppableItem">
                    {(provided, _) => (
                      <div ref={provided.innerRef}>
                        {/* <ImageUpload /> */}

                        <SingleGridLayout />

                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                );
              case 2:
                return (
                  <Droppable droppableId="droppable-2" type="droppableItem">
                    {(provided, _) => (
                      <div ref={provided.innerRef}>
                        {/* <ImageUpload /> */}

                        <SixBySixLayout />

                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                );

              default:
                return "page not found";
            }
          })()}
          {/* {changeLayout === 1 ? (
            <Droppable droppableId="droppable-2" type="droppableItem">
              {(provided, _) => (
                <div ref={provided.innerRef}>
                  <ImageUpload />

                  <SixBySixLayout />

                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ) : (
            <div>Page not found</div>
          )} */}
        </div>
      </DragDropContext>
    </IconContext.Provider>
  );
};

export default Main;
