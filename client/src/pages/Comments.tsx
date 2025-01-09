import TextInput, {InputType} from "../components/TextInput";
import Button from "../components/Button";
import {useState} from "react";
import {requests} from "../api/requests/comments";
import IApiResponse from "../api/dto/responses/IApiResponse";
import Banner, {BannerType} from "../components/Banner";
import sendComment = requests.comments.sendComment;

export default function Comments() {
    const [comment, setComment] = useState<string>("");
    const [response, setResponse] = useState<IApiResponse<null>>();

    const onSubmit = async () => {
        const response = await sendComment(comment);
        setResponse(response);
    }

    return (
        <div className="p-10">
            { response && <Banner type={response.status === 'success' ? BannerType.Success : BannerType.Error}>{response.message}</Banner> }

            <TextInput id={"comment"} type={InputType.Text} label={"Commentaire"} onChange={setComment}/>
            <Button className="mt-7"
                disabled={comment.trim() === ''}
                onClick={onSubmit}>Envoyer</Button>
        </div>
    );
}