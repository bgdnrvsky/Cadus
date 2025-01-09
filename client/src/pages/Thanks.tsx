import NavBar from "../components/NavBar";
import Carousel, {CarouselSlide} from "../components/Carousel";
import Button from "../components/Button";
import {Card, CardAvatar, CardQuote} from "../components/Card";
import ScrollIndicator from "../components/ScrollIndicator";

export default function Thanks() {
    return (
        <div className="h-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory scroll-smooth">
            <div className="snap-start h-full w-full flex flex-col">
                <NavBar/>
                <Carousel infinite={true}>
                    <CarouselSlide image={require("../assets/thanks_img/mains.jpg")}>
                        <div className="flex flex-col items-center md:items-start space-y-6">
                            <h1 className="text-6xl text-white text-center font-bold">Un grande merci</h1>
                            <p className="text-lg text-white text-center md:text-left w-2/3">Découvrez toutes ces âmes
                                charitables qui ne font pas parties de l'association mais qui n'ont pas hésité à nous apporter leur soutien.</p>
                            <a href="#helpers-section"><Button className="text-white">Grace à eux...</Button></a>
                        </div>
                    </CarouselSlide>

                    <CarouselSlide image={require("../assets/thanks_img/agents_sante.jpg")}>
                        <div className="flex flex-col items-center md:items-start space-y-6">
                            <h1 className="text-6xl text-white text-center font-bold">Nos aidants/soignants.</h1>
                            <p className="text-lg text-white text-center md:text-left w-2/3">Découvrez ceux qui apportent chaque jour soutien et espoir aux plus fragiles.</p>
                            <a href="#healers-section"><Button className="text-white">Mieux les connaître</Button></a>
                        </div>
                    </CarouselSlide>

                    <CarouselSlide image={require("../assets/thanks_img/toi.jpg")}>
                        <div className="flex flex-col items-center md:items-start space-y-6">
                            <h1 className="text-6xl text-white text-center font-bold">Et si c'était vous ?</h1>
                            <p className="text-lg text-white text-center md:text-left w-2/3">Et si c'était vous le
                                prochain à apparaître sur cette page et à participer à cette noble cause.</p>
                            <a href="/nousaider"><Button className="text-white">Je veux être le prochain !</Button></a>
                        </div>
                    </CarouselSlide>
                </Carousel>
            </div>

            <div id="helpers-section" className="snap-start h-screen w-full flex flex-col justify-center">
                <div className="flex flex-grow items-center">
                    <div className="space-y-5 md:space-y-20">
                        <div className="font-display text-center">
                            <p className="mt-4 text-cadus-black font-bold text-5xl inline-block brush-underline">Merci !</p>
                            <p className="pt-4 text-wrap text-cadus-grey text-1xl">
                                Ensemble, grâce à vous tous bénévoles, donateurs et partenaires, nous offrons un peu
                                de lumière et de chaleur à ceux qui en ont le plus besoin. Merci infiniment pour votre engagement à nos côtés.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-10">
                            <Card>
                                <CardQuote>Votre générosité nous permet d’offrir un soutien indispensable à ceux qui en ont le plus besoin.</CardQuote>
                                <CardAvatar avatar={require("../assets/thanks_img/claire_martin.jpg")}
                                            name="Claire Martin"
                                            status="Donatrice"/>
                            </Card>
                            <Card>
                                <CardQuote>Participer à cette mission est une manière concrète de redonner à la communauté et de faire une réelle différence.</CardQuote>
                                <CardAvatar avatar={require("../assets/thanks_img/RIVIERE_Antoine.jpg")}
                                            name="Antoine Rivière"
                                            status="Bénévole"/>
                            </Card>
                            <Card>
                                <CardQuote>Votre soutien financier a permis à notre association de financer des projets essentiels pour les patients hospitalisés.</CardQuote>
                                <CardAvatar avatar={require("../assets/thanks_img/solidarites_international.jpg")}
                                            name="Solidarités International"
                                            status="Donateur"/>
                            </Card>
                            <Card>
                                <CardQuote>Grâce à vos dons, nous avons pu équiper les services hospitaliers avec des outils pour améliorer le bien-être des patients.</CardQuote>
                                <CardAvatar avatar={require("../assets/thanks_img/fondation_sante.jpg")}
                                            name="Fondation Santé+"
                                            status="Donateur"/>
                            </Card>
                            <Card>
                                <CardQuote>Votre générosité nous aide à offrir un meilleur quotidien aux personnes hospitalisées.</CardQuote>
                                <CardAvatar avatar={require("../assets/thanks_img/mains_solidaires.jpg")}
                                            name="Entreprise Main Solidaire"
                                            status="Donateur"/>
                            </Card>
                            <Card>
                                <CardQuote>Participer à cette mission m'a enrichi humainement et m'a montré l'importance de la solidarité.</CardQuote>
                                <CardAvatar avatar={require("../assets/thanks_img/sophie_bernard.jpg")}
                                            name="Sophie Bernard"
                                            status="Bénévole"/>
                            </Card>
                        </div>
                    </div>
                </div>

                <ScrollIndicator targetId="#healers-section"/>
            </div>

            <div id="healers-section" className="snap-start h-screen w-full flex flex-col justify-center">
                <div className="flex flex-col md:flex-row flex-grow items-center">
                    <div className="font-display w-1/2">
                        <p className="text-center md:ml-32 mb-6 mt-4 md:inline-block font-bold text-cadus-black text-5xl ">Remerciements
                            aux Aidants et Soignants</p>
                        <p className="hidden md:block ml-32 pt-4 text-left text-wrap text-cadus-grey text-1xl">À vous,
                            aidants et soignants, nous souhaitons adresser
                            nos plus sincères remerciements. Votre engagement quotidien, votre dévouement et votre
                            bienveillance apportent réconfort et espoir à ceux
                            qui en ont le plus besoin. Vous êtes bien plus que des professionnels ou des proches
                            attentifs : vous êtes des piliers, des soutiens
                            indispensables dans des moments souvent difficiles.</p>
                        <p className="hidden md:block ml-32 pt-4 text-left text-wrap text-cadus-grey text-1xl">Votre
                            capacité à offrir du temps, de l’énergie et des
                            soins, parfois au détriment de vos propres besoins, est admirable. Par vos gestes, qu’ils
                            soient grands ou petits, vous marquez profondément
                            les vies de ceux que vous accompagnez. Vos sourires, votre écoute et votre présence font
                            toute la différence, même lorsque les mots semblent manquer.</p>
                        <p className="md:ml-32 pt-4 text-center md:text-left text-wrap text-cadus-grey text-1xl">Nous
                            savons que votre tâche est exigeante et qu’elle demande une
                            force incroyable. Pourtant, malgré les défis, vous continuez avec une générosité et un
                            altruisme qui forcent l’admiration. Grâce à vous, des vies
                            s’améliorent, des douleurs s’apaisent et des cœurs retrouvent un peu de sérénité.
                        </p>
                        <p className="md:ml-32 pt-4 text-center md:text-left text-wrap text-cadus-grey text-1xl">Merci pour
                            tout ce que vous faites. Votre dévouement est une véritable source d’inspiration et une preuve
                            du pouvoir de la compassion humaine. Sachez que votre travail, même s’il passe parfois inaperçu,
                            est profondément reconnu et infiniment précieux.
                        </p>
                    </div>

                    <div className="relative w-full mt-40 md:mt-0 md:flex-1 flex justify-center">
                        <div
                            className="bg-cadus-green rounded-l-xl absolute inset-x-0 top-1/2 transform -translate-y-1/2 translate-x-16 rotate-3 w-[101%] h-[120%] -z-10"></div>
                        <div className="w-3/4 md:w-1/2">
                            <img
                                src="https://www.lemediasocial-emploi.fr/media/cache/image_large/uploads/images/articles-large/5be98a5ea38d3_Aide-soignante%20Hopital%20vs%20Ehpad.jpeg"
                                alt="Description de l'image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
