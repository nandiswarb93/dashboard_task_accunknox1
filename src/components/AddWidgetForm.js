// import React, { useState } from "react";

// const AddWidgetForm = ({ categoryId, onAddWidget, onClose }) => {
//   const [widgetName, setWidgetName] = useState("");
//   const [widgetText, setWidgetText] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newWidget = {
//       id: Date.now(),
//       name: widgetName,
//       text: widgetText,
//     };
//     onAddWidget(categoryId, newWidget);
//     setWidgetName("");
//     setWidgetText("");
//     onClose();
//   };

//   return (
//     <form onSubmit={handleSubmit} className="">
//       <input
//         type="text"
//         placeholder="Widget Name"
//         value={widgetName}
//         onChange={(e) => setWidgetName(e.target.value)}
//         required
//       />
//       <input
//         type="text"
//         placeholder="Widget Text"
//         value={widgetText}
//         onChange={(e) => setWidgetText(e.target.value)}
//       />
//       <div className="form-actions">
//         <button type="submit">Add</button>
//         <button type="button" onClick={onClose}>
//           Cancel
//         </button>
//       </div>
//     </form>
//   );
// };
// export default AddWidgetForm;

import React, { useState } from "react";
import "./AddWidgetForm.css"; // Import the CSS file

const AddWidgetForm = ({ categoryId, onAddWidget, onClose }) => {
  const [widgetName, setWidgetName] = useState("");
  const [widgetText, setWidgetText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWidget = {
      id: Date.now(),
      name: widgetName,
      text: widgetText,
    };
    onAddWidget(categoryId, newWidget);
    setWidgetName("");
    setWidgetText("");
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="add-widget-form">
      <input
        type="text"
        placeholder="Widget Name"
        value={widgetName}
        onChange={(e) => setWidgetName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Widget Text"
        value={widgetText}
        onChange={(e) => setWidgetText(e.target.value)}
      />
      <div className="form-actions">
        <button type="submit">Add</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AddWidgetForm;
