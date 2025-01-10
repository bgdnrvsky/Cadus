/**
 * [
 *     {
 *         "commentText": "J'aime Cadus",
 *         "authorLogin": "cadus.the.best@mail.com"
 *     }
 * ]
 */
interface IComment {
    commentId: number;
    commentText: string;
    authorLogin: string;
}

export default IComment;