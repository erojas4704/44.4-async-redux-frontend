import PostPreview from "./PostPreview";
import "./Home.css";
import {  useSelector } from "react-redux";

export default function Home() {
    const posts = useSelector(state => state.posts);

    return (
        <div className="home-previews">
            {Object.keys(posts).map(id => <PostPreview key={id} post={posts[id]} />)}
        </div>
    )
}