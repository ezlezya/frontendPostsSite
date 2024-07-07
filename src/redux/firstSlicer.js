import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
    isLoading: false,
    info: {
        id: "",
        author: ""
    } //тут зберігатиметься id для подальшого використання
}

export const fetchingData = createAsyncThunk(
    "posts/fetchingData",
    async () => {
        try {
            // const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
            const response = await fetch('http://localhost:5002/api/posts')
            const data = response.json()
            return data
        }
        catch (error) {
            console.error("Fetch error: " + error);
        }
    }
)
export const deleteData = createAsyncThunk(
    "posts/deleteData",
    async (id, {dispatch}) => { //перший параметр, те що буде аргументом аснхронної функції
        try {
            const response = await fetch(`http://localhost:5002/api/posts/${id}`, {
                method: 'DELETE'
            })
            if(!response.ok) {
                throw new Error('Response error!!!')
            }
            dispatch(deletePostLocaly(id)) //асинхронна функ. видалятиме пост на сервері, а ця видалить локально
        }
        catch (error) {
            console.error("Fetch error: " + error);
        }
    }
)
export const createData = createAsyncThunk(
    "posts/createData",
    async (post, {dispatch}) => {
        try {
            const response = await fetch(`http://localhost:5002/api/posts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({author: post.author, title: post.title, content: post.content})
            })
            if(!response.ok) {
                throw new Error('Response error!!!')
            }
            const data = await response.json()
            dispatch(createPostLocaly(data))
        }
        catch (error) {
            console.error("Fetch error: " + error);
        }
    }
)
export const updateData = createAsyncThunk(
    "posts/updateData",
    async (post) => {
        try {
            const response = await fetch(`http://localhost:5002/api/posts`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({_id: post.id, author: post.author, title: post.title, content: post.content})
            })
            if(!response.ok) {
                throw new Error('Response error!!!')
            }
        }
        catch (error) {
            console.error("Fetch error: " + error);
        }
    }
)

const postsSlicer = createSlice({
    name: "posts",
    initialState,
    reducers: {
        deletePostLocaly(state, action) { //функція, для внесення змін локально
            state.data = state.data.filter(item => item._id !== action.payload)
        },
        createPostLocaly(state, action) {
            state.data.push(action.payload)
        },
        infoHolder(state, action) { //зберігатимемо id та автора, використовуватимемо його для заміни контекста нашого конкретного поста
            state.info = action.payload
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchingData.pending, (state) => { state.isLoading = true })
            .addCase(fetchingData.fulfilled, (state, action) => { state.data = action.payload, state.isLoading = false })    
    }
})

export const { deletePostLocaly, createPostLocaly, infoHolder } = postsSlicer.actions
export const postsReducer = postsSlicer.reducer