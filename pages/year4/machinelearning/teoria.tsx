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
                Apprendimento
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
                            Training set
                        </Heading>
                        <p>
                            Insieme di associazioni su cui ci si basa per <B>creare</B> il modello matematico.
                        </p>
                        <Parenthesis>
                            Il codice di programmazione del modello!
                        </Parenthesis>
                    </Box>
                    <Box>
                        <Heading level={3}>
                            Validation set
                        </Heading>
                        <p>
                            Insieme di associazioni usate per <B>verificare</B> che il modello matematico sia <I>valido</I>.
                        </p>
                        <Parenthesis>
                            La Continuous Integration del modello!
                        </Parenthesis>
                    </Box>
                    <Box>
                        <Heading level={3}>
                            Testing set
                        </Heading>
                        <p>
                            Insieme di associazioni usate per <B>determinare l&apos;efficacia</B> del modello matematico.
                        </p>
                        <Parenthesis>
                            Il benchmark del modello!
                        </Parenthesis>
                    </Box>
                </Chapter>
            </Box>
        </Chapter>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Supervised learning
                </Heading>
                <p>
                    Quando <U builtinColor={"lime"}>si è a conoscenza</U> del dominio dello spazio di output <Y/>, il machine learning è detto <I>supervised learning</I>.
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
                    Quando <U builtinColor={"red"}>non si è a conoscenza</U> del dominio dello spazio di output <Y/>, il machine learning è detto <I>supervised learning</I>.
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
        <Chapter>
            <Heading level={2}>
                Ottimizzazione
            </Heading>
            <Box>
                <Heading level={3}>
                    Come un problema di ottimizzazione
                </Heading>
                <p>
                    Possiamo astrarre il machine learning come il seguente problema di ottimizzazione:
                </p>
                <p>
                    <TeX block math={r`\min_{f \in \mathcal{H}} \left( \quad  \sum_{i=1}^N \hspace{0.5em} V(y_i, f(x_i)) \quad + \quad \lambda \| f \|^2 \quad \right)`}/>
                </p>
                <Parenthesis>
                    <Quote>Trova la <B>funzione</B> che minimizza gli <B>errori sul training set</B> e la <B>complessità della funzione</B>, dando opzionalmente <B>priorità</B> a uno dei due addendi.</Quote>
                </Parenthesis>
            </Box>
        </Chapter>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Hypothesis space
                </Heading>
                <p>
                    <TeX block math={r`\mathcal{H}`}/>
                </p>
                <p>
                    <I>Spazio</I> delle <B>funzioni adatte</B> a descrivere la relazione tra input e output.
                </p>
            </Box>
            <Box>
                <Heading level={3}>
                    Loss function
                </Heading>
                <p>
                    <TeX block math={r`\sum_{i=1}^N \hspace{0.5em} V(y_i, f(x_i))`}/>
                </p>
                <p>
                    Funzione <u>predeterminata</u> che <B>determina l&apos;errore</B> del modello su un elemento del training set.
                </p>
            </Box>
            <Box>
                <Heading level={3}>
                    Complessità della funzione
                </Heading>
                <p>
                    <TeX block math={r`\| f \|^2`}/>
                </p>
                <Parenthesis todo>
                    Non ancora spiegato.
                </Parenthesis>
                <Parenthesis todo>
                    È la <I>norma a infinito al quadrato</I> o la <I>norma quadratica</I>?
                </Parenthesis>
            </Box>
            <Box>
                <Heading level={3}>
                    Priorità
                </Heading>
                <p>
                    <TeX block math={r`\lambda`}/>
                </p>
                <p>
                    Parametro moltiplicativo <U>predeterminato</U> che permette di selezionare quanta <B>importanza</B> dare agli errori sul training set rispetto alla complessità del modello.
                </p>
                <Parenthesis>
                    <p>
                        Se <U>minore</U> di 1, prioritizza gli errori.<br/>
                    </p>
                    <p>
                        Se <U>maggiore</U> di 1, prioritizza la semplicità.
                    </p>
                </Parenthesis>
                <Parenthesis>
                    <p>
                        Se troppo <U>basso</U>, il modello commette <B>overfitting</B>.
                    </p>
                    <p>
                        Se troppo <U>alto</U>, il modello <B>perde accuratezza</B>.
                    </p>
                </Parenthesis>
            </Box>
        </Chapter>
    </>
}

export default Page
