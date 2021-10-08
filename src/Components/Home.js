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

    console.log(posts);

    useEffect(() => {
        dispatch(getPostsFromAPI());
    }, [dispatch]);

    return (
        <div className="home-previews">
            {loading && <LoadingSpinner /> }
            {Object.keys(posts).map(id => <PostPreview key={id} post={posts[id]} />)}
        </div>
    )
}