import IApiResponse from "../dto/responses/IApiResponse";
import IComment from "../dto/responses/IComment";
import {resolveEndpoint} from "./endpoints";
import axios from "axios";
import ICommentId from "../dto/responses/ICommentId";

export namespace requests {
    export namespace comments {
        export async function fetchComments(): Promise<IApiResponse<IComment[]>> {
            const endpoint: string = resolveEndpoint("/api/comment/list");

            const response = await axios.get<IApiResponse<IComment[]>>(
                endpoint
            );

            return response.data;
        }

        export async function sendComment(comment: string): Promise<IApiResponse<ICommentId>> {
            const endpoint: string = resolveEndpoint("/api/comment/save");

            const response = await axios.post<IApiResponse<ICommentId>>(
                endpoint,
                JSON.stringify({
                    "comment-text": comment
                }),
                {
                    withCredentials: true
                }
            );

            return response.data;
        }
    }
}