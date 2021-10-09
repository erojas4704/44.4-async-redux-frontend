import axios from "axios";
import { ADD_COMMENT, ADD_POST, DELETE_COMMENT, DELETE_POST, EDIT_POST, GOT_ERROR, SET_POST, SET_POSTS, SHOW_LOADING, VOTE_POST } from "./actionTypes";

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

export function editPost(post) {
    return {
        type: EDIT_POST,
        postId: post.id,
        post
    }
}

export function deleteComment(postId, commentId) {
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

export function votePost(postId, votes){
    return {
        type: VOTE_POST,
        postId,
        votes
    }
}

export function deleteCommentFromAPI(postId, commentId) {
    return async dispatch => {
        dispatch(showLoading());
        try {
            const res = await axios.delete(`/api/posts/${postId}/comments/${commentId}`);
            if (res.data.message === "deleted")
                dispatch(deleteComment(postId, commentId));
        } catch (err) {
            dispatch(gotError(err.response.data));
        }
    }
}

export function pushNewCommentToAPI(postId, comment) {
    return async dispatch => {
        dispatch(showLoading());
        try {
            const res = await axios.post(`/api/posts/${postId}/comments`, comment);
            dispatch(addComment(postId, res.data));
        } catch (err) {
            dispatch(gotError(err.response.data));
        }
    }
}

export function votePostInAPI(postId, direction) {
    return async dispatch => {
        dispatch(showLoading());
        try {
            const res = await axios.post(`/api/posts/${postId}/vote/${direction}`);
            dispatch(votePost(postId, res.data.votes))
        } catch (err) {
            dispatch(gotError(err.response.data));
        }
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

export function editPostInAPI(postId, post) {
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            let res = await axios.put(`/api/posts/${postId}`, post);
            dispatch(editPost(res.data))
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