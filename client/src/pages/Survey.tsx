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

    const [questionsResponse, setQuestionsResponse] = useState<IApiResponse<ISurveyQuestion[]>>();

    useEffect(() => {
        fetchQuestions().then(setQuestionsResponse)
    }, []);

    return (
        <div className="h-screen flex flex-col justify-center overflow-y-hidden">
            <NavBar/>

            Bonjour, {account.memberEmail}

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
        </div>
    );
}