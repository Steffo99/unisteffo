import style from './home.css'
import { Component } from 'preact';
import Panel from '../components/panel';
import Split from '../components/split';
import Todo from '../components/todo';

export default class Home extends Component {
    render() {
        return (
            <div style={style.home}>
                <h1>Indice</h1>
                <Split title="Argomenti">
                    <Panel title={<a href="/fisica">Fisica</a>}>
                        <p>
                            Appunti delle <a href="http://personale.unimore.it/rubrica/contenutiad/brunetti/2019/58025/N0/N0/9999">lezioni di Fisica</a> del <a href="https://www.unimore.it/didattica/mlaurea.html?ID=54">corso triennale di Informatica</a> all'<a href="https://www.unimore.it/">Unimore</a>, tenute dalla <a href="https://personale.unimore.it/rubrica/dettaglio/brunetti">Prof.ssa Rossella Brunetti</a> nel primo semestre dell'Anno Accademico 2019/2020.
                        </p>
                        <p>
                            <Todo>Work in progress</Todo>
                        </p>
                    </Panel>
                    <Panel title={<a href="https://github.com/Steffo99/appunti-universitari/tree/master/2019_SistemiOperativi/Arzigogoli">Sistemi Operativi</a>}>
                        <p>
                            Soluzioni agli <a href="https://weblab.ing.unimore.it/people/andreolini/didattica/sistemi-operativi/index.html#arzigogoli">Arzigogoli</a> proposti dal <a href="https://personale.unimore.it/rubrica/dettaglio/andreolini">Prof. Mauro Andreolini</a> durante le <a href="https://personale.unimore.it/rubrica/contenutiad/andreolini/2019/58027/N0/N0/9999">lezioni di Sistemi Operativi</a> del <a href="https://www.unimore.it/didattica/mlaurea.html?ID=54">corso triennale di Informatica</a> all'<a href="https://www.unimore.it/">Unimore</a> tenutesi nel primo semestre dell'Anno Accademico 2019/2020.
                        </p>
                    </Panel>
                    <Panel title={<a href="https://github.com/Steffo99/appunti-universitari/tree/master/2018_AlgoritmiEStruttureDati">Algoritmi e Strutture Dati</a>}>
                        <p>
                            Appunti delle <a href="https://personale.unimore.it/rubrica/contenutiad/mmontangero/2018/58133/N0/N0/9999">lezioni di Algoritmi e Strutture Dati</a> del <a href="https://www.unimore.it/didattica/mlaurea.html?ID=54">corso triennale di Informatica</a> all'<a href="https://www.unimore.it/">Unimore</a>, tenute dalla <a href="https://personale.unimore.it/rubrica/dettaglio/mmontangero">Prof.ssa Manuela Montangero</a> nel secondo semestre dell'Anno Accademico 2018/2019.
                        </p>
                    </Panel>
                    <Panel title={<a href="/vldigeometria">Videolezioni di Geometria</a>}>
                        <p>
                            Ottime videolezioni di Geometria con licenza <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a> che ho trovato sul <a href="https://dolly.fim.unimore.it/2018/course/view.php?id=14#section-0">portale Dolly 2018</a> dell'<a href="https://www.unimore.it/">Unimore</a>.
                        </p>
                    </Panel>
                    <Panel title={<a href="/mingwinstall">Come installare MinGW</a>}>
                        <p>
                            Un breve tutorial con immagini su come installare e configurare <a href="https://it.wikipedia.org/wiki/MinGW">MinGW</a> per compilare programmi C e C++ su Windows. 
                        </p>
                    </Panel>
                </Split>
                <Split title="Altri collegamenti utili">
                    <Panel title={<a href="https://t.me/unimoreinfo">@unimoreinfo</a>}>
                        <p>
                            Il gruppo <a href="https://telegram.org/">Telegram</a> del corso di Informatica dell'Unimore!  
                        </p>
                    </Panel>
                    <Panel title={<a href="https://calendar.google.com/calendar?cid=MmYza2o2M3VuZWQ1cmZqaGpmOGY0MWFrNmdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ">Calendario Lezioni</a>}>
                        <p>
                            Calendario Google <small>quasi</small> sempre aggiornato delle lezioni e degli esami del secondo anno dell'<a href="https://www.unimore.it/">Unimore</a> durante l'Anno Accademico 2019/2020.
                        </p>
                    </Panel>
                    <Panel title={<a href="http://erre2.fermitech.info/dashboard">Erre2</a>}>
                        <p>
                            Portale contenente appunti e riassunti mantenuto da <a href="https://github.com/LBindustries">Lorenzo Balugani</a>.
                        </p>
                    </Panel>
                    <Panel title={<a href="https://github.com/vezzalinistefano/Appunti-Algoritmi">vezzalinistefano/Appunti-Algoritmi</a>}>
                        <p>
                            Appunti di Algoritmi e Strutture Dati mantenuti da <a href="https://github.com/vezzalinistefano/">Vezzalini Stefano</a>.
                        </p>
                    </Panel>
                </Split>
            </div>
        )
    }
}
