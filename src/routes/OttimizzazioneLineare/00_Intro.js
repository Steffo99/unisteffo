import {Fragment} from "preact";
import {Section, Panel, BLatex, TablePanel} from "bluelib";
import Link from "../../components/Link";
import MenuList from "../../components/MenuList";

const r = String.raw;


export default function () {
    return (
        <Fragment>
            <Section title={"Esame"}>
                <Panel title={"Contatti"}>
                    <ul>
                        <li><Link href={"mailto:stefano.novellani@unimore.it"}>Prof. Stefano Novellani</Link></li>
                    </ul>
                </Panel>
                <Panel title={"Scritto"}>
                    <p>
                        Esame digitale in 3 fasi:
                    </p>
                    <ul>
                        <li>25 domande di teoria stile vero/falso</li>
                        <li>2 domande a risposta aperta </li>
                        <li>2 modelli matematici da rappresentare tramite GLPK/MathProg</li>
                    </ul>
                </Panel>
            </Section>
            <Section title={"Extra"}>
                <Panel title={"GLPK/MathProg/GMPL"}>
                    <p>
                        Ti serve una mano anche in GLPK? <small>Che in realtà si chiama <b>GMPL</b>, ma vabbè...</small>
                    </p>
                    <p>
                        Ho fatto una pagina apposta:
                    </p>
                    <MenuList>
                        <li><Link href={"/ottimizzazionelineare/gmpl"}>GLPK/MathProg/GMPL</Link></li>
                    </MenuList>
                </Panel>
            </Section>
            <Section title={"Glossario"}>
                <TablePanel>
                    <thead>
                    <tr>
                        <th><abbr title={"Vettore / matrice"}>v</abbr></th>
                        <th><abbr title={"Elemento singolo"}>s</abbr></th>
                        <th>Significato</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><BLatex>{r`\mathbf{x}`}</BLatex></td>
                        <td><BLatex>{r`x_i`}</BLatex></td>
                        <td>Incognite</td>
                    </tr>
                    <tr>
                        <td><BLatex>{r`\mathbf{s}`}</BLatex></td>
                        <td><BLatex>{r`s_i`}</BLatex></td>
                        <td>Variabili slack</td>
                    </tr>
                    <tr>
                        <td><BLatex>{r`\mathbf{c}`}</BLatex></td>
                        <td><BLatex>{r`c_i`}</BLatex></td>
                        <td>Coefficienti della funzione obiettivo</td>
                    </tr>
                    <tr>
                        <td><BLatex>{r`\mathbf{A}`}</BLatex></td>
                        <td><BLatex>{r`a_{ij}`}</BLatex></td>
                        <td>Coefficienti dei vincoli</td>
                    </tr>
                    <tr>
                        <td><BLatex>{r`\mathbf{b}`}</BLatex></td>
                        <td><BLatex>{r`b_i`}</BLatex></td>
                        <td>Termini noti dei vincoli</td>
                    </tr>
                    <tr>
                        <td><BLatex>{r`\mathbf{y}`}</BLatex></td>
                        <td><BLatex>{r`y_i`}</BLatex></td>
                        <td>Incognite artificiali</td>
                    </tr>
                    <tr>
                        <td><BLatex>{r`\mathbf{u}`}</BLatex></td>
                        <td><BLatex>{r`u_i`}</BLatex></td>
                        <td>Coefficienti di rilassamento</td>
                    </tr>
                    <tr>
                        <td/>
                        <td><BLatex>{r`c_0`}</BLatex></td>
                        <td>Valore ottimo di un problema</td>
                    </tr>
                    <tr>
                        <td><BLatex>{r`\mathbf{x}_B`}</BLatex></td>
                        <td/>
                        <td>Incognite in base</td>
                    </tr>
                    <tr>
                        <td><BLatex>{r`\mathbf{c}_B`}</BLatex></td>
                        <td/>
                        <td>Coefficienti della funzione obiettivo delle variabili in base</td>
                    </tr>
                    <tr>
                        <td><BLatex>{r`\mathbf{B}`}</BLatex></td>
                        <td/>
                        <td>Coefficienti dei vincoli delle variabili in base</td>
                    </tr>
                    <tr>
                        <td><BLatex>{r`\mathbf{x}_F`}</BLatex></td>
                        <td/>
                        <td>Incognite fuori base</td>
                    </tr>
                    <tr>
                        <td><BLatex>{r`\mathbf{c}_F`}</BLatex></td>
                        <td/>
                        <td>Coefficienti della funzione obiettivo delle variabili fuori base</td>
                    </tr>
                    <tr>
                        <td><BLatex>{r`\mathbf{F}`}</BLatex></td>
                        <td/>
                        <td>Coefficienti dei vincoli delle variabili fuori base</td>
                    </tr>
                    </tbody>
                </TablePanel>
                <TablePanel>
                    <thead>
                    <tr>
                        <th>Simboli</th>
                        <th>Significato</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><BLatex>{r`\mathbf{c}^T \mathbf{x}`}</BLatex></td>
                        <td>Soluzione del problema</td>
                    </tr>
                    <tr>
                        <td><BLatex>{r`\mathbf{A} \mathbf{x} = \mathbf{b}`}</BLatex></td>
                        <td>Vincoli in forma standard</td>
                    </tr>
                    <tr>
                        <td><BLatex>{r`z(\dots)`}</BLatex></td>
                        <td>Funzione obiettivo</td>
                    </tr>
                    <tr>
                        <td><BLatex>{r`\mathbf{u}^T \mathbf{b}`}</BLatex></td>
                        <td>Soluzione del problema duale</td>
                    </tr>
                    <tr>
                        <td><BLatex>{r`\mathbf{u}^T \mathbf{A} = \mathbf{c}^T`}</BLatex></td>
                        <td>Vincoli del problema duale in forma standard</td>
                    </tr>
                    <tr>
                        <td><BLatex>{r`\lfloor x \rfloor`}</BLatex></td>
                        <td>Arrotondamento per difetto di x</td>
                    </tr>
                    <tr>
                        <td><BLatex>{r`\lceil x \rceil`}</BLatex></td>
                        <td>Arrotondamento per eccesso di x</td>
                    </tr>
                    <tr>
                        <td><BLatex>{r`x - \lfloor x \rfloor`}</BLatex></td>
                        <td>Parte frazionaria di x (se non è negativo)</td>
                    </tr>
                    </tbody>
                </TablePanel>
            </Section>
        </Fragment>
    )
}
