// Sandbox library import
import {
    SandpackProvider,
    SandpackLayout,
    SandpackCodeEditor,
    SandpackPreview
} from "@codesandbox/sandpack-react";

import { levelUp } from "@codesandbox/sandpack-themes";

function CssComponentPreview({ componentCode, componentCssCode }) {

    const htmlCode = componentCode;

    const code = `import "./styles.css";document.getElementById("app").innerHTML = '${htmlCode}';`;
    return (
        <div>
            <SandpackProvider
                template="vanilla"
                theme={levelUp}
                options={{
                    externalResources: ["https://cdn.tailwindcss.com"]
                }}
                files={{
                    "/index.js": code,
                    "styles.css": componentCssCode,
                }}>
                <SandpackLayout>
                    <SandpackCodeEditor />
                    <SandpackPreview />
                </SandpackLayout>
            </SandpackProvider>
        </div>
    );
}

export default CssComponentPreview;

