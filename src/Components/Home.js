import PostPreview from "./PostPreview";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPostsFromAPI } from "../Reducers/actions";
import LoadingSpinner from "./LoadingSpinner";

export default function Home() {
    const dispatch = useDispatch();
    const { posts, error, loading } = useSelector(state => {
        return {
            posts: state.posts,
            error: state.error,
            loading: state.loading
        }
    });

    const postArray = Object.values(posts);
    postArray.sort((a, b) => {
        return b.votes - a.votes;
    })

    useEffect(() => {
        dispatch(getPostsFromAPI());
    }, [dispatch]);

    return (
        <div className="home-previews">
            {loading && <LoadingSpinner />}
            {postArray.map(post => <PostPreview key={post.id} post={post} />)}
        </div>
    )
}