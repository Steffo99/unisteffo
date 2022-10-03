import {Heading, Chapter, Box, ListUnordered, BringAttention as B, Idiomatic as I, UAnnotation as U, Parenthesis, Quote} from "@steffo/bluelib-react"
import type { NextPage, NextPageContext } from 'next'
import { Link } from '../../../components/link'
import 'katex/dist/katex.min.css';
import TeX from "@matejmazur/react-katex"
const r = String.raw

const X = () => <TeX math={r`\mathbb{X}`}/>
const Y = () => <TeX math={r`\mathbb{Y}`}/>

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
            <Box todo>
                <Heading level={3}>
                    Spazio vettoriale
                </Heading>
                <p>
                    <B>Struttura algebrica</B> che rappresenta una generalizzazione del concetto di "piano" e "spazio" dei piani cartesiani rispettivamente bi e tri-dimensionali.
                </p>
            </Box>
            <Box todo>
                <Heading level={3}>
                    Sottospazio vettoriale
                </Heading>
                <p>
                    <B>Spazio vettoriale</B> contenuto nello spazio vettoriale da cui deriva.
                </p>
                <Parenthesis>
                    In genere ne riduce le dimensioni.
                </Parenthesis>
            </Box>
            <Box todo>
                <Heading level={3}>
                    Varietà affine
                </Heading>
                <p>
                    Traslazione del sottospazio generato da un dato spazio <TeX math={r`s`}/> in un dato punto <TeX math={r`x_0`}/>
                </p>
                <p>
                    <TeX block math={r`x(\alpha) = x_0 + \alpha s`}/>
                </p>
                <Parenthesis>

                </Parenthesis>
            </Box>
        </Chapter>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Derivata direzionale unilaterale
                </Heading>
                <p>
                    Limite del rapporto incrementale in una <B>specifica dimensione</B> per uno spazio multidimensionale:
                </p>
                <p>
                    <TeX block math={r`f' (x_0; s) = \lim_{\alpha \to 0^+} \frac{f(x_0 + \alpha s) - f(x_0)}{\alpha}`}/>
                </p>
                <p>
                    Nell'altra direzione, diventa:
                </p>
                <p>
                    <TeX block math={r`{\color{Orange}-}f' (x_0; {\color{Orange}-}s) = \lim_{\alpha \to 0^{\color{Orange}-}} \frac{f(x_0 + \alpha s) - f(x_0)}{\alpha}`}/>
                </p>
            </Box>
            <Box todo>
                <Heading level={3}>
                    Derivata direzionale (bilaterale)
                </Heading>
                <p>
                    Se esistono entrambe le derivate direzionali unilaterali, allora possiamo dire che è bilaterale e che
                </p>
                <p>
                    <TeX block math={r`\frac{df(x_0; s)}{d\alpha} = f'(x_0; s) = -f'(x_0; -s)`}/>
                </p>
            </Box>
        </Chapter>
        <Chapter>
            <Box todo>
                <Heading level={3}>
                    Derivata parziale
                </Heading>
                <p>
                    Particolare <B>derivata direzionale</B> rispetto a un vettore della <B>base canonica</B>
                </p>
            </Box>
            <Box todo>
                <Heading level={3}>
                    Gradiente
                </Heading>
                <p>
                    Vettore contenenti tutte le derivate parziali di un altro vettore rispetto a ogni elemento della base canonica
                </p>
                <p>
                    <TeX block math={r`\nabla`}/>
                </p>
            </Box>
        </Chapter>
        <Chapter>
            <Box todo>
                <Heading level={3}>
                    Differenziabile
                </Heading>
                <p>
                    Funzione con un gradiente per ogni valore reale
                </p>
            </Box>
            <Box todo>
                <Heading level={3}>
                    Differenziabile con continuità
                </Heading>
                <p>
                    Funzione differenziabile con un gradiente continuo per ogni valore reale
                </p>
                <p>
                    Alias funzione regolare
                </p>
            </Box>
            <Box todo>
                <Heading level={3}>
                    Hessiana
                </Heading>
                <p>
                    <B>Matrice quadrata</B> di "doppie differenziazioni", praticamente l'equivalente matriciale della derivata seconda
                </p>
                <p>
                    Dà informazioni sulla curvatura, secondo ordine
                </p>
            </Box>
            <Box todo>
                <Heading level={3}>
                    Iacobiana
                </Heading>
                <p>
                    <B>Matrice quadrata</B>
                </p>
            </Box>
            <Box todo>
                <Heading level={3}>
                    Curvatura
                </Heading>
                <p>

                </p>
            </Box>
            <Box todo>
                <Heading level={3}>
                    Curva di livello
                </Heading>
            </Box>
        </Chapter>
    </>
}

export default Page
