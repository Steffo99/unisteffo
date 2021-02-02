import {BaseLink, Panel, Section, Split, Todo} from "bluelib";
import Link from "../components/Link";
import MenuList from "../components/MenuList";


export default function (props) {
    return (
        <div>
            <Section title={"Benvenuto ad Unisteffo!"}>
                <Panel title={"Benvenuto!"}>
                    <p>
                        Ciao! Benvenuto ad <b>Unisteffo</b>, il sito dove carico tutto il materiale che uso per studiare!
                    </p>
                    <p>
                        Se trovi un errore negli appunti, <a href={"https://github.com/Steffo99/appuntiweb-alpha/issues/new"}>segnalamelo su GitHub</a> :)
                    </p>
                    <p>
                        Se trovi un bug del sito... Pazienza, ormai l'ho <a href={"https://github.com/Steffo99/appuntiweb"}>riscritto da 0</a>!
                    </p>
                </Panel>
            </Section>
            <Section title={"Primo anno"}>
                <Panel title={"Primo semestre"}>
                    <MenuList>
                        <li><Link href={"https://github.com/Steffo99/appunti-universitari/tree/master/2018_Analisi1"}>Analisi matematica</Link></li>
                        <li><Link href={"https://github.com/Steffo99/appunti-universitari/tree/master/2018_AlgebraLineare"}>Algebra lineare</Link></li>
                    </MenuList>
                </Panel>
                <Panel title={"Secondo semestre"}>
                    <MenuList>
                        <li><Link href={"https://github.com/Steffo99/appunti-universitari/tree/master/2018_ArchitetturaDeiCalcolatori"}>Architettura dei calcolatori</Link></li>
                        <li><BaseLink href={"/algoritmiestrutturedati"}>Algoritmi e strutture dati</BaseLink></li>
                    </MenuList>
                </Panel>
            </Section>
            <Section title={"Secondo anno"}>
                <Panel title={"Terzo semestre"}>
                    <MenuList>
                        <li><BaseLink href={"/fisica"}>Fisica</BaseLink></li>
                        <li><Link href={"https://github.com/Steffo99/cleaver"}>Programmazione a oggetti</Link></li>
                        <li><Link href={"https://github.com/Steffo99/appunti-universitari/tree/master/2019_SistemiOperativi/Arzigogoli"}>Sistemi operativi</Link></li>
                        <li><BaseLink href={"/statistica"}>Statistica ed elementi di probabilità</BaseLink></li>
                    </MenuList>
                </Panel>
                <Panel title={"Quarto semestre"}>
                    <MenuList>
                        <li><BaseLink href={"/apprendimento"}>Apprendim. ed evol. in sist. artificiali</BaseLink></li>
                        <li><BaseLink href={"/basididati"}>Basi di dati</BaseLink></li>
                        <li><BaseLink href={"/calcolonumerico"}>Calcolo numerico</BaseLink></li>
                        <li><BaseLink href={"/ottimizzazionelineare"}>Ottimizzazione lineare intera</BaseLink></li>
                    </MenuList>
                </Panel>
            </Section>
            <Section title={"Terzo anno"}>
                <Panel title={"Quinto semestre"}>
                    <MenuList>
                        <li><BaseLink href={"/linguaggidinamici"}>Linguaggi dinamici</BaseLink></li>
                        <li><BaseLink href={"/protocollidirete"}>Protocolli e architett. di rete</BaseLink></li>
                        <li><BaseLink href={"/gestionedellinformazione"}>Gestione dell'informazione</BaseLink></li>
                    </MenuList>
                </Panel>
                <Panel title={"Ultimo semestre"}>
                    <p>
                        <i>Non c'è ancora nulla qui...</i>
                    </p>
                </Panel>
            </Section>
            <Section title={"Altro"}>
                <Panel title={"Altri appunti"}>
                    <MenuList>
                        <li><BaseLink href={"/mingwinstall"}>Come installare MinGW</BaseLink> <small>(per studenti sperduti di Programmazione 2)</small></li>
                        <li><BaseLink href={"/vldigeometria"}>Videolezioni di Geometria</BaseLink> <small>(per studenti sperduti di Algebra Lineare)</small></li>
                    </MenuList>
                </Panel>
                <Panel title={"Collegamenti utili"}>
                    <MenuList>
                        <li><Link href={"https://erre2.fermitech.info/dashboard"}>Erre2</Link></li>
                        <li><small>Tag GitHub: </small><Link href={"https://github.com/topics/unimore-informatica"}>unimore-informatica</Link></li>
                        <li><small>Network Telegram: </small><Link href={"https://thor.steffo.eu"}>Unimore Informatica</Link></li>
                        <li><small>Solo studenti Unimore: </small><Link href={"https://drive.google.com/drive/folders/1gqY-QIe4UeOSHpcho0R-Nvh2IRAlTFmf"}>Archivio Lezioni</Link></li>
                    </MenuList>
                </Panel>
            </Section>
        </div>
    )
}
