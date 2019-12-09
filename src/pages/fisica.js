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
            <div style={style.fisica}>
                <h1>Fisica</h1>
                <Split title="Vettori">
                    <Panel title="Componenti cartesiane">
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
                    <Panel title="Somma">
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
                    <Panel title="Differenza">
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
                    <Panel title="Prodotto scalare">
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
                    <Panel title="Prodotto vettoriale">
                        <p>
                            Si chiama vettoriale perchè il risultato è un altro vettore.
                        </p>
                        <ul>
                            <li><Latex>{r`\vec{c} = \vec{a} \times \vec{b}`}</Latex></li>
                            <li><Latex>{r`\left | \vec{c} \right | = \left | \vec{a} \right | \cdot \left | \vec{b} \right | \cdot \sin(\alpha)`}</Latex></li>
                            <li><a href="https://it.wikipedia.org/wiki/Regola_della_mano_destra">Regola della mano destra</a></li>
                        </ul>
                        <p>
                            Non è commutativo!
                        </p>
                    </Panel>
                </Split>
                <Split title="Leggi di Newton">
                    <Panel title="1ᵃ: Inerzia">
                        <p>
                            Se un corpo puntiforme ha forza risultante nulla, allora la sua velocità non cambia.
                        </p>
                        <p>
                            <Latex>{r`\Sigma \vec{F} = 0 \Longleftrightarrow \Delta v = 0`}</Latex>
                        </p>
                    </Panel>
                    <Panel title="2ᵃ: Proporzionalità">
                        <p>
                            La forza risultante di un corpo è direttamente proporzionale alla sua accelerazione, e la costante di proporzionalità è la <i>massa</i>.
                        </p>
                        <p>
                            <Latex>{r`\Sigma \vec{F} = m \vec{a}`}</Latex>
                        </p>
                    </Panel>
                    <Panel title="3ᵃ: Azione e reazione">
                        <p>
                            Due corpi esercitano forze uguali e opposte uno sull'altro. 
                        </p>
                        <p>
                            <Latex>{r`\vec{F}_{21} = -\vec{F}_{12}`}</Latex>
                        </p>
                    </Panel>
                </Split>
                <Split title="Forza di gravità">
                    <Panel title="Tra due corpi">
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
                    <Panel title="Verso la Terra">
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
                    <Panel title="Su pianeti diversi">
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
                <Split title="Forze di contatto">
                    <Panel title="Normale">
                        <p>
                            Si oppone alle forze applicate alla superficie di contatto.
                        </p>
                        <p>
                            Un libro appoggiato su un tavolo ha la <b>forza di gravità</b> che lo attira verso il terreno e la <b>forza normale</b> che lo trattiene dal cadere. 
                        </p>
                    </Panel>
                    <Panel title="Attrito statico">
                        <p>
                            Impedisce a un corpo di muoversi se non viene spinto da una forza che supera una certa soglia:
                        </p>
                        <p>
                            <Latex>{r`\left | \vec{F} \right | \leq \mu_{s} \left | \vec{F}_{normale} \right |`}</Latex>
                        </p>
                    </Panel>
                    <Panel title="Attrito dinamico">
                        <p>
                            Rallenta i corpi che si stanno muovendo finchè essi non si fermano:
                        </p>
                        <p>
                            <Latex>{r`\left | \vec{F} \right | \leq \mu_{d} \left | \vec{F}_{normale} \right |`}</Latex>
                        </p>
                    </Panel>
                    <Panel title="Tensione">
                        <p>
                            E' forza trasmessa tra due estremi di una fune.
                        </p>
                        <p>
                            Può essere redirezionata per mezzo di carrucole.
                        </p>
                    </Panel>
                    <Panel title="Elastica">
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
                <Split title="Cinematica">
                    <Panel title="Spostamento">
                        <p>
                            È un vettore che indica la posizione di un corpo rispetto a un'origine.
                        </p>
                        <p>
                            <Latex>{r`\Delta \vec{s} = \vec{s}(fine) - \vec{s}(inizio)`}</Latex>
                        </p>
                    </Panel>
                    <Panel title="Velocità">
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
                    <Panel title="Accelerazione">
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
                    <Panel title={<span>Quantità di moto <small>(momento lineare)</small></span>}>
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
                <Split title="Moto rettilineo uniforme">
                    <Panel title="Spostamento">
                        <p>
                            La <i>legge oraria</i> è:
                        </p>
                        <p>
                            <Latex>{r`s(t) = v \cdot \Delta t + s(0)`}</Latex>
                        </p>
                    </Panel>
                    <Panel title="Velocità">
                        <p>
                            È costante:
                        </p>
                        <p>
                            <Latex>{r`v(t) = k`}</Latex>
                        </p>
                    </Panel>
                    <Panel title="Accelerazione">
                        <p>
                            La velocità non varia:
                        </p>
                        <p>
                            <Latex>{r`a(t) = 0`}</Latex>
                        </p>
                    </Panel>
                    <Panel title="Forze">
                        <p>
                            Si applica la prima legge di Newton:
                        </p>
                        <p>
                            <Latex>f(t) = 0</Latex>
                        </p>
                    </Panel>
                </Split>
                <Split title="Moto rettilineo uniformemente accelerato">
                    <Panel title="Spostamento">
                        <p>
                            La <i>legge oraria</i> è:
                        </p>
                        <p>
                            <Latex>{r`s(t) = \frac{1}{2} a \cdot (\Delta t)^2 + v(0) \cdot (\Delta t) + s(0)`}</Latex>
                        </p>
                    </Panel>
                    <Panel title="Velocità">
                        <p>
                            È una retta:
                        </p>
                        <p>
                            <Latex>{r`v(t) = a \Delta t + v(0)`}</Latex>
                        </p>
                    </Panel>
                    <Panel title="Accelerazione">
                        <p>
                            È costante:
                        </p>
                        <p>
                            <Latex>{r`a(t) = k`}</Latex>
                        </p>
                    </Panel>
                    <Panel title="Forze">
                        <p>
                            Si applica la prima legge di Newton:
                        </p>
                        <p>
                            <Latex>f(t) = m a</Latex>
                        </p>
                    </Panel>
                </Split>
                <Split title="Moto armonico semplice">
                    <Panel title="Ampiezza">
                        <p>
                            E' la distanza dal centro massima che raggiunge il corpo.
                        </p>
                        <p>
                            (L'ampiezza di una sinusoide.)
                        </p>
                    </Panel>
                    <Panel title="Velocità angolare">
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
                    <Panel title="Spostamento">
                        <p>
                            E' una sinusoide:
                        </p>
                        <p>
                            <Latex>{r`s(t) = A \sin (\omega \cdot t + \phi)`}</Latex>
                        </p>
                    </Panel>
                    <Panel title="Velocità">
                        <p>
                            E' la sinusoide dello spostamento, sfasata di <Latex>{r`\frac{\pi}{2}`}</Latex>:
                        </p>
                        <p>
                            <Latex>{r`v(t) = A \sin (\omega \cdot t + \phi + \frac{\pi}{2})`}</Latex>
                        </p>
                    </Panel>
                    <Panel title="Accelerazione">
                        <p>
                            E' la sinusoide della velocità, sfasata di <Latex>{r`\pi`}</Latex>:
                        </p>
                        <p>
                            <Latex>{r`a(t) = A \sin (\omega \cdot t + \phi + \pi)`}</Latex>
                        </p>
                    </Panel>
                    <Panel title="Forze">
                        <p>
                            Si applica la prima legge di Newton:
                        </p>
                        <p>
                            <Latex>f(t) = m a</Latex>
                        </p>
                    </Panel>
                </Split>
                <Split title="Moti composti">
                    <Panel title="Moto parabolico">
                        <p>
                            Il moto parabolico è dato sommando un moto rettilineo uniforme sull'asse orizzontale e un moto rettilineo uniformemente accelerato sull'asse verticale.
                        </p>
                    </Panel>
                    <Panel title="Moto circolare uniforme">
                        <p>
                            Il moto parabolico è dato sommando due moti armonici semplici: uno sull'asse X, e l'altro, sfasato di <Latex>{r`\frac{\pi}{2}`}</Latex>, sull'asse Y.
                        </p>
                    </Panel>
                </Split>
                <Split title="Moto circolare uniforme">
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
                    <Panel title="Fase">
                        <p>
                            E' l'angolo percorso dal corpo rispetto alla posizione iniziale.
                        </p>
                        <p>
                            Si indica con <Latex>{r`\phi`}</Latex>, e generalmente si usa in radianti.
                        </p>
                    </Panel>
                    <Panel title="Velocità">
                        <p>
                            Si applicano le formule per la circonferenza:
                        </p>
                        <p>
                            <Latex>{r`v = \frac{\Delta s}{t} = \frac{2 \pi \cdot r}{T} = \omega r`}</Latex>
                        </p>
                    </Panel>
                    <Panel title="Accelerazione">
                        <p>
                            Il corpo ha sempre un accelerazione verso il centro che gli impedisce di abbandonare il moto: 
                        </p>
                        <p>
                            <Latex>{r`a = \frac{v^2}{r} = r \cdot \omega^2 = v \cdot \omega`}</Latex>
                        </p>
                    </Panel>
                    <Panel title="Forza centripeta">
                        <p>
                            È verso il centro e si calcola con:
                        </p>
                        <p>
                            <Latex>{r`F = m \cdot a`}</Latex>
                        </p>
                    </Panel>
                </Split>
                <Split title="Lavoro ed energia">
                    <Panel title="Lavoro">
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
                    <Panel title="Energia cinetica">
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
                    <Panel title="Energia potenziale gravitazionale">
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
                    <Panel title="Energia potenziale elastica">
                        <p>
                            Una molla ha sempre energia potenziale elastica pari a:
                        </p>
                        <p>
                            <Latex>{r`E_{p_e} = \frac{1}{2} k x^2`}</Latex>
                        </p>
                    </Panel>
                    <Panel title="Forze conservative">
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
                    <Panel title="Potenza">
                        <p>
                            È la velocità di trasferimento di energia:
                        </p>
                        <p>
                            <Latex>{r`P = \frac{\Delta E}{\Delta t}`}</Latex>
                        </p>
                    </Panel>
                </Split>
                <Split title="Elettrostatica">
                    <Panel title="Carica elettrica">
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
                    <Panel title="Conduttori e isolanti">
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
                <Split title="Polarizzazione">
                    <Panel title="Polarizzazione">
                        <p>
                            E' possibile polarizzare un corpo per accumulare la carica di un segno in una certa zona.
                        </p>
                    </Panel>
                </Split>
                <Split>
                    <Panel title="Messa a terra">
                        <p>
                            Se un corpo conduttore è in contatto con la Terra, le cariche su di esso saranno <i>equilibrate</i> e il corpo diventerà elettricamente neutro (con stesso numero di <Plus>cariche positive</Plus> e <Minus>negative</Minus> all'interno).
                        </p>
                    </Panel>
                </Split>
                <Split>
                    <Panel title="Polarizzazione per strofinio">
                        <p>
                            Strofinando tra loro due corpi isolanti, essi si <i>polarizzeranno per strofinio</i>.
                        </p>
                    </Panel>
                    <Panel title="Polarizzazione per contatto">
                        <p>
                            Toccando un conduttore con un corpo carico, il conduttore potrà <i>polarizzarsi per contatto</i>.
                        </p>
                    </Panel>
                    <Panel title="Polarizzazione per induzione">
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
                <Split title="Forza elettrica">
                    <Panel title="Legge di Coulomb">
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
                    <Panel title="Permeabilità dello spazio vuoto">
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
                    <Panel title="Campo elettrico">
                        <p>
                            Misura che forza viene applicata in ogni punto su una carica unitaria:
                        </p>
                        <p>
                            <Latex>{r`\vec{E} = \frac{\vec{F}_{elettrica}}{q} = \frac{-k \cdot q}{s^2}`}</Latex>
                        </p>
                    </Panel>
                    <Panel title="Flusso elettrico">
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
                    <Panel title="Legge di Gauss">
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
                <Split title="Energia elettrica">
                    <Panel title="Energia potenziale elettrica">
                        <p>
                            Un corpo carico vicino ad altre cariche possiede un'<i>energia potenziale elettrica</i> <Latex>{r`U_e`}</Latex>.
                        </p>    
                    </Panel>
                </Split>
                <Split title="Circuiti elettrici">
                    <Panel title={<span>Potenziale elettrico <small>(tensione)</small></span>}>
                        <p>
                            È il valore dell'energia potenziale elettrica per una carica unitaria.
                        </p>
                        <p>
                            <Latex>{r`V = \frac{E_{elettrica}}{q}`}</Latex>
                        </p>
                        <p>
                            La sua unità di misura è il Volt (<Latex>{r`V`}</Latex>).
                        </p>                        
                        <p>
                            In una batteria è detto <i>forza elettromotrice</i>, e corrisponde al lavoro compiuto da una batteria ideale per spostare una carica unitaria tra i due poli.
                        </p>
                    </Panel>
                    <Panel title={<span>Corrente elettrica <small>(intensità)</small></span>}>
                        <p>
                            Quanta carica passa attraverso un'area (perpendicolare al flusso) nel tempo.
                        </p>
                        <p>
                            <Latex>{r`I = \frac{\Delta q}{\Delta t}`}</Latex>
                        </p>
                        <p>
                            Fintanto che c'è differenza di potenziale, ci sarà anche intensità non nulla.
                        </p>
                        <p>
                            La sua unità di misura è l'Ampere (<Latex>{r`A`}</Latex>).
                        </p>
                    </Panel>
                    <Panel title={<span>Corrente continua <small>(<abbr title="Direct Current">DC</abbr>)</small></span>}>
                        <p>
                            Quando in un circuito la direzione della corrente è costante.
                        </p>
                    </Panel>
                    <Panel title={<span>Corrente alternata <small>(<abbr title="Alternate Current">AC</abbr>)</small></span>}>
                        <p>
                            Quando in un circuito la direzione della corrente si alterna periodicamente.
                        </p>
                    </Panel>
                    <Panel title="Potenza elettrica">
                        <p>
                            Possiamo calcolare la potenza di un circuito:
                        </p>
                        <p>
                            <Latex>{r`P = \frac{\Delta U}{\Delta t} = I \cdot \Delta V = I^2 \cdot R = \frac{(\Delta V)^2}{R}`}</Latex>
                        </p>
                    </Panel>
                </Split>
                <Split title="Elementi di un circuito">
                    <Panel title="Resistore">
                        <p>
                            Riduce l'intensità di corrente, e converte parte del potenziale in calore.
                        </p>
                        <p>
                            Il potenziale utilizzato è pari a:
                        </p>
                        <p>
                            <Latex>{r`V = R \cdot I`}</Latex>
                        </p>
                        <p>
                            Dove <Latex>{r`R`}</Latex> è una costante detta <i>resistenza</i> con unità di misura Ohm (<Latex>{r`\Omega`}</Latex>).
                        </p>
                        <p>
                            La resistenza di un conduttore vale:
                        </p>
                        <p>
                            <Latex>{r`R = \rho \frac{L_{unghezza}}{A_{rea}}`}</Latex>
                        </p>
                        <p>
                            <Latex>{r`\rho`}</Latex> è la <i>resistività</i> del materiale, e varia in base alla temperatura:
                        </p>
                        <p>
                            <Latex>{r`\rho = \rho_0 (1 + \alpha(T - T_0))`}</Latex>
                        </p>
                    </Panel>
                    <Panel title="Condensatore">
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
                        <p>
                            La sua unità di misura è il Farad (<Latex>{r`Fa`}</Latex>)
                        </p>
                    </Panel>
                    <Panel title="Amperometro">
                        <p>
                            Misura la corrente elettrica se messo in serie.
                        </p>
                        <p>
                            (Funzionamento: ha una resistenza interna bassisima in modo da non influire significativamente sulla corrente.)
                        </p>
                    </Panel>
                    <Panel title="Voltmetro">
                        <p>
                            Misura la differenza di potenziale se messo in parallelo.
                        </p>
                        <p>
                            (Funzionamento: ha una resistenza altissima in modo da non influire significativamente sulla tensione.)
                        </p>
                    </Panel>
                </Split>
                <Split title="Principi di Kirchhoff">
                    <Panel title="Legge dei nodi">
                        <p>
                            Per nodo si intende un qualsiasi punto del circuito.
                        </p>
                        <p>
                            Da un nodo entra ed esce la stessa corrente.
                        </p>
                    </Panel>
                    <Panel title="Legge delle maglie">
                        <p>
                            Per maglia si intende un qualsiasi percorso chiuso all'interno del circuito.
                        </p>
                        <p>
                            In una maglia chiusa, la somma delle differenze di potenziale è 0.
                        </p>
                    </Panel>
                </Split>
                <Split title="Serie e Parallelo">
                    <Panel title="Circuito in serie">
                        <p>
                            Più parti di circuito sono <i>in serie</i> se sono consecutive e senza biforcazioni.
                        </p>
                        <p>
                            Parti di circuito in serie sono attraversate dalla stessa corrente.
                        </p>
                    </Panel>
                    <Panel title="Circuito in parallelo">
                        <p>
                            Più parti di circuito sono <i>in parallelo</i> tra loro se hanno lo stesso punto di partenza e lo stesso punto di arrivo. 
                        </p>
                        <p>
                            Parti di circuito in parallelo hanno la stessa differenza di potenziale.
                        </p>
                    </Panel>
                </Split>
                <Split title="Resistenze equivalenti">
                    <Panel title="Circuiti in serie">
                        <p>
                            Nei circuiti in serie, tutte le resistenze possono essere sostituite con una equivalente dal valore della somma di tutte le quelle sostituite:
                        </p>
                        <p>
                            <Latex>{r`R_{serie} = \sum_{i=1}^{n} R_i`}</Latex>
                        </p>
                    </Panel>
                    <Panel title="Circuiti in parallelo">
                        <p>
                            Nei circuiti in parallelo, tutte le resistenze possono essere sostituite con una equivalente dal valore di:
                        </p>
                        <p>
                            <Latex>{r`R_{parallelo} = \frac{1}{\sum_{i=1}^{n} \frac{1}{R_i}}`}</Latex>
                        </p>
                    </Panel>
                </Split>
                <Split title="Condensatori equivalenti">
                    <Panel title="Circuiti in serie">
                        <p>
                            Nei circuiti in serie, tutte i condensatori possono essere sostituiti con uno equivalente dal valore di:
                        </p>
                        <p>
                            <Latex>{r`C_{serie} = \frac{1}{\sum_{i=1}^{n} \frac{1}{C_i}}`}</Latex>
                        </p>
                    </Panel>
                    <Panel title="Circuiti in parallelo">
                        <p>
                            Nei circuiti in parallelo, tutte i condensatori possono essere sostituite con uno equivalente dal valore della somma della capacità di tutti quelli sostituiti:
                        </p>
                        <p>
                            <Latex>{r`C_{parallelo} = \sum_{i=1}^{n} C_n`}</Latex>
                        </p>
                    </Panel>
                </Split>
                <Split title="Magnetismo">
                    <Panel title="Permeabilità magnetica dello spazio vuoto">
                        <p>
                            E' una costante fisica fondamentale che rappresenta quanto un materiale si magnetizza facilmente.
                        </p>
                        <p>
                            <Latex>{r`\mu_0 = 4 \pi \cdot 10^{-7} \frac{H}{m}`}</Latex> (<Latex>{r`\frac{N}{A^2}`}</Latex>)
                        </p>
                    </Panel>
                    <Panel title="Campo magnetico">
                        <p>
                            Come un campo elettrico, ma per i magneti.
                        </p>
                        <p>
                            Il suo simbolo è <Latex>{r`B`}</Latex>, e la sua unità di misura è il Tesla (<Latex>T</Latex>).
                        </p>
                    </Panel>
                    <Panel title="Flusso magnetico">
                        <p>
                            Come il flusso elettrico, ma per campi magnetici.
                        </p>
                        <p>
                            Il suo simbolo è <Latex>{r`\Phi_B`}</Latex> e la sua unità di misura è il Weber (<Latex>{r`Wb = T \cdot m^2`}</Latex>).
                        </p>
                    </Panel>
                    <Panel title="Legge di Gauss per il magnetismo">
                        <p>
                            Il flusso magnetico attraverso qualsiasi superficie chiusa è sempre nullo.
                        </p>
                    </Panel>
                </Split>
                <Split title="Forze magnetiche">
                    <Panel>
                        <h3>
                            Forza magnetica su carica puntiforme <small>(Forza di Lorentz)</small>
                        </h3>
                        <p>
                            I campi magnetici applicano una forza sulle cariche vicine:
                        </p>
                        <p>
                            <Latex>{r`\vec{F}_{magnetica} = q \cdot (\vec{v} \times \vec{B})`}</Latex>
                        </p>
                        <p>
                            Dove <Latex>{r`\vec{B}`}</Latex> è l'intensità del campo magnetico e <Latex>{r`\vec{v}`}</Latex> la velocità della carica considerata.
                        </p>
                        <p>
                            Si ha una forza massima se la velocità è perpendicolare al campo magnetico.
                        </p>
                        <p>
                            In un campo magnetico uniforme, una velocità perpendicolare al campo porta alla creazione di un moto circolare uniforme.
                        </p>
                    </Panel>
                    <Panel title="Forza magnetica in un filo">
                        <p>
                            I campi magnetici influenzano anche le cariche presenti in un conduttore:
                        </p>
                        <p>
                            <Latex>{r`\vec{F}_{magnetica} = I \cdot (\vec{L} \times \vec{B})`}</Latex>
                        </p>
                        <p>
                            Dove <Latex>{r`\vec{L}`}</Latex> è un vettore che punta nella direzione di scorrimento della corrente.
                        </p>
                        <p>
                            <Todo>Modulo di L?</Todo>
                        </p>
                    </Panel>
                </Split>
                <Split title="Campi magnetici">
                    <Panel title="Campo magnetico in una spira">
                        <p>
                            Una spira in cui passa corrente produce un campo magnetico perpendicolare al piano creato dalla spira.
                        </p>
                    </Panel>
                    <Panel title="Campo magnetico di un solenoide">
                        <p>
                            Un solenoide sono tante spire avvolte in modo da formare una specie di cilindro.
                        </p>
                        <p>
                            All'interno del solenoide si crea un campo (quasi) uniforme:
                        </p>
                        <p>
                            <Latex>{r`\left | \vec{B} \right | = \mu_0 \cdot I \cdot \frac{A_{vvolgimenti}}{L_{unghezzafilo}}`}</Latex>
                        </p>
                    </Panel>
                    <Panel title="Legge di Oersted">
                        <p>
                            <i>Caso particolare della <a href="https://it.wikipedia.org/wiki/Legge_di_Amp%C3%A8re">Legge di Ampère</a>.</i>
                        </p>
                        <p>
                            Il modulo del campo magnetico <Latex>B</Latex> prodotto da un filo in cui passa una corrente continua <Latex>I</Latex> alla distanza <Latex>s</Latex> è:
                        </p>
                        <p>
                            <Latex>{r`\left | \vec{B} \right | = \frac{\mu \cdot I}{2 \pi r}`}</Latex>
                        </p>
                        <p>
                            <Todo>Verso di B?</Todo>
                        </p>
                    </Panel>
                </Split>
                <Split title="Induzione elettromagnetica">
                    <Panel title="Forza elettromotrice indotta">
                        <p>
                            Un conduttore perpendicolare ad un campo magnetico può ottenere una differenza di potenziale se messo in movimento in un direzione perpendicolare alla direzione del conduttore e del campo. 
                        </p>
                        <p>
                            La differenza di potenziale si crea a causa della forza magnetica, che fa spostare tutti gli elettroni verso un capo del conduttore. 
                        </p>
                        <p>
                            Essa vale:
                        </p>
                        <p>
                            <Latex>{r`\Delta V_{indotta} = v \cdot B \cdot L`}</Latex>
                        </p>
                        <p>
                            Dove <Latex>v</Latex> è la velocità del conduttore, <Latex>B</Latex> è l'intensità del campo magnetico ed <Latex>L</Latex> è la lunghezza del conduttore.
                        </p>
                    </Panel>
                    <Panel title="Flusso magnetico in una spira">
                        <p>
                            In un campo magnetico <Latex>{r`B`}</Latex> uniforme e perpendicolare al piano di una spira di area <Latex>{r`A`}</Latex>, il flusso magnetico si può determinare con la <i>Legge di Farady-Neumann-Lenz</i>:
                        </p>
                        <p>
                            <Latex>{r`\Phi_B = \vec{B} \cdot \vec{A} = B \cdot A \cdot \cos(\alpha)`}</Latex>
                        </p>
                    </Panel>
                    <Panel title="Legge di Faraday">
                        <p>
                            Dice che la forza elettromotrice indotta dipende dalla variazione nel tempo del flusso magnetico.
                        </p>
                    </Panel>
                </Split>
            </div>
        )
	}
}