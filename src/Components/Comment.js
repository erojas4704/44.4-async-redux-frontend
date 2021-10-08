import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Comment.css'

export default function Comment({ comment }) {

    const handleDelete = () => {
        console.log("delete this trash");
    }

    return (
        <div className="comment">
            <FontAwesomeIcon className="comment-delete" icon={faTrash} style={{ color: '#e74c3c' }} onClick={handleDelete}>X</FontAwesomeIcon>
            <div className="mx-4">{comment.text}</div>
        </div>
    );
}