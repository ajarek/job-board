'use client'
import React, { useState, useRef, useEffect } from 'react'
import { Button } from './ui/button'
import { Bold, Italic, Underline, Strikethrough, CaseUpper, CaseSensitive, AlignCenter } from 'lucide-react'

const TextEditor = () => {
  const editorRef = useRef<HTMLTextAreaElement>(null)


  const [bold, setBold] = useState<boolean>(false)
  const [italic, setItalic] = useState<boolean>(false)
  const [underline, setUnderline] = useState<boolean>(false)
  const [strikethrough, setStrikethrough] = useState<boolean>(false)
  const [uppercase, setUppercase] = useState<boolean>(false)
  const [capitalize, setCapitalize] = useState<boolean>(false)
  const [center, setCenter] = useState<boolean>(false)


  useEffect(() => {
    const text = document.querySelector('textarea')
    

    bold ? text?.classList.add('font-bold') : text?.classList.remove('font-bold')
    italic ? text?.classList.add('italic') : text?.classList.remove('italic')
    underline ? text?.classList.add('underline') : text?.classList.remove('underline')
    strikethrough ? text?.classList.add('line-through') : text?.classList.remove('line-through')
    uppercase ? text?.classList.add('uppercase') : text?.classList.remove('uppercase')
    capitalize ? text?.classList.add('capitalize') : text?.classList.remove('capitalize')
    center ? text?.classList.add('text-center') : text?.classList.remove('text-center')

  }, [bold, italic, underline, strikethrough, uppercase, capitalize, center])

  return (
    <div>
      <div className='flex flex-wrap gap-2'>
        <Button onClick={() => setBold(!bold)}><Bold /></Button>
        <Button onClick={() => setItalic(!italic)}><Italic /></Button>
        <Button onClick={() => setUnderline(!underline)}><Underline /></Button>
        <Button onClick={() => setStrikethrough(!strikethrough)}><Strikethrough /></Button>
        <Button onClick={() => setUppercase(!uppercase)}><CaseUpper /></Button>
        <Button onClick={() => setCapitalize(!capitalize)}><CaseSensitive /></Button>
        <Button onClick={() => setCenter(!center)}><AlignCenter /></Button>


      </div>
      <textarea ref={editorRef} name="description" id="" rows={5} placeholder='Enter your text here' className='w-full p-4 rounded-lg'></textarea>
    </div>
  )
}

export default TextEditor