import React from "react";
import Slider from "../Slider";
import CopyButton from "../CopyButton";

const SliderDocs = () => {
  const usageCode = `<Slider min={0} max={50} step={5} />`;

  const sourceCode = `import React, { useState } from "react";

const Slider = ({ min = 0, max = 100, step = 1 }) => {
  const [value, setValue] = useState((min + max) / 2);

  return (
    <div className="slider">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <p>Value: {value}</p>
    </div>
  );
};

export default Slider;`;

  return (
    <div>
      <h1>Slider Component</h1>
      <p>The Slider component allows the user to select a value from a range using an interactive range input. It provides visual feedback and displays the current value.</p>

      <div className="example-section">
        <h3>Example</h3>
        <div style={{ maxWidth: '400px' }}>
          <Slider min={0} max={50} step={5} />
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
            <td><b>min</b></td>
            <td>number</td>
            <td>0</td>
            <td>Minimum value of the slider</td>
          </tr>
          <tr>
            <td><b>max</b></td>
            <td>number</td>
            <td>100</td>
            <td>Maximum value of the slider</td>
          </tr>
          <tr>
            <td><b>step</b></td>
            <td>number</td>
            <td>1</td>
            <td>Increment step for the slider value</td>
          </tr>
        </tbody>
      </table>

      <h3>Features</h3>
      <ul>
        <li>Interactive range input with visual feedback</li>
        <li>Real-time value display</li>
        <li>Customizable min, max, and step values</li>
        <li>Automatic initial value calculation (midpoint of min and max)</li>
        <li>Responsive design that works on all devices</li>
      </ul>

      <h3>Notes</h3>
      <p>Useful for forms, filters, or any input requiring a range selection. The component automatically calculates the initial value as the midpoint between min and max values. The slider uses the native HTML range input for accessibility and touch support.</p>
    </div>
  );
};

export default SliderDocs;
