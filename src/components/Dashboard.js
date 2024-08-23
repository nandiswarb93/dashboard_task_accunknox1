import React, { useState } from "react";
import Widget from "./Widget";
import AddWidgetForm from "./AddWidgetForm";
import data from "./data.json";

import "./Dashboard.css";

const Dashboard = () => {
  const [categories, setCategories] = useState(data.categories);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  const addWidget = (categoryId, widget) => {
    const updatedCategories = categories.map((category) => {
      if (category.id === categoryId) {
        return { ...category, widgets: [...category.widgets, widget] };
      }
      return category;
    });
    setCategories(updatedCategories);
  };

  const removeWidget = (categoryId, widgetId) => {
    const updatedCategories = categories.map((category) => {
      if (category.id === categoryId) {
        return {
          ...category,
          widgets: category.widgets.filter((widget) => widget.id !== widgetId),
        };
      }
      return category;
    });
    setCategories(updatedCategories);
  };

  return (
    <div className="dashboard">
      <div className="navbar">
        <h2>CNAPP DashBoard</h2>
        <input
          type="text"
          placeholder="search widgets"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      {categories.map((category) => (
        <div key={category.id} className="category">
          <h2>{category.name}</h2>
          <div className="widgets">
            {category.widgets
              .filter((widget) =>
                widget.name.toLowerCase().includes(query.toLowerCase())
              )
              .map((widget) => (
                <Widget
                  key={widget.id}
                  widget={widget}
                  Remove={() => removeWidget(category.id, widget.id)}
                />
              ))}
            <div className="container">
              <button
                className="add-widget-btn"
                onClick={() => setSelectedCategory(category.id)}
              >
                Add Widget
              </button>
            </div>
          </div>

          {selectedCategory === category.id && (
            <AddWidgetForm
              categoryId={category.id}
              onAddWidget={addWidget}
              onClose={() => setSelectedCategory(null)}
            />
          )}
        </div>
      ))}
    </div>
  );
};
export default Dashboard;
