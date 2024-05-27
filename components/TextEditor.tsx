'use client'

import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import { type } from 'os';
type Props = {
	readonly: boolean;
	placeholder: string;
    name: string;
};
 const TextEditor = ({placeholder, readonly }: Props) => {
	const editor = useRef(null);
	const [content, setContent] = useState('');

	
	const config =  {} as any;
	config.readonly = readonly;
	config.placeholder = placeholder;

	return (
		<JoditEditor
			ref={editor}
			value={content}
			config={config}
           
			tabIndex={1} // tabIndex of textarea
			onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			onChange={newContent => {}}
		/>
	);
};
export default TextEditor;