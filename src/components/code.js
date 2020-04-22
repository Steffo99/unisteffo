import {Component} from 'preact'
import SyntaxHighlighter from 'react-syntax-highlighter'
import {monokai} from "react-syntax-highlighter/dist/cjs/styles/hljs";

export default class Code extends Component {
    render() {
        let indent_regex = /^[ \t]+/;

        let lines = this.props.children.split("\n").filter((line) => {
            return line !== "";
        });
        let match = null;

        for(let i = 0; i < lines.length; i++) {
            match = indent_regex.exec(lines[i]);
            if(match !== null) break;
        }

        let start;
        if(match === null) {
            start = 0;
        }
        else {
            start = match[0].length;
        }

        let result = lines.map((line) => {
            return line.substr(start);
        });

        return (
            <SyntaxHighlighter language={this.props.language ? this.props.language : "plaintext"} style={monokai}>
                {result.join("\n")}
            </SyntaxHighlighter>
        )
    }
}
