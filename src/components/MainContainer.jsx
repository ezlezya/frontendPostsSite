import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createData, fetchingData } from '../redux/firstSlicer'
import Navbar from './Navbar'
import PostBox from './PostBox'

export default function MainContainer() {
    const posts = useSelector((state) => state.posts.data)
    const isLoading = useSelector((state) => state.posts.isLoading)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchingData())
    }, [dispatch])

    return (
        <>
            <Navbar />
            <div className='px-[10%] py-[3%]'>
                <PostBox posts={posts}/>
                {isLoading && <h3 className='absolute right-[50%] text-[30px]'>Loading...</h3>}
            </div>
        </>
    )
}
