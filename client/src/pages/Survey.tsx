import {useEffect, useState} from "react";
import ISurveyQuestion from "../api/dto/responses/ISurveyQuestion";
import IApiResponse from "../api/dto/responses/IApiResponse";
import Banner, {BannerType} from "../components/Banner";
import Spinner from "../components/Spinner";
import QuestionForm from "../forms/QuestionForm";
import {requests} from "../api/requests/survey";


export default function Survey() {
    const [questionsResponse, setQuestionsResponse] = useState<IApiResponse<ISurveyQuestion[]>>();

    useEffect(() => {
        requests.survey.fetchQuestions().then(setQuestionsResponse)
    }, []);

    return (
        <div className="h-screen flex justify-center items-center">
            <div className="flex flex-col items-center w-1/2 space-y-10">

                {!questionsResponse && <Spinner/>}

                {questionsResponse && (
                    questionsResponse.status === 'error' ? (
                        <Banner type={BannerType.Error}>{questionsResponse.message}</Banner>
                    ) : (
                        questionsResponse.additionalData?.map((question, index) => (
                            <QuestionForm question={question} key={index} />
                        ))
                    )
                )}

            </div>
        </div>
    );
}