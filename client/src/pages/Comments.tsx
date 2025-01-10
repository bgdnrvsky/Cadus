import TextInput, {InputType} from "../components/TextInput";
import Button from "../components/Button";
import {useEffect, useState} from "react";
import {requests} from "../api/requests/comments";
import sendComment = requests.comments.sendComment;
import IComment from "../api/dto/responses/IComment";
import {Card, CardQuote} from "../components/Card";
import Spinner from "../components/Spinner";

export default function Comments() {
    const [comment, setComment] = useState<string>("");
    const [requestDone, setRequestDone] = useState(false);
    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
        requests.comments
            .fetchCommentsByMember()
            .then((r) => setComments(r.additionalData || []))
            .then(() => setRequestDone(true))
    }, []);

    const onSubmit = async () => {
        const response = await sendComment(comment);

        if (response.status === 'success' && response.additionalData) {
            const newComment: IComment = { commentId: response.additionalData.commentId, commentText: comment, authorLogin: "" };
            setComments([...comments, newComment]);
        }
    };

    const onDelete = async (commentId: number) => {
        const response = await requests.comments.deleteComment(commentId)

        if (response.status === 'success') {
            setComments(comments.filter(comment => comment.commentId !== commentId));
        }
    }

    return (
        <div className="p-10">
            <TextInput id={"comment"} type={InputType.Text} label={"Commentaire"} onChange={setComment}/>
            <Button className="mt-7"
                    disabled={comment.trim() === ''}
                    onClick={onSubmit}>Envoyer</Button>

            <h2 className="text-center">Commentaires envoyes</h2>

            {!requestDone && <Spinner/>}

            <div
                className="grid grid-flow-dense grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
                {
                    comments.map((comment: IComment, index: number) => (
                        <Card key={index}>
                            <CardQuote>
                                {comment.commentText}
                            </CardQuote>
                            <input className="bg-cadus-green text-white rounded-2xl pl-2 pr-2" onClick={
                                () => onDelete(comment.commentId)
                            } type="button" value="X"/>
                        </Card>
                    ))
                }
            </div>
        </div>
    );
}