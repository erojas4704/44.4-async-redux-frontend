import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Comment.css'

export default function Comment({ deleteComment, comment }) {

    const handleDelete = () => {
        deleteComment(comment);
    }

    return (
        <div className="comment my-2">
            <FontAwesomeIcon className="comment-delete" icon={faTrash} style={{ color: '#e74c3c' }} onClick={handleDelete}>X</FontAwesomeIcon>
            <div className="mx-2">{comment.text}</div>
        </div>
    );
}