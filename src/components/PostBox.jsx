import React from 'react'
import { deleteData, infoHolder } from '../redux/firstSlicer'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

export default function PostBox({ posts }) {
    const dispatch = useDispatch()
    return (
        <div>
            {
                posts.map((item, index) => {
                    return <div key={index} className='relative rounded bg-[#e6e6e6] h-max-[250px] mb-10 px-7 py-5 flex justify-between'>
                        <div className='flex flex-col justify-evenly'>
                            <h3 className='text-[18px]'>Author: {item.author}</h3>
                            <h3 className='text-[18px]'>Title: {item.title}</h3>
                            <h3 className='text-[18px]'>{item.content}</h3>
                        </div>
                        {/* <div className='flex flex-col'> */}
                            <button className='absolute right-5 top-2' onClick={() => dispatch(deleteData(item._id))}><p title='Delete the post' className='text-red-600 text-[20px]'>X</p></button>
                            <button className='absolute top-2 right-10' onClick={() => dispatch(infoHolder({id: item._id, author: item.author}))}><Link to="/updatePage"><p title='Update the post' className='text-green-400 text-[20px]'>U</p></Link></button>
                        {/* </div> */}
                    </div>
                })
            }
        </div>
    )
}
