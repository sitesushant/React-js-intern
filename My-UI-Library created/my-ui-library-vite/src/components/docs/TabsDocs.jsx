import React from "react";
import Tabs from "../Tabs";
import CopyButton from "../CopyButton";

const TabsDocs = () => {
  const tabs = [
    { label: "Home", content: "Welcome to the Home tab! This is where you can find the main content and navigation options." },
    { label: "Profile", content: "This is your Profile section. Here you can view and edit your personal information, preferences, and account settings." },
    { label: "Settings", content: "Adjust your Settings here. You can customize the application behavior, appearance, and configure various options to suit your needs." },
  ];

  const usageCode = `<Tabs tabs={[
  { label: "Home", content: "Welcome to the Home tab!" },
  { label: "Profile", content: "This is your Profile section." },
  { label: "Settings", content: "Adjust your Settings here." }
]} />`;

  const sourceCode = `import React, { useState } from "react";

const Tabs = ({ tabs }) => {
  const [active, setActive] = useState(0);

  return (
    <div className="tabs">
      <div className="tab-buttons">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={active === index ? "active" : ""}
            onClick={() => setActive(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">{tabs[active].content}</div>
    </div>
  );
};

export default Tabs;`;

  return (
    <div>
      <h1>Tabs Component</h1>
      <p>The Tabs component allows navigation between different content sections using tab buttons. It provides a clean and intuitive way to organize related content into separate panels.</p>

      <div className="example-section">
        <h3>Example</h3>
        <Tabs tabs={tabs} />
      </div>

      <div className="code-section">
        <div className="code-header">
          <span>Usage</span>
        </div>
        <div className="code-content">
          <pre><code>{usageCode}</code></pre>
          <CopyButton code={usageCode} />
        </div>
      </div>

      <div className="source-code-section">
        <div className="source-code-header">
          <span>Source Code</span>
        </div>
        <div className="source-code-content">
          <pre><code>{sourceCode}</code></pre>
          <CopyButton code={sourceCode} />
        </div>
      </div>

      <h3>Props</h3>
      <table className="props-table">
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><b>tabs</b></td>
            <td>array</td>
            <td>-</td>
            <td>Array of tab objects with label and content properties</td>
          </tr>
        </tbody>
      </table>

      <h3>Tab Structure</h3>
      <table className="props-table">
        <thead>
          <tr>
            <th>Property</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><b>label</b></td>
            <td>string</td>
            <td>The text displayed on the tab button</td>
          </tr>
          <tr>
            <td><b>content</b></td>
            <td>string</td>
            <td>The content to display when the tab is active</td>
          </tr>
        </tbody>
      </table>

      <h3>Notes</h3>
      <p>Perfect for multi-section forms, dashboards, or content navigation. The component automatically manages the active state and provides smooth transitions between tabs. Only one tab can be active at a time.</p>
    </div>
  );
};

export default TabsDocs;
