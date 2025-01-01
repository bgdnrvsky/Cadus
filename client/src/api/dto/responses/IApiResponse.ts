
interface IApiResponse<T> {
    status: string;
    message: string;
    additionalData: T | null;
}

export default IApiResponse;