import Heading from "../components/Heading";

export default function Home() {
	return (
		<Heading title="Accueil" descriptionLines={
			[
				"Si vous arrivez sur cette page cela n'est pas par un hasard !",
				"Nous pouvons vous aider"
			]
		} underlineSelectors={new Set(["Nous", "vous"])} />
	);
}
