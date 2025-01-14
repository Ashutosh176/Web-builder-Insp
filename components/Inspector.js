import { useState } from "react";

export default function Inspector() {
  const [selectedElement, setSelectedElement] = useState(null);

  const handleMouseOver = (e) => {
    if (e.target !== selectedElement) {
      e.target.classList.add("outline-blue-500");
    }
  };

  const handleMouseOut = (e) => {
    if (e.target !== selectedElement) {
      e.target.classList.remove("outline-blue-500");
    }
  };

  const handleClick = (e) => {
    e.stopPropagation();
    if (selectedElement) {
      selectedElement.classList.remove("outline-blue-500");
    }
    setSelectedElement(e.target);
    e.target.classList.add("outline-blue-500");
  };

  return (
    <div
      className="flex-1 p-4 relative"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleClick}
    >
      <h1 className="text-2xl font-bold mb-4">Welcome to the Web Builder Inspector</h1>
      <div className="bg-gray-200 p-4 mb-4">
        <p className="text-gray-700">This is a paragraph inside a div.</p>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Click Me</button>
    </div>
  );
}
import Sidebar from "../components/Sidebar";
import Inspector from "../components/Inspector";

export default function Home() {
  const [selectedElement, setSelectedElement] = useState(null);

  return (
    <div className="flex h-screen">
      <Sidebar>
        <h2 className="text-lg font-bold mb-4">React Component Structure</h2>
        <ul>
          <li>{selectedElement?.tagName || "Select an element"}</li>
        </ul>
      </Sidebar>
      <Inspector setSelectedElement={setSelectedElement} />
      <Sidebar>
        <TailwindEditor selectedElement={selectedElement} />
      </Sidebar>
    </div>
  );
}
