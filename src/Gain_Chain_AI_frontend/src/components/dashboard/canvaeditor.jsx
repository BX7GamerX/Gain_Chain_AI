import React, { useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { FaSquare, FaCircle, FaCog } from "react-icons/fa";
import { toast } from "react-toastify"; // Import toastify for notifications

const CanvasEditor = () => {
  const [elements, setElements] = useState([]); // Store the added elements
  const [draggedItem, setDraggedItem] = useState(null); // Track dragged item

  // Handle drop for canvas area
  const [{ isOver }, drop] = useDrop({
    accept: "ELEMENT",
    drop: (item, monitor) => {
      const offset = monitor.getClientOffset();
      setElements((prevElements) => [
        ...prevElements,
        {
          ...item,
          left: offset.x - 50, // Set initial position
          top: offset.y - 50, // Set initial position
        },
      ]);
      // Show success message on element drop
      toast.success(`${item.type} added to the canvas!`);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });
  

  // Handle the drag logic for shapes/icons
  const DraggableElement = ({ type }) => {
    const [{ isDragging }, drag] = useDrag({
      type: "ELEMENT",
      item: { type },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });

    return (
      <div
        ref={drag}
        className={`cursor-pointer ${isDragging ? "opacity-50" : ""}`}
      >
        {type === "square" && <FaSquare size={30} />}
        {type === "circle" && <FaCircle size={30} />}
        {type === "settings" && <FaCog size={30} />}
      </div>
    );
  };

  // Handle movement of elements on the canvas
  const moveElement = (index, x, y) => {
    setElements((prevElements) =>
      prevElements.map((el, i) =>
        i === index ? { ...el, left: x, top: y } : el
      )
    );
  };

  return (
    <div className="flex">
      {/* Sidebar with draggable shapes */}
      <div className="w-32 p-4 bg-gray-800 text-white">
        <h3 className="text-lg font-semibold text-teal-400 mb-4">Elements</h3>
        <div className="flex flex-col gap-4">
          <DraggableElement type="square" />
          <DraggableElement type="circle" />
          <DraggableElement type="settings" />
        </div>
      </div>

      {/* Canvas Area */}
      <div
        ref={drop}
        className="relative w-full h-screen bg-gray-200"
        style={{ border: isOver ? "2px solid teal" : "2px solid transparent" }}
      >
        <h2 className="absolute top-4 left-4 text-lg font-semibold text-teal-400">
          Canvas
        </h2>

        {/* Render the elements on the canvas */}
        {elements.map((element, index) => (
          <div
            key={index}
            className="absolute"
            style={{
              left: element.left,
              top: element.top,
              cursor: "move",
            }}
            onMouseDown={(e) => {
              setDraggedItem(index);
            }}
            onMouseMove={(e) => {
              if (draggedItem === index) {
                moveElement(index, e.clientX - 50, e.clientY - 50);
              }
            }}
            onMouseUp={() => setDraggedItem(null)} // Stop dragging
          >
            {element.type === "square" && (
              <div className="w-12 h-12 bg-blue-500" />
            )}
            {element.type === "circle" && (
              <div className="w-12 h-12 bg-teal-500 rounded-full" />
            )}
            {element.type === "settings" && (
              <FaCog size={30} color="blue" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CanvasEditor;
