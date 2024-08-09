import { useState } from 'react'
import './App.scss'

import { marked } from 'marked';

export default function App() {
  // const [focus] = useState(Focus.All);
  const [input, setInput] = useState(
`# This is a heading 
## This is a subheading
**This is some bold text**
This has \`\`inline code\`\`
\`\`\`
<h1>This is some code in a code block</h1>
\`\`\`
Here is a [link](https://www.freecodecamp.org) to the freeCodeCampWebsite.
Here is a **list** of fruits:
- Apple
- Orange
- Watermelon
> This is a block quote
![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  `);
  return (
    <>
      <h1>Markdown Converter</h1>
      <MarkdownInput
        setInput={setInput}
        input={input}
        // focus={focus}
      />
      <ShowMarkdown 
        input={input}
        // focus={focus}
      />
    </>
  );
}

interface MarkdownInputProps {
  setInput: React.Dispatch<React.SetStateAction<string>>,
  input: string,
  // focus: Focus
}
function MarkdownInput({ setInput, input, /* focus */}: MarkdownInputProps) {

  function handleInput(event: React.ChangeEvent<HTMLTextAreaElement>): void {
    setInput(event.target.value);
  }
  // const show: boolean = focus === Focus.Output;

  return (
    <div className="input-container"> 
      <form>
        <textarea 
          className="form-control" 
          id="editor"
          onChange={handleInput}
          value={input}
          placeholder="Enter Markdown here..."
        >{input}</textarea>
      </form>
    </div>
  );
}

interface ShowMarkdownProps {
  input: string
}
function ShowMarkdown({ input }: ShowMarkdownProps) {
  const result = { __html: marked.parse(input) };
  return (
    <div className="markdown-container">
      <div id="preview" dangerouslySetInnerHTML={result}></div>
    </div>
  );
}

