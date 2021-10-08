import { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function NewCommentForm({ comment, submit }) {
    const [form, setForm] = useState({ comment: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        submit(form);
        setForm({ comment: '' });
    }

    return (
        <Form onSubmit={handleSubmit} className="my-3">
            <Form.Group controlId="comment">
                <Form.Control
                    type="text"
                    //id="comment"
                    name="comment"
                    placeholder="New Comment"
                    value={form.comment}
                    onChange={handleChange}
                />
            </Form.Group>
            <Button className="my-3" variant="primary" type="submit">Add</Button>
        </Form>
    )
}