import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import {fetchAnswers} from "../../api/requests/survey";
import IApiResponse from "../../api/dto/responses/IApiResponse";
import IAnswersRepartition from "../../api/dto/responses/IAnswersRepartition";


// Define the structure of GeoJSON data
interface GeoJSONFeature {
    type: string;
    properties: {
        CODE_DEPT: number;
        NOM_DEPT: string;
    };
    geometry: {
        type: string;
        coordinates: any;
    };
}

interface GeoJSON {
    type: string;
    features: GeoJSONFeature[];
}

export default function MapComponent() {
    const svgRef = useRef<SVGSVGElement | null>(null);

    useEffect(() => {
        // Set up SVG dimensions
        const width = 600;
        const height = 600;

        // Append SVG
        const svg = d3.select(svgRef.current)
            .attr("width", width)
            .attr("height", height);

        const projection = d3.geoConicConformal()
            .center([2.454071, 46.279229])
            .scale(3000)
            .translate([width / 2, height / 2]);

        const path = d3.geoPath();

        path.projection(projection);

        // Tooltip div
        const tooltip: d3.Selection<HTMLDivElement, unknown, HTMLElement, any> = d3.select<HTMLDivElement, unknown>("#tooltip")
            .style("opacity", 0)

        // Load GeoJSON data
        d3.json<GeoJSON>("departements.json").then(async (geoJSON) => {
            if (!geoJSON) {
                console.error("Failed to load GeoJSON data.");
                return;
            }

            const response = await fetchAnswers({questionId: 1});

            if (response.status !== 'success' || response.additionalData === null) {
                return;
            }

            const entries = response.additionalData.entries;

            const map = svg.selectAll<SVGPathElement, GeoJSONFeature>("path")
                .data(geoJSON.features);

            const quantileColors = [
                "rgb(255, 245, 240)",
                "rgb(254, 224, 210)",
                "rgb(252, 187, 161)",
                "rgb(252, 146, 114)",
                "rgb(251, 106, 74)",
                "rgb(239, 59, 44)",
                "rgb(203, 24, 29)",
                "rgb(165, 15, 21)",
                "rgb(103, 0, 13)"
            ]

            map.enter()
                .append("path")
                .attr("fill", (d) => {
                    const quantile = d3.scaleQuantile()
                        .domain([0, d3.max(entries, (entry) => entry.answerCount)])
                        .range(d3.range(9));

                    const departementEntry = entries.find((entry) => {
                        return entry.answerText.startsWith(String(d.properties.CODE_DEPT));
                    });

                    const count = departementEntry ? departementEntry.answerCount : 0;

                    return quantileColors[quantile(count)];
                })
                .attr("stroke", "black")
                .attr("d", (d) => path(d as d3.GeoPermissibleObjects))
                .on("mouseover", function (event, d) {
                    d3.select(this)
                        .transition()
                        .duration(200)
                        .attr("stroke", "blue");

                    tooltip.transition()
                        .duration(200)
                        .style("opacity", 0.9);

                    tooltip.html(`Département : ${d.properties.CODE_DEPT} - ${d.properties.NOM_DEPT}`);
                })
                .on("mouseout", function () {
                    d3.select(this)
                        .transition()
                        .duration(200)
                        .attr("stroke", "black");

                    tooltip.transition()
                        .duration(500)
                        .style("opacity", 0)
                });
        }).catch((error) => {
            console.error("Error loading GeoJSON data:", error);
        });
    }, []);

    return (
        <div>
            <svg ref={svgRef}></svg>
            <div id="tooltip"></div>
        </div>
    );
};
