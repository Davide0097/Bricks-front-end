// Sandbox library import
import {
    SandpackProvider,
    SandpackLayout,
    SandpackCodeEditor,
    SandpackPreview
} from "@codesandbox/sandpack-react";

import { levelUp } from "@codesandbox/sandpack-themes";

function ComponentPreview({ componentCode }) {

    return (
        <div>
            <SandpackProvider
                template="react"
                theme={levelUp}
                options={{
                    externalResources: ["https://cdn.tailwindcss.com"]
                }}
                files={{
"/App.js": `export default function App() {
 return <div>
` + componentCode + `
</div>}`,
                }}>
                <SandpackLayout>
                    <SandpackCodeEditor />
                    <SandpackPreview />
                </SandpackLayout>
            </SandpackProvider>
        </div>
    );
}

export default ComponentPreview;

