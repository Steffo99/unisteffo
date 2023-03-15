import { Chapter } from "../components/Chapter";
import { Topic } from "../components/Topic";
import { Layout } from "../components/Layout";

export default function Page() {
	return (
		<Layout 
			heading="Unisteffo"
			main={
				<Chapter heading="Dove sono?" columns={1}>
					<Topic heading="Su Unisteffo!">
						<p>
							Il mio sito di appunti.
						</p>
					</Topic>
				</Chapter>
			}
			sidebar={
				<Chapter heading="Indice" columns={1}>
					<div className="panel box" style={{height: "200vh"}}>
						sus
					</div>
				</Chapter>
			}
		/>
	)
}
