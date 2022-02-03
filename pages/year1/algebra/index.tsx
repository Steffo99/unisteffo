import { Heading, Chapter, Box, Idiomatic as I, Code, Anchor as A, ListOrdered, ListUnordered, Panel} from '@steffo/bluelib-react'
import type { NextPage } from 'next'
import { Link } from '../../../components/compat-next'
import * as Warnings from "../../../components/warnings"

const Page: NextPage = () => {
    return <>
        <Heading level={2}>
            Analisi matematica
        </Heading>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Premessa
                </Heading>
                <p>
                    Ammetto di non aver seguito particolarmente le lezioni del corso di <I>Algebra Lineare</I>.
                </p>
                <p>
                    Facevo molta fatica a stare attento, in quanto il prof. era parecchio ripetitivo, quindi spesso facevo finta di seguire e mi mettevo a giocare con il mio smartphone...
                </p>
            </Box>
        </Chapter>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Materiale raccolto
                </Heading>
                <p>
                    Per recuperare tutto quello che mi ero perso in aula ho sfruttato alcune videolezioni pubblicate su YouTube da Unimore, con ottimi risultati: sono riuscito a passare l&apos;esame al primo tentativo!
                </p>
                <p>
                    Inoltre, visto che all&apos;esame era possibile utilizzare i propri appunti, ho realizzato un piccolo cheatsheet stampabile con tutti gli esercizi più comuni.
                </p>
                <Chapter>
                    <Panel>
                        <Heading level={4}>
                            Videolezioni dell'Unimore
                        </Heading>
                        <Warnings.Blocked/>
                        <ListOrdered>
                            <ListOrdered.Item disabled>
                                Definizione di Spazio Vettoriale (1:17:29)
                            </ListOrdered.Item>
                            <ListOrdered.Item disabled>
                                Sottospazi vettoriali I (37:15)
                            </ListOrdered.Item>
                            <ListOrdered.Item disabled>
                                Sottospazi vettoriali II (43:26)
                            </ListOrdered.Item>
                            <ListOrdered.Item disabled>
                                Sottospazi vettoriali III (40:29)
                            </ListOrdered.Item>
                            <ListOrdered.Item disabled>
                                Lineare dipendenza e indipendenza (56:12)
                            </ListOrdered.Item>
                            <ListOrdered.Item disabled>
                                Basi di uno spazio vettoriale I (25:52)
                            </ListOrdered.Item>
                            <ListOrdered.Item disabled>
                                Basi di uno spazio vettoriale II (48:24)
                            </ListOrdered.Item>
                            <ListOrdered.Item disabled>
                                Teorema di Grassmann (32:36)
                            </ListOrdered.Item>
                            <ListOrdered.Item disabled>
                                Basi e Matrici (27:06)
                            </ListOrdered.Item>
                            <ListOrdered.Item disabled>
                                Definizione di Applicazioni Lineari (16:23)
                            </ListOrdered.Item>
                            <ListOrdered.Item disabled>
                                Proprietà delle Applicazioni Lineari (31:58)
                            </ListOrdered.Item>
                            <ListOrdered.Item disabled>
                                Definizione di determinante (36:43)
                            </ListOrdered.Item>
                            <ListOrdered.Item disabled>
                                Proprietà e metodo di triangolazione (22:36)
                            </ListOrdered.Item>
                            <ListOrdered.Item disabled>
                                Teorema di Laplace (29:03)
                            </ListOrdered.Item>
                            <ListOrdered.Item disabled>
                                4 applicazioni del Teorema di Laplace (47:53)
                            </ListOrdered.Item>
                            <ListOrdered.Item disabled>
                                Spazi vettoriali euclidei reali - Parte 1 (28:46)
                            </ListOrdered.Item>
                            <ListOrdered.Item disabled>
                                Spazi vettoriali euclidei reali - Parte 2 (27:17)
                            </ListOrdered.Item>
                            <ListOrdered.Item disabled>
                                Autovalori e autovettori (33:00)
                            </ListOrdered.Item>
                            <ListOrdered.Item disabled>
                                Polinomio caratteristico (31:31)
                            </ListOrdered.Item>
                            <ListOrdered.Item disabled>
                                Teorema diagonalizzabilità (18:49)
                            </ListOrdered.Item>
                            <ListOrdered.Item>
                                <Link href="https://player.vimeo.com/video/291457587">Spazi affini</Link> (20:46)
                            </ListOrdered.Item>
                            <ListOrdered.Item>
                                <Link href="https://player.vimeo.com/video/291458991">Sottospazi affini</Link> (21:32)
                            </ListOrdered.Item>
                            <ListOrdered.Item>
                                <Link href="https://player.vimeo.com/video/291510181">Parallelismo e Riferimenti Affini</Link> (16:57)
                            </ListOrdered.Item>
                            <ListOrdered.Item>
                                <Link href="https://player.vimeo.com/video/291510296">Rappresentazione di Sottospazi Affini</Link> (31:17)
                            </ListOrdered.Item>
                            <ListOrdered.Item>
                                <Link href="https://player.vimeo.com/video/291510612">Spazi Euclidei</Link> (35:57)
                            </ListOrdered.Item>
                            <ListOrdered.Item>
                                <Link href="https://player.vimeo.com/video/291510964">Teoria dei ranghi</Link> (9:44)
                            </ListOrdered.Item>
                            <ListOrdered.Item>
                                <Link href="https://player.vimeo.com/video/291510862">Teoria dei ranghi 2</Link> (14:44)
                            </ListOrdered.Item>
                        </ListOrdered>
                    </Panel>
                    <Panel>
                        <Heading level={3}>
                            Appunti per l'esame
                        </Heading>
                        <ListUnordered>
                            <ListUnordered.Item>
                                Cheatsheet (<Link href="/materials/year1/algebra/cheatsheet.tex"><Code>.tex</Code></Link>, <Link href="/materials/year1/algebra/cheatsheet.pdf"><Code>.pdf</Code></Link>)
                            </ListUnordered.Item>
                        </ListUnordered>
                    </Panel>
                </Chapter>
            </Box>
        </Chapter>
    </>
}

export default Page
