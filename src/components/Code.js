// Overview: component to render code snippet with react markdown library and SyntaxHighlighter

import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

export default function Code({ content }) {

    // Add the CodeCopyBtn component to our PRE element
    const Pre = ({ children }) =>
        <pre className="">
            {children}
        </pre>

    return (
        <ReactMarkdown
            className=''
            linkTarget='_blank'
            components={{
                pre: Pre,
                code({ node, inline, className = "", children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '')
                    return !inline && match ? (
                        <SyntaxHighlighter
                            style={a11yDark}
                            language="javascript"
                            className=""
                            PreTag="div"
                            {...props}
                        >
                            {/* the String(children).replace(/\n$/, '') expression is used to remove any trailing
                             newline character from the "children"
                             prop of the "code" element before passing it to the "SyntaxHighlighter" component.  */}
                            {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                    ) : (
                        <SyntaxHighlighter
                            className=""
                            style={a11yDark}
                            language="javascript"
                            PreTag="div"
                            {...props}
                        >
                            {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                    )
                }
            }}
        >
            {content}
        </ReactMarkdown>
    )
}
