import React, { useState } from 'react'
import NavbarBackwards from './NavbarBackwards'
import { useDispatch } from 'react-redux'
import { createData } from '../redux/firstSlicer'

export default function InputPage() {
    const [inputAuthor, setInputAuthor] = useState("")
    const [inputTitle, setInputTitle] = useState("")
    const [inputText, setInputText] = useState("")

    const dispatch = useDispatch()

    const inputController = () => {
        dispatch(createData({ author: inputAuthor, title: inputTitle, content: inputText }))
        setInputAuthor("")
        setInputTitle("")
        setInputText("")
        alert("Post has been successful created")
    }

    return (
        <>
            <NavbarBackwards />
            <div className='flex justify-center'>
                <div className='flex flex-col bg-[#e6e6e6] rounded p-[3%] mt-[10%] gap-5'>
                    <div className='flex flex-col gap-2'>
                        <input className='w-[700px] h-[50px] text-[22px] rounded' type="text" placeholder='Author:' onChange={(e) => { setInputAuthor(e.target.value) }} value={inputAuthor} />
                        <input className='w-[700px] h-[50px] text-[22px] rounded' type="text" placeholder='Title:' onChange={(e) => { setInputTitle(e.target.value) }} value={inputTitle} />
                        <input className='w-[700px] h-[50px] text-[22px] rounded' type="text" placeholder='Content Text:' onChange={(e) => { setInputText(e.target.value) }} value={inputText} />
                    </div>
                    {
                        inputText.length < 10
                            ? <button title="Text must include at least 10 letters" onClick={() => alert("Text must include at least 10 letters, your text have " + inputText.length)} className={'bg-gray-300 rounded p-3 w-[700px] cursor-not-allowed'}>Submit</button>
                            : <button onClick={() => inputController()} className={'bg-green-400 hover:bg-green-500 rounded p-3 w-[700px]'}>Submit</button>
                    }
                </div>
            </div>
        </>
    )
}
