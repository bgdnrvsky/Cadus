import {useEffect, useRef, useState} from "react";
import * as d3 from "d3";
import {IAnswerEntry} from "../../api/dto/responses/IAnswersRepartition";
import {requests} from "../../api/requests/survey";


export default function GraphicPieChart() {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const [data, setData] = useState<IAnswerEntry[]>([]);

    const width = 600;
    const height = 600;

    const wrapText = (text: any, width: number) => {
        const words = text.text().split(/\s+/);
        let line: string[] = [];
        const lines: string[] = [];

        text.text(null);

        words.forEach((word: string) => {
            line.push(word);
            text.text(line.join(" "));

            // create a new line if it overflows
            if (text.node().getComputedTextLength() > width) {
                line.pop();
                lines.push(line.join(" "));
                line = [word];
            }
        });

        text.text(null);

        // Add the remaining line
        lines.push(line.join(" "));
        return lines;
    };

    useEffect(() => {
        requests.survey.fetchAnswers({questionId: 6})
            .then((r) => setData(r.additionalData?.entries || []));
    }, []);

    useEffect(() => {
        d3.select(svgRef.current).selectAll("*").remove();

        const radius = Math.min(width, height) / 2;

        const svg = d3
            .select(svgRef.current)
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr(
                "transform",
                `translate(${width / 2}, ${height / 2})` // Center the chart
            );

        const color = d3.scaleOrdinal<string>()
            .domain(data.map((d) => d.answerText))
            .range(d3.schemeCategory10);

        const pie = d3.pie<IAnswerEntry>()
            .value((d) => d.answerCount)
            .sort(null); // Disable sorting for consistent slice order

        const arc = d3
            .arc<d3.PieArcDatum<IAnswerEntry>>()
            .innerRadius(0)
            .outerRadius(radius);

        svg
            .selectAll("path")
            .data(pie(data))
            .enter()
            .append("path")
            .attr("d", arc as any)
            .attr("fill", (d) => color(d.data.answerText) as string)
            .attr("stroke", "white")
            .attr("stroke-width", 2);

        svg
            .selectAll("text")
            .data(pie(data))
            .enter()
            .append("text")
            .text((d) => `${d.data.answerText} (${(d.data.answerCount / data.reduce((sum, current) => sum + current.answerCount, 0) * 100).toFixed(2)}%)`)
            .attr("transform", (d) => `translate(${arc.centroid(d)})`)
            .attr("text-anchor", "middle")
            .attr("font-size", "10px")
            .attr("fill", "#333")
            .each(function (d) {
                const element = d3.select(this);
                const wrappedText = wrapText(element, radius * 0.5);

                wrappedText.forEach((line, i) => {
                    element
                        .append("tspan")
                        .attr("x", 0)
                        .attr("dy", "1.2em")
                        .text(line);
                })
            })

    }, [data, width, height]);

    return <svg ref={svgRef}></svg>;
};