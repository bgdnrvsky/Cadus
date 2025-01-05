import GraphicMap from "../components/d3/GraphicMap";
import GraphicAnswersCount from "../components/d3/GraphicAnswersCount";
import NavBar from "../components/NavBar";


export default function SurveyResults() {
    return (
        <div className="h-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory scroll-smooth">
            <div className="snap-start h-full w-full flex flex-col">
                <div className="flex-1 flex flex-col items-center justify-center">
                    <h2 className="text-3xl">I - Répartition des personnes interrogées dans la France métropolitaine</h2>
                    <GraphicMap/>
                </div>
            </div>

            <div className="snap-start h-screen w-full flex flex-col items-center justify-center space-y-10">
                <h2 className="text-3xl">II - Répartition des réponses par question</h2>
                <GraphicAnswersCount/>
            </div>
        </div>
    );
}