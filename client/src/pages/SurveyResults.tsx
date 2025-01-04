import GraphicMap from "../components/d3/GraphicMap";
import GraphicSatisfaction from "../components/d3/GraphicAnswersCount";
import {useEffect, useState} from "react";
import {fetchQuestions} from "../api/requests/survey";
import ISurveyQuestion from "../api/dto/responses/ISurveyQuestion";
import ComboBox, {ComboBoxOption} from "../components/ComboBox";
import GraphicAnswersCount from "../components/d3/GraphicAnswersCount";


export default function SurveyResults() {
    const [question, setQuestion] = useState<string>("1");
    const [questions, setQuestions] = useState<ISurveyQuestion[]>();

    useEffect(() => {
        fetchQuestions()
            .then((response) => {
                if (response.additionalData)
                    setQuestions(response.additionalData);
            });
    }, []);


    return (
        <div className="flex flex-col items-center space-y-20">
            <GraphicMap/>

            <div>
            {
                questions && (
                    <div className="p-10">
                        <ComboBox label="Choisissez la question pour laquelle visualiser les réponses"
                                  id="cb-choose-question"
                                  onChange={setQuestion}
                        >
                            {
                                questions.map((q, i) => (
                                    <ComboBoxOption key={i} value={String(i + 1)}>
                                        {q.questionText}
                                    </ComboBoxOption>
                                ))
                            }
                        </ComboBox>

                        <GraphicAnswersCount questionId={parseInt(question)}/>
                    </div>
                )
            }
            </div>
        </div>
    );
}