import {
    Anchor,
    Blockquote,
    Bold as B,
    Color,
    Italic as I,
    ListItem as LI,
    Paragraph as P,
    Title,
    Code as BluelibCode,
    Separator,
} from "bluelib/lib/components"
import LatexMath from "bluelib/lib/components/LatexMath"

import Todo from "../../components/Todo"
import Split from "../../components/Split"
import Box from "../../components/Box"


const r = String.raw
const Ex = ({ children, ...props }) => <Color builtin={"blue"}><Box {...props}>{children}</Box></Color>
const Code = ({ children, ...props }) => <code {...props}>{children}</code>


export default function Cheatsheet() {
    return (
        <article>
            <Title size={"xl"}>Cheatsheet di Algebra Lineare</Title>
            <Box title={"Moltiplicazioni tra matrici"}>
                <P>
                    <LatexMath block={true}>{r`
                        \begin{bmatrix}
                            a & b \\
                            c & d \\
                        \end{bmatrix}
                        * 
                        \begin{bmatrix}
                            e & f \\
                            g & h \\
                        \end{bmatrix}
                        =
                        \begin{bmatrix}
                            ae + cf & be + df \\
                            ag + ch & bg + dh \\
                        \end{bmatrix}
                    `}</LatexMath>
                </P>
            </Box>
            <Box title={"Invertibilità di una matrice"}>
                <P>
                    Si può verificare se una matrice <LatexMath>{r` A `}</LatexMath> quadrata di ordine <LatexMath>{r` n `}</LatexMath> è invertibile verificando una di queste definizioni equivalenti:
                </P>
                <ul>
                    <LI>
                        Il determinante non è nullo: <LatexMath>{r` \det A\neq 0 `}</LatexMath>.
                    </LI>
                    <LI>
                        Il rango di <LatexMath>{r` A `}</LatexMath> è <LatexMath>{r` n `}</LatexMath>.
                    </LI>
                    <LI>
                        La trasposta <LatexMath>{r` A^{T} `}</LatexMath> è una matrice invertibile.
                    </LI>
                    <LI>
                        Tutte le righe/colonne di <LatexMath>{r` A `}</LatexMath> sono linearmente indipendenti.
                    </LI>
                    <LI>
                        Tutte le righe/colonne di <LatexMath>{r` A `}</LatexMath> formano una base di <LatexMath>{r` \mathbb{K} ^{n} `}</LatexMath>.
                    </LI>
                    <LI>
                        Il numero 0 non è un autovalore di <LatexMath>{r` A `}</LatexMath>.
                    </LI>
                    <LI>
                        <LatexMath>{r` A `}</LatexMath> è trasformabile mediante algoritmo di Gauss-Jordan in una matrice con <LatexMath>{r` n `}</LatexMath> pivot.
                    </LI>
                </ul>
            </Box>
            <Box title={"Stabilire esistenza di funzione lineare"}>
                <P>
                    Per controllare se esiste o no una funzione lineare è sufficiente verificare che sia valida la proprietà di linearità:
                </P>
                <ul>
                    <LI>
                        Se due vettori sono linearmente indipendenti, anche i risultati della funzione devono essere linearmente indipendenti.
                    </LI>
                </ul>
                <P>
                    Può essere controllata velocemente vedendo se si verificano le seguenti condizioni:
                </P>
                <ul>
                    <LI>
                        Se due vettori di ingresso sono uno multiplo dell'altro, allora anche i vettori di uscita devono essere uno multiplo dell'altro per la stessa costante.
                    </LI>
                    <LI>
                        Se un vettore di ingresso è dato dalla somma di (multipli di) altri, allora anche il vettore di uscita deve essere dato dalla somma di (multipli degli) stessi.
                    </LI>
                </ul>
            </Box>
            <Box title={"Determinazione di matrice associata"}>
                <P>
                    Vogliamo trovare la matrice associata (<LatexMath>{r`A`}</LatexMath>) di una funzione rispetto a delle nuove basi, ad esempio <LatexMath>{r` (1, 2, 3), (4, 5, 6), (7, 8, 9)`}</LatexMath>.
                </P>
                <P>
                    Procediamo disponendo in verticale gli elementi delle basi, in questo modo:
                </P>
                <P>
                    <LatexMath block={true}>{r`    
                        M = 
                        \begin{matrix}
                            1 & 4 & 7 \\
                            2 & 5 & 8 \\
                            3 & 6 & 9 \\
                        \end{matrix}
                    `}</LatexMath>
                </P>
                <P>
                    Troviamo la matrice inversa con il metodo di Gauss-Jordan.
                </P>
                <P>
                    Calcoliamo il risultato di:
                </P>
                <P>
                    <LatexMath block={true}>{r`
                        B = M^{-1} * A * M
                    `}</LatexMath>
                </P>
                <P>
                    Il risultato <LatexMath>{r`B`}</LatexMath> sarà la nostra nuova matrice associata.
                </P>
            </Box>
            <Box title={"Diagonalizzabilità"}>
                <P>
                    Una matrice è <I>diagonalizzabile</I> se ha <B>tanti autovalori quanto il suo rango</B>.
                    Per trovare gli autovalori trovare dove il polinomio caratteristico (determinante della matrice fatta come quella qui sotto) è uguale a 0:
                </P>
                <P>
                    <LatexMath block={true}>{r`
                        \begin{vmatrix}
                            1 - x & 2     & 3 \\
                            4     & 5 - x & 6 \\
                            7     & 8     & 9 - x \\
                        \end{vmatrix}
                        = 0
                    `}</LatexMath>
                </P>
            </Box>
            <Box title={"Stabilire se una funzione è lineare"}>
                <P>
                    Se tutti i termini della funzione sono <B>polinomi omogenei</B> di primo grado (non ci sono potenze superiori a 1), allora è automaticamente <I>lineare</I>.
                </P>
            </Box>
            <Box title={"Immagine"}>
                <P>
                    Le <I>basi dell'immagine</I> di una funzione sono i <B>vettori linearmente indipendenti</B> che la generano.
                </P>
            </Box>
            <Split>
                <Box title={"Iniettività"}>
                    <P>
                        Una funzione lineare è <I>iniettiva</I> se <B>il nucleo è di dimensione 0</B>, ovvero se l'unico valore che fa risultare 0 alla funzione è il vettore nullo.
                    </P>
                </Box>
                <Box title={"Suriettività"}>
                    <P>
                        Una funzione lineare è <I>suriettiva</I> se la dimensione dell'immagine è minore o uguale al rango della funzione (degli input, il rango della matrice associata): <LatexMath>{r`dim(Im(F)) = rk(M_F)`}</LatexMath>.\\
                    </P>
                </Box>
            </Split>
            <Box title={"Matrici quadrate"}>
                <P>
                    Se la funzione è un <B>automorfismo</B> (campo input = campo output), allora <LatexMath>{r`iniettivita' \Leftrightarrow suriettivita'`}</LatexMath>.
                </P>
            </Box>
            <Box title={"Somma diretta"}>
                <P>
                    Un sottospazio è <I>somma diretta</I> se i due sottospazi di cui viene fatta la somma <B>non hanno basi in comune</B>, e quindi <LatexMath>{r`dim(\pmb{U} \cap \pmb{W}) = 0`}</LatexMath>.
                </P>
            </Box>
            <Box title={"Trovare basi che diano una somma diretta"}>
                <P>
                    Per trovare basi che diano una somma diretta, è sufficiente <B>trovare basi linearmente indipendenti</B> con quelle che già abbiamo: solitamente parti della base canonica funzionano alla perfezione.
                </P>
            </Box>
        </article>
    )
}
