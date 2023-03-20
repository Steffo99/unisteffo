import { Chapter } from "../components/Chapter";
import { Topic } from "../components/Topic";
import { Layout } from "../components/Layout";

export default function Page() {
	return (
		<Layout 
			heading="Unisteffo"
			main={<>
				<Chapter heading="Dove sono?" columns={1}>
					<Topic heading="Su Unisteffo!">
						<p>
							Il mio sito di appunti aggiornato sperimentale.
						</p>
					</Topic>
				</Chapter>
				<Chapter heading="Perchè ci sono?" columns={1}>
					<Topic heading="Si vede?">
						<p>
							idk magari hai una qualche configurazione strana del browser e si vede tutto rotto
						</p>
					</Topic>
					<Topic heading="Come si vede?">
						<p>
							idk magari fa schifissimo
						</p>
					</Topic>
					<Topic heading="Sfondo">
						<p>
							lo sfondo è wip perchè è overused
						</p>
					</Topic>
				</Chapter>
			</>}
			sidebar={
				<Chapter heading="Indice" columns={1}>
					<Topic heading="Glossario molto lungo">
						<ol>
							{[...Array(1000).keys()].map((n) => <li key={n}>ඞ</li>)}
						</ol>
					</Topic>
				</Chapter>
			}
		/>
	)
}
