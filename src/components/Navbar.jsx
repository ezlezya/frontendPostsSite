import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='py-5 px-[10%] border-b-[1px] border-black relative'>
            <div className='flex justify-center'>
                <h3 className='text-[26px]'>Posts</h3>
            </div>
                <Link to="/inputPage"><p className='text-[20px] text-green-400 hover:text-green-500 absolute bottom-[28%] right-[25%] cursor-pointer'>+add new post</p></Link>
        </div>
    )
}
