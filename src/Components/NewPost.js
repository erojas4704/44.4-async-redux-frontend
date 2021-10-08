import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addPost, editPost } from "../Reducers/actions";
import { Redirect, useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";

export default function NewPost() {
    const { id } = useParams();
    const post = useSelector((state) => id ? state.posts[id] : null);

    const [form, setForm] = useState(post || { title: '', description: '', body: '' });
    const [shouldRedirect, setShouldRedirect] = useState(false);
    const dispatch = useDispatch();

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (post) {
            dispatch(editPost(post.id, form));
        } else {
            dispatch(addPost({ ...form, id: uuid() }));
        }

        setForm({ title: '', description: '', body: '' });
        setShouldRedirect(true);
    }

    if (shouldRedirect) {
        return <Redirect to="/" />
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" name="title" placeholder="Enter title" value={form.title} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="my-2" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" name="description" placeholder="Description" value={form.description} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3 my-2" controlId="body">
                <Form.Label>Body</Form.Label>
                <Form.Control as="textarea" name="body" value={form.body} onChange={handleChange} />
            </Form.Group>

            <Button variant="primary" type="submit">Post</Button>
            <Link to="/"><Button variant="secondary" className="mx-2">Cancel</Button></Link>
        </Form>
    )
}