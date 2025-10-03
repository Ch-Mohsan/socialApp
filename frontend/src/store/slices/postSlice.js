import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  posts: [],
  loading: false,
  error: null,
}

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    fetchPostsStart: (state) => {
      state.loading = true
      state.error = null
    },
    fetchPostsSuccess: (state, action) => {
      state.loading = false
      state.posts = action.payload
    },
    fetchPostsFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    addPost: (state, action) => {
      state.posts.unshift(action.payload)
    },
    updatePost: (state, action) => {
      const index = state.posts.findIndex(post => post.id === action.payload.id)
      if (index !== -1) {
        state.posts[index] = action.payload
      }
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter(post => post.id !== action.payload)
    },
    likePost: (state, action) => {
      const post = state.posts.find(post => post.id === action.payload)
      if (post) {
        post.likes += 1
        post.isLiked = true
      }
    },
    unlikePost: (state, action) => {
      const post = state.posts.find(post => post.id === action.payload)
      if (post) {
        post.likes -= 1
        post.isLiked = false
      }
    },
  },
})

export const {
  fetchPostsStart,
  fetchPostsSuccess,
  fetchPostsFailure,
  addPost,
  updatePost,
  deletePost,
  likePost,
  unlikePost,
} = postSlice.actions

export default postSlice.reducer