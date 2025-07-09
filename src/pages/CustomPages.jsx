import React, { useState, useEffect, useRef } from "react";
import "./CustomPages.css";

/**
 * CustomPages component - displays an HTML editor with live preview
 * @returns {JSX.Element} The custom pages component with HTML editor
 */
function CustomPages() {
  const previewRef = useRef(null);

  const [htmlInput, setHtmlInput] =
    useState(`<form action="#" method="post" enctype="multipart/form-data">
    <label for="name">Full Name *</label>
    <input type="text" id="name" name="name" required>

    <label for="email">Email *</label>
    <input type="email" id="email" name="email" required>

    <label for="phone">Phone Number *</label>
    <input type="tel" id="phone" name="phone" required>

    <label for="department">Department *</label>
    <select id="department" name="department" required>
      <option value="">Select Department</option>
      <option value="HR">HR</option>
      <option value="Finance">Finance</option>
      <option value="Development">Development</option>
      <option value="Sales">Sales</option>
      <option value="Support">Support</option>
      <option value="Other">Other</option>
    </select>

    <label for="position">Position *</label>
    <input type="text" id="position" name="position" required>

    <label for="photo">Upload Photo</label>
    <input type="file" id="photo" name="photo" accept="image/*">

    <button type="submit">Submit</button>
  </form>`);

  /**
   * Handles form submission when submit button is clicked
   * @param {Event} e - The form submission event
   */
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted! This is just a preview.");
  };

  /**
   * Sets up event listeners for forms in the preview
   */
  useEffect(() => {
    if (previewRef?.current) {
      const forms = previewRef.current.querySelectorAll("form");
      forms.forEach((form) => {
        form.addEventListener("submit", handleFormSubmit);
      });

      return () => {
        forms.forEach((form) => {
          form.removeEventListener("submit", handleFormSubmit);
        });
      };
    }
  }, [htmlInput]);

  return (
    <div className="custom-pages-container">
      <h2>HTML Editor & Preview</h2>
      <p>Add your HTML code below and see it rendered in real-time:</p>

      <div className="editor-section">
        <div className="input-section">
          <h3>HTML Input</h3>
          <textarea
            value={htmlInput}
            onChange={(e) => setHtmlInput(e.target.value)}
            placeholder="Enter your HTML code here..."
            className="html-input"
          />
        </div>

        <div className="preview-section">
          <h3>Live Preview</h3>
          <div className="preview-container">
            <div
              ref={previewRef}
              className="html-preview"
              dangerouslySetInnerHTML={{ __html: htmlInput }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomPages;
