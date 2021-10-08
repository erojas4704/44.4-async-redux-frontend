import { useDispatch } from "react-redux";
import { Redirect, useParams } from "react-router";
import { deletePost } from "../Reducers/actions";

export default function DeletePost() {
    const { id } = useParams();
    const dispatch = useDispatch();
    dispatch(deletePost(id));

    return <Redirect to="/" />
}