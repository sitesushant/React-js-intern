import React, { useState } from "react";
import DocsPage from "./pages/DocsPage";
import "./index.css";

const App = () => {
  const [activeItem, setActiveItem] = useState("Button");

  const menu = {
    Components: [
      "Button",
      "Accordion",
      "Tabs",
      "Table",
      "Slider",
      "Dropdown",
      "ImageSlider",
    ],
    Hooks: ["useLocalStorage", "useWindowWidth"],
  };

  return (
    <div className="app-container">
      <aside className="sidebar">
        <h2>📚 UI Library</h2>
        {Object.keys(menu).map((section) => (
          <div key={section}>
            <h3>{section}</h3>
            <ul>
              {menu[section].map((item) => (
                <li
                  key={item}
                  className={activeItem === item ? "active" : ""}
                  onClick={() => setActiveItem(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>
      <main className="content">
        <DocsPage activeItem={activeItem} />
      </main>
    </div>
  );
};

export default App;
