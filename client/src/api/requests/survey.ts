import IApiResponse from "../dto/responses/IApiResponse";
import ISurveyQuestion from "../dto/responses/ISurveyQuestion";
import axios from "axios";
import {resolveEndpoint} from "./endpoints";
import IAnswer from "../dto/sent/IAnswer";
import IAnswersQuery from "../dto/sent/IAnswersQuery";
import IAnswersRepartition from "../dto/responses/IAnswersRepartition";


export async function fetchQuestions(): Promise<IApiResponse<ISurveyQuestion[]>> {
    const endpoint: string = resolveEndpoint("/api/survey/questions");

    const response = await axios.get<IApiResponse<ISurveyQuestion[]>>(
        endpoint,
        {
            withCredentials: true
        }
    );

    return response.data;
}

export async function fetchAnswers(query: IAnswersQuery): Promise<IApiResponse<IAnswersRepartition>> {
    const endpoint: string = resolveEndpoint("/api/survey/answers");

    const response = await axios.get<IApiResponse<IAnswersRepartition>>(
        endpoint,
        {
            withCredentials: true,
            params: {
                "question-id": query.questionId
            }
        }
    );

    console.log(response.data);

    return response.data;
}

export async function sendAnswer(answer: IAnswer): Promise<IApiResponse<null>> {
    const endpoint: string = resolveEndpoint("api/survey/answer");

    const response = await axios.post<IApiResponse<null>>(
        endpoint,
        JSON.stringify({
            "question": answer.questionText,
            "answer": answer.answerText
        }),
        {
            withCredentials: true,
            headers: {
                "Content-Type": "text/plain"
            }
        }
    );

    return response.data;
}