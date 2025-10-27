import React from "react";
import Table from "../Table";
import CopyButton from "../CopyButton";

const TableDocs = () => {
  const columns = ["Name", "Age", "Country", "Occupation"];
  const data = [
    ["Alice Johnson", 24, "USA", "Software Engineer"],
    ["Bob Smith", 27, "UK", "Designer"],
    ["Charlie Brown", 29, "Nepal", "Product Manager"],
    ["Diana Prince", 31, "Canada", "Data Scientist"],
  ];

  const usageCode = `<Table 
  columns={["Name", "Age", "Country"]} 
  data={[
    ["Alice", 24, "USA"],
    ["Bob", 27, "UK"],
    ["Charlie", 29, "Nepal"]
  ]} 
/>`;

  const sourceCode = `import React from "react";

const Table = ({ columns, data }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((col, i) => (
            <th key={i}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={j}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;`;

  return (
    <div>
      <h1>Table Component</h1>
      <p>The Table component is used to display tabular data in rows and columns. It provides a clean and structured way to present data with proper headers and organized rows.</p>

      <div className="example-section">
        <h3>Example</h3>
        <Table columns={columns} data={data} />
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
            <td><b>columns</b></td>
            <td>array</td>
            <td>-</td>
            <td>Array of strings representing column headers</td>
          </tr>
          <tr>
            <td><b>data</b></td>
            <td>array</td>
            <td>-</td>
            <td>Array of arrays, where each inner array represents a row of data</td>
          </tr>
        </tbody>
      </table>

      <h3>Data Structure</h3>
      <p>The data prop should be structured as follows:</p>
      <ul>
        <li><b>columns</b> - An array of strings: <code>["Header1", "Header2", "Header3"]</code></li>
        <li><b>data</b> - An array of arrays: <code>[["Row1Col1", "Row1Col2"], ["Row2Col1", "Row2Col2"]]</code></li>
      </ul>

      <h3>Notes</h3>
      <p>Good for displaying datasets, reports, or any structured data. The component automatically handles the rendering of headers and data rows. Each data row should have the same number of elements as there are columns. The table uses CSS classes for styling, so you can customize its appearance by modifying the <code>.table</code>, <code>th</code>, and <code>td</code> classes.</p>
    </div>
  );
};

export default TableDocs;
