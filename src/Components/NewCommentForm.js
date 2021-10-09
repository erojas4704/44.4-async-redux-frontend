import { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function NewCommentForm({ comment, submit }) {
    const [form, setForm] = useState({ text: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        submit(form);
        setForm({ text: '' });
    }

    return (
        <Form onSubmit={handleSubmit} className="my-3">
            <Form.Group controlId="text">
                <Form.Control
                    type="text"
                    //id="comment"
                    name="text"
                    placeholder="New Comment"
                    value={form.text}
                    onChange={handleChange}
                />
            </Form.Group>
            <Button className="my-3" variant="primary" type="submit">Add</Button>
        </Form>
    )
}