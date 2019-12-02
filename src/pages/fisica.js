import style from './fisica.css';
import { Component } from 'preact';
import Latex from '../components/latex';
import Panel from '../components/panel';
import Split from '../components/split';
import Plus from '../components/plus';
import Minus from '../components/minus';
import Todo from '../components/todo';

const r = String.raw;

export default class Fisica extends Component {
	render() {
        return (
            <div>
                <h1>Fisica (2019)</h1>
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
                            <Latex>{r`\vec{v} = \vec{v}_x + \vec{v}_y`}</Latex>
                        </p>
                        <p>
                            <Latex>{r`\left | \vec{v}_x \right | = \left | \vec{v} \right | \sin \alpha`}</Latex>
                        </p>
                        <p>
                            <Latex>{r`\left | \vec{v}_y \right | = \left | \vec{v} \right | \cos \alpha`}</Latex>
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
                            <Latex>{r`\vec{v} + \vec{w} = (\vec{v}_x + \vec{w}_x) + (\vec{v}_y + \vec{w}_y)`}</Latex>
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
                            <Latex>{r`\vec{v} - \vec{w} = (\vec{v}_x - \vec{w}_x) + (\vec{v}_y - \vec{w}_y)`}</Latex>
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
                            <Latex>{r`\vec{v} \cdot \vec{w} = \left | \vec{v} \right | \left | \vec{w} \right | \cos \alpha`}</Latex>
                        </p>
                        <p>
                            Produce il modulo della proiezione di <Latex>{r`\vec{a}`}</Latex> su <Latex>{r`\vec{b}`}</Latex>.
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
                            <Latex>{r`\Sigma \vec{F} = 0 \Longleftrightarrow \Delta v = 0`}</Latex>
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
                            <Latex>{r`\Sigma \vec{F} = m \vec{a}`}</Latex>
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
                            <Latex>{r`\vec{F}_{21} = -\vec{F}_{12}`}</Latex>
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
                            <Latex>{r`\left | \vec{F} \right | = G \frac{m_1 m_2}{s^2}`}</Latex>
                        </p>
                        <p>
                            <Latex>G</Latex> è la <i>costante di gravitazione universale</i> e vale:
                        </p>
                        <p>
                            <Latex>{r`G = 6.67 \cdot 10^{-11} \frac{N m^2}{{kg}^2}`}</Latex>
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
                            <Latex>{r`\left | \vec{F} \right | = g m`}</Latex>
                        </p>
                        <p>
                            <Latex>g</Latex> è la <i>costante di gravità</i> della Terra, e vale:
                        </p>
                        <p>
                            <Latex>{r`g = 9.81 \frac{m}{s^2}`}</Latex>
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
                            <Latex>{r`\left | \vec{F} \right | = g m`}</Latex>
                        </p>
                        <p>
                            L'unica differenza è che cambia la <i>costante di gravità</i>:
                        </p>
                        <p>
                            <Latex>{r`g_{luna} = 1.62 \frac{m}{s^2}`}</Latex>
                        </p>
                        <p>
                            <Latex>{r`g_{marte} = 3.71 \frac{m}{s^2}`}</Latex>
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
                            <Latex>{r`\left | \vec{F} \right | \leq \mu_{s} \left | \vec{F}_{normale} \right |`}</Latex>
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
                            <Latex>{r`\left | \vec{F} \right | \leq \mu_{d} \left | \vec{F}_{normale} \right |`}</Latex>
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
                            <Latex>{r`F = -k x`}</Latex>
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
                            <Latex>{r`\Delta \vec{s} = \vec{s}(fine) - \vec{s}(inizio)`}</Latex>
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
                            <Latex>{r`\vec{v} = \frac{\Delta \vec{s}}{\Delta t}`}</Latex>
                        </p>
                        <p>
                            Se si considera un intervallo di tempo infinitesimale si dice <i>velocità istantanea</i>:
                        </p>
                        <p>
                            <Latex>{r`\vec{v} = \lim_{\Delta t \to 0} \frac{\Delta \vec{s}}{\Delta t} = \frac{d \vec{s}}{dt}`}</Latex>
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
                            <Latex>{r`\vec{a} = \frac{\Delta \vec{v}}{\Delta t}`}</Latex>
                        </p>
                        <p>
                            Se si considera un intervallo di tempo infinitesimale si dice <i>accelerazione istantanea</i>:
                        </p>
                        <p>
                            <Latex>{r`\vec{a} = \lim_{\Delta v \to 0} \frac{\Delta \vec{v}}{\Delta t} = \frac{d \vec{v}}{d t} = \frac{d^2 \vec{s}}{d t^2}`}</Latex>
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
                            <Latex>{r`\vec{p} = m \vec{v}`}</Latex>
                        </p>
                        <p>
                            Se la forza risultante è nulla, la quantità di moto non cambia.
                        </p>
                        <p>
                            <Latex>{r`\Sigma \vec{F} = 0 \Longleftrightarrow \Delta \vec{p} = 0`}</Latex>
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
                            <Latex>{r`s(t) = v \cdot \Delta t + s(0)`}</Latex>
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
                            <Latex>{r`v(t) = k`}</Latex>
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
                            <Latex>{r`a(t) = 0`}</Latex>
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
                            <Latex>{r`s(t) = \frac{1}{2} a \cdot (\Delta t)^2 + v(0) \cdot (\Delta t) + s(0)`}</Latex>
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
                            <Latex>{r`v(t) = a \Delta t + v(0)`}</Latex>
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
                            <Latex>{r`a(t) = k`}</Latex>
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
                            <Latex>{r`\omega = \frac{2 \pi}{T}`}</Latex>
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
                            <Latex>{r`s(t) = A \sin (\omega \cdot t + \phi)`}</Latex>
                        </p>
                    </Panel>
                    <Panel>
                        <h3>
                            Velocità
                        </h3>
                        <p>
                            E' la sinusoide dello spostamento, sfasata di <Latex>{r`\frac{\pi}{2}`}</Latex>:
                        </p>
                        <p>
                            <Latex>{r`v(t) = A \sin (\omega \cdot t + \phi + \frac{\pi}{2})`}</Latex>
                        </p>
                    </Panel>
                    <Panel>
                        <h3>
                            Accelerazione
                        </h3>
                        <p>
                            E' la sinusoide della velocità, sfasata di <Latex>{r`\pi`}</Latex>:
                        </p>
                        <p>
                            <Latex>{r`a(t) = A \sin (\omega \cdot t + \phi + \pi)`}</Latex>
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
                            Il moto parabolico è dato sommando due moti armonici semplici: uno sull'asse X, e l'altro, sfasato di <Latex>{r`\frac{\pi}{2}`}</Latex>, sull'asse Y.
                        </p>
                    </Panel>
                </Split>
                <h2>
                    Moto circolare uniforme
                </h2>
                <Split>
                    <Panel>
                        <h3>
                            Velocità angolare
                        </h3>
                        <p>
                            Quanto cambia la fase nel tempo.
                        </p>
                        <p>
                            <Latex>{r`\omega = \frac{2 \pi}{T}`}</Latex>
                        </p>
                    </Panel>
                    <Panel>
                        <h3>
                            Fase
                        </h3>
                        <p>
                            E' l'angolo percorso dal corpo rispetto alla posizione iniziale.
                        </p>
                        <p>
                            Si indica con <Latex>{r`\phi`}</Latex>, e generalmente si usa in radianti.
                        </p>
                    </Panel>
                    <Panel>
                        <h3>
                            Velocità
                        </h3>
                        <p>
                            Si applicano le formule per la circonferenza:
                        </p>
                        <p>
                            <Latex>{r`v = \frac{\Delta s}{t} = \frac{2 \pi \cdot r}{T} = \omega r`}</Latex>
                        </p>
                    </Panel>
                    <Panel>
                        <h3>
                            Accelerazione
                        </h3>
                        <p>
                            Il corpo ha sempre un accelerazione verso il centro che gli impedisce di abbandonare il moto: 
                        </p>
                        <p>
                            <Latex>{r`a = \frac{v^2}{r} = r \cdot \omega^2 = v \cdot \omega`}</Latex>
                        </p>
                    </Panel>
                    <Panel>
                        <h3>
                            Forza centripeta
                        </h3>
                        <p>
                            È verso il centro e si calcola con:
                        </p>
                        <p>
                            <Latex>{r`F = m \cdot a`}</Latex>
                        </p>
                    </Panel>
                </Split>
                <h2>
                    Lavoro ed energia
                </h2>
                <Split>
                    <Panel>
                        <h3>
                            Lavoro
                        </h3>
                        <p>
                            E' compiuto da una forza che sposta un corpo.
                        </p>
                        <p>
                            <Latex>{r`W = \vec{F} \cdot \vec{s} = F \cdot \Delta s \cdot cos(\alpha )`}</Latex>
                        </p>
                        <p>
                            (Se la forza non è parallela allo spostamento, il prodotto scalare ci fa considerare solo la componente parallela.)
                        </p>
                    </Panel>
                    <Panel>
                        <h3>
                            Energia cinetica
                        </h3>
                        <p>
                            Un corpo ha energia cinetica in ogni momento uguale a:
                        </p>
                        <p>
                            <Latex>{r`E_c = \frac{1}{2} m v^2`}</Latex>
                        </p>
                        <p>
                            Se una forza effettua lavoro su un corpo, cambia la sua energia cinetica pari al lavoro effettuato:
                        </p>
                        <p>
                            <Latex>{r`\Delta E_c = W`}</Latex>
                        </p>
                    </Panel>
                    <Panel>
                        <h3>
                            Energia potenziale gravitazionale
                        </h3>
                        <p>
                            Un corpo ha energia potenziale in ogni momento pari a: 
                        </p>
                        <p>
                            <Latex>{r`E_{p_g} = m \cdot g \cdot h`}</Latex>
                        </p>
                        <p>
                            (Con <Latex>h</Latex> uguale a un altezza scelta come punto di riferimento.)
                        </p>
                    </Panel>
                    <Panel>
                        <h3>
                            Energia potenziale elastica
                        </h3>
                        <p>
                            Una molla ha sempre energia potenziale elastica pari a:
                        </p>
                        <p>
                            <Latex>{r`E_{p_e} = \frac{1}{2} k x^2`}</Latex>
                        </p>
                    </Panel>
                    <Panel>
                        <h3>
                            Forze conservative
                        </h3>
                        <p>
                            Sono conservative le forze per le quali il lavoro compiuto non dipende dal percorso seguito per andare dalla partenza all'arrivo.
                        </p>
                        <p>
                            Ad esempio, è conservativa la <i>forza di gravità</i>, ma <b>non</b> è conservativa la forza di attrito.
                        </p>
                        <p>
                            Se in un sistema ci sono solo forze conservative, allora l'energia meccanica totale si conserva:
                        </p>
                        <p>
                            <Latex>{r`E = E_k + E_p`}</Latex>
                        </p>
                    </Panel>
                    <Panel>
                        <h3>
                            Potenza
                        </h3>
                        <p>
                            È la velocità di trasferimento di energia:
                        </p>
                        <p>
                            <Latex>{r`P = \frac{\Delta E}{\Delta t}`}</Latex>
                        </p>
                    </Panel>
                </Split>
                <h2>
                    Elettrostatica
                </h2>
                <Split>
                    <Panel>
                        <h3>
                            Carica elettrica
                        </h3>
                        <p>
                            È una proprietà dei corpi che può essere <Plus>positiva</Plus> o <Minus>negativa</Minus>.
                        </p>
                        <p>
                            Si conserva: in un sistema chiuso la carica totale è costante.
                        </p>
                        <p>
                            Esiste un'unità elementare: <Latex>{r`C_{elettrone} = 1.602 \cdot 10^{-19}`}</Latex>.
                        </p>
                        <p>
                            Cariche <Plus>opp</Plus><Minus>oste</Minus> si attraggono; cariche <Plus>uguali</Plus> si respingono.
                        </p>
                    </Panel>
                    <Panel>
                        <h3>
                            Conduttori e isolanti
                        </h3>
                        <p>
                            Più <a href="https://it.wikipedia.org/wiki/Ione">ioni</a> ha un corpo, meglio la carica si muove attraverso di esso.
                        </p>
                        <p>
                            I corpi in cui la carica si muove bene sono <i>conduttori</i>, mentre quelli in cui si muove difficilmente sono <i>isolanti</i>.
                        </p>
                        <p>
                            Il corpo umano è un buon conduttore.
                        </p>
                    </Panel>
                </Split>
                <h2>
                    Polarizzazione
                </h2>
                <Split>
                    <Panel>
                        <h3>
                            Polarizzazione
                        </h3>
                        <p>
                            E' possibile polarizzare un corpo per accumulare la carica di un segno in una certa zona.
                        </p>
                    </Panel>
                </Split>
                <Split>
                    <Panel>
                        <h3>
                            Messa a terra
                        </h3>
                        <p>
                            Se un corpo conduttore è in contatto con la Terra, le cariche su di esso saranno <i>equilibrate</i> e il corpo diventerà elettricamente neutro (con stesso numero di <Plus>cariche positive</Plus> e <Minus>negative</Minus> all'interno).
                        </p>
                    </Panel>
                </Split>
                <Split>
                    <Panel>
                        <h3>
                            Polarizzazione per strofinio
                        </h3>
                        <p>
                            Strofinando tra loro due corpi isolanti, essi si <i>polarizzeranno per strofinio</i>.
                        </p>
                    </Panel>
                    <Panel>
                        <h3>
                            Polarizzazione per contatto
                        </h3>
                        <p>
                            Toccando un conduttore con un corpo carico, il conduttore potrà <i>polarizzarsi per contatto</i>.
                        </p>
                    </Panel>
                    <Panel>
                        <h3>
                            Polarizzazione per induzione
                        </h3>
                        <p>
                            Se un corpo conduttore ha cariche "esterne" di un <Plus>certo segno</Plus> vicino, esso avrà tutte le cariche del <Minus>segno opposto</Minus> in equilibrio vicino alle cariche esterne, e tutte le cariche dello <Plus>stesso segno</Plus> più lontano possibile da esse.
                        </p>
                        <p>
                            Mettendo a terra il conduttore, nuove cariche del <Minus>segno opposto</Minus> saranno attratte all'interno del corpo per equilibrare le cariche che si sono allontanate.
                        </p>
                        <p>
                            Staccando il conduttore da terra e rimuovendo le cariche esterne, esso si ritroverà <Minus>caricato del segno opposto</Minus> rispetto alle cariche esterne.
                        </p>
                    </Panel>
                </Split>
                <h2>
                    Forza elettrica
                </h2>
                <Split>
                    <Panel>
                        <h3>
                            Legge di Coulomb
                        </h3>
                        <p>
                            Due corpi carichi si attraggono tra loro con forza: 
                        </p>
                        <p>
                            <Latex>{r`\left | \vec{F}_{elettrica} \right | = \frac{-k \cdot q_1 \cdot q_2}{s^2}`}</Latex>
                        </p>
                        <p>
                            <Latex>{r`k`}</Latex> è la <i>costante di Coulomb</i>, e vale <Latex>{r`k = 8.99 \cdot 10^9 \frac{N \cdot m^2}{C^2}`}</Latex>.
                        </p>
                    </Panel>
                    <Panel>
                        <h3>
                            Permeabilità dello spazio vuoto
                        </h3>
                        <p>
                            La costante <Latex>{r`k`}</Latex> è in realtà dipendente da un altra costante, <Latex>{r`\epsilon_0`}</Latex>, la <i>permeabilità del vuoto</i>.
                        </p>
                        <p>
                            <Latex>{r`k = \frac{1}{4 \pi \cdot \epsilon_0}`}</Latex>
                        </p>
                        <p>
                            <Latex>{r`\left | \vec{F}_{elettrica} \right | = \frac{q_1 \cdot q_2}{4 \pi \cdot \epsilon_0 \cdot s^2}`}</Latex>
                        </p>
                    </Panel>
                    <Panel>
                        <h3>
                            Campo elettrico
                        </h3>
                        <p>
                            Misura che forza viene applicata in ogni punto su una carica unitaria:
                        </p>
                        <p>
                            <Latex>{r`\vec{E} = \frac{\vec{F}_{elettrica}}{q} = \frac{-k \cdot q}{s^2}`}</Latex>
                        </p>
                    </Panel>
                    <Panel>
                        <h3>
                            Flusso elettrico
                        </h3>
                        <p>
                            È la differenza tra "quanto" campo elettrico <Plus>entra</Plus> e quanto campo elettrico <Minus>esce</Minus> da una certa area.
                        </p>
                        <p>
                            È proporzionale alla intensità del campo, alla dimensione dell'area scelta e a come l'area è disposta rispetto alla direzione del campo.
                        </p>
                        <p>
                            Se il campo elettrico è uniforme, se ne può calcolare facilmente il valore:
                        </p>
                        <p>
                            <Latex>{r`\Phi_E = \vec{E} \cdot \vec{S} = E \cdot S \cdot \cos(\phi)`}</Latex>
                        </p>
                        <p>    
                            (dove <Latex>{r`\vec{S}`}</Latex> è il vettore dell'area che abbiamo scelto.)
                        </p>
                    </Panel>
                    <Panel>
                        <h3>
                            Legge di Gauss
                        </h3>
                        <p>
                            Il flusso elettrico uscente da una superficie è proporzionale alla carica presente al suo interno.
                        </p>
                        <p>
                            <Latex>{r`\Phi_E = \frac{q_{interna}}{\epsilon_0}`}</Latex>
                        </p>
                        <p>
                            E' equivalente alla Legge di Coulomb.
                        </p>
                    </Panel>
                </Split>
                <h2>
                    Energia elettrica
                </h2>
                <Split>
                    <Panel>
                        <h3>
                            Energia potenziale elettrica
                        </h3>
                        <p>
                            Un corpo carico vicino ad altre cariche possiede un'<i>energia potenziale elettrica</i> <Latex>{r`U_e`}</Latex>.
                        </p>    
                    </Panel>
                    <Panel>
                        <h3>
                            Potenziale elettrico
                        </h3>
                        <p>
                            È il valore dell'energia potenziale elettrica per una carica unitaria.
                        </p>
                        <p>
                            <Latex>{r`V = \frac{E_{elettrica}}{q}`}</Latex>
                        </p>
                        <p>
                            La sua unità di misura è il <Latex>{r`V`}</Latex>olt.
                        </p>
                    </Panel>
                    <Panel>
                        <h3>
                            Forza elettromotrice (<i>fem</i>)
                        </h3>
                        <p>
                            Non è una forza, ma è la differenza di potenziale presente tra i due campi di una batteria o di un generatore di tensione.
                        </p>
                    </Panel>
                </Split>
                <h2>
                    Elementi di un circuito
                </h2>
                <Split>
                    <Panel>
                        <h3>
                            Condensatore
                        </h3>
                        <p>
                            Immagazzina potenziale elettrico, permettendo di riutilizzarla in seguito.
                        </p>
                        <p>
                            Per farlo, cattura cariche <Plus>positive</Plus> e <Minus>negative</Minus> sulle sue due armature; perchè questo avvenga, deve essere compiuto lavoro.
                        </p>
                        <p>
                            Ha una <b>capacità</b> caratteristica, che in un condensatore a facce piane parallele è:
                        </p>
                        <p>
                            <Latex>{r`C = \frac{q_{massima}}{\Delta V}`}</Latex>
                        </p>
                        <p>
                            Condensatori di capacità maggiore immagazzinano più potenziale con meno carica.
                        </p>
                        <p>
                            La capacità aumenta se viene messo qualcosa tra le armature:
                        </p>
                        <p>
                            <Latex>{r`C_{nuova} = \kappa \cdot \frac{\epsilon_0 \cdot A}{s}`}</Latex>
                        </p>
                        <p>
                            Dove <Latex>{r`\kappa`}</Latex> è la <i>costante dielettrica relativa</i> del materiale inserito, <Latex>{r`A`}</Latex> l'area di una armatura e <Latex>{r`d`}</Latex> la distanza tra le due armature.
                        </p>
                        <p>
                            Se il campo elettrico creatosi tra le due armature supera la <i>rigidità dielettrica</i> del condensatore, la carica immagazzinata viene persa e ha luogo un <i>breakdown</i>.
                        </p>
                    </Panel>
                </Split>
            </div>
        )
	}
}
