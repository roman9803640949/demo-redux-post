import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    {id:'1',title:'Learning Redux Toolkit',content:"Learning Redux ToolkitLearning Redux ToolkitLearning Redux Toolkit"},
    {id:'1',title:'Learning slices',content:"Learning slicesLearning slicesLearning slices"},
]

const postsSlice = createSlice({
    name: "post",
    initialState,
    reducers:{}
})
export const selectAllPosts = (state) => state.posts
export default postsSlice.reducer