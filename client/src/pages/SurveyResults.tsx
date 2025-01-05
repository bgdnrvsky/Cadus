import GraphicMap from "../components/d3/GraphicMap";
import GraphicAnswersCount from "../components/d3/GraphicAnswersCount";
import GraphicPieChart from "../components/d3/GraphicPieChart";


export default function SurveyResults() {
    return (
        <div className="h-full w-full overflow-y-scroll">
            <div className="snap-start h-full w-full flex flex-col">
                <div className="flex-1 flex flex-col items-center justify-center">
                    <h2 className="text-3xl">1. Répartition des personnes interrogées dans la France
                        métropolitaine</h2>
                    <GraphicMap/>
                </div>
            </div>

            <div className="snap-start h-full w-full flex flex-col items-center justify-center space-y-10">
                <h2 className="text-3xl">2. Répartition des réponses par question</h2>
                <GraphicAnswersCount/>
            </div>

            <div className="snap-start h-full w-full flex flex-col items-center justify-center space-y-10">
                <h2 className="text-3xl">3. Répartition des réponses pour les aides</h2>
                <GraphicPieChart/>
            </div>
        </div>
    );
}