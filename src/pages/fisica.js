import style from './fisica.css';
import { Component } from 'preact';
import Latex from '../components/latex';
import Panel from '../components/panel';
import Split from '../components/split';

export default class Fisica extends Component {
	render() {
        return (
            <div>
                <h1>Fisica</h1>
                <h2>Vettori</h2>
                <Split>
                    <Panel>
                        <h3>
                            Componenti cartesiane
                        </h3>
                        <p>
                            Usa le regole base della trigonometria:
                        </p>
                        <p>
                            <Latex>{String.raw`\vec{v} = \vec{v}_x + \vec{v}_y`}</Latex>
                        </p>
                        <p>
                            <Latex>{String.raw`\left | \vec{v}_x \right | = \left | \vec{v} \right | \sin \alpha`}</Latex>
                        </p>
                        <p>
                            <Latex>{String.raw`\left | \vec{v}_y \right | = \left | \vec{v} \right | \cos \alpha`}</Latex>
                        </p>
                    </Panel>
                    <Panel>
                        <h3>
                            Somma
                        </h3>
                        <p>
                            Scomponi in componenti, poi sommali:
                        </p>
                        <p>
                            <Latex>{String.raw`\vec{v} + \vec{w} = (\vec{v}_x + \vec{w}_x) + (\vec{v}_y + \vec{w}_y)`}</Latex>
                        </p>
                        <p>
                            Produce il vettore risultante dall'applicazione della regola del parallelogramma.
                        </p>
                    </Panel>
                    <Panel>
                        <h3>
                            Differenza
                        </h3>
                        <p>
                            Alla fine è sempre una somma:
                        </p>
                        <p>
                            <Latex>{String.raw`\vec{v} - \vec{w} = (\vec{v}_x - \vec{w}_x) + (\vec{v}_y - \vec{w}_y)`}</Latex>
                        </p>
                        <p>
                            Produce il vettore che parte da <Latex>w</Latex> e arriva a <Latex>v</Latex>.
                        </p>
                    </Panel>
                    <Panel>
                        <h3>
                            Prodotto scalare
                        </h3>
                        <p>
                            Si chiama scalare perchè il risultato è uno scalare, non un vettore.
                        </p>
                        <p>
                            <Latex>{String.raw`\vec{v} \cdot \vec{w} = \left | \vec{v} \right | \left | \vec{w} \right | \cos \alpha`}</Latex>
                        </p>
                        <p>
                            Produce il modulo della proiezione di <Latex>{String.raw`\vec{a}`}</Latex> su <Latex>{String.raw`\vec{b}`}</Latex>.
                        </p>
                    </Panel>
                </Split>
                <h2>
                    Leggi di Newton
                </h2>
                <Split>
                    <Panel>
                        <h3>
                            1ᵃ: Inerzia
                        </h3>
                        <p>
                            Se un corpo puntiforme ha forza risultante nulla, allora la sua velocità non cambia.
                        </p>
                        <p>
                            <Latex>{String.raw`\Sigma \vec{F} = 0 \Longleftrightarrow \Delta v = 0`}</Latex>
                        </p>
                    </Panel>
                    <Panel>
                        <h3>
                            2ᵃ: Proporzionalità
                        </h3>
                        <p>
                            La forza risultante di un corpo è direttamente proporzionale alla sua accelerazione, e la costante di proporzionalità è la <i>massa</i>.
                        </p>
                        <p>
                            <Latex>{String.raw`\Sigma \vec{F} = m \vec{a}`}</Latex>
                        </p>
                    </Panel>
                    <Panel>
                        <h3>
                            3ᵃ: Azione e reazione
                        </h3>
                        <p>
                            Due corpi esercitano forze uguali e opposte uno sull'altro. 
                        </p>
                        <p>
                            <Latex>{String.raw`\vec{F}_{21} = -\vec{F}_{12}`}</Latex>
                        </p>
                    </Panel>
                </Split>
                <h2>
                    Forza di gravità
                </h2>
                <Split>
                    <Panel>
                        <h3>
                            Tra due corpi
                        </h3>
                        <p>
                            Due corpi puntiformi si attirano uno verso l'altro con forza:
                        </p>
                        <p>
                            <Latex>{String.raw`\left | \vec{F} \right | = G \frac{m_1 m_2}{s^2}`}</Latex>
                        </p>
                        <p>
                            <Latex>G</Latex> è la <i>costante di gravitazione universale</i> e vale:
                        </p>
                        <p>
                            <Latex>{String.raw`G = 6.67 \cdot 10^{-11} \frac{N m^2}{{kg}^2}`}</Latex>
                        </p>
                    </Panel>
                    <Panel>
                        <h3>
                            Verso la Terra
                        </h3>
                        <p>
                            Se nel sistema di riferimento consideriamo la Terra ferma, allora un corpo è attratto verso la Terra con forza <i>peso</i> uguale a:
                        </p>
                        <p>
                            <Latex>{String.raw`\left | \vec{F} \right | = g m`}</Latex>
                        </p>
                        <p>
                            <Latex>g</Latex> è la <i>costante di gravità</i> della Terra, e vale:
                        </p>
                        <p>
                            <Latex>{String.raw`g = 9.81 \frac{m}{s^2}`}</Latex>
                        </p>
                    </Panel>
                    <Panel>
                        <h3>
                            Su pianeti diversi
                        </h3>
                        <p>
                            Per pianeti diversi dalla Terra vale la stessa regola:
                        </p>
                        <p>
                            <Latex>{String.raw`\left | \vec{F} \right | = g m`}</Latex>
                        </p>
                        <p>
                            L'unica differenza è che cambia la <i>costante di gravità</i>:
                        </p>
                        <p>
                            <Latex>{String.raw`g_{luna} = 1.62 \frac{m}{s^2}`}</Latex>
                        </p>
                        <p>
                            <Latex>{String.raw`g_{marte} = 3.71 \frac{m}{s^2}`}</Latex>
                        </p>
                    </Panel>
                </Split>
                <h2>
                    Forze di contatto
                </h2>
                <Split>
                    <Panel>
                        <h3>
                            Normale
                        </h3>
                        <p>
                            Si oppone alle forze applicate alla superficie di contatto.
                        </p>
                        <p>
                            Un libro appoggiato su un tavolo ha la <b>forza di gravità</b> che lo attira verso il terreno e la <b>forza normale</b> che lo trattiene dal cadere. 
                        </p>
                    </Panel>
                    <Panel>
                        <h3>
                            Attrito statico
                        </h3>
                        <p>
                            Impedisce a un corpo di muoversi se non viene spinto da una forza che supera una certa soglia:
                        </p>
                        <p>
                            <Latex>{String.raw`\left | \vec{F} \right | \leq \mu_{s} \left | \vec{F}_{normale} \right |`}</Latex>
                        </p>
                    </Panel>
                    <Panel>
                        <h3>
                            Attrito dinamico
                        </h3>
                        <p>
                            Rallenta i corpi che si stanno muovendo finchè essi non si fermano:
                        </p>
                        <p>
                            <Latex>{String.raw`\left | \vec{F} \right | \leq \mu_{d} \left | \vec{F}_{normale} \right |`}</Latex>
                        </p>
                    </Panel>
                    <Panel>
                        <h3>
                            Tensione
                        </h3>
                        <p>
                            E' forza trasmessa tra due estremi di una fune.
                        </p>
                        <p>
                            Può essere redirezionata per mezzo di carrucole.
                        </p>
                    </Panel>
                    <Panel>
                        <h3>
                            Elastica
                        </h3>
                        <p>
                            Una molla cerca sempre di tornare alla sua posizione indeformata con forza:
                        </p>
                        <p>
                            <Latex>{String.raw`F = -k x`}</Latex>
                        </p>
                        <p>
                            (E' negativa perchè la forza è opposta a quella applicata per deformarla.)
                        </p>
                    </Panel>
                </Split>
                <h2>
                    Cinematica
                </h2>
                <Split>
                    <Panel>
                        <h3>
                            Spostamento
                        </h3>
                        <p>
                            È un vettore che indica la posizione di un corpo rispetto a un'origine.
                        </p>
                        <p>
                            <Latex>{String.raw`\Delta \vec{s} = \vec{s}(fine) - \vec{s}(inizio)`}</Latex>
                        </p>
                    </Panel>
                    <Panel>
                        <h3>
                            Velocità
                        </h3>
                        <p>
                            È un vettore che misura la variazione di posizione nel tempo.
                        </p>
                        <p>
                            <Latex>{String.raw`\vec{v} = \frac{\Delta \vec{s}}{\Delta t}`}</Latex>
                        </p>
                        <p>
                            Se si considera un intervallo di tempo infinitesimale si dice <i>velocità istantanea</i>:
                        </p>
                        <p>
                            <Latex>{String.raw`\vec{v} = \lim_{\Delta t \to 0} \frac{\Delta \vec{s}}{\Delta t} = \frac{d \vec{s}}{dt}`}</Latex>
                        </p>
                    </Panel>
                    <Panel>
                        <h3>
                            Accelerazione
                        </h3>
                        <p>
                            È un vettore che misura la variazione di velocità nel tempo.
                        </p>
                        <p>
                            <Latex>{String.raw`\vec{a} = \frac{\Delta \vec{v}}{\Delta t}`}</Latex>
                        </p>
                        <p>
                            Se si considera un intervallo di tempo infinitesimale si dice <i>accelerazione istantanea</i>:
                        </p>
                        <p>
                            <Latex>{String.raw`\vec{a} = \lim_{\Delta v \to 0} \frac{\Delta \vec{v}}{\Delta t} = \frac{d \vec{v}}{d t} = \frac{d^2 \vec{s}}{d t^2}`}</Latex>
                        </p>
                    </Panel>
                    <Panel>
                        <h3>
                            Quantità di moto <small>(momento lineare)</small>
                        </h3>
                        <p>
                            La quantità di moto è una proprietà vettoriale dei corpi:
                        </p>
                        <p>
                            <Latex>{String.raw`\vec{p} = m \vec{v}`}</Latex>
                        </p>
                        <p>
                            Se la forza risultante è nulla, la quantità di moto non cambia.
                        </p>
                        <p>
                            <Latex>{String.raw`\Sigma \vec{F} = 0 \Longleftrightarrow \Delta \vec{p} = 0`}</Latex>
                        </p>
                    </Panel>
                </Split>
                <h2>
                    Moto rettilineo uniforme
                </h2>
                <Split>
                    <Panel>
                        <h3>
                            Spostamento
                        </h3>
                        <p>
                            La <i>legge oraria</i> è:
                        </p>
                        <p>
                            <Latex>{String.raw`s(t) = v \cdot \Delta t + s(0)`}</Latex>
                        </p>
                    </Panel>
                    <Panel>
                        <h3>
                            Velocità
                        </h3>
                        <p>
                            È costante:
                        </p>
                        <p>
                            <Latex>{String.raw`v(t) = k`}</Latex>
                        </p>
                    </Panel>
                    <Panel>
                        <h3>
                            Accelerazione
                        </h3>
                        <p>
                            La velocità non varia:
                        </p>
                        <p>
                            <Latex>{String.raw`a(t) = 0`}</Latex>
                        </p>
                    </Panel>
                    <Panel>
                        <h3>
                            Forze
                        </h3>
                        <p>
                            Si applica la prima legge di Newton:
                        </p>
                        <p>
                            <Latex>f(t) = 0</Latex>
                        </p>
                    </Panel>
                </Split>
                <h2>
                    Moto rettilineo uniformemente accelerato
                </h2>
                <Split>
                    <Panel>
                        <h3>
                            Spostamento
                        </h3>
                        <p>
                            La <i>legge oraria</i> è:
                        </p>
                        <p>
                            <Latex>{String.raw`s(t) = \frac{1}{2} a \cdot (\Delta t)^2 + v(0) \cdot (\Delta t) + s(0)`}</Latex>
                        </p>
                    </Panel>
                    <Panel>
                        <h3>
                            Velocità
                        </h3>
                        <p>
                            È una retta:
                        </p>
                        <p>
                            <Latex>{String.raw`v(t) = a \Delta t + v(0)`}</Latex>
                        </p>
                    </Panel>
                    <Panel>
                        <h3>
                            Accelerazione
                        </h3>
                        <p>
                            È costante:
                        </p>
                        <p>
                            <Latex>{String.raw`a(t) = k`}</Latex>
                        </p>
                    </Panel>
                    <Panel>
                        <h3>
                            Forze
                        </h3>
                        <p>
                            Si applica la prima legge di Newton:
                        </p>
                        <p>
                            <Latex>f(t) = m a</Latex>
                        </p>
                    </Panel>
                </Split>
                <h2>
                    Moto armonico semplice
                </h2>
                <Split>
                    <Panel>
                        <h3>
                            Ampiezza
                        </h3>
                        <p>
                            E' la distanza dal centro massima che raggiunge il corpo.
                        </p>
                        <p>
                            (L'ampiezza di una sinusoide.)
                        </p>
                    </Panel>
                    <Panel>
                        <h3>
                            Velocità angolare
                        </h3>
                        <p>
                            Indica quanto in fretta cambia la posizione del corpo. 
                        </p>
                        <p>
                            Dipende dal periodo:
                        </p>
                        <p>
                            <Latex>{String.raw`\omega = \frac{2 \pi}{T}`}</Latex>
                        </p>
                    </Panel>
                    <Panel>
                        <h3>
                            Spostamento
                        </h3>
                        <p>
                            E' una sinusoide:
                        </p>
                        <p>
                            <Latex>{String.raw`s(t) = A \sin (\omega \cdot t + \phi)`}</Latex>
                        </p>
                    </Panel>
                    <Panel>
                        <h3>
                            Velocità
                        </h3>
                        <p>
                            E' la sinusoide dello spostamento, sfasata di <Latex>{String.raw`\frac{\pi}{2}`}</Latex>:
                        </p>
                        <p>
                            <Latex>{String.raw`s(t) = A \sin (\omega \cdot t + \phi + \frac{\pi}{2})`}</Latex>
                        </p>
                    </Panel>
                    <Panel>
                        <h3>
                            Accelerazione
                        </h3>
                        <p>
                            E' la sinusoide della velocità, sfasata di <Latex>{String.raw`\frac{\pi}{2}`}</Latex>:
                        </p>
                        <p>
                            <Latex>{String.raw`s(t) = A \sin (\omega \cdot t + \phi + \pi)`}</Latex>
                        </p>
                    </Panel>
                    <Panel>
                        <h3>
                            Forze
                        </h3>
                        <p>
                            Si applica la prima legge di Newton:
                        </p>
                        <p>
                            <Latex>f(t) = m a</Latex>
                        </p>
                    </Panel>
                </Split>
                <h2>
                    Moti composti
                </h2>
                <Split>
                    <Panel>
                        <h3>
                            Moto parabolico
                        </h3>
                        <p>
                            Il moto parabolico è dato sommando un moto rettilineo uniforme sull'asse orizzontale e un moto rettilineo uniformemente accelerato sull'asse verticale.
                        </p>
                    </Panel>
                    <Panel>
                        <h3>
                            Moto circolare uniforme
                        </h3>
                        <p>
                            Il moto parabolico è dato sommando due moti armonici semplici: uno sull'asse X, e l'altro, sfasato di <Latex>{String.raw`\frac{\pi}{2}`}</Latex>, sull'asse Y.
                        </p>
                    </Panel>
                </Split>
            </div>
        )
	}
}