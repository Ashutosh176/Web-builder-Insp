export default function Sidebar({ children }) {
    return (
      <div className="w-1/4 bg-white border-gray-300 p-4">
        {children}
      </div>
    );
  }
  export function TailwindEditor({ selectedElement }) {
    const [classes, setClasses] = useState(selectedElement?.className || "");
  
    const handleChange = (e) => {
      setClasses(e.target.value);
      if (selectedElement) {
        selectedElement.className = e.target.value;
      }
    };
  
    return (
      <div>
        <h2 className="text-lg font-bold mb-4">Tailwind CSS Editor</h2>
        {selectedElement ? (
          <input
            type="text"
            value={classes}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        ) : (
          <p>Select an element to edit its Tailwind classes.</p>
        )}
      </div>
    );
  }
    