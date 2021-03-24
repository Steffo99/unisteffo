import {Anchor, BaseLink, Bold as B, Color, ListItem as LI, Paragraph as P} from "bluelib/lib/components"
import {default as Latex} from "bluelib/lib/components/LatexMath"

import Todo from "../../components/Todo"
import TitleSplit, {default as Section} from "../../components/TitleSplit"
import Box from "../../components/Box"


const r = String.raw;


function Plus({children}) {
    return (
        <Color builtin={"red"}>{children}</Color>
    )
}


function Minus({children}) {
    return (
        <Color builtin={"blue"}>{children}</Color>
    )
}


export default function Fisica() {
    return (
        <article>
            <TitleSplit title={"Fisica"}>
                <Box title={"Di cosa si tratta?"}>
                    <P>
                        <Todo>Questa parte non è ancora stata scritta.</Todo>
                    </P>
                </Box>
                <Box title={"Il corso all'Unimore"}>
                    <P>
                        🎓 Il corso è stato tenuto dalla <Anchor href={"mailto:rossella.brunetti@unimore.it"}>Prof.ssa Rossella Brunetti</Anchor>.
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
            </TitleSplit>
            <Section title="Vettori">
                <Box title="Componenti cartesiane">
                    <P>
                        Usa le regole base della trigonometria:
                    </P>
                    <P>
                        <Latex>{r`\vec{v} = \vec{v}_x + \vec{v}_y`}</Latex>
                    </P>
                    <P>
                        <Latex>{r`\left | \vec{v}_x \right | = \left | \vec{v} \right | \sin \alpha`}</Latex>
                    </P>
                    <P>
                        <Latex>{r`\left | \vec{v}_y \right | = \left | \vec{v} \right | \cos \alpha`}</Latex>
                    </P>
                </Box>
                <Box title="Somma">
                    <P>
                        Scomponi in componenti, poi sommali:
                    </P>
                    <P>
                        <Latex>{r`\vec{v} + \vec{w} = (\vec{v}_x + \vec{w}_x) + (\vec{v}_y + \vec{w}_y)`}</Latex>
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
                        <Latex>{r`\vec{v} - \vec{w} = (\vec{v}_x - \vec{w}_x) + (\vec{v}_y - \vec{w}_y)`}</Latex>
                    </P>
                    <P>
                        Produce il vettore che parte da <Latex>w</Latex> e arriva a <Latex>v</Latex>.
                    </P>
                </Box>
                <Box title="Prodotto scalare">
                    <P>
                        Si chiama scalare perchè il risultato è uno scalare, non un vettore.
                    </P>
                    <P>
                        <Latex>{r`\vec{v} \cdot \vec{w} = \left | \vec{v} \right | \left | \vec{w} \right | \cos \alpha`}</Latex>
                    </P>
                    <P>
                        Produce il modulo della proiezione
                        di <Latex>{r`\vec{a}`}</Latex> su <Latex>{r`\vec{b}`}</Latex>.
                    </P>
                </Box>
                <Box title="Prodotto vettoriale">
                    <P>
                        Si chiama vettoriale perchè il risultato è un altro vettore.
                    </P>
                    <ul>
                        <li><Latex>{r`\vec{c} = \vec{a} \times \vec{b}`}</Latex></li>
                        <li>
                            <Latex>{r`\left | \vec{c} \right | = \left | \vec{a} \right | \cdot \left | \vec{b} \right | \cdot \sin(\alpha)`}</Latex>
                        </li>
                        <li><Anchor href="https://it.wikipedia.org/wiki/Regola_della_mano_destra">Regola della mano
                            destra</Anchor></li>
                    </ul>
                    <P>
                        Non è commutativo!
                    </P>
                </Box>
            </Section>
            <Section title="Leggi di Newton">
                <Box title="1ᵃ: Inerzia">
                    <P>
                        Se un corpo puntiforme ha forza risultante nulla, allora la sua velocità non cambia.
                    </P>
                    <P>
                        <Latex>{r`\Sigma \vec{F} = 0 \Longleftrightarrow \Delta v = 0`}</Latex>
                    </P>
                </Box>
                <Box title="2ᵃ: Proporzionalità">
                    <P>
                        La forza risultante di un corpo è direttamente proporzionale alla sua accelerazione, e
                        la costante di proporzionalità è la <i>massa</i>.
                    </P>
                    <P>
                        <Latex>{r`\Sigma \vec{F} = m \vec{a}`}</Latex>
                    </P>
                </Box>
                <Box title="3ᵃ: Azione e reazione">
                    <P>
                        Due corpi esercitano forze uguali e opposte uno sull'altro.
                    </P>
                    <P>
                        <Latex>{r`\vec{F}_{21} = -\vec{F}_{12}`}</Latex>
                    </P>
                </Box>
            </Section>
            <Section title="Forza di gravità">
                <Box title="Tra due corpi">
                    <P>
                        Due corpi puntiformi si attirano uno verso l'altro con forza:
                    </P>
                    <P>
                        <Latex>{r`\left | \vec{F} \right | = G \frac{m_1 m_2}{s^2}`}</Latex>
                    </P>
                    <P>
                        <Latex>G</Latex> è la <i>costante di gravitazione universale</i> e vale:
                    </P>
                    <P>
                        <Latex>{r`G = 6.67 \cdot 10^{-11} \frac{N m^2}{{kg}^2}`}</Latex>
                    </P>
                </Box>
                <Box title="Verso la Terra">
                    <P>
                        Se nel sistema di riferimento consideriamo la Terra ferma, allora un corpo è attratto
                        verso la Terra con forza <i>peso</i> uguale a:
                    </P>
                    <P>
                        <Latex>{r`\left | \vec{F} \right | = g m`}</Latex>
                    </P>
                    <P>
                        <Latex>g</Latex> è la <i>costante di gravità</i> della Terra, e vale:
                    </P>
                    <P>
                        <Latex>{r`g = 9.81 \frac{m}{s^2}`}</Latex>
                    </P>
                </Box>
                <Box title="Su pianeti diversi">
                    <P>
                        Per pianeti diversi dalla Terra vale la stessa regola:
                    </P>
                    <P>
                        <Latex>{r`\left | \vec{F} \right | = g m`}</Latex>
                    </P>
                    <P>
                        L'unica differenza è che cambia la <i>costante di gravità</i>:
                    </P>
                    <P>
                        <Latex>{r`g_{luna} = 1.62 \frac{m}{s^2}`}</Latex>
                    </P>
                    <P>
                        <Latex>{r`g_{marte} = 3.71 \frac{m}{s^2}`}</Latex>
                    </P>
                </Box>
            </Section>
            <Section title="Forze di contatto">
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
                        <Latex>{r`\left | \vec{F} \right | \leq \mu_{s} \left | \vec{F}_{normale} \right |`}</Latex>
                    </P>
                </Box>
                <Box title="Attrito dinamico">
                    <P>
                        Rallenta i corpi che si stanno muovendo finchè essi non si fermano:
                    </P>
                    <P>
                        <Latex>{r`\left | \vec{F} \right | \leq \mu_{d} \left | \vec{F}_{normale} \right |`}</Latex>
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
                        <Latex>{r`F = -k x`}</Latex>
                    </P>
                    <P>
                        (E' negativa perchè la forza è opposta a quella applicata per deformarla.)
                    </P>
                </Box>
            </Section>
            <Section title="Cinematica">
                <Box title="Spostamento">
                    <P>
                        È un vettore che indica la posizione di un corpo rispetto a un'origine.
                    </P>
                    <P>
                        <Latex>{r`\Delta \vec{s} = \vec{s}(fine) - \vec{s}(inizio)`}</Latex>
                    </P>
                </Box>
                <Box title="Velocità">
                    <P>
                        È un vettore che misura la variazione di posizione nel tempo.
                    </P>
                    <P>
                        <Latex>{r`\vec{v} = \frac{\Delta \vec{s}}{\Delta t}`}</Latex>
                    </P>
                    <P>
                        Se si considera un intervallo di tempo infinitesimale si dice <i>velocità istantanea</i>:
                    </P>
                    <P>
                        <Latex>{r`\vec{v} = \lim_{\Delta t \to 0} \frac{\Delta \vec{s}}{\Delta t} = \frac{d \vec{s}}{dt}`}</Latex>
                    </P>
                </Box>
                <Box title="Accelerazione">
                    <P>
                        È un vettore che misura la variazione di velocità nel tempo.
                    </P>
                    <P>
                        <Latex>{r`\vec{a} = \frac{\Delta \vec{v}}{\Delta t}`}</Latex>
                    </P>
                    <P>
                        Se si considera un intervallo di tempo infinitesimale si dice <i>accelerazione
                        istantanea</i>:
                    </P>
                    <P>
                        <Latex>{r`\vec{a} = \lim_{\Delta v \to 0} \frac{\Delta \vec{v}}{\Delta t} = \frac{d \vec{v}}{d t} = \frac{d^2 \vec{s}}{d t^2}`}</Latex>
                    </P>
                </Box>
                <Box title={<span>Quantità di moto <small>(momento lineare)</small></span>}>
                    <P>
                        La quantità di moto è una proprietà vettoriale dei corpi:
                    </P>
                    <P>
                        <Latex>{r`\vec{p} = m \vec{v}`}</Latex>
                    </P>
                    <P>
                        Se la forza risultante è nulla, la quantità di moto non cambia.
                    </P>
                    <P>
                        <Latex>{r`\Sigma \vec{F} = 0 \Longleftrightarrow \Delta \vec{p} = 0`}</Latex>
                    </P>
                </Box>
            </Section>
            <Section title="Moto rettilineo uniforme">
                <Box title="Spostamento">
                    <P>
                        La <i>legge oraria</i> è:
                    </P>
                    <P>
                        <Latex>{r`s(t) = v \cdot \Delta t + s(0)`}</Latex>
                    </P>
                </Box>
                <Box title="Velocità">
                    <P>
                        È costante:
                    </P>
                    <P>
                        <Latex>{r`v(t) = k`}</Latex>
                    </P>
                </Box>
                <Box title="Accelerazione">
                    <P>
                        La velocità non varia:
                    </P>
                    <P>
                        <Latex>{r`a(t) = 0`}</Latex>
                    </P>
                </Box>
                <Box title="Forze">
                    <P>
                        Si applica la prima legge di Newton:
                    </P>
                    <P>
                        <Latex>f(t) = 0</Latex>
                    </P>
                </Box>
            </Section>
            <Section title="Moto rettilineo uniformemente accelerato">
                <Box title="Spostamento">
                    <P>
                        La <i>legge oraria</i> è:
                    </P>
                    <P>
                        <Latex>{r`s(t) = \frac{1}{2} a \cdot (\Delta t)^2 + v(0) \cdot (\Delta t) + s(0)`}</Latex>
                    </P>
                </Box>
                <Box title="Velocità">
                    <P>
                        È una retta:
                    </P>
                    <P>
                        <Latex>{r`v(t) = a \Delta t + v(0)`}</Latex>
                    </P>
                </Box>
                <Box title="Accelerazione">
                    <P>
                        È costante:
                    </P>
                    <P>
                        <Latex>{r`a(t) = k`}</Latex>
                    </P>
                </Box>
                <Box title="Forze">
                    <P>
                        Si applica la prima legge di Newton:
                    </P>
                    <P>
                        <Latex>f(t) = m a</Latex>
                    </P>
                </Box>
            </Section>
            <Section title="Moto armonico semplice">
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
                        <Latex>{r`\omega = \frac{2 \pi}{T}`}</Latex>
                    </P>
                </Box>
                <Box title="Spostamento">
                    <P>
                        E' una sinusoide:
                    </P>
                    <P>
                        <Latex>{r`s(t) = A \sin (\omega \cdot t + \phi)`}</Latex>
                    </P>
                </Box>
                <Box title="Velocità">
                    <P>
                        E' la sinusoide dello spostamento, sfasata di <Latex>{r`\frac{\pi}{2}`}</Latex>:
                    </P>
                    <P>
                        <Latex>{r`v(t) = A \sin (\omega \cdot t + \phi + \frac{\pi}{2})`}</Latex>
                    </P>
                </Box>
                <Box title="Accelerazione">
                    <P>
                        E' la sinusoide della velocità, sfasata di <Latex>{r`\pi`}</Latex>:
                    </P>
                    <P>
                        <Latex>{r`a(t) = A \sin (\omega \cdot t + \phi + \pi)`}</Latex>
                    </P>
                </Box>
                <Box title="Forze">
                    <P>
                        Si applica la prima legge di Newton:
                    </P>
                    <P>
                        <Latex>f(t) = m a</Latex>
                    </P>
                </Box>
            </Section>
            <Section title="Moti composti">
                <Box title="Moto parabolico">
                    <P>
                        Il moto parabolico è dato sommando un moto rettilineo uniforme sull'asse orizzontale e
                        un moto rettilineo uniformemente accelerato sull'asse verticale.
                    </P>
                </Box>
                <Box title="Moto circolare uniforme">
                    <P>
                        Il moto parabolico è dato sommando due moti armonici semplici: uno sull'asse X, e
                        l'altro, sfasato di <Latex>{r`\frac{\pi}{2}`}</Latex>, sull'asse Y.
                    </P>
                </Box>
            </Section>
            <Section title="Moto circolare uniforme">
                <Box>
                    <h3>
                        Velocità angolare
                    </h3>
                    <P>
                        Quanto cambia la fase nel tempo.
                    </P>
                    <P>
                        <Latex>{r`\omega = \frac{2 \pi}{T}`}</Latex>
                    </P>
                </Box>
                <Box title="Fase">
                    <P>
                        E' l'angolo percorso dal corpo rispetto alla posizione iniziale.
                    </P>
                    <P>
                        Si indica con <Latex>{r`\phi`}</Latex>, e generalmente si usa in radianti.
                    </P>
                </Box>
                <Box title="Velocità">
                    <P>
                        Si applicano le formule per la circonferenza:
                    </P>
                    <P>
                        <Latex>{r`v = \frac{\Delta s}{t} = \frac{2 \pi \cdot r}{T} = \omega r`}</Latex>
                    </P>
                </Box>
                <Box title="Accelerazione">
                    <P>
                        Il corpo ha sempre un accelerazione verso il centro che gli impedisce di abbandonare il
                        moto:
                    </P>
                    <P>
                        <Latex>{r`a = \frac{v^2}{r} = r \cdot \omega^2 = v \cdot \omega`}</Latex>
                    </P>
                </Box>
                <Box title="Forza centripeta">
                    <P>
                        È verso il centro e si calcola con:
                    </P>
                    <P>
                        <Latex>{r`F = m \cdot a`}</Latex>
                    </P>
                </Box>
            </Section>
            <Section title="Lavoro ed energia">
                <Box title="Lavoro">
                    <P>
                        E' compiuto da una forza che sposta un corpo.
                    </P>
                    <P>
                        <Latex>{r`W = \vec{F} \cdot \vec{s} = F \cdot \Delta s \cdot cos(\alpha )`}</Latex>
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
                        <Latex>{r`E_c = \frac{1}{2} m v^2`}</Latex>
                    </P>
                    <P>
                        Se una forza effettua lavoro su un corpo, cambia la sua energia cinetica pari al lavoro
                        effettuato:
                    </P>
                    <P>
                        <Latex>{r`\Delta E_c = W`}</Latex>
                    </P>
                </Box>
                <Box title="Energia potenziale gravitazionale">
                    <P>
                        Un corpo ha energia potenziale in ogni momento pari a:
                    </P>
                    <P>
                        <Latex>{r`E_{p_g} = m \cdot g \cdot h`}</Latex>
                    </P>
                    <P>
                        (Con <Latex>h</Latex> uguale a un altezza scelta come punto di riferimento.)
                    </P>
                </Box>
                <Box title="Energia potenziale elastica">
                    <P>
                        Una molla ha sempre energia potenziale elastica pari a:
                    </P>
                    <P>
                        <Latex>{r`E_{p_e} = \frac{1}{2} k x^2`}</Latex>
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
                        <Latex>{r`E = E_k + E_p`}</Latex>
                    </P>
                </Box>
                <Box title="Potenza">
                    <P>
                        È la velocità di trasferimento di energia:
                    </P>
                    <P>
                        <Latex>{r`P = \frac{\Delta E}{\Delta t}`}</Latex>
                    </P>
                </Box>
            </Section>
            <Section title="Elettrostatica">
                <Box title="Carica elettrica">
                    <P>
                        È una proprietà dei corpi che può essere <Plus>positiva</Plus> o <Minus>negativa</Minus>.
                    </P>
                    <P>
                        Si conserva: in un sistema chiuso la carica totale è costante.
                    </P>
                    <P>
                        Esiste un'unità elementare: <Latex>{r`C_{elettrone} = 1.602 \cdot 10^{-19}`}</Latex>.
                    </P>
                    <P>
                        Cariche <Plus>opp</Plus><Minus>oste</Minus> si attraggono;
                        cariche <Plus>uguali</Plus> si respingono.
                    </P>
                </Box>
                <Box title="Conduttori e isolanti">
                    <P>
                        Più <Anchor href="https://it.wikipedia.org/wiki/Ione">ioni</Anchor> ha un corpo, meglio la carica
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
            </Section>
            <Section title="Polarizzazione">
                <Box title="Polarizzazione">
                    <P>
                        E' possibile polarizzare un corpo per accumulare la carica di un segno in una certa
                        zona.
                    </P>
                </Box>
            </Section>
            <Section>
                <Box title="Messa a terra">
                    <P>
                        Se un corpo conduttore è in contatto con la Terra, le cariche su di esso
                        saranno <i>equilibrate</i> e il corpo diventerà elettricamente neutro (con stesso numero
                        di <Plus>cariche positive</Plus> e <Minus>negative</Minus> all'interno).
                    </P>
                </Box>
            </Section>
            <Section>
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
            </Section>
            <Section title="Forza elettrica">
                <Box title="Legge di Coulomb">
                    <P>
                        Due corpi carichi si attraggono tra loro con forza:
                    </P>
                    <P>
                        <Latex>{r`\left | \vec{F}_{elettrica} \right | = \frac{-k \cdot q_1 \cdot q_2}{s^2}`}</Latex>
                    </P>
                    <P>
                        <Latex>{r`k`}</Latex> è la <i>costante di Coulomb</i>, e
                        vale <Latex>{r`k = 8.99 \cdot 10^9 \frac{N \cdot m^2}{C^2}`}</Latex>.
                    </P>
                </Box>
                <Box title="Permeabilità dello spazio vuoto">
                    <P>
                        La costante <Latex>{r`k`}</Latex> è in realtà dipendente da un altra
                        costante, <Latex>{r`\epsilon_0`}</Latex>, la <i>permeabilità del vuoto</i>.
                    </P>
                    <P>
                        <Latex>{r`k = \frac{1}{4 \pi \cdot \epsilon_0}`}</Latex>
                    </P>
                    <P>
                        <Latex>{r`\left | \vec{F}_{elettrica} \right | = \frac{q_1 \cdot q_2}{4 \pi \cdot \epsilon_0 \cdot s^2}`}</Latex>
                    </P>
                </Box>
                <Box title="Campo elettrico">
                    <P>
                        Misura che forza viene applicata in ogni punto su una carica unitaria:
                    </P>
                    <P>
                        <Latex>{r`\vec{E} = \frac{\vec{F}_{elettrica}}{q} = \frac{-k \cdot q}{s^2}`}</Latex>
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
                        <Latex>{r`\Phi_E = \vec{E} \cdot \vec{A}`}</Latex>
                    </P>
                    <P>
                        Se il campo elettrico è uniforme, se ne può calcolare facilmente il valore:
                    </P>
                    <P>
                        <Latex>{r`\Phi_E = \vec{E} \cdot \vec{A} = E_\perp \cdot A \cdot \cos(\alpha)`}</Latex>
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
                        <Latex>{r`\Phi_E = 4 \pi \cdot k \cdot q = \frac{q}{\epsilon_0}`}</Latex>
                    </P>
                    <P>
                        Ovvero, i campi elettrostatici sono generati dalle cariche elettriche.
                    </P>
                </Box>
            </Section>
            <Section title="Energia elettrica">
                <Box title="Energia potenziale elettrica">
                    <P>
                        Un corpo carico vicino ad altre cariche possiede un'<i>energia potenziale elettrica</i>
                        <Latex>{r`U_e`}</Latex>.
                    </P>
                </Box>
            </Section>
            <Section title="Circuiti elettrici">
                <Box title={<span>Potenziale elettrico <small>(tensione)</small></span>}>
                    <P>
                        È il valore dell'energia potenziale elettrica per una carica unitaria.
                    </P>
                    <P>
                        <Latex>{r`V = \frac{U_e}{q}`}</Latex>
                    </P>
                    <P>
                        La sua unità di misura è il Volt (<Latex>{r`V`}</Latex>).
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
                        <Latex>{r`I = \frac{\Delta q}{\Delta t}`}</Latex>
                    </P>
                    <P>
                        Fintanto che c'è differenza di potenziale, ci sarà anche intensità non nulla.
                    </P>
                    <P>
                        La sua unità di misura è l'Ampere (<Latex>{r`A`}</Latex>).
                    </P>
                </Box>
                <Box title={<span>Corrente continua <small>(<abbr
                    title="Direct Current">DC</abbr>)</small></span>}>
                    <P>
                        Quando in un circuito la direzione della corrente è costante.
                    </P>
                </Box>
                <Box title={<span>Corrente alternata <small>(<abbr
                    title="Alternate Current">AC</abbr>)</small></span>}>
                    <P>
                        Quando in un circuito la direzione della corrente si alterna periodicamente.
                    </P>
                </Box>
                <Box title="Potenza elettrica">
                    <P>
                        Possiamo calcolare la potenza di un circuito:
                    </P>
                    <P>
                        <Latex>{r`P = \frac{\Delta U_e}{\Delta t} = I \cdot \Delta V = I^2 \cdot R = \frac{(\Delta V)^2}{R}`}</Latex>
                    </P>
                </Box>
            </Section>
            <Section title="Elementi di un circuito">
                <Box title="Resistore">
                    <P>
                        Riduce l'intensità di corrente, e converte parte del potenziale in calore.
                    </P>
                    <P>
                        Il potenziale utilizzato è pari a:
                    </P>
                    <P>
                        <Latex>{r`V = R \cdot I`}</Latex>
                    </P>
                    <P>
                        Dove <Latex>{r`R`}</Latex> è una costante detta <i>resistenza</i> con unità di misura
                        Ohm (<Latex>{r`\Omega`}</Latex>).
                    </P>
                    <P>
                        La resistenza di un conduttore vale:
                    </P>
                    <P>
                        <Latex>{r`R = \rho \frac{L_{unghezza}}{A_{rea}}`}</Latex>
                    </P>
                    <P>
                        <Latex>{r`\rho`}</Latex> è la <i>resistività</i> del materiale, e varia in base alla
                        temperatura:
                    </P>
                    <P>
                        <Latex>{r`\rho = \rho_0 (1 + \alpha(T - T_0))`}</Latex>
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
                        <Latex>{r`C = \frac{q_{massima}}{\Delta V}`}</Latex>
                    </P>
                    <P>
                        Condensatori di capacità maggiore immagazzinano più potenziale con meno carica.
                    </P>
                    <P>
                        La capacità aumenta se viene messo qualcosa tra le armature:
                    </P>
                    <P>
                        <Latex>{r`C_{nuova} = \kappa \cdot \frac{\epsilon_0 \cdot A}{s}`}</Latex>
                    </P>
                    <P>
                        Dove <Latex>{r`\kappa`}</Latex> è la <i>costante dielettrica relativa</i> del materiale
                        inserito, <Latex>{r`A`}</Latex> l'area di una armatura e <Latex>{r`s`}</Latex> la
                        distanza tra le due armature.
                    </P>
                    <P>
                        Se il campo elettrico creatosi tra le due armature supera la <i>rigidità
                        dielettrica</i> del condensatore, la carica immagazzinata viene persa e ha luogo
                        un <i>breakdown</i>.
                    </P>
                    <P>
                        La sua unità di misura è il Farad (<Latex>{r`Fa`}</Latex>)
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
            </Section>
            <Section title="Principi di Kirchhoff">
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
            </Section>
            <Section title="Serie e Parallelo">
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
            </Section>
            <Section title="Resistenze equivalenti">
                <Box title="Circuiti in serie">
                    <P>
                        Nei circuiti in serie, tutte le resistenze possono essere sostituite con una equivalente
                        dalla resistenza della somma di tutte le quelle sostituite:
                    </P>
                    <P>
                        <Latex>{r`R_{serie} = \sum_{i=1}^{n} R_i`}</Latex>
                    </P>
                </Box>
                <Box title="Circuiti in parallelo">
                    <P>
                        Nei circuiti in parallelo, tutte le resistenze possono essere sostituite con una
                        equivalente dalla resistenza di:
                    </P>
                    <P>
                        <Latex>{r`R_{parallelo} = \frac{1}{\sum_{i=1}^{n} \frac{1}{R_i}}`}</Latex>
                    </P>
                </Box>
            </Section>
            <Section title="Condensatori equivalenti">
                <Box title="Circuiti in serie">
                    <P>
                        Nei circuiti in serie, tutti i condensatori possono essere sostituiti con uno
                        equivalente dalla capacità di:
                    </P>
                    <P>
                        <Latex>{r`C_{serie} = \frac{1}{\sum_{i=1}^{n} \frac{1}{C_i}}`}</Latex>
                    </P>
                </Box>
                <Box title="Circuiti in parallelo">
                    <P>
                        Nei circuiti in parallelo, tutte i condensatori possono essere sostituite con uno
                        equivalente dalla capacità della somma di tutti quelli sostituiti:
                    </P>
                    <P>
                        <Latex>{r`C_{parallelo} = \sum_{i=1}^{n} C_n`}</Latex>
                    </P>
                </Box>
            </Section>
            <Section title="Magnetismo">
                <Box title="Permeabilità magnetica dello spazio vuoto">
                    <P>
                        E' una costante fisica fondamentale che rappresenta quanto un materiale si magnetizza
                        facilmente.
                    </P>
                    <P>
                        <Latex>{r`\mu_0 = 4 \pi \cdot 10^{-7} \frac{H}{m}`}</Latex> (<Latex>{r`\frac{N}{A^2}`}</Latex>)
                    </P>
                </Box>
                <Box title="Campo magnetico">
                    <P>
                        Come un campo elettrico, ma per i magneti.
                    </P>
                    <P>
                        Il suo simbolo è <Latex>{r`B`}</Latex>, e la sua unità di misura è il Tesla
                        (<Latex>T</Latex>).
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
                        <Latex>{r`\Phi_{B_{i}} = \vec{B} \cdot \vec{L}_n = B \cdot L_i \cdot \sin(\alpha) = B_\parallel \cdot L_i`}</Latex>
                    </P>
                    <P>
                        <Latex>{r`\Phi_{B} = \sum_{i=0}^{n_{lati}} \Phi_{Bn}`}</Latex>
                    </P>
                    <P>
                        La sua unità di misura è il Weber (<Latex>{r`Wb = T \cdot m^2`}</Latex>).
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
                        <Latex>{r`\Phi_B = \mu_0 \cdot I`}</Latex>
                    </P>
                </Box>
            </Section>
            <Section title="Forze magnetiche">
                <Box
                    title={<span>Forza magnetica su carica puntiforme <small>(Forza di Lorentz)</small></span>}>
                    <P>
                        I campi magnetici applicano una forza sulle cariche vicine:
                    </P>
                    <P>
                        <Latex>{r`\vec{F}_{B} = q \cdot (\vec{v} \times \vec{B})`}</Latex>
                    </P>
                    <P>
                        Dove <Latex>{r`\vec{B}`}</Latex> è l'intensità del campo magnetico
                        e <Latex>{r`\vec{v}`}</Latex> la velocità della carica considerata.
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
                        <Latex>{r`\vec{F}_{magnetica} = I \cdot (\vec{L} \times \vec{B})`}</Latex> <Anchor
                        href="https://it.openprof.com/wb/forza_di_lorentz_su_un_filo_percorso_da_corrente?ch=360">[1]</Anchor>
                    </P>
                    <P>
                        Dove <Latex>{r`I`}</Latex> è la corrente elettrica, <Latex>{r`\vec{L}`}</Latex> è un
                        vettore che punta nella direzione di scorrimento della corrente e ha come modulo la
                        lunghezza del conduttore.
                    </P>
                </Box>
            </Section>
            <Section title="Campi magnetici">
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
                        <Latex>{r`\left | \vec{B} \right | = \mu_0 \cdot I \cdot \frac{A_{vvolgimenti}}{L_{unghezzafilo}}`}</Latex>
                    </P>
                </Box>
                <Box title="Legge di Oersted">
                    <P>
                        <i>Caso particolare della <Anchor href="https://it.wikipedia.org/wiki/Legge_di_Amp%C3%A8re">Legge
                            di Ampère</Anchor>.</i>
                    </P>
                    <P>
                        Il modulo del campo magnetico <Latex>B</Latex> prodotto da un filo in cui passa una
                        corrente continua <Latex>I</Latex> alla distanza <Latex>s</Latex> è:
                    </P>
                    <P>
                        <Latex>{r`\left | \vec{B} \right | = \frac{\mu \cdot I}{2 \pi r}`}</Latex>
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
            </Section>
            <Section title="Induzione elettromagnetica">
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
                        <Latex>{r`\Delta V_{indotta} = v \cdot B \cdot L`}</Latex>
                    </P>
                    <P>
                        Dove <Latex>v</Latex> è la velocità del conduttore, <Latex>B</Latex> è l'intensità del
                        campo magnetico ed <Latex>L</Latex> è la lunghezza del conduttore.
                    </P>
                </Box>
                <Box title="Flusso magnetico in una spira">
                    <P>
                        In un campo magnetico <Latex>{r`B`}</Latex> uniforme e perpendicolare al piano di una
                        spira di area <Latex>{r`A`}</Latex>, il flusso magnetico si può determinare con la <i>Legge
                        di Faraday-Neumann-Lenz</i>:
                    </P>
                    <P>
                        <Latex>{r`\Phi_B = \vec{B} \cdot \vec{A} = B \cdot A \cdot \cos(\alpha)`}</Latex>
                    </P>
                </Box>
            </Section>
            <Section>
                <Box title="Legge di Faraday-Neumann-Lenz">
                    <P>
                        Dice che la forza elettromotrice media indotta in un percorso dipende dalla variazione
                        nel tempo del flusso magnetico nello stesso percorso.
                    </P>
                    <P>
                        <Latex>{r`\Delta V_{indotta} = - \frac{\Delta \Phi_B}{\Delta t}`}</Latex>
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
                        <Latex>{r`\Delta V_{indotta} = - \frac{N \cdot \Delta \Phi_{B_{spira}}}{\Delta t} = - \frac{N \cdot B \cdot A \cdot cos(\alpha)}{\Delta t}`}</Latex>
                    </P>
                    <P>
                        Dove <Latex>{r`N`}</Latex> è il numero delle spire del solenoide.
                    </P>
                </Box>
                <Box title="Legge di Ampère-Maxwell">
                    <P>
                        Correnti o campi elettrici variabili creano un campo magnetico.
                    </P>
                </Box>
            </Section>
            <Section title="Elettromagnetismo">
                <Box title="Onde elettromagnetiche">
                    <P>
                        Nel vuoto, il campo elettrico <Latex>{r`E`}</Latex> e il campo
                        magnetico <Latex>{r`B`}</Latex> sono perpendicolari tra loro e la direzione di
                        propagazione, e sono entrambe funzioni del tempo.
                    </P>
                    <P>
                        Si dice quindi che sono <i>onde elettromagnetiche</i>.
                    </P>
                    <P>
                        Esse sono legate dalla relazione:
                    </P>
                    <P>
                        <Latex>{r`E = c \cdot B`}</Latex>
                    </P>
                    <P>
                        Dove <Latex>{r`c`}</Latex> è la velocità delle onde (luce) nel vuoto, e a sua volta è
                        uguale a:
                    </P>
                    <P>
                        <Latex>{r`c = \frac{1}{\sqrt{\epsilon_0 \cdot \mu_0}} = 3.00 \cdot 10^8 \frac{m}{s}`}</Latex>
                    </P>
                </Box>
                <Box title="Formula delle onde">
                    <P>
                        <Latex>{r`A(t) = A_{max} \cdot \sin \left ( \frac{2 \pi}{\lambda} - \omega t + \phi \right )`}</Latex>
                    </P>
                    <P>
                        Dove <Latex>{r`A_{max}`}</Latex> è l'ampiezza massima che può avere
                        l'onda, <Latex>{r`\frac{2 \pi}{\lambda} = \left | \vec{k} \right |`}</Latex> è il
                        vettore d'onda, <Latex>{r`\omega`}</Latex> la frequenza angolare
                        e <Latex>{r`\phi`}</Latex> la fase.
                    </P>
                </Box>
            </Section>
            <Section title="Spettroscopia">
                <Box title="Emissione">
                    <P>
                        I solidi, se portati ad alta temperatura, emettono luce con uno <Anchor
                        href="https://it.wikipedia.org/wiki/Spettro_continuo">spettro continuo</Anchor>.
                    </P>
                    <P>
                        I gas, invece, ad alta temperatura emettono luce solo con particolari lunghezze d'onda.
                    </P>
                    <P>
                        In un gas di idrogeno, le lunghezze d'onda emesse sono ricavabili con:
                    </P>
                    <P>
                        <Latex>{r`\frac{1}{\lambda} = R \left ( \frac{1}{4} - \frac{1}{n^2} \right )`}</Latex>
                    </P>
                    <P>
                        Con <Latex>{r`R = 1.097 \cdot 10^7 \frac{1}{m}`}</Latex>, detta costante di Rydberg,
                        e <Latex>{r`n`}</Latex> un numero intero.
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
                        Nota costante quantica è <Latex>{r`h`}</Latex>, la costante di Planck, ovvero il valore
                        minimo possibile per la carica (talvolta espressa
                        come <Latex>{r`\hbar = \left ( \frac{h}{2 \pi} \right )`}</Latex>.
                    </P>
                </Box>
            </Section>
            <Section>
                <Box title="Modello di Bohr">
                    <P>
                        L'energia degli elettroni è quantizzata.
                    </P>
                    <P>
                        Inoltre, per essi è valido che:
                    </P>
                    <P>
                        <Latex>{r`m \cdot v_n \cdot 2 \pi \cdot r = n \cdot h`}</Latex>
                    </P>
                    <P>
                        Ancora, il raggio delle orbite è uguale a:
                    </P>
                    <P>
                        <Latex>{r`r_n = n^2 \cdot a_0 = n^2 \cdot \frac{\hbar}{m_{elettrone} \cdot k \cdot e^2} `}</Latex>
                    </P>
                    <P>
                        Con <Latex>{r`a_0 = \left ( \frac{h}{2 \pi} \right )^2 \cdot \frac{1}{m_{elettrone} \cdot k \cdot e^2} = 5.29 \cdot 10^{-11} m`}</Latex>.
                    </P>
                    <P>
                        Infine, in ogni stato, l'energia è pari a:
                    </P>
                    <P>
                        <Latex>{r`E_n = \frac{1}{n^2} \cdot E_1 = - \frac{1}{n^2} \cdot \frac{a_0^2}{2 \cdot m \cdot \hbar^4} = - \frac{1}{n^2} \cdot \frac{m_{elettrone} \cdot k^2 \cdot e^4}{2 \cdot \hbar^2}`}</Latex>
                    </P>
                    <P>
                        Due elettroni non possono occupare lo stesso stato.
                    </P>
                    <P>
                        Questo modello funziona solo per atomi con numero atomico basso. Atomi con molti
                        elettroni hanno comportamenti diversi, descritti dal modello di
                    </P>
                </Box>
            </Section>
            <Section>
                <Box title="Nei solidi">
                    <P>
                        Nei solidi, le lunghezze d'onda sono talmente tanto vicine da poter essere considerate
                        una banda.
                    </P>
                    <P>
                        Possono però comunque avere dei gap dovuti agli intervalli di energia non ammessi.
                    </P>
                </Box>
            </Section>
            <Section title="Semiconduttori">
                <Box title="Semiconduttori">
                    <P>
                        <Todo>Refactor this</Todo>
                    </P>
                    <P>
                        Se la banda di emissione con energia più alta di un corpo è assente o è separata da un
                        gap dell'ordine di grandezza maggiore di <Latex>{r`10^1 eV`}</Latex>, allora il corpo è
                        un isolante.
                    </P>
                    <P>
                        Se invece la banda di emissione si sovrappone a un altra, allora il corpo è un
                        conduttore.
                    </P>
                    <P>
                        Se il gap è invece dell'ordine di grandezza di <Latex>{r`1 eV`}</Latex>, allora il corpo
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
            </Section>
            <Section title={<span>Ottica <small>(non l'abbiamo fatta)</small></span>}>
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
                        di <Latex>{r`\lambda`}</Latex> variabile in base alla temperatura.
                    </P>
                    <P>
                        <Latex>{r`\lambda_{max} \cdot T`}</Latex> è costante.
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
                        <Latex>{r`E_{fotone} = h \cdot f`}</Latex>
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
            </Section>
        </article>
    )
}
