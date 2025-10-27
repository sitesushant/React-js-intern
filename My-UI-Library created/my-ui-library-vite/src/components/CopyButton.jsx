import React, { useState } from "react";

const CopyButton = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <button className={`copy-button ${copied ? 'copied' : ''}`} onClick={handleCopy}>
      {copied ? "✅ Copied!" : "📋 Copy Code"}
    </button>
  );
};

export default CopyButton;
