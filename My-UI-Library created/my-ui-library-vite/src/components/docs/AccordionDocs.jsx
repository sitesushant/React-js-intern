import React from "react";
import Accordion from "../Accordion";
import CopyButton from "../CopyButton";

const AccordionDocs = () => {
  const items = [
    { title: "Section 1", content: "This is the first section with some detailed content that demonstrates how the accordion works." },
    { title: "Section 2", content: "This is the second section with more content to show the collapsible behavior." },
    { title: "Section 3", content: "This is the third section with additional information about the accordion component." },
  ];

  const usageCode = `<Accordion items={[
  { title: "Section 1", content: "Content for section 1" },
  { title: "Section 2", content: "Content for section 2" },
  { title: "Section 3", content: "Content for section 3" }
]} />`;

  const sourceCode = `import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <div
            className="accordion-header"
            onClick={() => handleClick(index)}
          >
            {item.title}
          </div>
          <div
            className={\`accordion-content \${activeIndex === index ? 'active' : ''}\`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;`;

  return (
    <div>
      <h1>Accordion Component</h1>
      <p>The Accordion component allows you to display collapsible sections. Only one section can be open at a time, providing a clean and organized way to present information.</p>

      <div className="example-section">
        <h3>Example</h3>
        <Accordion items={items} />
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
            <td><b>items</b></td>
            <td>array</td>
            <td>-</td>
            <td>Array of objects with title and content properties</td>
          </tr>
        </tbody>
      </table>

      <h3>Item Structure</h3>
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
            <td><b>title</b></td>
            <td>string</td>
            <td>The header text for the accordion section</td>
          </tr>
          <tr>
            <td><b>content</b></td>
            <td>string</td>
            <td>The content to display when the section is expanded</td>
          </tr>
        </tbody>
      </table>

      <h3>Notes</h3>
      <p>Useful for FAQs, menus, or any content that needs to expand/collapse. The component automatically handles the state management for opening and closing sections. Only one section can be open at a time by default.</p>
    </div>
  );
};

export default AccordionDocs;
