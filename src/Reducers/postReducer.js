import {
    ADD_COMMENT,
    ADD_POST,
    DELETE_COMMENT,
    DELETE_POST,
    EDIT_POST,
    SET_POST,
    SET_POSTS,
    VOTE_POST
} from "./actionTypes"

const INITIAL_STATE = {}

export default function postReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_POST:
            const comments = {};
            action.post.comments.forEach(comment => {
                comments[comment.id] = comment;
            });
            action.post.comments = comments;
            return {
                ...action.posts, [action.post.id]: action.post
            }
        case SET_POSTS:
            return { ...action.posts };
        case ADD_POST:
            return {
                ...state, [action.post.id]: action.post
            }
        case VOTE_POST:
            {
                const post = { ...state[action.postId] };
                post.votes = action.votes;
                return {
                    ...state, [action.postId]: post
                }
            }
        case ADD_COMMENT:
            const post = state[action.postId];
            if (!post.comments) post.comments = {};
            post.comments = {
                ...post.comments, [action.comment.id]: action.comment
            };
            return {
                ...state, [action.postId]: { ...post }
            }
        case DELETE_COMMENT:
            const postToUpdate = state[action.postId];
            const updatedComments = { ...postToUpdate.comments };
            delete updatedComments[action.commentId];
            return {
                ...state, [action.postId]: { ...postToUpdate, comments: updatedComments }
            }
        case DELETE_POST:
            const { [action.postId]: value, ...newState } = state;
            return newState;
        case EDIT_POST:
            return {
                ...state, [action.postId]: action.post
            }
        default:
            return state
    }
}