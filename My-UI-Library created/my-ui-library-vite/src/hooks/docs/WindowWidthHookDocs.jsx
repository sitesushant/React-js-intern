import React from "react";
import useWindowWidth from "../useWindowWidth";
import CopyButton from "../../components/CopyButton";

const WindowWidthHookDocs = () => {
  const width = useWindowWidth();

  const usageCode = `const width = useWindowWidth();`;

  const sourceCode = `import { useState, useEffect } from "react";

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};

export default useWindowWidth;`;

  return (
    <div>
      <h1>useWindowWidth Hook</h1>
      <p>The useWindowWidth hook provides a reactive way to track the current window width. It automatically updates whenever the window is resized and returns the current width in pixels.</p>

      <div className="example-section">
        <h3>Example</h3>
        <div style={{ 
          padding: '20px', 
          background: '#f8f9fa', 
          border: '1px solid #e9ecef', 
          borderRadius: '8px',
          textAlign: 'center',
          fontSize: '18px',
          fontWeight: '500'
        }}>
          Current window width: <strong style={{ color: '#007bff' }}>{width}px</strong>
        </div>
        <p style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>
          Try resizing your browser window to see the value update in real-time!
        </p>
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

      <h3>Returns</h3>
      <table className="props-table">
        <thead>
          <tr>
            <th>Value</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><b>width</b></td>
            <td>number</td>
            <td>The current window width in pixels</td>
          </tr>
        </tbody>
      </table>

      <h3>Features</h3>
      <ul>
        <li>Real-time window width tracking</li>
        <li>Automatic event listener management</li>
        <li>Cleanup on component unmount</li>
        <li>Initial value from current window width</li>
        <li>No dependencies required</li>
      </ul>

      <h3>Use Cases</h3>
      <ul>
        <li>Responsive design logic</li>
        <li>Conditional rendering based on screen size</li>
        <li>Dynamic styling adjustments</li>
        <li>Mobile/desktop feature toggles</li>
        <li>Layout calculations</li>
      </ul>

      <h3>Notes</h3>
      <p>This hook is perfect for creating responsive components that need to adapt to different screen sizes. The hook automatically handles event listener cleanup to prevent memory leaks. The initial value is set to the current window width, so it works correctly even during server-side rendering.</p>
    </div>
  );
};

export default WindowWidthHookDocs;
