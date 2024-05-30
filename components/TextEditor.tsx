import React, { useEffect, useState } from 'react';
import { Bold, Italic, Underline, Strikethrough, CaseUpper, AlignCenter, CaseLower } from 'lucide-react'
import { Button } from './ui/button';

const TextAreaComponent = () => {
    const [text, setText] = useState('');
    const [selectionStart, setSelectionStart] = useState(null);
    const [selectionEnd, setSelectionEnd] = useState(null);
    const [center, setCenter] = useState<boolean>(false)
    const [bold, setBold] = useState<boolean>(false)
    const [italic, setItalic] = useState<boolean>(false)
    const [underline, setUnderline] = useState<boolean>(false)
    const [strikethrough, setStrikethrough] = useState<boolean>(false)

    useEffect(() => {
        const textArea = document.querySelector('textarea')
        center ? textArea?.classList.add('text-center') : textArea?.classList.remove('text-center')
        bold ? textArea?.classList.add('font-bold') : textArea?.classList.remove('font-bold')
        italic ? textArea?.classList.add('italic') : textArea?.classList.remove('italic')
        underline ? textArea?.classList.add('underline') : textArea?.classList.remove('underline')
        strikethrough ? textArea?.classList.add('line-through') : textArea?.classList.remove('line-through')
    }, [center, bold, italic, underline, strikethrough])

    const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
    };

    const handleSelection = (event: any) => {
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

    return (
        <div >
            <div className='flex gap-2 flex-wrap items-center py-2'>
                <Button onClick={UpperCase}><CaseUpper /></Button>
                <Button onClick={LowerCase}><CaseLower /></Button>
                <Button onClick={() => setCenter(!center)}><AlignCenter /></Button>
                <Button onClick={() => setBold(!bold)}><Bold /></Button>
                <Button onClick={() => setItalic(!italic)}><Italic /></Button>
                <Button onClick={() => setUnderline(!underline)}><Underline /></Button>
                <Button onClick={() => setStrikethrough(!strikethrough)}><Strikethrough /></Button>
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
