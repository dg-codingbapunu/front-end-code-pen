import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import { Controlled as ControlledEditor } from "react-codemirror2";
import { useState } from "react";
import { MdOutlineOpenWith } from "react-icons/md";

const Editor = ({ displayName, language, value, onChange }) => {
  const [open, setOpen] = useState(true);

  const handleChange = (editor, data, value) => {
    onChange(value);
  };

  return (
    <div className={`editor-container ${open ? "" : "collapsed"}`}>
      <div className="editor-title">
        {displayName}
        <button
          className="btn-icon"
          onClick={() => setOpen((prevOpen) => !prevOpen)}
        >
          <MdOutlineOpenWith />
        </button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code -mirror-wrapper"
        options={{
          lineWrapping: true,
          lineNumbers: true,
          lint: true,
          theme: "material",
          mode: language,
        }}
      />
    </div>
  );
};

export default Editor;
