import React from "react";
import Button from "../Button";
import CopyButton from "../CopyButton";

const ButtonDocs = () => {
  const usageCode = `<Button label="Primary Button" onClick={() => alert("Clicked!")} />`;
  
  const sourceCode = `import React from "react";

const Button = ({ label = "Click Me", onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;`;

  return (
    <div>
      <h1>Button Component</h1>
      <p>The Button component is used to trigger actions on user interaction. It is fully customizable with label text and click handler.</p>

      <div className="example-section">
        <h3>Example</h3>
        <Button label="Primary Button" onClick={() => alert("Clicked!")} />
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
            <td><b>label</b></td>
            <td>string</td>
            <td>"Click Me"</td>
            <td>Text displayed on the button</td>
          </tr>
          <tr>
            <td><b>onClick</b></td>
            <td>function</td>
            <td>-</td>
            <td>Callback function when the button is clicked</td>
          </tr>
        </tbody>
      </table>

      <h3>Notes</h3>
      <p>You can use this component in forms, modals, or anywhere a clickable button is required. The component uses CSS classes for styling, so you can customize its appearance by modifying the <code>.button</code> class in your CSS.</p>
    </div>
  );
};

export default ButtonDocs;
