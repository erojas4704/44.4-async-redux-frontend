import axios from "axios";
import { ADD_COMMENT, ADD_POST, DELETE_COMMENT, DELETE_POST, EDIT_POST, GOT_ERROR, SET_POST, SET_POSTS, SHOW_LOADING } from "./actionTypes";

export function addPost(post) {
    return {
        type: ADD_POST,
        post
    }
}

export function addComment(postId, comment) {
    return {
        type: ADD_COMMENT,
        comment,
        postId
    }
}

export function deletePost(postId) {
    return {
        type: DELETE_POST,
        postId
    }
}

export function editPost(postId, post) {
    return {
        type: EDIT_POST,
        postId,
        post
    }
}

export function deleteComment(commentId, postId) {
    return {
        type: DELETE_COMMENT,
        postId,
        commentId
    }
}

export function showLoading() {
    return {
        type: SHOW_LOADING
    }
}

export function setPost(post) {
    return {
        type: SET_POST,
        post
    }
}

export function setPosts(posts) {
    return {
        type: SET_POSTS,
        posts
    }
}

export function gotError(error) {
    return {
        type: GOT_ERROR,
        error
    }
}


export function pushNewPostToAPI(post) {
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            let res = await axios.post('/api/posts', post);
            dispatch(addPost(res.data))
        } catch (err) {
            dispatch(gotError(err.response.data))
        }
    }
}

export function getPostsFromAPI() {
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            let res = await axios.get('/api/posts');
            dispatch(setPosts(res.data));
        } catch (err) {
            dispatch(gotError(err.response.data));
        }
    }
}

export function getPostDetailsFromAPI(id) {
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            let res = await axios.get(`/api/posts/${id}`);
            dispatch(setPost(res.data));
        } catch (err) {
            dispatch(gotError(err.response.data));
        }
    }
}