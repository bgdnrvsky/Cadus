import NavBar from "../components/NavBar";
import {useAccount} from "../hooks/useAccount";
import {useEffect, useState} from "react";
import {ISurveyQuestion} from "../api/dto/responses/ISurveyQuestion";
import {fetchQuestions} from "../api/requests/survey";
import IApiResponse from "../api/dto/responses/IApiResponse";
import Banner, {BannerType} from "../components/Banner";
import ComboBox, {ComboBoxOption} from "../components/ComboBox";
import SubmitOnceButton from "../components/SubmitOnceButton";
import Spinner from "../components/Spinner";


export default function Survey() {
    const {account} = useAccount();

    const [surveyQuestions, setSurveyQuestions] = useState<ISurveyQuestion[]>();
    const [surveyFetchError, setSurveyFetchError] = useState("");

    useEffect(() => {

        const handleResponse = (response: IApiResponse<ISurveyQuestion[]>) => {
            if (response.status === 'success' && response.data) {
                console.log(response.data);
                setSurveyQuestions(response.data)
            } else {
                setSurveyFetchError(response.message);
            }
        }

        fetchQuestions().then(handleResponse)
    }, []);

    const renderQuestion = (question: ISurveyQuestion, questionIndex: number) => {
        return (
            <div key={questionIndex} className="flex items-center justify-between w-full space-x-4">
                <ComboBox key={questionIndex} id={"question-" + questionIndex} label={question.questionText}>
                    {
                        question.answers.map((answer, answerIndex) => (
                            <ComboBoxOption key={answerIndex} value={"answer-" + questionIndex + "-" + answerIndex}>
                                {answer}
                            </ComboBoxOption>
                    ))}
                </ComboBox>

                <SubmitOnceButton onSubmit={() => {}}/>
            </div>
        );
    };

    return (
        <div className="h-screen flex flex-col justify-center overflow-y-hidden">
            <NavBar/>

            Bonjour, {account.memberEmail}

            <div className="h-screen flex justify-center items-center">
                <div className="flex flex-col items-center w-1/2 space-y-10">

                    {!surveyFetchError && !surveyQuestions && <Spinner/>}

                    {surveyFetchError && <Banner type={BannerType.Error}>{surveyFetchError}</Banner>}

                    {!surveyFetchError && surveyQuestions && surveyQuestions.map(renderQuestion)}

                </div>
            </div>
        </div>
    );
}