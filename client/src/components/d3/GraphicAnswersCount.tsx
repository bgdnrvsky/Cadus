import * as d3 from "d3";
import {useEffect, useRef, useState} from "react";
import {IAnswerEntry} from "../../api/dto/responses/IAnswersRepartition";
import {fetchAnswers, fetchQuestions} from "../../api/requests/survey";
import ComboBox, {ComboBoxOption} from "../ComboBox";
import ISurveyQuestion from "../../api/dto/responses/ISurveyQuestion";

export default function GraphicAnswersCount() {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const [data, setData] = useState<IAnswerEntry[]>([]);
    const [questions, setQuestions] = useState<ISurveyQuestion[]>();
    const [question, setQuestion] = useState<string>("1");

    useEffect(() => {
        fetchQuestions()
            .then((response) => {
                if (response.additionalData)
                    setQuestions(response.additionalData);
            });
    }, []);

    useEffect(() => {
        fetchAnswers({questionId: parseInt(question)})
            .then((r) => {
                if (r.additionalData != null) {
                    setData(r.additionalData.entries);
                }
            });
    }, [question]);

    useEffect(() => {
        const totalAnswerCount: number = data.reduce((sum, curr) => sum + curr.answerCount, 0);

        if (!svgRef.current) {
            return;
        }

        // Define chart dimensions and margins.
        const width = svgRef.current.parentElement?.getBoundingClientRect().width || 930;
        const height = 500;
        const marginTop = 30;
        const marginRight = 0;
        const marginBottom = 30;
        const marginLeft = 40;

        // Clear previous SVG content.
        d3.select(svgRef.current).selectAll("*").remove();

        // Define scales.
        const x = d3.scaleBand()
            .domain(d3.groupSort(data, ([d]) => -d.answerCount, (d) => d.answerText))
            .range([marginLeft, width - marginRight])
            .padding(0.1);

        const y = d3.scaleLinear()
            .domain([0, d3.max(data, (d) => d.answerCount) || 0])
            .range([height - marginBottom, marginTop]);

        // Create SVG container.
        const svg = d3.select(svgRef.current)
            .attr("width", width)
            .attr("height", height)
            .attr("viewBox", `0 0 ${width} ${height}`)
            .attr("style", "max-width: 100%; height: auto;");

        // Add bars.
        svg.append("g")
            .attr("fill", "steelblue")
            .selectAll("rect")
            .data(data)
            .join("rect")
            .attr("x", (d) => x(d.answerText) || 0)
            .attr("y", (d) => y(d.answerCount))
            .attr("height", (d) => y(0) - y(d.answerCount))
            .attr("width", x.bandwidth())
            .on("mouseover", function (e, d) {
                d3.select(this)
                    .attr("fill", "green");

                svg.append("text")
                    .attr("class", "hover-text")
                    .attr("x", (x(d.answerText) || 0) + x.bandwidth() / 2)
                    .attr("y", y(d.answerCount) - 5)
                    .attr("text-anchor", "middle")
                    .attr("fill", "black")
                    .text(d.answerText + " " + d.answerCount + "/" + totalAnswerCount);
            })
            .on("mouseout", function () {
                d3.select(this)
                    .attr("fill", "steelblue");

                svg.selectAll(".hover-text").remove();
            });

        // Add x-axis.
        svg.append("g")
            .attr("transform", `translate(0,${height - marginBottom})`)
            .call(d3.axisBottom(x).tickValues([]));

        // Add y-axis.
        svg.append("g")
            .attr("transform", `translate(${marginLeft},0)`)
            .call(d3.axisLeft(y).tickFormat((_y) => (Number(_y)).toFixed(0)))
            .call(g => g.select(".domain").remove())
            .call(g => g.append("text")
                .attr("x", -marginLeft)
                .attr("y", 10)
                .attr("fill", "currentColor")
                .attr("text-anchor", "start")
                .text("↑ Nombre de personnes ayant répondu"));
    }, [data]);

    return (
        <>
            {
                questions && (
                    <ComboBox label="Choisissez la question pour laquelle visualiser les réponses"
                              id="cb-choose-question"
                              onChange={setQuestion}>
                        {
                            questions.map((q, i) => (
                                <ComboBoxOption key={i} value={String(i + 1)}>
                                    {q.questionText}
                                </ComboBoxOption>
                            ))
                        }
                    </ComboBox>
                )
            }

            <svg ref={svgRef}></svg>
        </>
    );
};
