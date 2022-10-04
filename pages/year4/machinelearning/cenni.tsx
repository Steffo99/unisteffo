import {Heading, Chapter, Box, ListUnordered, BringAttention as B, Idiomatic as I, UAnnotation as U, Parenthesis} from "@steffo/bluelib-react"
import type { NextPage, NextPageContext } from 'next'
import { Link } from '../../../components/link'
import 'katex/dist/katex.min.css';
import TeX from "@matejmazur/react-katex"
const r = String.raw

export async function getStaticProps(_context: NextPageContext) {
    return {
        props: {}
    }
}

const Page: NextPage = () => {
    return <>
        <Heading level={2}>
            <Link href="/year4/machinelearning">
                Machine learning
            </Link>
        </Heading>
        <Chapter>
            <Heading level={2}>
                Analisi multivariata
            </Heading>
            <Box>
                <Heading level={3}>
                    Spazio vettoriale
                </Heading>
                <p>
                    <B>Insieme</B> di elementi che tra loro possono essere:
                </p>
                <ListUnordered>
                    <ListUnordered.Item>
                        <U>sommati</U>: <TeX math={r`\mathbf{a}+\mathbf{b}`}/>
                    </ListUnordered.Item>
                    <ListUnordered.Item>
                        <U>scalati</U>: <TeX math={r`\langle \mathbf{a}, \mathbf{b} \rangle`}/>
                    </ListUnordered.Item>
                </ListUnordered>
                <Parenthesis>
                    Rappresenta una generalizzazione dei concetti euclidei di <B>piano</B> (2D) e <B>spazio</B> (3D).
                </Parenthesis>
            </Box>
            <Box>
                <Heading level={3}>
                    Sottospazio vettoriale
                </Heading>
                <p>
                    <B>Sottoinsieme chiuso</B> di uno spazio vettoriale.
                </p>
                <p>
                    L'intersezione tra due sottospazi vettoriali è essa stessa un sottospazio vettoriale.
                </p>
            </Box>
            <Box>
                <Heading level={3}>
                    Varietà affine in <TeX math={r`\mathbb{R}^n`}/>
                </Heading>
                <p>
                    <B>Sottospazio vettoriale</B> generato da <TeX math={r`\mathbf{s}`}/> e traslato di <TeX math={r`\mathbf{x_0}`}/>:
                </p>
                <p>
                    <TeX block math={"\\mathrm{x}(\\alpha) = \\mathbf{x_0} + \\alpha s"}/>
                </p>
                <Parenthesis>
                    <p>
                        È l'astrazione di una <B>retta</B> euclidea in uno spazio vettoriale reale e multidimensionale.
                    </p>
                    <p>
                        Infatti, al variare di <TeX math={r`\alpha`}/>, il vettore <TeX math={r`\mathbf{x_0}`}/> contraendosi ed esapandendosi disegna una retta.
                    </p>
                </Parenthesis>
            </Box>
        </Chapter>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Derivata direzionale unilaterale
                </Heading>
                <p>
                    Limite del rapporto incrementale nella direzione <TeX math={r`\mathbf{s}`}/> per uno spazio multidimensionale:
                </p>
                <p>
                    <TeX block math={r`f' (\mathbf{x_0}; \mathbf{s}) = \lim_{\alpha \to 0^+} \frac{f(\mathbf{x_0} + \alpha \mathbf{s}) - f(\mathbf{x_0})}{\alpha}`}/>
                </p>
                <Parenthesis>
                    <p>
                        <TeX math={r`\mathbf{x_0}`}/> è il punto fermo su cui viene effettuato il limite, mentre <TeX math={r`\alpha \mathbf{s}`}/> è il vettore direzionale che viene scalato sempre più "in piccolo".
                    </p>
                </Parenthesis>
                <p>
                    Il suo <U>opposto</U> è:
                </p>
                <p>
                    <TeX block math={r`{\color{Orange}-}f' (\mathbf{x_0}; {\color{Orange}-}\mathbf{s}) = \lim_{\alpha \to 0^{\color{Orange}-}} \frac{f(\mathbf{x_0} + \alpha \mathbf{s}) - f(\mathbf{x_0})}{\alpha}`}/>
                </p>
            </Box>
            <Box>
                <Heading level={3}>
                    Derivata direzionale bilaterale
                </Heading>
                <p>
                    Se <B>esistono entrambe</B> le derivate direzionali unilaterali opposte per un dato punto e una data direzione, allora si ha una derivata direzionale <I>bilaterale</I>:
                </p>
                <p>
                    <TeX block math={r`\frac{df(\mathbf{x_0}; \mathbf{s})}{d\alpha} = f'(\mathbf{x_0}; \mathbf{s}) = -f'(\mathbf{x_0}; -\mathbf{s})`}/>
                </p>
            </Box>
        </Chapter>
        <Chapter>
            <Box>
                <Heading level={3}>
                    <TeX math={r`i`}/>-esima derivata parziale
                </Heading>
                <p>
                    <B>Derivata direzionale bilaterale</B> nella direzione dell'<TeX math={r`i`}/>-esimo vettore della <B>base canonica</B> <TeX math={r`\mathbf{e}`}/>:
                </p>
                <p>
                    <TeX block math={r`\frac{{\color{Orange}\delta}f(\mathbf{x_0}; {\color{Orange}\mathbf{e_i}})}{{\color{Orange}\delta}\alpha} = f'(\mathbf{x_0}; {\color{Orange}\mathbf{e_i}}) = -f'(\mathbf{x_0}; -{\color{Orange}\mathbf{e_i}})`}/>
                </p>
                <Parenthesis>
                    <p>
                        Ovvero la pendenza lungo uno degli <B>assi</B>.
                    </p>
                </Parenthesis>
            </Box>
            <Box>
                <Heading level={3}>
                    Gradiente
                </Heading>
                <p>
                    <B>Vettore</B> contenenti tutte le derivate parziali di una funzione rispetto a ogni elemento della base canonica:
                </p>
                <p>
                    <TeX block math={r`\nabla f(x_0) = \left( \begin{matrix} 
                        \frac{\delta f( \mathbf{x_0}; \mathbf{e_{\color{Orange}0}} )}{\delta \alpha} \\
                        \\
                        \frac{\delta f( \mathbf{x_0}; \mathbf{e_{\color{Orange}1}} )}{\delta \alpha} \\
                        \\
                        \vdots \\
                        \\
                        \frac{\delta f( \mathbf{x_0}; \mathbf{e_{\color{Orange}n}} )}{\delta \alpha}
                    \end{matrix} \right)`}/>
                </p>
                <p>
                    Se il gradiente <B>esiste</B>, allora la funzione è <B>differenziabile</B> in <TeX math={r`\mathbf{x_0}`}/>.
                </p>
                <p>
                    Se il gradiente è <B>continuo</B>, allora la funzione è <B>regolare</B> in <TeX math={r`\mathbf{x_0}`}/>.
                </p>
            </Box>
        </Chapter>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Hessiana
                </Heading>
                <Parenthesis todo>
                    Migliorare la definizione.
                </Parenthesis>
                <p>
                    <B>Matrice quadrata</B> che applica alla derivata parziale un'altra derivata parziale:
                </p>
                <p>
                    <TeX block math={r`H(x) = \nabla^2 f(\mathbf{x}) = \left( \begin{matrix} 
                        \frac{\delta f(\mathbf{x}) }{\delta x_{{\color{Orange} 1}} x_{{\color{Orange} 1}}} &
                        \frac{\delta f(\mathbf{x}) }{\delta x_{{\color{Orange} 1}} x_{{\color{Orange} 2}}} &
                        \dots &
                        \frac{\delta f(\mathbf{x}) }{\delta x_{{\color{Orange} 1}} x_{{\color{Orange} n}}} \\
                        \\
                        \frac{\delta f(\mathbf{x}) }{\delta x_{{\color{Orange} 2}} x_{{\color{Orange} 1}}} &
                        \frac{\delta f(\mathbf{x}) }{\delta x_{{\color{Orange} 2}} x_{{\color{Orange} 2}}} &
                        \dots &
                        \frac{\delta f(\mathbf{x}) }{\delta x_{{\color{Orange} 2}} x_{{\color{Orange} n}}} \\
                        \\
                        \vdots &
                        \vdots &
                        \ddots &
                        \vdots \\
                        \\
                        \frac{\delta f(\mathbf{x}) }{\delta x_{{\color{Orange} n}} x_{{\color{Orange} 1}}} &
                        \frac{\delta f(\mathbf{x}) }{\delta x_{{\color{Orange} n}} x_{{\color{Orange} 2}}} &
                        \dots &
                        \frac{\delta f(\mathbf{x}) }{\delta x_{{\color{Orange} n}} x_{{\color{Orange} n}}} &
                    \end{matrix} \right)`}/>
                </p>
                <p>
                    Dà informazioni sulla <B>curvatura</B>.
                </p>
                <Parenthesis>
                    <p>
                        L'astrazione multidimensionale della <B>derivata seconda</B>.
                    </p>
                </Parenthesis>
            </Box>
            <Box>
                <Heading level={3}>
                    Iacobiana
                </Heading>
                <p>
                    In una funzione che <B>restituisce vettori</B>, è una <B>matrice quadrata</B> costituita dal gradiente nei confronti di ogni elemento del vettore restituito:
                </p>
                <p>
                    <TeX block math={r`J_f(x) = \nabla f(\mathbf{x})^{T} = \left( \begin{matrix} 
                        \frac{\delta f_{{\color{Orange} 1}}(\mathbf{x}) }{\delta x_{{\color{Orange} 1}}} &
                        \frac{\delta f_{{\color{Orange} 1}}(\mathbf{x}) }{\delta x_{{\color{Orange} 2}}} &
                        \dots &
                        \frac{\delta f_{{\color{Orange} 1}}(\mathbf{x}) }{\delta x_{{\color{Orange} n}}} \\
                        \\
                        \frac{\delta f_{{\color{Orange} 2}}(\mathbf{x}) }{\delta x_{{\color{Orange} 1}}} &
                        \frac{\delta f_{{\color{Orange} 2}}(\mathbf{x}) }{\delta x_{{\color{Orange} 2}}} &
                        \dots &
                        \frac{\delta f_{{\color{Orange} 2}}(\mathbf{x}) }{\delta x_{{\color{Orange} n}}} \\
                        \\
                        \vdots &
                        \vdots &
                        \ddots &
                        \vdots \\
                        \\
                        \frac{\delta f_{{\color{Orange} m}}(\mathbf{x}) }{\delta x_{{\color{Orange} 1}}} &
                        \frac{\delta f_{{\color{Orange} m}}(\mathbf{x}) }{\delta x_{{\color{Orange} 1}}} &
                        \dots &
                        \frac{\delta f_{{\color{Orange} m}}(\mathbf{x}) }{\delta x_{{\color{Orange} 1}}}
                    \end{matrix} \right)`}/>
                </p>
            </Box>
        </Chapter>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Calcolo dell'inclinazione
                </Heading>
                <p>
                    Usando le proprietà della moltiplicazione matriciale, la <B>direzione</B> <TeX math={r`\mathbf{s}`}/> che ci interessa e il <B>gradiente</B> <TeX math={r`\nabla`}/>, possiamo trovare in modo semplice tutte le derivate direzionali, l'<I>inclinazione</I> della funzione:
                </p>
                <p>
                    <TeX block math={r`s^T {\color{Orange} \nabla f(x(\alpha))} = s^T {\color{Orange}g}`}/>
                </p>
            </Box>
            <Box>
                <Heading level={3}>
                    Calcolo della curvatura
                </Heading>
                <p>
                    Come per l'inclinazione, sfruttando la <B>direzione</B> <TeX math={r`\mathbf{s}`}/> che ci interessa e l'<B>Hessiana</B> <TeX math={"\nabla^2 f(x(\alpha))"}/>, possiamo trovare in modo semplice tutte le derivate seconde, la <I>curvatura</I> della funzione:
                </p>
                <p>
                    <TeX block math={r`s^T {\color{Orange}\nabla^2 f(x(\alpha))} s = s^T {\color{Orange}H} s`}/>
                </p>
            </Box>
        </Chapter>
    </>
}

export default Page
