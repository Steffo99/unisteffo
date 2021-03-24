import { Anchor, BaseLink, Bold as B, Color, ListItem as LI, Paragraph as P } from "bluelib/lib/components"
import LatexMath from "bluelib/lib/components/LatexMath"

import Todo from "../../components/Todo"
import Split from "../../components/Split"
import Box from "../../components/Box"


const r = String.raw


function Plus({ children }) {
    return (
        <Color builtin={"red"}>{children}</Color>
    )
}


function Minus({ children }) {
    return (
        <Color builtin={"blue"}>{children}</Color>
    )
}


export default function Fisica() {
    return (
        <article>
            <Split title={"Fisica"}>
                <Box title={"Di cosa si tratta?"}>
                    <P>
                        <Todo>Questa parte non è ancora stata scritta.</Todo>
                    </P>
                </Box>
                <Box title={"Il corso all'Unimore"}>
                    <P>
                        🎓 Il corso è stato tenuto dalla <Anchor href={"mailto:rossella.brunetti@unimore.it"}>Prof.ssa
                                                                                                              Rossella Brunetti</Anchor>.
                    </P>
                    <P>
                        📘 Le dispense <Color builtin={"red"}>non sono più disponibili</Color>.
                    </P>
                    <P>
                        🎥 Le videolezioni <Color builtin={"red"}>non sono più disponibili</Color>.
                    </P>
                </Box>
                <Box title={"Materiale utilizzato"}>
                    <ul>
                        <LI><BaseLink disabled={true}>📄 Dispense</BaseLink></LI>
                        <LI><Anchor href={"https://www.wikipedia.org/"}>📰 Wikipedia</Anchor></LI>
                    </ul>
                </Box>
            </Split>
            <Split title="Vettori">
                <Box title="Componenti cartesiane">
                    <P>
                        Usa le regole base della trigonometria:
                    </P>
                    <P>
                        <LatexMath>{r`\vec{v} = \vec{v}_x + \vec{v}_y`}</LatexMath>
                    </P>
                    <P>
                        <LatexMath>{r`\left | \vec{v}_x \right | = \left | \vec{v} \right | \sin \alpha`}</LatexMath>
                    </P>
                    <P>
                        <LatexMath>{r`\left | \vec{v}_y \right | = \left | \vec{v} \right | \cos \alpha`}</LatexMath>
                    </P>
                </Box>
                <Box title="Somma">
                    <P>
                        Scomponi in componenti, poi sommali:
                    </P>
                    <P>
                        <LatexMath>{r`\vec{v} + \vec{w} = (\vec{v}_x + \vec{w}_x) + (\vec{v}_y + \vec{w}_y)`}</LatexMath>
                    </P>
                    <P>
                        Produce il vettore risultante dall'applicazione della regola del parallelogramma.
                    </P>
                </Box>
                <Box title="Differenza">
                    <P>
                        Alla fine è sempre una somma:
                    </P>
                    <P>
                        <LatexMath>{r`\vec{v} - \vec{w} = (\vec{v}_x - \vec{w}_x) + (\vec{v}_y - \vec{w}_y)`}</LatexMath>
                    </P>
                    <P>
                        Produce il vettore che parte da <LatexMath>w</LatexMath> e arriva a <LatexMath>v</LatexMath>.
                    </P>
                </Box>
                <Box title="Prodotto scalare">
                    <P>
                        Si chiama scalare perchè il risultato è uno scalare, non un vettore.
                    </P>
                    <P>
                        <LatexMath>{r`\vec{v} \cdot \vec{w} = \left | \vec{v} \right | \left | \vec{w} \right | \cos \alpha`}</LatexMath>
                    </P>
                    <P>
                        Produce il modulo della proiezione
                        di <LatexMath>{r`\vec{a}`}</LatexMath> su <LatexMath>{r`\vec{b}`}</LatexMath>.
                    </P>
                </Box>
                <Box title="Prodotto vettoriale">
                    <P>
                        Si chiama vettoriale perchè il risultato è un altro vettore.
                    </P>
                    <ul>
                        <li><LatexMath>{r`\vec{c} = \vec{a} \times \vec{b}`}</LatexMath></li>
                        <li>
                            <LatexMath>{r`\left | \vec{c} \right | = \left | \vec{a} \right | \cdot \left | \vec{b} \right | \cdot \sin(\alpha)`}</LatexMath>
                        </li>
                        <li><Anchor href="https://it.wikipedia.org/wiki/Regola_della_mano_destra">Regola della mano
                                                                                                  destra</Anchor></li>
                    </ul>
                    <P>
                        Non è commutativo!
                    </P>
                </Box>
            </Split>
            <Split title="Leggi di Newton">
                <Box title="1ᵃ: Inerzia">
                    <P>
                        Se un corpo puntiforme ha forza risultante nulla, allora la sua velocità non cambia.
                    </P>
                    <P>
                        <LatexMath>{r`\Sigma \vec{F} = 0 \Longleftrightarrow \Delta v = 0`}</LatexMath>
                    </P>
                </Box>
                <Box title="2ᵃ: Proporzionalità">
                    <P>
                        La forza risultante di un corpo è direttamente proporzionale alla sua accelerazione, e
                        la costante di proporzionalità è la <i>massa</i>.
                    </P>
                    <P>
                        <LatexMath>{r`\Sigma \vec{F} = m \vec{a}`}</LatexMath>
                    </P>
                </Box>
                <Box title="3ᵃ: Azione e reazione">
                    <P>
                        Due corpi esercitano forze uguali e opposte uno sull'altro.
                    </P>
                    <P>
                        <LatexMath>{r`\vec{F}_{21} = -\vec{F}_{12}`}</LatexMath>
                    </P>
                </Box>
            </Split>
            <Split title="Forza di gravità">
                <Box title="Tra due corpi">
                    <P>
                        Due corpi puntiformi si attirano uno verso l'altro con forza:
                    </P>
                    <P>
                        <LatexMath>{r`\left | \vec{F} \right | = G \frac{m_1 m_2}{s^2}`}</LatexMath>
                    </P>
                    <P>
                        <LatexMath>G</LatexMath> è la <i>costante di gravitazione universale</i> e vale:
                    </P>
                    <P>
                        <LatexMath>{r`G = 6.67 \cdot 10^{-11} \frac{N m^2}{{kg}^2}`}</LatexMath>
                    </P>
                </Box>
                <Box title="Verso la Terra">
                    <P>
                        Se nel sistema di riferimento consideriamo la Terra ferma, allora un corpo è attratto
                        verso la Terra con forza <i>peso</i> uguale a:
                    </P>
                    <P>
                        <LatexMath>{r`\left | \vec{F} \right | = g m`}</LatexMath>
                    </P>
                    <P>
                        <LatexMath>g</LatexMath> è la <i>costante di gravità</i> della Terra, e vale:
                    </P>
                    <P>
                        <LatexMath>{r`g = 9.81 \frac{m}{s^2}`}</LatexMath>
                    </P>
                </Box>
                <Box title="Su pianeti diversi">
                    <P>
                        Per pianeti diversi dalla Terra vale la stessa regola:
                    </P>
                    <P>
                        <LatexMath>{r`\left | \vec{F} \right | = g m`}</LatexMath>
                    </P>
                    <P>
                        L'unica differenza è che cambia la <i>costante di gravità</i>:
                    </P>
                    <P>
                        <LatexMath>{r`g_{luna} = 1.62 \frac{m}{s^2}`}</LatexMath>
                    </P>
                    <P>
                        <LatexMath>{r`g_{marte} = 3.71 \frac{m}{s^2}`}</LatexMath>
                    </P>
                </Box>
            </Split>
            <Split title="Forze di contatto">
                <Box title="Normale">
                    <P>
                        Si oppone alle forze applicate alla superficie di contatto.
                    </P>
                    <P>
                        Un libro appoggiato su un tavolo ha la <B>forza di gravità</B> che lo attira verso il
                        terreno e la <B>forza normale</B> che lo trattiene dal cadere.
                    </P>
                </Box>
                <Box title="Attrito statico">
                    <P>
                        Impedisce a un corpo di muoversi se non viene spinto da una forza che supera una certa
                        soglia:
                    </P>
                    <P>
                        <LatexMath>{r`\left | \vec{F} \right | \leq \mu_{s} \left | \vec{F}_{normale} \right |`}</LatexMath>
                    </P>
                </Box>
                <Box title="Attrito dinamico">
                    <P>
                        Rallenta i corpi che si stanno muovendo finchè essi non si fermano:
                    </P>
                    <P>
                        <LatexMath>{r`\left | \vec{F} \right | \leq \mu_{d} \left | \vec{F}_{normale} \right |`}</LatexMath>
                    </P>
                </Box>
                <Box title="Tensione">
                    <P>
                        E' forza trasmessa tra due estremi di una fune.
                    </P>
                    <P>
                        Può essere redirezionata per mezzo di carrucole.
                    </P>
                </Box>
                <Box title="Elastica">
                    <P>
                        Una molla cerca sempre di tornare alla sua posizione indeformata con forza:
                    </P>
                    <P>
                        <LatexMath>{r`F = -k x`}</LatexMath>
                    </P>
                    <P>
                        (E' negativa perchè la forza è opposta a quella applicata per deformarla.)
                    </P>
                </Box>
            </Split>
            <Split title="Cinematica">
                <Box title="Spostamento">
                    <P>
                        È un vettore che indica la posizione di un corpo rispetto a un'origine.
                    </P>
                    <P>
                        <LatexMath>{r`\Delta \vec{s} = \vec{s}(fine) - \vec{s}(inizio)`}</LatexMath>
                    </P>
                </Box>
                <Box title="Velocità">
                    <P>
                        È un vettore che misura la variazione di posizione nel tempo.
                    </P>
                    <P>
                        <LatexMath>{r`\vec{v} = \frac{\Delta \vec{s}}{\Delta t}`}</LatexMath>
                    </P>
                    <P>
                        Se si considera un intervallo di tempo infinitesimale si dice <i>velocità istantanea</i>:
                    </P>
                    <P>
                        <LatexMath>{r`\vec{v} = \lim_{\Delta t \to 0} \frac{\Delta \vec{s}}{\Delta t} = \frac{d \vec{s}}{dt}`}</LatexMath>
                    </P>
                </Box>
                <Box title="Accelerazione">
                    <P>
                        È un vettore che misura la variazione di velocità nel tempo.
                    </P>
                    <P>
                        <LatexMath>{r`\vec{a} = \frac{\Delta \vec{v}}{\Delta t}`}</LatexMath>
                    </P>
                    <P>
                        Se si considera un intervallo di tempo infinitesimale si dice <i>accelerazione
                                                                                         istantanea</i>:
                    </P>
                    <P>
                        <LatexMath>{r`\vec{a} = \lim_{\Delta v \to 0} \frac{\Delta \vec{v}}{\Delta t} = \frac{d \vec{v}}{d t} = \frac{d^2 \vec{s}}{d t^2}`}</LatexMath>
                    </P>
                </Box>
                <Box title={<span>Quantità di moto <small>(momento lineare)</small></span>}>
                    <P>
                        La quantità di moto è una proprietà vettoriale dei corpi:
                    </P>
                    <P>
                        <LatexMath>{r`\vec{p} = m \vec{v}`}</LatexMath>
                    </P>
                    <P>
                        Se la forza risultante è nulla, la quantità di moto non cambia.
                    </P>
                    <P>
                        <LatexMath>{r`\Sigma \vec{F} = 0 \Longleftrightarrow \Delta \vec{p} = 0`}</LatexMath>
                    </P>
                </Box>
            </Split>
            <Split title="Moto rettilineo uniforme">
                <Box title="Spostamento">
                    <P>
                        La <i>legge oraria</i> è:
                    </P>
                    <P>
                        <LatexMath>{r`s(t) = v \cdot \Delta t + s(0)`}</LatexMath>
                    </P>
                </Box>
                <Box title="Velocità">
                    <P>
                        È costante:
                    </P>
                    <P>
                        <LatexMath>{r`v(t) = k`}</LatexMath>
                    </P>
                </Box>
                <Box title="Accelerazione">
                    <P>
                        La velocità non varia:
                    </P>
                    <P>
                        <LatexMath>{r`a(t) = 0`}</LatexMath>
                    </P>
                </Box>
                <Box title="Forze">
                    <P>
                        Si applica la prima legge di Newton:
                    </P>
                    <P>
                        <LatexMath>f(t) = 0</LatexMath>
                    </P>
                </Box>
            </Split>
            <Split title="Moto rettilineo uniformemente accelerato">
                <Box title="Spostamento">
                    <P>
                        La <i>legge oraria</i> è:
                    </P>
                    <P>
                        <LatexMath>{r`s(t) = \frac{1}{2} a \cdot (\Delta t)^2 + v(0) \cdot (\Delta t) + s(0)`}</LatexMath>
                    </P>
                </Box>
                <Box title="Velocità">
                    <P>
                        È una retta:
                    </P>
                    <P>
                        <LatexMath>{r`v(t) = a \Delta t + v(0)`}</LatexMath>
                    </P>
                </Box>
                <Box title="Accelerazione">
                    <P>
                        È costante:
                    </P>
                    <P>
                        <LatexMath>{r`a(t) = k`}</LatexMath>
                    </P>
                </Box>
                <Box title="Forze">
                    <P>
                        Si applica la prima legge di Newton:
                    </P>
                    <P>
                        <LatexMath>f(t) = m a</LatexMath>
                    </P>
                </Box>
            </Split>
            <Split title="Moto armonico semplice">
                <Box title="Ampiezza">
                    <P>
                        E' la distanza dal centro massima che raggiunge il corpo.
                    </P>
                    <P>
                        (L'ampiezza di una sinusoide.)
                    </P>
                </Box>
                <Box title="Velocità angolare">
                    <P>
                        Indica quanto in fretta cambia la posizione del corpo.
                    </P>
                    <P>
                        Dipende dal periodo:
                    </P>
                    <P>
                        <LatexMath>{r`\omega = \frac{2 \pi}{T}`}</LatexMath>
                    </P>
                </Box>
                <Box title="Spostamento">
                    <P>
                        E' una sinusoide:
                    </P>
                    <P>
                        <LatexMath>{r`s(t) = A \sin (\omega \cdot t + \phi)`}</LatexMath>
                    </P>
                </Box>
                <Box title="Velocità">
                    <P>
                        E' la sinusoide dello spostamento, sfasata di <LatexMath>{r`\frac{\pi}{2}`}</LatexMath>:
                    </P>
                    <P>
                        <LatexMath>{r`v(t) = A \sin (\omega \cdot t + \phi + \frac{\pi}{2})`}</LatexMath>
                    </P>
                </Box>
                <Box title="Accelerazione">
                    <P>
                        E' la sinusoide della velocità, sfasata di <LatexMath>{r`\pi`}</LatexMath>:
                    </P>
                    <P>
                        <LatexMath>{r`a(t) = A \sin (\omega \cdot t + \phi + \pi)`}</LatexMath>
                    </P>
                </Box>
                <Box title="Forze">
                    <P>
                        Si applica la prima legge di Newton:
                    </P>
                    <P>
                        <LatexMath>f(t) = m a</LatexMath>
                    </P>
                </Box>
            </Split>
            <Split title="Moti composti">
                <Box title="Moto parabolico">
                    <P>
                        Il moto parabolico è dato sommando un moto rettilineo uniforme sull'asse orizzontale e
                        un moto rettilineo uniformemente accelerato sull'asse verticale.
                    </P>
                </Box>
                <Box title="Moto circolare uniforme">
                    <P>
                        Il moto parabolico è dato sommando due moti armonici semplici: uno sull'asse X, e
                        l'altro, sfasato di <LatexMath>{r`\frac{\pi}{2}`}</LatexMath>, sull'asse Y.
                    </P>
                </Box>
            </Split>
            <Split title="Moto circolare uniforme">
                <Box>
                    <h3>
                        Velocità angolare
                    </h3>
                    <P>
                        Quanto cambia la fase nel tempo.
                    </P>
                    <P>
                        <LatexMath>{r`\omega = \frac{2 \pi}{T}`}</LatexMath>
                    </P>
                </Box>
                <Box title="Fase">
                    <P>
                        E' l'angolo percorso dal corpo rispetto alla posizione iniziale.
                    </P>
                    <P>
                        Si indica con <LatexMath>{r`\phi`}</LatexMath>, e generalmente si usa in radianti.
                    </P>
                </Box>
                <Box title="Velocità">
                    <P>
                        Si applicano le formule per la circonferenza:
                    </P>
                    <P>
                        <LatexMath>{r`v = \frac{\Delta s}{t} = \frac{2 \pi \cdot r}{T} = \omega r`}</LatexMath>
                    </P>
                </Box>
                <Box title="Accelerazione">
                    <P>
                        Il corpo ha sempre un accelerazione verso il centro che gli impedisce di abbandonare il
                        moto:
                    </P>
                    <P>
                        <LatexMath>{r`a = \frac{v^2}{r} = r \cdot \omega^2 = v \cdot \omega`}</LatexMath>
                    </P>
                </Box>
                <Box title="Forza centripeta">
                    <P>
                        È verso il centro e si calcola con:
                    </P>
                    <P>
                        <LatexMath>{r`F = m \cdot a`}</LatexMath>
                    </P>
                </Box>
            </Split>
            <Split title="Lavoro ed energia">
                <Box title="Lavoro">
                    <P>
                        E' compiuto da una forza che sposta un corpo.
                    </P>
                    <P>
                        <LatexMath>{r`W = \vec{F} \cdot \vec{s} = F \cdot \Delta s \cdot cos(\alpha )`}</LatexMath>
                    </P>
                    <P>
                        (Se la forza non è parallela allo spostamento, il prodotto scalare ci fa considerare
                        solo la componente parallela.)
                    </P>
                </Box>
                <Box title="Energia cinetica">
                    <P>
                        Un corpo ha energia cinetica in ogni momento uguale a:
                    </P>
                    <P>
                        <LatexMath>{r`E_c = \frac{1}{2} m v^2`}</LatexMath>
                    </P>
                    <P>
                        Se una forza effettua lavoro su un corpo, cambia la sua energia cinetica pari al lavoro
                        effettuato:
                    </P>
                    <P>
                        <LatexMath>{r`\Delta E_c = W`}</LatexMath>
                    </P>
                </Box>
                <Box title="Energia potenziale gravitazionale">
                    <P>
                        Un corpo ha energia potenziale in ogni momento pari a:
                    </P>
                    <P>
                        <LatexMath>{r`E_{p_g} = m \cdot g \cdot h`}</LatexMath>
                    </P>
                    <P>
                        (Con <LatexMath>h</LatexMath> uguale a un altezza scelta come punto di riferimento.)
                    </P>
                </Box>
                <Box title="Energia potenziale elastica">
                    <P>
                        Una molla ha sempre energia potenziale elastica pari a:
                    </P>
                    <P>
                        <LatexMath>{r`E_{p_e} = \frac{1}{2} k x^2`}</LatexMath>
                    </P>
                </Box>
                <Box title="Forze conservative">
                    <P>
                        Sono conservative le forze per le quali il lavoro compiuto non dipende dal percorso
                        seguito per andare dalla partenza all'arrivo.
                    </P>
                    <P>
                        Ad esempio, è conservativa la <i>forza di gravità</i>, ma <B>non</B> è conservativa la
                        forza di attrito.
                    </P>
                    <P>
                        Se in un sistema ci sono solo forze conservative, allora l'energia meccanica totale si
                        conserva:
                    </P>
                    <P>
                        <LatexMath>{r`E = E_k + E_p`}</LatexMath>
                    </P>
                </Box>
                <Box title="Potenza">
                    <P>
                        È la velocità di trasferimento di energia:
                    </P>
                    <P>
                        <LatexMath>{r`P = \frac{\Delta E}{\Delta t}`}</LatexMath>
                    </P>
                </Box>
            </Split>
            <Split title="Elettrostatica">
                <Box title="Carica elettrica">
                    <P>
                        È una proprietà dei corpi che può essere <Plus>positiva</Plus> o <Minus>negativa</Minus>.
                    </P>
                    <P>
                        Si conserva: in un sistema chiuso la carica totale è costante.
                    </P>
                    <P>
                        Esiste un'unità elementare: <LatexMath>{r`C_{elettrone} = 1.602 \cdot 10^{-19}`}</LatexMath>.
                    </P>
                    <P>
                        Cariche <Plus>opp</Plus><Minus>oste</Minus> si attraggono;
                        cariche <Plus>uguali</Plus> si respingono.
                    </P>
                </Box>
                <Box title="Conduttori e isolanti">
                    <P>
                        Più <Anchor href="https://it.wikipedia.org/wiki/Ione">ioni</Anchor> ha un corpo, meglio la
                        carica
                        si muove attraverso di esso.
                    </P>
                    <P>
                        I corpi in cui la carica si muove bene sono <i>conduttori</i>, mentre quelli in cui si
                        muove difficilmente sono <i>isolanti</i>.
                    </P>
                    <P>
                        <i>Il corpo umano è un buon conduttore.</i>
                    </P>
                </Box>
            </Split>
            <Split title="Polarizzazione">
                <Box title="Polarizzazione">
                    <P>
                        E' possibile polarizzare un corpo per accumulare la carica di un segno in una certa
                        zona.
                    </P>
                </Box>
            </Split>
            <Split>
                <Box title="Messa a terra">
                    <P>
                        Se un corpo conduttore è in contatto con la Terra, le cariche su di esso
                        saranno <i>equilibrate</i> e il corpo diventerà elettricamente neutro (con stesso numero
                        di <Plus>cariche positive</Plus> e <Minus>negative</Minus> all'interno).
                    </P>
                </Box>
            </Split>
            <Split>
                <Box title="Polarizzazione per strofinio">
                    <P>
                        Strofinando tra loro due corpi isolanti, essi si <i>polarizzeranno per strofinio</i>.
                    </P>
                </Box>
                <Box title="Polarizzazione per contatto">
                    <P>
                        Toccando un conduttore con un corpo carico, il conduttore potrà <i>polarizzarsi per
                                                                                           contatto</i>.
                    </P>
                </Box>
                <Box title="Polarizzazione per induzione">
                    <P>
                        Se un corpo conduttore ha cariche "esterne" di un <Plus>certo segno</Plus> vicino, esso
                        avrà tutte le cariche del <Minus>segno opposto</Minus> in equilibrio vicino alle cariche
                        esterne, e tutte le cariche dello <Plus>stesso segno</Plus> più lontano possibile da
                        esse.
                    </P>
                    <P>
                        Mettendo a terra il conduttore, nuove cariche del <Minus>segno opposto</Minus> saranno
                        attratte all'interno del corpo per equilibrare le cariche che si sono allontanate.
                    </P>
                    <P>
                        Staccando il conduttore da terra e rimuovendo le cariche esterne, esso si
                        ritroverà <Minus>caricato del segno opposto</Minus> rispetto alle cariche esterne.
                    </P>
                </Box>
            </Split>
            <Split title="Forza elettrica">
                <Box title="Legge di Coulomb">
                    <P>
                        Due corpi carichi si attraggono tra loro con forza:
                    </P>
                    <P>
                        <LatexMath>{r`\left | \vec{F}_{elettrica} \right | = \frac{-k \cdot q_1 \cdot q_2}{s^2}`}</LatexMath>
                    </P>
                    <P>
                        <LatexMath>{r`k`}</LatexMath> è la <i>costante di Coulomb</i>, e
                                                      vale <LatexMath>{r`k = 8.99 \cdot 10^9 \frac{N \cdot m^2}{C^2}`}</LatexMath>.
                    </P>
                </Box>
                <Box title="Permeabilità dello spazio vuoto">
                    <P>
                        La costante <LatexMath>{r`k`}</LatexMath> è in realtà dipendente da un altra
                        costante, <LatexMath>{r`\epsilon_0`}</LatexMath>, la <i>permeabilità del vuoto</i>.
                    </P>
                    <P>
                        <LatexMath>{r`k = \frac{1}{4 \pi \cdot \epsilon_0}`}</LatexMath>
                    </P>
                    <P>
                        <LatexMath>{r`\left | \vec{F}_{elettrica} \right | = \frac{q_1 \cdot q_2}{4 \pi \cdot \epsilon_0 \cdot s^2}`}</LatexMath>
                    </P>
                </Box>
                <Box title="Campo elettrico">
                    <P>
                        Misura che forza viene applicata in ogni punto su una carica unitaria:
                    </P>
                    <P>
                        <LatexMath>{r`\vec{E} = \frac{\vec{F}_{elettrica}}{q} = \frac{-k \cdot q}{s^2}`}</LatexMath>
                    </P>
                </Box>
                <Box title="Flusso elettrico">
                    <P>
                        È la differenza tra "quanto" campo elettrico <Plus>entra</Plus> e quanto campo
                        elettrico <Minus>esce</Minus> da una certa area.
                    </P>
                    <P>
                        In qualsiasi superficie chiusa, il flusso elettrico è uguale alla componente
                        perpendicolare del campo elettrico moltiplicato per l'area.
                    </P>
                    <P>
                        <LatexMath>{r`\Phi_E = \vec{E} \cdot \vec{A}`}</LatexMath>
                    </P>
                    <P>
                        Se il campo elettrico è uniforme, se ne può calcolare facilmente il valore:
                    </P>
                    <P>
                        <LatexMath>{r`\Phi_E = \vec{E} \cdot \vec{A} = E_\perp \cdot A \cdot \cos(\alpha)`}</LatexMath>
                    </P>
                    <P>
                        <Todo>Circa. E' una specie di integrale...</Todo>
                    </P>
                </Box>
                <Box title="Legge di Gauss per i campi elettrostatici">
                    <P>
                        Il flusso elettrico è direttamente proporzionale alla carica presente all'interno della
                        superficie.
                    </P>
                    <P>
                        <LatexMath>{r`\Phi_E = 4 \pi \cdot k \cdot q = \frac{q}{\epsilon_0}`}</LatexMath>
                    </P>
                    <P>
                        Ovvero, i campi elettrostatici sono generati dalle cariche elettriche.
                    </P>
                </Box>
            </Split>
            <Split title="Energia elettrica">
                <Box title="Energia potenziale elettrica">
                    <P>
                        Un corpo carico vicino ad altre cariche possiede un'<i>energia potenziale elettrica</i>
                        <LatexMath>{r`U_e`}</LatexMath>.
                    </P>
                </Box>
            </Split>
            <Split title="Circuiti elettrici">
                <Box title={<span>Potenziale elettrico <small>(tensione)</small></span>}>
                    <P>
                        È il valore dell'energia potenziale elettrica per una carica unitaria.
                    </P>
                    <P>
                        <LatexMath>{r`V = \frac{U_e}{q}`}</LatexMath>
                    </P>
                    <P>
                        La sua unità di misura è il Volt (<LatexMath>{r`V`}</LatexMath>).
                    </P>
                    <P>
                        In una batteria è detto <i>forza elettromotrice</i>, e corrisponde al lavoro compiuto da
                        una batteria ideale per spostare una carica unitaria tra i due poli.
                    </P>
                </Box>
                <Box title={<span>Corrente elettrica <small>(intensità)</small></span>}>
                    <P>
                        Quanta carica passa attraverso un'area (perpendicolare al flusso) nel tempo.
                    </P>
                    <P>
                        <LatexMath>{r`I = \frac{\Delta q}{\Delta t}`}</LatexMath>
                    </P>
                    <P>
                        Fintanto che c'è differenza di potenziale, ci sarà anche intensità non nulla.
                    </P>
                    <P>
                        La sua unità di misura è l'Ampere (<LatexMath>{r`A`}</LatexMath>).
                    </P>
                </Box>
                <Box
                    title={<span>Corrente continua <small>(<abbr
                        title="Direct Current"
                    >DC</abbr>)</small></span>}
                >
                    <P>
                        Quando in un circuito la direzione della corrente è costante.
                    </P>
                </Box>
                <Box
                    title={<span>Corrente alternata <small>(<abbr
                        title="Alternate Current"
                    >AC</abbr>)</small></span>}
                >
                    <P>
                        Quando in un circuito la direzione della corrente si alterna periodicamente.
                    </P>
                </Box>
                <Box title="Potenza elettrica">
                    <P>
                        Possiamo calcolare la potenza di un circuito:
                    </P>
                    <P>
                        <LatexMath>{r`P = \frac{\Delta U_e}{\Delta t} = I \cdot \Delta V = I^2 \cdot R = \frac{(\Delta V)^2}{R}`}</LatexMath>
                    </P>
                </Box>
            </Split>
            <Split title="Elementi di un circuito">
                <Box title="Resistore">
                    <P>
                        Riduce l'intensità di corrente, e converte parte del potenziale in calore.
                    </P>
                    <P>
                        Il potenziale utilizzato è pari a:
                    </P>
                    <P>
                        <LatexMath>{r`V = R \cdot I`}</LatexMath>
                    </P>
                    <P>
                        Dove <LatexMath>{r`R`}</LatexMath> è una costante detta <i>resistenza</i> con unità di misura
                        Ohm (<LatexMath>{r`\Omega`}</LatexMath>).
                    </P>
                    <P>
                        La resistenza di un conduttore vale:
                    </P>
                    <P>
                        <LatexMath>{r`R = \rho \frac{L_{unghezza}}{A_{rea}}`}</LatexMath>
                    </P>
                    <P>
                        <LatexMath>{r`\rho`}</LatexMath> è la <i>resistività</i> del materiale, e varia in base alla
                                                         temperatura:
                    </P>
                    <P>
                        <LatexMath>{r`\rho = \rho_0 (1 + \alpha(T - T_0))`}</LatexMath>
                    </P>
                </Box>
                <Box title="Condensatore">
                    <P>
                        Immagazzina potenziale elettrico, permettendo di riutilizzarla in seguito.
                    </P>
                    <P>
                        Per farlo, cattura cariche <Plus>positive</Plus> e <Minus>negative</Minus> sulle sue due
                        armature; perchè questo avvenga, deve essere compiuto lavoro.
                    </P>
                    <P>
                        Ha una <B>capacità</B> caratteristica, che in un condensatore a facce piane parallele è:
                    </P>
                    <P>
                        <LatexMath>{r`C = \frac{q_{massima}}{\Delta V}`}</LatexMath>
                    </P>
                    <P>
                        Condensatori di capacità maggiore immagazzinano più potenziale con meno carica.
                    </P>
                    <P>
                        La capacità aumenta se viene messo qualcosa tra le armature:
                    </P>
                    <P>
                        <LatexMath>{r`C_{nuova} = \kappa \cdot \frac{\epsilon_0 \cdot A}{s}`}</LatexMath>
                    </P>
                    <P>
                        Dove <LatexMath>{r`\kappa`}</LatexMath> è la <i>costante dielettrica relativa</i> del materiale
                        inserito, <LatexMath>{r`A`}</LatexMath> l'area di una armatura e <LatexMath>{r`s`}</LatexMath> la
                        distanza tra le due armature.
                    </P>
                    <P>
                        Se il campo elettrico creatosi tra le due armature supera la <i>rigidità
                                                                                        dielettrica</i> del condensatore, la carica immagazzinata viene persa e ha luogo
                        un <i>breakdown</i>.
                    </P>
                    <P>
                        La sua unità di misura è il Farad (<LatexMath>{r`Fa`}</LatexMath>)
                    </P>
                </Box>
                <Box title="Amperometro">
                    <P>
                        Misura la corrente elettrica se messo in serie.
                    </P>
                    <P>
                        (Funzionamento: ha una resistenza interna bassisima in modo da non influire
                        significativamente sulla corrente.)
                    </P>
                </Box>
                <Box title="Voltmetro">
                    <P>
                        Misura la differenza di potenziale se messo in parallelo.
                    </P>
                    <P>
                        (Funzionamento: ha una resistenza altissima in modo da non influire significativamente
                        sulla tensione.)
                    </P>
                </Box>
            </Split>
            <Split title="Principi di Kirchhoff">
                <Box title="Legge dei nodi">
                    <P>
                        Per nodo si intende un qualsiasi punto del circuito.
                    </P>
                    <P>
                        Da un nodo entra ed esce la stessa corrente.
                    </P>
                </Box>
                <Box title="Legge delle maglie">
                    <P>
                        Per maglia si intende un qualsiasi percorso chiuso all'interno del circuito.
                    </P>
                    <P>
                        In una maglia chiusa, la somma delle differenze di potenziale è 0.
                    </P>
                </Box>
            </Split>
            <Split title="Serie e Parallelo">
                <Box title="Circuito in serie">
                    <P>
                        Più parti di circuito sono <i>in serie</i> se sono consecutive e senza biforcazioni.
                    </P>
                    <P>
                        Parti di circuito in serie sono attraversate dalla stessa corrente.
                    </P>
                </Box>
                <Box title="Circuito in parallelo">
                    <P>
                        Più parti di circuito sono <i>in parallelo</i> tra loro se hanno lo stesso punto di
                        partenza e lo stesso punto di arrivo.
                    </P>
                    <P>
                        Parti di circuito in parallelo hanno la stessa differenza di potenziale.
                    </P>
                </Box>
            </Split>
            <Split title="Resistenze equivalenti">
                <Box title="Circuiti in serie">
                    <P>
                        Nei circuiti in serie, tutte le resistenze possono essere sostituite con una equivalente
                        dalla resistenza della somma di tutte le quelle sostituite:
                    </P>
                    <P>
                        <LatexMath>{r`R_{serie} = \sum_{i=1}^{n} R_i`}</LatexMath>
                    </P>
                </Box>
                <Box title="Circuiti in parallelo">
                    <P>
                        Nei circuiti in parallelo, tutte le resistenze possono essere sostituite con una
                        equivalente dalla resistenza di:
                    </P>
                    <P>
                        <LatexMath>{r`R_{parallelo} = \frac{1}{\sum_{i=1}^{n} \frac{1}{R_i}}`}</LatexMath>
                    </P>
                </Box>
            </Split>
            <Split title="Condensatori equivalenti">
                <Box title="Circuiti in serie">
                    <P>
                        Nei circuiti in serie, tutti i condensatori possono essere sostituiti con uno
                        equivalente dalla capacità di:
                    </P>
                    <P>
                        <LatexMath>{r`C_{serie} = \frac{1}{\sum_{i=1}^{n} \frac{1}{C_i}}`}</LatexMath>
                    </P>
                </Box>
                <Box title="Circuiti in parallelo">
                    <P>
                        Nei circuiti in parallelo, tutte i condensatori possono essere sostituite con uno
                        equivalente dalla capacità della somma di tutti quelli sostituiti:
                    </P>
                    <P>
                        <LatexMath>{r`C_{parallelo} = \sum_{i=1}^{n} C_n`}</LatexMath>
                    </P>
                </Box>
            </Split>
            <Split title="Magnetismo">
                <Box title="Permeabilità magnetica dello spazio vuoto">
                    <P>
                        E' una costante fisica fondamentale che rappresenta quanto un materiale si magnetizza
                        facilmente.
                    </P>
                    <P>
                        <LatexMath>{r`\mu_0 = 4 \pi \cdot 10^{-7} \frac{H}{m}`}</LatexMath> (<LatexMath>{r`\frac{N}{A^2}`}</LatexMath>)
                    </P>
                </Box>
                <Box title="Campo magnetico">
                    <P>
                        Come un campo elettrico, ma per i magneti.
                    </P>
                    <P>
                        Il suo simbolo è <LatexMath>{r`B`}</LatexMath>, e la sua unità di misura è il Tesla
                        (<LatexMath>T</LatexMath>).
                    </P>
                </Box>
                <Box title="Flusso magnetico">
                    <P>
                        È "quanto" campo magnetico <B>attraversa</B> un percorso chiuso.
                    </P>
                    <P>
                        Per qualsiasi percorso chiuso, il flusso magnetico è uguale alla somma di tutti i
                        "sottoflussi" magnetici calcolati sui suoi lati.
                    </P>
                    <P>
                        <LatexMath>{r`\Phi_{B_{i}} = \vec{B} \cdot \vec{L}_n = B \cdot L_i \cdot \sin(\alpha) = B_\parallel \cdot L_i`}</LatexMath>
                    </P>
                    <P>
                        <LatexMath>{r`\Phi_{B} = \sum_{i=0}^{n_{lati}} \Phi_{Bn}`}</LatexMath>
                    </P>
                    <P>
                        La sua unità di misura è il Weber (<LatexMath>{r`Wb = T \cdot m^2`}</LatexMath>).
                    </P>
                </Box>
                <Box title="Legge di Gauss per i campi magnetici">
                    <P>
                        Il flusso magnetico attraverso qualsiasi superficie chiusa è sempre nullo.
                    </P>
                    <P>
                        Ovvero, non esistono monopoli magnetici.
                    </P>
                </Box>
                <Box title="Legge di Ampère">
                    <P>
                        L'intensità di corrente che attraversa un percorso chiuso è direttamente proporzionale
                        al flusso magnetico dello stesso percorso.
                    </P>
                    <P>
                        <LatexMath>{r`\Phi_B = \mu_0 \cdot I`}</LatexMath>
                    </P>
                </Box>
            </Split>
            <Split title="Forze magnetiche">
                <Box
                    title={<span>Forza magnetica su carica puntiforme <small>(Forza di Lorentz)</small></span>}
                >
                    <P>
                        I campi magnetici applicano una forza sulle cariche vicine:
                    </P>
                    <P>
                        <LatexMath>{r`\vec{F}_{B} = q \cdot (\vec{v} \times \vec{B})`}</LatexMath>
                    </P>
                    <P>
                        Dove <LatexMath>{r`\vec{B}`}</LatexMath> è l'intensità del campo magnetico
                        e <LatexMath>{r`\vec{v}`}</LatexMath> la velocità della carica considerata.
                    </P>
                    <P>
                        Si ha una forza massima se la velocità è perpendicolare al campo magnetico.
                    </P>
                    <P>
                        In un campo magnetico uniforme, una velocità perpendicolare al campo porta alla
                        creazione di un moto circolare uniforme.
                    </P>
                </Box>
                <Box title="Forza magnetica in un filo">
                    <P>
                        I campi magnetici influenzano ovviamente anche le cariche presenti in un conduttore:
                    </P>
                    <P>
                        <LatexMath>{r`\vec{F}_{magnetica} = I \cdot (\vec{L} \times \vec{B})`}</LatexMath> <Anchor
                        href="https://it.openprof.com/wb/forza_di_lorentz_su_un_filo_percorso_da_corrente?ch=360"
                    >[1]</Anchor>
                    </P>
                    <P>
                        Dove <LatexMath>{r`I`}</LatexMath> è la corrente elettrica, <LatexMath>{r`\vec{L}`}</LatexMath> è un
                        vettore che punta nella direzione di scorrimento della corrente e ha come modulo la
                        lunghezza del conduttore.
                    </P>
                </Box>
            </Split>
            <Split title="Campi magnetici">
                <Box title="Campo magnetico in una spira">
                    <P>
                        Una spira in cui passa corrente produce un campo magnetico perpendicolare al piano
                        creato dalla spira.
                    </P>
                </Box>
                <Box title="Campo magnetico di un solenoide">
                    <P>
                        Un solenoide sono tante spire avvolte in modo da formare una specie di cilindro.
                    </P>
                    <P>
                        All'interno del solenoide si crea un campo (quasi) uniforme:
                    </P>
                    <P>
                        <LatexMath>{r`\left | \vec{B} \right | = \mu_0 \cdot I \cdot \frac{A_{vvolgimenti}}{L_{unghezzafilo}}`}</LatexMath>
                    </P>
                </Box>
                <Box title="Legge di Oersted">
                    <P>
                        <i>Caso particolare della <Anchor href="https://it.wikipedia.org/wiki/Legge_di_Amp%C3%A8re">Legge
                                                                                                                    di Ampère</Anchor>.</i>
                    </P>
                    <P>
                        Il modulo del campo magnetico <LatexMath>B</LatexMath> prodotto da un filo in cui passa una
                        corrente continua <LatexMath>I</LatexMath> alla distanza <LatexMath>s</LatexMath> è:
                    </P>
                    <P>
                        <LatexMath>{r`\left | \vec{B} \right | = \frac{\mu \cdot I}{2 \pi r}`}</LatexMath>
                    </P>
                    <P>
                        Il campo magnetico così creato gira attorno al filo in senso antiorario.
                    </P>
                    <P>
                        Due fili attraversati dalla <Plus>stessa corrente</Plus> si attraggono, due fili
                        attraversati da <Plus>corr</Plus><Minus>enti</Minus>
                        <Plus>opp</Plus><Minus>oste</Minus> si respingono.
                    </P>
                </Box>
            </Split>
            <Split title="Induzione elettromagnetica">
                <Box title="Forza elettromotrice indotta">
                    <P>
                        Un conduttore perpendicolare ad un campo magnetico può ottenere una differenza di
                        potenziale se messo in movimento in un direzione perpendicolare alla direzione del
                        conduttore e del campo.
                    </P>
                    <P>
                        La differenza di potenziale si crea a causa della forza magnetica, che fa spostare tutti
                        gli elettroni verso un capo del conduttore.
                    </P>
                    <P>
                        Essa vale:
                    </P>
                    <P>
                        <LatexMath>{r`\Delta V_{indotta} = v \cdot B \cdot L`}</LatexMath>
                    </P>
                    <P>
                        Dove <LatexMath>v</LatexMath> è la velocità del conduttore, <LatexMath>B</LatexMath> è l'intensità del
                        campo magnetico ed <LatexMath>L</LatexMath> è la lunghezza del conduttore.
                    </P>
                </Box>
                <Box title="Flusso magnetico in una spira">
                    <P>
                        In un campo magnetico <LatexMath>{r`B`}</LatexMath> uniforme e perpendicolare al piano di una
                        spira di area <LatexMath>{r`A`}</LatexMath>, il flusso magnetico si può determinare con la <i>Legge
                                                                                                                      di Faraday-Neumann-Lenz</i>:
                    </P>
                    <P>
                        <LatexMath>{r`\Phi_B = \vec{B} \cdot \vec{A} = B \cdot A \cdot \cos(\alpha)`}</LatexMath>
                    </P>
                </Box>
            </Split>
            <Split>
                <Box title="Legge di Faraday-Neumann-Lenz">
                    <P>
                        Dice che la forza elettromotrice media indotta in un percorso dipende dalla variazione
                        nel tempo del flusso magnetico nello stesso percorso.
                    </P>
                    <P>
                        <LatexMath>{r`\Delta V_{indotta} = - \frac{\Delta \Phi_B}{\Delta t}`}</LatexMath>
                    </P>
                    <P>
                        Il meno è dovuto alla <Anchor href="https://it.wikipedia.org/wiki/Legge_di_Lenz">Legge di
                                                                                                         Lenz</Anchor>, che specifica qualitativamente il verso della forza elettromotrice indotta.
                    </P>
                </Box>
                <Box title="Faraday in un solenoide">
                    <P>
                        In un solenoide, la forza elettromotrice indotta è uguale a:
                    </P>
                    <P>
                        <LatexMath>{r`\Delta V_{indotta} = - \frac{N \cdot \Delta \Phi_{B_{spira}}}{\Delta t} = - \frac{N \cdot B \cdot A \cdot cos(\alpha)}{\Delta t}`}</LatexMath>
                    </P>
                    <P>
                        Dove <LatexMath>{r`N`}</LatexMath> è il numero delle spire del solenoide.
                    </P>
                </Box>
                <Box title="Legge di Ampère-Maxwell">
                    <P>
                        Correnti o campi elettrici variabili creano un campo magnetico.
                    </P>
                </Box>
            </Split>
            <Split title="Elettromagnetismo">
                <Box title="Onde elettromagnetiche">
                    <P>
                        Nel vuoto, il campo elettrico <LatexMath>{r`E`}</LatexMath> e il campo
                        magnetico <LatexMath>{r`B`}</LatexMath> sono perpendicolari tra loro e la direzione di
                        propagazione, e sono entrambe funzioni del tempo.
                    </P>
                    <P>
                        Si dice quindi che sono <i>onde elettromagnetiche</i>.
                    </P>
                    <P>
                        Esse sono legate dalla relazione:
                    </P>
                    <P>
                        <LatexMath>{r`E = c \cdot B`}</LatexMath>
                    </P>
                    <P>
                        Dove <LatexMath>{r`c`}</LatexMath> è la velocità delle onde (luce) nel vuoto, e a sua volta è
                        uguale a:
                    </P>
                    <P>
                        <LatexMath>{r`c = \frac{1}{\sqrt{\epsilon_0 \cdot \mu_0}} = 3.00 \cdot 10^8 \frac{m}{s}`}</LatexMath>
                    </P>
                </Box>
                <Box title="Formula delle onde">
                    <P>
                        <LatexMath>{r`A(t) = A_{max} \cdot \sin \left ( \frac{2 \pi}{\lambda} - \omega t + \phi \right )`}</LatexMath>
                    </P>
                    <P>
                        Dove <LatexMath>{r`A_{max}`}</LatexMath> è l'ampiezza massima che può avere
                        l'onda, <LatexMath>{r`\frac{2 \pi}{\lambda} = \left | \vec{k} \right |`}</LatexMath> è il
                        vettore d'onda, <LatexMath>{r`\omega`}</LatexMath> la frequenza angolare
                        e <LatexMath>{r`\phi`}</LatexMath> la fase.
                    </P>
                </Box>
            </Split>
            <Split title="Spettroscopia">
                <Box title="Emissione">
                    <P>
                        I solidi, se portati ad alta temperatura, emettono luce con uno <Anchor
                        href="https://it.wikipedia.org/wiki/Spettro_continuo"
                    >spettro continuo</Anchor>.
                    </P>
                    <P>
                        I gas, invece, ad alta temperatura emettono luce solo con particolari lunghezze d'onda.
                    </P>
                    <P>
                        In un gas di idrogeno, le lunghezze d'onda emesse sono ricavabili con:
                    </P>
                    <P>
                        <LatexMath>{r`\frac{1}{\lambda} = R \left ( \frac{1}{4} - \frac{1}{n^2} \right )`}</LatexMath>
                    </P>
                    <P>
                        Con <LatexMath>{r`R = 1.097 \cdot 10^7 \frac{1}{m}`}</LatexMath>, detta costante di Rydberg,
                        e <LatexMath>{r`n`}</LatexMath> un numero intero.
                    </P>
                </Box>
                <Box title="Grandezza quantizzata">
                    <P>
                        Una grandezza si dice quantizzata (o discreta) se può assumere solo determinati valori.
                    </P>
                    <P>
                        Una grandezza si dice continua se può assumere qualsiasi valore e quindi se non è
                        quantizzata.
                    </P>
                    <P>
                        Energia, momento angolare e raggio sono quantizzati.
                    </P>
                    <P>
                        Nota costante quantica è <LatexMath>{r`h`}</LatexMath>, la costante di Planck, ovvero il valore
                        minimo possibile per la carica (talvolta espressa
                        come <LatexMath>{r`\hbar = \left ( \frac{h}{2 \pi} \right )`}</LatexMath>.
                    </P>
                </Box>
            </Split>
            <Split>
                <Box title="Modello di Bohr">
                    <P>
                        L'energia degli elettroni è quantizzata.
                    </P>
                    <P>
                        Inoltre, per essi è valido che:
                    </P>
                    <P>
                        <LatexMath>{r`m \cdot v_n \cdot 2 \pi \cdot r = n \cdot h`}</LatexMath>
                    </P>
                    <P>
                        Ancora, il raggio delle orbite è uguale a:
                    </P>
                    <P>
                        <LatexMath>{r`r_n = n^2 \cdot a_0 = n^2 \cdot \frac{\hbar}{m_{elettrone} \cdot k \cdot e^2} `}</LatexMath>
                    </P>
                    <P>
                        Con <LatexMath>{r`a_0 = \left ( \frac{h}{2 \pi} \right )^2 \cdot \frac{1}{m_{elettrone} \cdot k \cdot e^2} = 5.29 \cdot 10^{-11} m`}</LatexMath>.
                    </P>
                    <P>
                        Infine, in ogni stato, l'energia è pari a:
                    </P>
                    <P>
                        <LatexMath>{r`E_n = \frac{1}{n^2} \cdot E_1 = - \frac{1}{n^2} \cdot \frac{a_0^2}{2 \cdot m \cdot \hbar^4} = - \frac{1}{n^2} \cdot \frac{m_{elettrone} \cdot k^2 \cdot e^4}{2 \cdot \hbar^2}`}</LatexMath>
                    </P>
                    <P>
                        Due elettroni non possono occupare lo stesso stato.
                    </P>
                    <P>
                        Questo modello funziona solo per atomi con numero atomico basso. Atomi con molti
                        elettroni hanno comportamenti diversi, descritti dal modello di
                    </P>
                </Box>
            </Split>
            <Split>
                <Box title="Nei solidi">
                    <P>
                        Nei solidi, le lunghezze d'onda sono talmente tanto vicine da poter essere considerate
                        una banda.
                    </P>
                    <P>
                        Possono però comunque avere dei gap dovuti agli intervalli di energia non ammessi.
                    </P>
                </Box>
            </Split>
            <Split title="Semiconduttori">
                <Box title="Semiconduttori">
                    <P>
                        <Todo>Refactor this</Todo>
                    </P>
                    <P>
                        Se la banda di emissione con energia più alta di un corpo è assente o è separata da un
                        gap dell'ordine di grandezza maggiore di <LatexMath>{r`10^1 eV`}</LatexMath>, allora il corpo è
                        un isolante.
                    </P>
                    <P>
                        Se invece la banda di emissione si sovrappone a un altra, allora il corpo è un
                        conduttore.
                    </P>
                    <P>
                        Se il gap è invece dell'ordine di grandezza di <LatexMath>{r`1 eV`}</LatexMath>, allora il corpo
                        è un semiconduttore.
                    </P>
                </Box>
                <Box title="Lacune">
                    <P>
                        Legami in cui <Plus>mancano elettroni</Plus>.
                    </P>
                    <P>
                        <Minus>Elettroni</Minus> di altri legami possono spostarsi per colmare
                                                 le <Plus>lacune</Plus>, creandone altre, e spostandole in direzione opposta a quella
                                                 della corrente.
                    </P>
                </Box>
                <Box title="Accettori e donori">
                    <P>
                        Se si inserisce in un cristallo semiconduttore si inserisce un atomo con numero atomico
                        diverso, si otterrà:
                    </P>
                    <ul>
                        <li>Con numero atomico maggiore, un semiconduttore di <Minus>tipo N</Minus> con <Minus>elettroni
                                                                                                               in eccesso</Minus> liberi di scorrere.
                        </li>
                        <li>Con numero atomico minore, un semiconduttore di <Plus>tipo P</Plus> con <Plus>lacune
                                                                                                          in eccesso</Plus> libere di catturare elettroni da altri legami.
                        </li>
                    </ul>
                    <P>
                        Maggiore impurezza porta a maggiore conduttività.
                    </P>
                </Box>
                <Box title="Temperatura">
                    <P>
                        Aumentando la temperatura di un semiconduttore si aumenta la conduttività, perchè eccita
                        le particelle e favorisce il movimento di <Minus>elettroni</Minus> e <Plus>lacune</Plus>.
                    </P>
                </Box>
            </Split>
            <Split title={<span>Ottica <small>(non l'abbiamo fatta)</small></span>}>
                <Box title="Assorbimento e riflessione">
                    <P>
                        I corpi possono assorbire o riflettere le onde elettromagnetiche che li colpiscono.
                    </P>
                </Box>
                <Box title="Corpo nero">
                    <P>
                        Un corpo nero è un corpo che assorbe tutte le onde elettromagnetiche che riceve senza
                        rifletterne nessuna.
                    </P>
                    <P>
                        Le onde assorbite vengono poi riemesse sotto forma di un onda
                        di <LatexMath>{r`\lambda`}</LatexMath> variabile in base alla temperatura.
                    </P>
                    <P>
                        <LatexMath>{r`\lambda_{max} \cdot T`}</LatexMath> è costante.
                    </P>
                </Box>
                <Box title="Teoria di Planck per il corpo nero">
                    <P>
                        L'energia assorbita e emessa dai corpi neri è quantizzata.
                    </P>
                </Box>
                <Box title="Fotone">
                    <P>
                        Un onda magnetica con un quanto di energia è detta <i>fotone</i>:
                    </P>
                    <P>
                        <LatexMath>{r`E_{fotone} = h \cdot f`}</LatexMath>
                    </P>
                </Box>
                <Box title="Effetto fotoelettrico">
                    <P>
                        A volte, i fotoni che colpiscono un metallo possono estrarvi degli elettroni e creare
                        una differenza di potenziale.
                    </P>
                    <P>
                        Perchè avvenga, la frequenza deve essere maggiore di una certa soglia.
                    </P>
                    <P>
                        Il numero di elettroni estratti dipende dall'intensità dell'onda, mentre l'energia
                        cinetica degli elettroni dipende dalla frequenza.
                    </P>
                    <P>
                        Non c'è nessun ritardo tra l'assorbimento del fotone e l'estrazione di elettroni.
                    </P>
                </Box>
            </Split>
        </article>
    )
}
