import * as d3 from "d3";
import {useEffect, useRef, useState} from "react";
import {IAnswerEntry} from "../../api/dto/responses/IAnswersRepartition";
import {fetchAnswers} from "../../api/requests/survey";
import Spinner from "../Spinner";

interface GraphicsAnswersFrequencyProps {
    questionId: number;
}

export default function GraphicAnswersCount(props: GraphicsAnswersFrequencyProps) {
    const {questionId} = props
    const svgRef = useRef<SVGSVGElement | null>(null);
    const [data, setData] = useState<IAnswerEntry[]>([]);

    const [graphicDone, setGraphicDone] = useState(false);

    useEffect(() => {
        // Fetch data from an external API.
        fetchAnswers({questionId})
            .then((r) => {
                if (r.additionalData != null) {
                    setData(r.additionalData.entries);
                }
            });
    }, [questionId]);

    useEffect(() => {
        if (!svgRef.current) return;

        // Define chart dimensions and margins.
        const width = 928;
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
                    .text(d.answerText);
            })
            .on("mouseout", function () {
                d3.select(this)
                    .attr("fill", "steelblue");

                svg.selectAll(".hover-text").remove();
            });

        // Add x-axis.
        svg.append("g")
            .attr("transform", `translate(0,${height - marginBottom})`)
            .call(d3.axisBottom(x).tickSizeOuter(0));

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

        setGraphicDone(true);
    }, [data]);

    return (
        <>
            {!graphicDone && <Spinner/>}

            <svg ref={svgRef}></svg>
        </>
    );
};
