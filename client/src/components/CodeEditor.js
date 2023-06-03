import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import {javascript} from '@codemirror/lang-javascript';
import {cpp} from '@codemirror/lang-cpp';
import {java} from '@codemirror/lang-java';


const CodeEditor = (props) => {
    // FIXME: This feels a little sketchy, improve this
    const onChange = React.useCallback((value, viewUpdate) => {
        console.log('value: ', value);
    }, []);
    
    const languageExtensions = (language) => {
        if (language === 'C' || language === 'C++') {
            return [cpp()];
        } else if (language === 'Java') {
            return [java({jsx: true})];
        } else {
            return [javascript({jsx: true})];
        }
    }

    return <CodeMirror 
        className={props.className}
        value='console.log("hello world");'
        height='100%'
        width='100%'
        onChange={onChange}
        extensions={languageExtensions(props.language)}    
    />
}

export default CodeEditor;