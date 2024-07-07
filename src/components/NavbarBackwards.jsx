import React from 'react'
import { Link } from 'react-router-dom'

export default function NavbarBackwards() {
    return (
        <div className='py-5 px-[10%] border-b-[1px] border-black relative'>
            <Link to="/"><p className='text-[20px] text-red-400 hover:text-red-500 absolute bottom-[28%] left-[25%] cursor-pointer'>Go Back</p></Link>
            <div className='flex justify-center'>
                <h3 className='text-[26px]'>Posts</h3>
            </div>
        </div>
    )
}
