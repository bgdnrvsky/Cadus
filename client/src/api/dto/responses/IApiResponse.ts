
interface IApiResponse<T> {
    status: string;
    message: string;
    data: T | null;
}

export default IApiResponse;