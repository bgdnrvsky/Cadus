import IApiResponse from "../dto/responses/IApiResponse";
import {ISurveyQuestion} from "../dto/responses/ISurveyQuestion";
import axios from "axios";
import {resolveEndpoint} from "./endpoints";


export async function fetchQuestions(): Promise<IApiResponse<ISurveyQuestion[]>> {
    const endpoint: string = resolveEndpoint("/questions");

    const response = await axios.get<IApiResponse<ISurveyQuestion[]>>(endpoint);

    return response.data;
}