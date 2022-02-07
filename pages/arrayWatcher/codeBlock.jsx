import { useCallback, useEffect, useState } from "react";
import { EditorState, EditorView, basicSetup } from "@codemirror/basic-setup";
import { javascript } from "@codemirror/lang-javascript";
import { useCode } from "../../hooks/useCode";

const theme = EditorView.theme(
  {
    "&": {
      color: "white",
      backgroundColor: "#034",
      height: "700px",
    },
    ".cm-content": {
      caretColor: "#0e9",
    },
    "&.cm-focused .cm-cursor": {
      borderLeftColor: "#0e9",
    },
    "&.cm-focused .cm-selectionBackground, ::selection": {
      backgroundColor: "#074",
    },
    ".cm-gutters": {
      backgroundColor: "#045",
      color: "#ddd",
      border: "none",
    },
    ".cm-scroller": { overflow: "auto" },
  },
  { dark: true }
);

export function CodeBlock() {
  const [editor, setEditor] = useState();
  const setCode = useCode();

  useEffect(() => {
    let view = new EditorView({
      state: EditorState.create({
        extensions: [basicSetup, javascript(), theme],
      }),
      parent: document.querySelector("#code-editor"),
    });
    setEditor(view);
    return () => {
      view.destroy();
    };
  }, []);

  const handleSubmit = useCallback(() => {
    const codeText = editor.state.doc.text.join("\n");
    setCode(codeText);
  }, [editor, setCode]);

  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <div id="code-editor"> </div>
      <div>
        <button onClick={handleSubmit}>submit</button>
      </div>
    </div>
  );
}

export default CodeBlock;
