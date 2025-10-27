import React from "react";
import useLocalStorage from "../useLocalStorage";
import CopyButton from "../../components/CopyButton";

const LocalStorageHookDocs = () => {
  const [name, setName] = useLocalStorage("name", "");
  const [age, setAge] = useLocalStorage("age", 25);

  const usageCode = `const [name, setName] = useLocalStorage("name", "default");
const [age, setAge] = useLocalStorage("age", 25);`;

  const sourceCode = `import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;`;

  return (
    <div>
      <h1>useLocalStorage Hook</h1>
      <p>The useLocalStorage hook provides a way to persist state in the browser's localStorage. It automatically syncs the state with localStorage and handles serialization/deserialization of values.</p>

      <div className="example-section">
        <h3>Example</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '400px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Name:</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Type your name..."
              style={{
                width: '100%',
                padding: '8px 12px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px'
              }}
            />
            <p style={{ margin: '5px 0 0 0', fontSize: '14px', color: '#666' }}>Stored value: <strong>{name || 'Empty'}</strong></p>
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Age:</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(parseInt(e.target.value) || 0)}
              placeholder="Enter your age"
              style={{
                width: '100%',
                padding: '8px 12px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px'
              }}
            />
            <p style={{ margin: '5px 0 0 0', fontSize: '14px', color: '#666' }}>Stored value: <strong>{age}</strong></p>
          </div>
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

      <h3>Parameters</h3>
      <table className="props-table">
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><b>key</b></td>
            <td>string</td>
            <td>The localStorage key to store the value under</td>
          </tr>
          <tr>
            <td><b>initialValue</b></td>
            <td>any</td>
            <td>The initial value to use if no value exists in localStorage</td>
          </tr>
        </tbody>
      </table>

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
            <td><b>value</b></td>
            <td>any</td>
            <td>The current value from localStorage</td>
          </tr>
          <tr>
            <td><b>setValue</b></td>
            <td>function</td>
            <td>Function to update the value (similar to useState setter)</td>
          </tr>
        </tbody>
      </table>

      <h3>Notes</h3>
      <p>This hook automatically handles JSON serialization and deserialization, so you can store complex objects. The hook will persist values across browser sessions. If localStorage is not available (e.g., in SSR environments), it will fall back to the initial value.</p>
    </div>
  );
};

export default LocalStorageHookDocs;
