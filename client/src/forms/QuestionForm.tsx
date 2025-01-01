import ComboBox, {ComboBoxOption} from "../components/ComboBox";
import SubmitOnceButton from "../components/SubmitOnceButton";
import {useState} from "react";
import {ISurveyQuestion} from "../api/dto/responses/ISurveyQuestion";
import {sendAnswer} from "../api/requests/survey";
import IAnswer from "../api/dto/sent/IAnswer";
import IApiResponse from "../api/dto/responses/IApiResponse";
import Banner, {BannerType} from "../components/Banner";

interface QuestionFormProps {
    question: ISurveyQuestion;
    key: number;
}

export default function QuestionForm(props: QuestionFormProps) {
    const { question, key } = props;

    const [selectedAnswer, setSelectedAnswer] = useState(question.answers[0]);
    const [submitErrorMessage, setSubmitErrorMessage] = useState("");

    const submitAnswer = async (): Promise<boolean> => {
        const answer: IAnswer = {
            questionText: question.questionText,
            answerText: selectedAnswer
        };

        const response: IApiResponse<null> = await sendAnswer(answer);

        const success: boolean = response.status === 'success';

        if (!success) {
            setSubmitErrorMessage(response.message);
        }

        return success;
    }

    return (
        <div key={key} className="flex items-center justify-between w-full space-x-4">
            <ComboBox key={key}
                      id={"question-" + key}
                      label={question.questionText}
                      onChange={setSelectedAnswer}>
                {
                    question.answers.map((answer, answerIndex) => (
                        <ComboBoxOption key={answerIndex} value={answer}>
                            {answer}
                        </ComboBoxOption>
                    ))
                }
            </ComboBox>

            <SubmitOnceButton submitted={question.answered}
                              onSubmit={submitAnswer}/>

            { submitErrorMessage && <Banner type={BannerType.Error}>{submitErrorMessage}</Banner> }
        </div>
    );
}