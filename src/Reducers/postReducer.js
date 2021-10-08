import { ADD_COMMENT, ADD_POST, DELETE_COMMENT, DELETE_POST, EDIT_POST } from "./actionTypes"
import { v4 as uuid } from "uuid"

const INITIAL_STATE = {}

export default function postReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state, [action.post.id]: action.post
            }
        case ADD_COMMENT:
            const post = state[action.postId];
            if (!post.comments) post.comments = {};
            post.comments = {
                ...post.comments, [uuid()]: { comment: action.comment }
            };
            return {
                ...state, [action.postId]: {...post}
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