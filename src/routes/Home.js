import {BaseLink, Panel, Section, Split, Todo} from "bluelib";
import Link from "../components/Link";
import MenuList from "../components/MenuList";


export default function (props) {
    return (
        <div>
            <Section title={"Benvenuto ad Appuntiweb!"}>
                <Panel title={"Benvenuto!"}>
                    <p>
                        Ciao! Benvenuto ad <b>Appuntiweb</b>, il sito dove carico tutto il materiale che uso per studiare!
                    </p>
                    <p>
                        Se trovi un errore negli appunti o un bug del sito, <a href={"https://github.com/Steffo99/uni.steffo.eu/issues/new"}>segnalamelo su GitHub</a> :)
                    </p>
                </Panel>
            </Section>
            <Section title={"Appunti"}>
                <Panel title={"Esami che sto preparando"}>
                    <p>
                        Devo ancora dare questi esami, quindi queste pagine potrebbero essere incomplete o errate. Usate a vostro rischio e pericolo!
                    </p>
                    <MenuList>
                        <li><BaseLink href={"/calcolonumerico"}>Calcolo Numerico</BaseLink></li>
                        <li><BaseLink href={"/ottimizzazionelineare"}>Ottimizzazione lineare intera</BaseLink></li>
                    </MenuList>
                </Panel>
                <Panel title={"Esami che ho già dato"}>
                    <p>
                        Ho passato questi esami, quindi probabilmente questi appunti sono giusti :)
                    </p>
                    <MenuList>
                        <li><BaseLink href={"/basididati"}>Basi di dati</BaseLink> <small style={"font-size: small;"}>(non c'è molto, avendo già fatto gli stessi argomenti alle superiori non ho avuto bisogno di studiare)</small></li>
                        <li><BaseLink href={"/apprendimento"}>Apprendimento ed evoluzione in sistemi artificiali</BaseLink></li>
                        <li><BaseLink href={"/statistica"}>Statistica ed elementi di probabilità</BaseLink></li>
                        <li><Link href={"https://github.com/Steffo99/cleaver"}>Progetto Java per Programmazione a Oggetti</Link></li>
                        <li><BaseLink href={"/fisica"}>Fisica</BaseLink></li>
                        <li><BaseLink href={"https://github.com/Steffo99/appunti-universitari/tree/master/2019_SistemiOperativi/Arzigogoli"}>Arzigogoli di Sistemi Operativi</BaseLink></li>
                        <li><BaseLink href={"/algoritmiestrutturedati"}>Algoritmi e Strutture Dati</BaseLink> <small style={"font-size: small;"}>(appunti importati dalla vecchia piattaforma; le formule non si vedono più purtroppo)</small></li>
                    </MenuList>
                </Panel>
            </Section>
            <Section>
                <Panel title={"Altri appunti"}>
                    <MenuList>
                        <li><a href={"/calcolonumerico/ripassodialgebralineare"}>Ripasso di Algebra Lineare</a> <small>(per studenti sperduti di Calcolo Numerico)</small></li>
                        <li><BaseLink href={"/mingwinstall"}>Come installare MinGW</BaseLink> <small>(per studenti sperduti di Programmazione 2)</small></li>
                        <li><BaseLink href={"/vldigeometria"}>Videolezioni di Geometria</BaseLink> <small>(per studenti sperduti di Algebra Lineare)</small></li>
                    </MenuList>
                </Panel>
                <Panel title={"Collegamenti utili"}>
                    <MenuList>
                        <li><Link href={"https://erre2.fermitech.info/dashboard"}>Erre2</Link></li>
                        <li><small>Tag GitHub: </small><Link href={"https://github.com/topics/unimore-informatica"}>unimore-informatica</Link></li>
                        <li><small>Network Telegram: </small><Link href={"https://t.me/unimoreinfo"}>Unimore Informatica</Link></li>
                        <li><small>Solo studenti Unimore: </small><Link href={"https://drive.google.com/drive/folders/1gqY-QIe4UeOSHpcho0R-Nvh2IRAlTFmf"}>Archivio Lezioni</Link></li>
                    </MenuList>
                </Panel>
            </Section>
        </div>
    )
}
