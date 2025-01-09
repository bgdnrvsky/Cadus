import {Card, CardFigure, CardPhoto, CardQuote, CardStatus} from "../components/Card";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import {useEffect, useState} from "react";
import IComment from "../api/dto/responses/IComment";
import {requests} from "../api/requests/comments";
import IApiResponse from "../api/dto/responses/IApiResponse";
import Spinner from "../components/Spinner";
import Banner, {BannerType} from "../components/Banner";

export default function Book() {
    const [response, setResponse] = useState<IApiResponse<IComment[]>>();

    useEffect(() => {
        requests.comments.fetchComments().then(setResponse)
    }, []);

    return (
        <>
            <NavBar/>

            <div className="font-display">
                <p className="mt-4 text-center text-cadus-black font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">Livre
                    d'or</p>
            </div>

            <div
                className="mx-8 mb-10 mt-10 grid grid-flow-dense grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
                <Card>
                    <CardQuote>Mme H., je tiens à vous remercier du fond du coeur de votre soutien, de votre patience,
                        de votre persévérance et de votre écoute durant ces longues années de combat.</CardQuote>
                    <CardFigure>
                        <CardPhoto avatar={require("../assets/profile_pictures/avatar1.jpg")}/>
                        <CardStatus
                            name="Huguette"
                            status="Bénéficiaire"/>
                    </CardFigure>
                </Card>
                <Card>
                    <CardQuote>Je tiens à vous remercier très chaleureusement pour tous les conseils que vous m’avez
                        apportés depuis le début de cette affaire et je ne manquerai pas de faire à nouveau appel à
                        votre association en cas de besoin</CardQuote>
                    <CardFigure>
                        <CardPhoto avatar={require("../assets/profile_pictures/avatar2.jpg")}/>
                        <CardStatus
                            name="Jane"
                            status="Petite fille d'une des patientes"/>
                    </CardFigure>
                </Card>
                <Card>
                    <CardQuote>L’Association et vous même vous avez su nous entendre, et nous aider à faire reconnaître
                        l’erreur médicale c’est pour la mémoire de mon papa que nous avons fait appel à vous</CardQuote>
                    <CardFigure>
                        <CardPhoto avatar={require("../assets/profile_pictures/avatar3.jpg")}/>
                        <CardStatus
                            name="Jacqueline"
                            status="La soeur d'une des patientes"/>
                    </CardFigure>
                </Card>
                <Card>
                    <CardQuote>Sans vos conseils nous serions peut-être pas arrivés à cette indemnisation</CardQuote>
                    <CardFigure>
                        <CardPhoto avatar={require("../assets/profile_pictures/avatar4.jpg")}/>
                        <CardStatus
                            name="Marco"
                            status="Le fils d'un des patients"/>
                    </CardFigure>
                </Card>
                <Card>
                    <CardQuote>Merci mille fois de votre gentillesse et de votre dévouement à chacun de mes
                        contacts</CardQuote>
                    <CardFigure>
                        <CardPhoto avatar={require("../assets/profile_pictures/avatar5.jpg")}/>
                        <CardStatus
                            name="Elea"
                            status="Bénéficiaire"/>
                    </CardFigure>
                </Card>
                <Card>
                    <CardQuote>Merci également à toute votre équipe pour son dévouement au service de personnes comme
                        moi</CardQuote>
                    <CardFigure>
                        <CardPhoto avatar={require("../assets/profile_pictures/avatar6.jpg")}/>
                        <CardStatus
                            name="Justine"
                            status="Patiente"/>
                    </CardFigure>
                </Card>
                { !response && <Spinner/> }

                {
                    response && response.status === 'success' && response.additionalData && (
                    response.additionalData.map((comment: IComment, index: number) => (
                        <Card key={index}>
                            <CardQuote>
                                {comment.commentText}
                            </CardQuote>
                            <CardStatus name={comment.authorLogin} status={"Utilisateur de Cadus"}/>
                        </Card>
                    )))
                }
            </div>

            <Footer/>
        </>
    );
}
