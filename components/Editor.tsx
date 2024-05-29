import React, { useState } from 'react';
import { Bold, Italic, Underline, Strikethrough, CaseUpper, CaseSensitive, AlignCenter } from 'lucide-react'
import { Button } from './ui/button';
const TextAreaComponent = () => {
    const [text, setText] = useState('');
    const [selectionStart, setSelectionStart] = useState(null);
    const [selectionEnd, setSelectionEnd] = useState(null);

    const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
    };

    const handleSelection = (event:any) => {
        setSelectionStart(event.target.selectionStart);
        setSelectionEnd(event.target.selectionEnd);
    };

    const UpperCase = () => {
        if (selectionStart !== null && selectionEnd !== null && selectionStart !== selectionEnd) {
            const before = text.slice(0, selectionStart);
            const selected = text.slice(selectionStart, selectionEnd);
            const after = text.slice(selectionEnd);
            const newText = `${before} ${selected.toUpperCase()} ${after}`;
            setText(newText);
            // Reset selection
            setSelectionStart(null);
            setSelectionEnd(null);
        }
    };
    const LowerCase = () => {
        if (selectionStart !== null && selectionEnd !== null && selectionStart !== selectionEnd) {
            const before = text.slice(0, selectionStart);
            const selected = text.slice(selectionStart, selectionEnd);
            const after = text.slice(selectionEnd);
            const newText = `${before} ${selected.toLowerCase()} ${after}`;
            setText(newText);
            // Reset selection
            setSelectionStart(null);
            setSelectionEnd(null);
        }
        };
    const BoldText = () => {
        if (selectionStart !== null && selectionEnd !== null && selectionStart !== selectionEnd) {
            const before = text.slice(0, selectionStart);
            const selected = text.slice(selectionStart, selectionEnd);
            const after = text.slice(selectionEnd);
            const newText = `${before} ${selected.bold()} ${after}`;
            setText(newText);
            // Reset selection
            setSelectionStart(null);
            setSelectionEnd(null);
        }
    };

    return (
        <div >
            <div className='flex gap-2'>

           <Button onClick={UpperCase}><CaseUpper /></Button>
           <Button onClick={LowerCase}><CaseSensitive /></Button>
           <Button onClick={BoldText}><Bold /></Button>
            </div>
        
           
            <textarea
                value={text}
                onChange={handleTextChange}
                onSelect={handleSelection}
                name='description'
                rows={5}
                placeholder='Enter your text here' 
                className='w-full p-4 rounded-lg'
            />
        </div>
    );
};

export default TextAreaComponent
