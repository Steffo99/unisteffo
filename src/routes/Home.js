import {Panel, Section, Todo} from "bluelib";
import Link from "../components/Link";
import BaseLink from "../components/BaseLink";


export default function(props) {
    return (
        <div>
            <Section title="Argomenti in corso">
                <Panel title={<Link href="/calcolonumerico">Calcolo Numerico</Link>}>
                    <p>
                        Appunti scritti mentre studiavo per l'esame di Calcolo Numerico del <BaseLink href="https://www.unimore.it/didattica/mlaurea.html?ID=54">corso triennale di Informatica</BaseLink> all'<BaseLink href="https://www.unimore.it/">Unimore</BaseLink>.
                    </p>
                </Panel>
                <Panel title={<Link href="/ottimizzazionelineare">Ottimizzazione lineare intera</Link>}>
                    <p>
                        Appunti scritti mentre studiavo per l'esame di Ottimizzazione lineare intera del <BaseLink href="https://www.unimore.it/didattica/mlaurea.html?ID=54">corso triennale di Informatica</BaseLink> all'<BaseLink href="https://www.unimore.it/">Unimore</BaseLink>.
                    </p>
                </Panel>
            </Section>
            <Section title="Archiviati">
                <Panel title={<Link href="/basididati">Basi di dati</Link>}>
                    <p>
                        Appunti scritti mentre studiavo per l'esame di Basi di dati del <BaseLink href="https://www.unimore.it/didattica/mlaurea.html?ID=54">corso triennale di Informatica</BaseLink> all'<BaseLink href="https://www.unimore.it/">Unimore</BaseLink>.
                    </p>
                </Panel>
                <Panel title={<Link href="/apprendimento">Apprendimento ed evoluzione in sistemi artificiali</Link>}>
                    <p>
                        Appunti scritti mentre studiavo per l'esame di Apprendimento ed evoluzione in sistemi artificiali del <BaseLink href="https://www.unimore.it/didattica/mlaurea.html?ID=54">corso triennale di Informatica</BaseLink> all'<BaseLink href="https://www.unimore.it/">Unimore</BaseLink>.
                    </p>
                </Panel>
                <Panel title={<Link href="/statistica">Statistica ed elementi di probabilità</Link>}>
                    <p>
                        Appunti scritti mentre studiavo per l'esame di <BaseLink href={"http://personale.unimore.it/rubrica/contenutiad/llarocca/2019/58028/N0/N0/9999"}>Statistica ed elementi di probabilità</BaseLink> del <BaseLink href="https://www.unimore.it/didattica/mlaurea.html?ID=54">corso triennale di Informatica</BaseLink> all'<BaseLink href="https://www.unimore.it/">Unimore</BaseLink> del Prof. <BaseLink href={"http://personale.unimore.it/rubrica/dettaglio/llarocca"}>Luca La Rocca</BaseLink>.
                    </p>
                </Panel>
                <Panel title={<Link href="https://github.com/Steffo99/cleaver">Cleaver</Link>}>
                    <p>
                        Progetto in Java sviluppato per l'esame di <BaseLink href="http://personale.unimore.it/rubrica/contenutiad/gcabri/2019/58026/N0/N0/9999">Programmazione ad Oggetti</BaseLink> del <BaseLink href="https://www.unimore.it/didattica/mlaurea.html?ID=54">corso triennale di Informatica</BaseLink> all'<BaseLink href="https://www.unimore.it/">Unimore</BaseLink>, tenuto dai Prof. <BaseLink href="http://personale.unimore.it/rubrica/dettaglio/gcabri">Giacomo Cabri</BaseLink> e <BaseLink href="http://personale.unimore.it/Rubrica/Dettaglio/n.capodieci">Nicola Capodieci</BaseLink>.
                    </p>
                </Panel>
                <Panel title={<Link href="/fisica">Fisica</Link>}>
                    <p>
                        Appunti delle <BaseLink href="http://personale.unimore.it/rubrica/contenutiad/brunetti/2019/58025/N0/N0/9999">lezioni di Fisica</BaseLink> del <BaseLink href="https://www.unimore.it/didattica/mlaurea.html?ID=54">corso triennale di Informatica</BaseLink> all'<BaseLink href="https://www.unimore.it/">Unimore</BaseLink>, tenute dalla <BaseLink href="https://personale.unimore.it/rubrica/dettaglio/brunetti">Prof.ssa Rossella Brunetti</BaseLink> nel primo semestre dell'Anno Accademico 2019/2020.
                    </p>
                </Panel>
                <Panel title={<Link href="https://github.com/Steffo99/appunti-universitari/tree/master/2019_SistemiOperativi/Arzigogoli">Sistemi Operativi</Link>}>
                    <p>
                        Soluzioni agli <BaseLink href="https://weblab.ing.unimore.it/people/andreolini/didattica/sistemi-operativi/index.html#arzigogoli">Arzigogoli</BaseLink> proposti dal <BaseLink href="https://personale.unimore.it/rubrica/dettaglio/andreolini">Prof. Mauro Andreolini</BaseLink> durante le <BaseLink href="https://personale.unimore.it/rubrica/contenutiad/andreolini/2019/58027/N0/N0/9999">lezioni di Sistemi Operativi</BaseLink> del <BaseLink href="https://www.unimore.it/didattica/mlaurea.html?ID=54">corso triennale di Informatica</BaseLink> all'<BaseLink href="https://www.unimore.it/">Unimore</BaseLink> tenutesi nel primo semestre dell'Anno Accademico 2019/2020.
                    </p>
                </Panel>
                <Panel title={<Link href="/algoritmiestrutturedati">Algoritmi e Strutture Dati</Link>}>
                    <p>
                        Appunti delle <BaseLink href="https://personale.unimore.it/rubrica/contenutiad/mmontangero/2018/58133/N0/N0/9999">lezioni di Algoritmi e Strutture Dati</BaseLink> del <BaseLink href="https://www.unimore.it/didattica/mlaurea.html?ID=54">corso triennale di Informatica</BaseLink> all'<BaseLink href="https://www.unimore.it/">Unimore</BaseLink>, tenute dalla <BaseLink href="https://personale.unimore.it/rubrica/dettaglio/mmontangero">Prof.ssa Manuela Montangero</BaseLink> nel secondo semestre dell'Anno Accademico 2018/2019.
                    </p>
                    <p>
                        <Todo>TODO: finisci di migrare da GitHub!</Todo>
                    </p>
                </Panel>
                <Panel title={<Link href="/vldigeometria">Videolezioni di Geometria</Link>}>
                    <p>
                        Ottime videolezioni di Geometria con licenza <BaseLink href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</BaseLink> che ho trovato sul <BaseLink href="https://dolly.fim.unimore.it/2018/course/view.php?id=14#section-0">portale Dolly 2018</BaseLink> dell'<BaseLink href="https://www.unimore.it/">Unimore</BaseLink>.
                    </p>
                </Panel>
                <Panel title={<Link href="/mingwinstall">Come installare MinGW</Link>}>
                    <p>
                        Un breve tutorial con immagini su come installare e configurare <BaseLink href="https://it.wikipedia.org/wiki/MinGW">MinGW</BaseLink> per compilare programmi C e C++ su Windows.
                    </p>
                </Panel>
            </Section>
            <Section title="Collegamenti utili">
                <Panel title={<Link href="https://github.com/topics/unimore-informatica">unimore-informatica</Link>}>
                    <p>
                        Un topic di GitHub che raccoglie tutti i repository realizzati dagli studenti di Informatica dell'Unimore.
                    </p>
                </Panel>
                <Panel title={<Link href="https://t.me/unimoreinfo">Unimore Informatica</Link>}>
                    <p>
                        Il gruppo <BaseLink href="https://telegram.org/">Telegram</BaseLink> del corso di Informatica dell'Unimore!
                    </p>
                </Panel>
                <Panel title={<Link href="https://calendar.google.com/calendar?cid=MmYza2o2M3VuZWQ1cmZqaGpmOGY0MWFrNmdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ">Calendario Lezioni</Link>}>
                    <p>
                        Calendario Google <small>quasi</small> sempre aggiornato delle lezioni e degli esami del secondo anno dell'<BaseLink href="https://www.unimore.it/">Unimore</BaseLink> durante l'Anno Accademico 2019/2020.
                    </p>
                </Panel>
                <Panel title={<Link href="http://erre2.fermitech.info/dashboard">Erre2</Link>}>
                    <p>
                        Portale contenente appunti e riassunti mantenuto da <BaseLink href="https://github.com/LBindustries">Lorenzo Balugani</BaseLink>.
                    </p>
                </Panel>
            </Section>
        </div>
    )
}
