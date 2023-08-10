import {createSlice}  from "@reduxjs/toolkit"


const PostSlice = createSlice({
    name:"postchooser",
    initialState:{
        following:false,
    },
    reducers:{
        updateState:((state,actions)=>{
            state.following = actions.payload.following
            
        })
    }
});


export const {updateState}  = PostSlice.actions;

export default PostSlice.reducer;