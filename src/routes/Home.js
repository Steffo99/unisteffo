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
                <Panel title={"Primo anno"}>
                    <MenuList>
                        <li><BaseLink disabled={true}>OFA</BaseLink></li>
                        <li><Link href={"https://github.com/Steffo99/appunti-universitari/tree/master/2018_Analisi1"}>Analisi matematica</Link></li>
                        <li><Link href={"https://github.com/Steffo99/appunti-universitari/tree/master/2018_AlgebraLineare"}>Algebra lineare</Link></li>
                        <li><BaseLink disabled={true}>Programmazione 1</BaseLink></li>
                    </MenuList>
                    <hr/>
                    <MenuList>
                        <li><Link href={"https://github.com/Steffo99/appunti-universitari/tree/master/2018_ArchitetturaDeiCalcolatori"}>Architettura dei Calcolatori</Link></li>
                        <li><BaseLink disabled={true}>Programmazione 2</BaseLink></li>
                        <li><BaseLink href={"/algoritmiestrutturedati"}>Algoritmi e strutture dati</BaseLink></li>
                        <li><BaseLink disabled={true}>Inglese</BaseLink></li>
                    </MenuList>
                </Panel>
                <Panel title={"Secondo anno"}>
                    <MenuList>
                        <li><BaseLink href={"/fisica"}>Fisica</BaseLink></li>
                        <li><Link href={"https://github.com/Steffo99/cleaver"}>Programmazione a oggetti</Link></li>
                        <li><Link href={"https://github.com/Steffo99/appunti-universitari/tree/master/2019_SistemiOperativi/Arzigogoli"}>Sistemi Operativi</Link></li>
                        <li><BaseLink href={"/statistica"}>Statistica ed elementi di probabilità</BaseLink></li>
                    </MenuList>
                    <hr/>
                    <MenuList>
                        <li><BaseLink href={"/apprendimento"}>Apprendim. ed evol. in sist. artificiali</BaseLink></li>
                        <li><BaseLink href={"/basididati"}>Basi di Dati</BaseLink></li>
                        <li><BaseLink href={"/calcolonumerico"}>Calcolo Numerico</BaseLink></li>
                        <li><BaseLink href={"/ottimizzazionelineare"}>Ottimizzazione Lineare Intera</BaseLink></li>
                    </MenuList>
                </Panel>
                <Panel title={"Terzo anno"}>
                    <MenuList>
                        <li><BaseLink disabled={true}>Paradigmi e linguaggi di programm.</BaseLink></li>
                        <li><BaseLink disabled={true}>Protocolli e architetture di rete</BaseLink></li>
                        <li><BaseLink disabled={true}>TBD</BaseLink></li>
                        <li><BaseLink disabled={true}>TBD</BaseLink></li>
                    </MenuList>
                    <hr/>
                    <MenuList>
                        <li><BaseLink disabled={true}>TBD</BaseLink></li>
                        <li><BaseLink disabled={true}>TBD</BaseLink></li>
                        <li><BaseLink disabled={true}>Tirocinio</BaseLink></li>
                        <li><BaseLink disabled={true}>Prova finale</BaseLink></li>
                    </MenuList>
                </Panel>
            </Section>
            <Section>
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
                        <li><small>Network Telegram: </small><Link href={"https://t.me/unimoreinfo"}>Unimore Informatica</Link></li>
                        <li><small>Solo studenti Unimore: </small><Link href={"https://drive.google.com/drive/folders/1gqY-QIe4UeOSHpcho0R-Nvh2IRAlTFmf"}>Archivio Lezioni</Link></li>
                    </MenuList>
                </Panel>
            </Section>
        </div>
    )
}
