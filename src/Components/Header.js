import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="jumbotron">
            <h1 className="display-4">Microblog</h1>
            <p className="lead">Spew your bullshit here on the internet nobody cares.</p>
            <nav className="blog-nav">
                <Link to="/">Blog</Link>
                <Link to="/new">Add a new post</Link>
            </nav>
        </div>
    );
}