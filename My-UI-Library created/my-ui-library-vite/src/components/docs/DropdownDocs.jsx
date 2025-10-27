import React from "react";
import Dropdown from "../Dropdown";
import CopyButton from "../CopyButton";

const DropdownDocs = () => {
  const handleSelect = (option) => alert(`Selected: ${option}`);
  
  const usageCode = `<Dropdown 
  options={["React", "Vue", "Angular", "Svelte"]} 
  onSelect={(option) => console.log('Selected:', option)} 
/>`;

  const sourceCode = `import React, { useState } from "react";

const Dropdown = ({ options = [], onSelect }) => {
  const [selected, setSelected] = useState(options[0] || "Select");

  const handleSelect = (option) => {
    setSelected(option);
    if (onSelect) onSelect(option);
  };

  return (
    <div className="dropdown">
      <button className="button">{selected}</button>
      <div className="dropdown-content">
        {options.map((opt, i) => (
          <div key={i} onClick={() => handleSelect(opt)}>
            {opt}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;`;

  return (
    <div>
      <h1>Dropdown Component</h1>
      <p>The Dropdown component shows a list of options when clicked and allows selecting one. It provides a clean interface for choosing from multiple options without taking up much space.</p>

      <div className="example-section">
        <h3>Example</h3>
        <div style={{ maxWidth: '300px' }}>
          <Dropdown options={["React", "Vue", "Angular", "Svelte", "Next.js"]} onSelect={handleSelect} />
        </div>
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
            <td><b>options</b></td>
            <td>array</td>
            <td>[]</td>
            <td>Array of string options to display in the dropdown</td>
          </tr>
          <tr>
            <td><b>onSelect</b></td>
            <td>function</td>
            <td>-</td>
            <td>Callback function called when an option is selected</td>
          </tr>
        </tbody>
      </table>

      <h3>Features</h3>
      <ul>
        <li>Hover-activated dropdown menu</li>
        <li>Click to select functionality</li>
        <li>Visual feedback for selected option</li>
        <li>Customizable options list</li>
        <li>Callback support for selection handling</li>
      </ul>

      <h3>Notes</h3>
      <p>Useful for selecting options in forms, filters, or navigation menus. The dropdown automatically selects the first option as the default value. The component uses CSS hover states to show/hide the dropdown content, providing a smooth user experience.</p>
    </div>
  );
};

export default DropdownDocs;
