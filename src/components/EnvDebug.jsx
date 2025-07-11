/**
 * Debug component to display environment variable values
 * This helps verify that environment variables are being read correctly
 */
import React from "react";

const EnvDebug = () => {
  const envVars = {
    VITE_MAILMODO_SITE_ID: import.meta.env.VITE_MAILMODO_SITE_ID,
    VITE_MAILMODO_BASE_URL: import.meta.env.VITE_MAILMODO_BASE_URL,
    VITE_MAILMODO_SCRIPT_SRC: import.meta.env.VITE_MAILMODO_SCRIPT_SRC,
  };

  const windowVars = {
    "window.MAILMODO_SITE_ID": window.MAILMODO_SITE_ID,
    "window.MAILMODO_BASE_URL": window.MAILMODO_BASE_URL,
    "window.MAILMODO_SCRIPT_SRC": window.MAILMODO_SCRIPT_SRC,
  };

  return (
    <div
      style={{
        padding: "1rem",
        margin: "1rem",
        border: "1px solid #ccc",
        borderRadius: "0.5rem",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h3>Environment Variables Debug</h3>

      <div style={{ marginBottom: "1rem" }}>
        <h4>import.meta.env values:</h4>
        <pre
          style={{
            backgroundColor: "#fff",
            padding: "0.5rem",
            borderRadius: "0.25rem",
          }}
        >
          {JSON.stringify(envVars, null, 2)}
        </pre>
      </div>

      <div>
        <h4>window object values:</h4>
        <pre
          style={{
            backgroundColor: "#fff",
            padding: "0.5rem",
            borderRadius: "0.25rem",
          }}
        >
          {JSON.stringify(windowVars, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default EnvDebug;
