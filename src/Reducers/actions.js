import { ADD_COMMENT, ADD_POST, DELETE_COMMENT, DELETE_POST, EDIT_POST } from "./actionTypes";

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