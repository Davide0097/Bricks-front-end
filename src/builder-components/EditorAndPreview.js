import React from 'react'

// Sandbox library import
import {
    // Sandpack,
    SandpackProvider,
    SandpackLayout,
    SandpackCodeEditor,
    SandpackPreview
} from "@codesandbox/sandpack-react";
import { levelUp } from "@codesandbox/sandpack-themes";

const EditorAndPreview = () => {
  return (
    <SandpackProvider
    template="react"
    theme={levelUp}
    options={{
        externalResources: ["https://cdn.tailwindcss.com"]
    }}
    files={{
        "/App.js": `export default function App() {return <div>` + 'ciao' + `</div>}`,
        "/App2.js": `export default function App() {return <div>` + 'ciao' + `</div>}`
    }}>
    <SandpackLayout>
        <SandpackCodeEditor />
        <SandpackPreview />
    </SandpackLayout>
</SandpackProvider>
  )
}

export default EditorAndPreview;