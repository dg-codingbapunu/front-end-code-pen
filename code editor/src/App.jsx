import React, { useState, useEffect } from "react";
import Editor from "./components/Editor";
import UselocalStorage from "./hooks/UselocalStorage";

const App = () => {
  const [html, setHtml] = UselocalStorage("html", "");
  const [css, setCss] = UselocalStorage("css", "");
  const [js, setJs] = UselocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(
        `
  <html>
  <body>${html}</body>
  <style>${css}</style>
  <script>${js}</script>
  </html>
`
      );
    }, 300);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <>
      <div className="top-pane">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </>
  );
};

export default App;
