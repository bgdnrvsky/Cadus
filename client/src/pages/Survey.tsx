import NavBar from "../components/NavBar";
import {useAccount} from "../hooks/useAccount";
import {useEffect, useState} from "react";
import {ISurveyQuestion} from "../api/dto/responses/ISurveyQuestion";
import {fetchQuestions} from "../api/requests/survey";
import IApiResponse from "../api/dto/responses/IApiResponse";
import Banner, {BannerType} from "../components/Banner";
import Spinner from "../components/Spinner";
import QuestionForm from "../forms/QuestionForm";


export default function Survey() {
    const {account} = useAccount();

    const [surveyQuestions, setSurveyQuestions] = useState<ISurveyQuestion[]>();
    const [surveyFetchError, setSurveyFetchError] = useState("");

    const handleResponse = (response: IApiResponse<ISurveyQuestion[]>) => {
        if (response.status === 'success' && response.data) {
            setSurveyQuestions(response.data)
        } else {
            setSurveyFetchError(response.message);
        }
    }

    useEffect(() => {
        fetchQuestions().then(handleResponse)
    }, []);

    return (
        <div className="h-screen flex flex-col justify-center overflow-y-hidden">
            <NavBar/>

            Bonjour, {account.memberEmail}

            <div className="h-screen flex justify-center items-center">
                <div className="flex flex-col items-center w-1/2 space-y-10">

                    {!surveyFetchError && !surveyQuestions && <Spinner/>}

                    {surveyFetchError && <Banner type={BannerType.Error}>{surveyFetchError}</Banner>}

                    {
                        !surveyFetchError && surveyQuestions && surveyQuestions.map((question, index) => {
                                return <QuestionForm question={question} key={index}/>;
                            }
                        )
                    }

                </div>
            </div>
        </div>
    );
}