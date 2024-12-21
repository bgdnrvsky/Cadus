import Carousel, {CarouselSlide} from "../components/Carousel";
import Card from "../components/Card";
import Button from "../components/Button";
import ScrollIndicator from "../components/ScrollIndicator";
import NavBar from "../components/NavBar";
import PromoteForm from "../forms/PromoteForm";
import DonationForm from "../forms/DonationForm";


export default function Help() {

    return (
        <div className="h-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory scroll-smooth">
            <div className="snap-start h-full w-full flex flex-col">
                <NavBar/>
                <Carousel infinite={true}>
                    <CarouselSlide image={require("../assets/volunteer.jpg")}>
                        <div className="flex flex-col items-center md:items-start space-y-6">
                            <h1 className="text-6xl text-white text-center font-bold">Rejoindre Cadus.</h1>
                            <p className="text-lg text-white text-center md:text-left w-2/3">Acme Outdoors is an outdoor and adventure shop located in the Boathouse District in Oklahoma City.</p>
                            <a href="#volunteer-section"><Button className="text-white">En savoir plus</Button></a>
                        </div>
                    </CarouselSlide>

                    <CarouselSlide image={require("../assets/promote.jpg")}>
                        <div className="flex flex-col items-center md:items-start space-y-6">
                            <h1 className="text-6xl text-white text-center font-bold">Promouvoir Cadus.</h1>
                            <p className="text-lg text-white text-center md:text-left w-2/3">Acme Outdoors is an outdoor and adventure shop located in the Boathouse District in Oklahoma City.</p>
                            <a href="#promote-section"><Button className="text-white">Comment faire ?</Button></a>
                        </div>
                    </CarouselSlide>

                    <CarouselSlide image={require("../assets/donate.jpg")}>
                        <div className="flex flex-col items-center md:items-start space-y-6">
                            <h1 className="text-6xl text-white text-center font-bold">Soutenir Cadus.</h1>
                            <p className="text-lg text-white text-center md:text-left w-2/3">Acme Outdoors is an outdoor and adventure shop
                                located in the Boathouse District in Oklahoma City.</p>
                            <a href="#donate-section"><Button className="text-white">J'apporte mon soutien</Button></a>
                        </div>
                    </CarouselSlide>
                </Carousel>
            </div>

            <div id="volunteer-section" className="snap-start h-screen w-full flex flex-col justify-center">
                <div className="flex flex-grow items-center">
                    <div className="space-y-5 md:space-y-20">
                        <div className="font-display text-center">
                            <p className="mt-4 text-cadus-black font-bold text-5xl inline-block brush-underline">S'engager</p>
                            <p className="pt-4 text-wrap text-cadus-grey text-1xl">
                                Vous avez envie de changer les choses et d'apporter votre soutien à ceux qui en ont
                                besoin ?
                                En devenant bénévole, vous contribuerez à améliorer la vie de nombreux bénéficiaires.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-10">
                            <Card avatar={require("../assets/profile_pictures/avatar9.jpg")}
                                  name="Marie"
                                  status="Bénéficiaire"
                                  quote="Je ne me sentais plus seule et sans défense grâce à Cadus"/>
                            <Card avatar={require("../assets/profile_pictures/avatar10.jpg")}
                                  name="Sylvain"
                                  status="Bénévole"
                                  quote="Soutenir un bénéficiaire était une expérience très enrichissante"/>
                            <Card avatar={require("../assets/profile_pictures/avatar8.jpg")}
                                  name="Joe"
                                  status="Bénéficiaire"
                                  quote="Je n'aurais pas réussi à obtenir justice sans Cadus"/>
                        </div>
                        <Button className="m-auto block text-cadus-green">Demander une formation</Button>
                    </div>
                </div>

                <ScrollIndicator targetId="#promote-section"/>
            </div>

            <div id="promote-section" className="snap-start h-screen w-full flex flex-col justify-center">
                <div className="flex flex-col md:flex-row flex-grow items-center">
                    <div className="font-display w-1/2">
                        <p className="text-center md:ml-32 mb-6 mt-4 md:inline-block font-bold text-cadus-black text-5xl brush-underline">Promouvoir</p>
                        <p className="hidden md:block ml-32 pt-4 text-left text-wrap text-cadus-grey text-1xl">Êtes-vous artiste,
                            designer ou imprimeur ? Souhaitez-vous mettre votre talent au service d’une cause qui a du
                            sens ? Nous vous invitons à rejoindre Cadus, une initiative qui soutient les personnes
                            confrontées à des injustices médicales.</p>
                        <p className="hidden md:block ml-32 pt-4 text-left text-wrap text-cadus-grey text-1xl">Votre créativité et votre
                            expertise pourraient faire une réelle différence. Que vous souhaitiez collaborer directement
                            ou que vous ayez des idées pour promouvoir notre mission, chaque contribution compte. Que ce
                            soit par le biais de vos réseaux, de vos créations ou d'autres initiatives, votre aide
                            serait précieuse.</p>
                        <p className="md:ml-32 pt-4 text-center md:text-left text-wrap text-cadus-grey text-1xl">Si vous êtes intéressé(e)
                            à offrir votre soutien pour la promotion de Cadus d’une manière ou d’une autre, n’hésitez
                            pas à nous contacter dès maintenant. Ensemble, nous pouvons créer un impact positif et faire
                            avancer cette cause importante !
                        </p>
                    </div>

                    <div className="relative w-full mt-40 md:mt-0 md:flex-1 flex justify-center">
                        <div className="bg-cadus-green rounded-l-xl absolute inset-x-0 top-1/2 transform -translate-y-1/2 translate-x-16 rotate-3 w-[101%] h-[120%] -z-10"></div>
                        <div className="w-3/4 md:w-1/2">
                            <PromoteForm/>
                        </div>
                    </div>
                </div>

                <ScrollIndicator targetId={"#donate-section"}/>
            </div>

            <div id="donate-section" className="snap-start h-screen w-full flex">
                <div className="flex items-center flex-row-reverse">
                    <div className="font-display w-1/2">
                        <p className="mr-32 inline-block mb-6 mt-4 font-bold text-cadus-black text-5xl brush-underline">Donner</p>
                        <p className="mr-32 pt-4 text-left text-wrap text-cadus-grey text-1xl">Chez Cadus, nous nous
                            engageons à soutenir les victimes d'injustice médicale, qui souffrent souvent en silence.
                            Grâce à votre don, nous pouvons offrir des consultations juridiques, un soutien
                            psychologique et des campagnes de sensibilisation pour faire entendre leur voix. Chaque euro
                            compte et peut transformer des vies.</p>
                        <p className="mr-32 pt-4 text-left text-wrap text-cadus-grey text-1xl">Votre contribution permet
                            également de plaider pour des changements essentiels dans le système de santé. En nous
                            aidant, vous participez à la défense des droits des victimes et à l’amélioration des
                            pratiques médicales. Ensemble, nous pouvons apporter une aide concrète à ceux qui en ont
                            besoin.</p>
                        <p className="mr-32 pt-4 text-left text-wrap text-cadus-grey text-1xl">Faites un don aujourd'hui
                            pour faire la différence. Votre générosité montre que chaque vie mérite d’être protégée et
                            respectée. Merci de votre soutien dans cette lutte pour la justice et l’espoir.</p>
                    </div>

                    <div className="relative flex-1 flex justify-center">
                        <div className="bg-cadus-green rounded-r-xl absolute -rotate-3 inset-x-0 top-1/2 transform -translate-y-1/2 -translate-x-16 w-[101%] h-[120%] -z-10"></div>
                        <DonationForm/>
                    </div>
                </div>
            </div>
        </div>
    );
}
