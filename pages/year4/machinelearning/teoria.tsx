import {Heading, Chapter, Box, ListUnordered, BringAttention as B, Idiomatic as I} from "@steffo/bluelib-react"
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
            <Heading level={3}>
                Concetto base
            </Heading>
            <Box>
                <Heading level={3}>
                    Machine learning
                </Heading>
                <p>
                    L&apos;obiettivo del <i>machine learning</i> è quello di costruire un <B>modello matematico</B> in grado di associare tutti i valori di uno spazio di input <X/> a quelli di un altro spazio di output <Y/>.
                </p>
                <p>
                    <TeX block math={r`F: \mathbb{X} → \mathbb{Y}`}/>
                </p>
                <p>
                    Per costruire il modello, usano <B>insiemi di associazioni</B> tra un <B>vettore di input</B> <TeX math={r`\mathbf{x} \in \mathbb{X}`}/> e un <B>risultato di output</B> <TeX math={r`y \in \mathbb{Y}`}/>:
                </p>
                <p>
                    <TeX block math={r`D = { ( \mathbf{x}_i, y_i ), i = 1, \dots, N, \mathbf{x}_i \in {X}, y_i \in {Y} }`}/>
                </p>
                <Chapter>
                    <Box>
                        <Heading level={3}>
                            Supervised learning
                        </Heading>
                        <p>
                            Quando <B>si è a conoscenza</B> del dominio dello spazio di output <Y/>, il machine learning è detto <I>supervised learning</I>.
                        </p>
                        <p>
                            In particolare, i problemi risolti in questo caso sono detti:
                        </p>
                        <ListUnordered>
                            <ListUnordered.Item>
                                <I>Problemi di <B>binary classification</B></I> se <TeX math={r`\mathbb{Y} = \{ +1, -1 \}`}/>
                            </ListUnordered.Item>
                            <ListUnordered.Item>
                                <I>Problemi di <B>multi-class classification</B></I> se <TeX math={r`\mathbb{Y} = \{ 0, 1, \dots, n \}`}/>
                            </ListUnordered.Item>
                            <ListUnordered.Item>
                                <I>Problemi di <B>regression</B></I> se <TeX math={r`\mathbb{Y} = \{ 0, 1, \dots, n \}`}/>
                            </ListUnordered.Item>
                        </ListUnordered>
                    </Box>
                    <Box>
                        <Heading level={3}>
                            Unsupervised learning
                        </Heading>
                        <p>
                            Quando <B>non si è a conoscenza</B> del dominio dello spazio di output <Y/>, il machine learning è detto <I>supervised learning</I>.
                        </p>
                        <p>
                            In particolare, i problemi risolti in questo caso sono detti:
                        </p>
                        <ListUnordered>
                            <ListUnordered.Item>
                                <I>Problemi di <B>novelty detection</B></I> se si cerca di capire se qualcosa è simile o nuovo rispetto agli elementi precedenti
                            </ListUnordered.Item>
                            <ListUnordered.Item>
                                <I>Problemi di <B>clustering</B></I> se si cerca di trovare gruppi a cui potrebbero appartenere gli elementi
                            </ListUnordered.Item>
                        </ListUnordered>
                    </Box>
                </Chapter>
            </Box>
        </Chapter>
        <Chapter>
            <Box todo>
                <Heading level={3}>
                    Come un problema di ottimizzazione
                </Heading>
                <p>
                    Possiamo astrarre il machine learning come il seguente problema di ottimizzazione di <B>minimizzazione dell&apos;errore</B>:
                </p>
                <p>
                    <TeX block math={r`\min_{f \in H} \quad \sum_{i=1}^N \quad V(y_i, f(x_i)) \quad + \quad \lambda \| f \|^2`}/>
                </p>
                <Chapter>
                    <Box todo>
                        <Heading level={3}>
                            Loss function
                        </Heading>
                    </Box>
                    <Box todo>
                        <Heading level={3}>
                            Complessità della funzione
                        </Heading>
                    </Box>
                </Chapter>
            </Box>
        </Chapter>
    </>
}

export default Page
