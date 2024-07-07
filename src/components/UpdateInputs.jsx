import React, { useState } from 'react'
import NavbarBackwards from './NavbarBackwards'
import { updateData } from '../redux/firstSlicer'
import { useDispatch, useSelector } from 'react-redux'



export default function UpdateInputs() {
    const postInfo = useSelector((state) => state.posts.info)
    const dispatch = useDispatch()
    const [inputTitle, setInputTitle] = useState("")
    const [inputText, setInputText] = useState("")

    const inputController = () => {
        dispatch(updateData({ id: postInfo.id, author: postInfo.author, title: inputTitle, content: inputText }))
        setInputTitle("")
        setInputText("")
        alert("Post has been successful changed")
    }

    return (
        <>
            <NavbarBackwards />
            <div className='flex justify-center'>
                <div className='flex flex-col bg-[#e6e6e6] rounded p-[3%] mt-[10%] gap-5'>
                    <div className='flex flex-col gap-2'>
                        <input className='w-[700px] h-[50px] text-[22px] rounded' type="text" placeholder='Change the title:' onChange={(e) => { setInputTitle(e.target.value) }} value={inputTitle} />
                        <input className='w-[700px] h-[50px] text-[22px] rounded' type="text" placeholder='Change the text:' onChange={(e) => { setInputText(e.target.value) }} value={inputText} />
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
