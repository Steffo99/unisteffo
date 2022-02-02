import { Heading, Chapter, Box, Idiomatic as I, Code, Anchor as A, Dialog, BringAttention as B, ListOrdered, ListUnordered} from '@steffo/bluelib-react'
import type { NextPage } from 'next'

const Algebra: NextPage = () => {
    return <>
        <Heading level={2}>
            Analisi matematica
        </Heading>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Introduzione
                </Heading>
                <p>
                    Ammetto di non aver seguito particolarmente il corso di <I>Algebra Lineare</I>.
                </p>
                <p>
                    Facevo molta fatica a seguire le lezioni del prof., quindi spesso facevo finta di seguire e mi mettevo a giocare a <A href="https://playhearthstone.com/" rel="nofollow">Hearthstone</A>...
                </p>
                <p>
                    Tuttavia, a casa ho sfruttato delle ottime videolezioni caricate dall'Unimore su YouTube per imparare quello che non avevo fatto in aula, con ottimi risultati: sono riuscito a passare l'esame al primo tentativo!
                </p>
            </Box>
        </Chapter>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Videolezioni usate
                </Heading>
                <Dialog builtinColor='blue'>
                    <B>Gennaio 2022:</B> Come sempre, Unimore ha fatto del suo meglio per ostacolare lo studio ai suoi studenti, e quindi ha reso tutte le videolezioni su YouTube private.<br/>
                    <small>Quelle su Vimeo ci sono ancora, però...</small>
                </Dialog>
                <ListOrdered>
                    <ListOrdered.Item>
                        <A>Definizione di Spazio Vettoriale</A> (1:17:29)
                    </ListOrdered.Item>
                    <ListOrdered.Item>
                        <A>Sottospazi vettoriali I</A> (37:15)
                    </ListOrdered.Item>
                    <ListOrdered.Item>
                        <A>Sottospazi vettoriali II</A> (43:26)
                    </ListOrdered.Item>
                    <ListOrdered.Item>
                        <A>Sottospazi vettoriali III</A> (40:29)
                    </ListOrdered.Item>
                    <ListOrdered.Item>
                        <A>Lineare dipendenza e indipendenza</A> (56:12)
                    </ListOrdered.Item>
                    <ListOrdered.Item>
                        <A>Basi di uno spazio vettoriale I</A> (25:52)
                    </ListOrdered.Item>
                    <ListOrdered.Item>
                        <A>Basi di uno spazio vettoriale II</A> (48:24)
                    </ListOrdered.Item>
                    <ListOrdered.Item>
                        <A>Teorema di Grassmann</A> (32:36)
                    </ListOrdered.Item>
                    <ListOrdered.Item>
                        <A>Basi e Matrici</A> (27:06)
                    </ListOrdered.Item>
                    <ListOrdered.Item>
                        <A>Definizione di Applicazioni Lineari</A> (16:23)
                    </ListOrdered.Item>
                    <ListOrdered.Item>
                        <A>Proprietà delle Applicazioni Lineari</A> (31:58)
                    </ListOrdered.Item>
                    <ListOrdered.Item>
                        <A>Definizione di determinante</A> (36:43)
                    </ListOrdered.Item>
                    <ListOrdered.Item>
                        <A>Proprietà e metodo di triangolazione</A> (22:36)
                    </ListOrdered.Item>
                    <ListOrdered.Item>
                        <A>Teorema di Laplace</A> (29:03)
                    </ListOrdered.Item>
                    <ListOrdered.Item>
                        <A>4 applicazioni del Teorema di Laplace</A> (47:53)
                    </ListOrdered.Item>
                    <ListOrdered.Item>
                        <A>Spazi vettoriali euclidei reali - Parte 1</A> (28:46)
                    </ListOrdered.Item>
                    <ListOrdered.Item>
                        <A>Spazi vettoriali euclidei reali - Parte 2</A> (27:17)
                    </ListOrdered.Item>
                    <ListOrdered.Item>
                        <A>Autovalori e autovettori</A> (33:00)
                    </ListOrdered.Item>
                    <ListOrdered.Item>
                        <A>Polinomio caratteristico</A> (31:31)
                    </ListOrdered.Item>
                    <ListOrdered.Item>
                        <A>Teorema diagonalizzabilità</A> (18:49)
                    </ListOrdered.Item>
                    <ListOrdered.Item>
                        <A href="https://player.vimeo.com/video/291457587">Spazi affini</A> (20:46)
                    </ListOrdered.Item>
                    <ListOrdered.Item>
                        <A href="https://player.vimeo.com/video/291458991">Sottospazi affini</A> (21:32)
                    </ListOrdered.Item>
                    <ListOrdered.Item>
                        <A href="https://player.vimeo.com/video/291510181">Parallelismo e Riferimenti Affini</A> (16:57)
                    </ListOrdered.Item>
                    <ListOrdered.Item>
                        <A href="https://player.vimeo.com/video/291510296">Rappresentazione di Sottospazi Affini</A> (31:17)
                    </ListOrdered.Item>
                    <ListOrdered.Item>
                        <A href="https://player.vimeo.com/video/291510612">Spazi Euclidei</A> (35:57)
                    </ListOrdered.Item>
                    <ListOrdered.Item>
                        <A href="https://player.vimeo.com/video/291510964">Teoria dei ranghi</A> (9:44)
                    </ListOrdered.Item>
                    <ListOrdered.Item>
                        <A href="https://player.vimeo.com/video/291510862">Teoria dei ranghi 2</A> (14:44)
                    </ListOrdered.Item>
                </ListOrdered>
            </Box>
        </Chapter>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Cheatsheet
                </Heading>
                <p>
                    Visto che all'esame era possibile utilizzare i propri appunti, ho realizzato un piccolo cheatsheet stampabile con tutti gli esercizi più comuni.
                </p>
                <ListUnordered>
                    <ListUnordered.Item>
                        Cheatsheet (<A href="/materials/year1/algebra/cheatsheet.tex"><Code>.tex</Code></A>, <A href="/materials/year1/algebra/cheatsheet.pdf"><Code>.pdf</Code></A>)
                    </ListUnordered.Item>
                </ListUnordered>
                <Dialog builtinColor='yellow'>
                    <B>Attenzione:</B> questi file non sono stati ricontrollati da quando sono stati scritti, e potrebbero contenere errori!<br/>
                    <small>Usali a tuo rischio e pericolo!</small>
                </Dialog>
            </Box>
        </Chapter>
    </>
}

export default Algebra
