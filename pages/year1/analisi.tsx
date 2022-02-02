import { Heading, Chapter, Box, Idiomatic as I, Code, Anchor as A, Dialog, BringAttention as B, ListOrdered, ListUnordered} from '@steffo/bluelib-react'
import type { NextPage } from 'next'

const MaterialLi = ({children, file}) => {
    return <ListOrdered.Item>
        {children} (<A href={`/materials/year1/analisi/${file}.tex`}><Code>.tex</Code></A>, <A href={`/materials/year1/analisi/${file}.pdf`}><Code>.pdf</Code></A>)
    </ListOrdered.Item>
}

const Analisi: NextPage = () => {
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
                    Ho adorato il corso di <I>Analisi matematica</I>.<br/>
                    La prof. Eleuteri è stata un&apos;introduzione fantastica al mondo dell&apos;università: chiara, disponibile e giusta.<br/>
                    Avrei voluto che tutti i corsi fossero stati così...
                </p>
                <p>
                    Durante il corso, mi sono interessato al <a href="https://it.wikipedia.org/wiki/LaTeX">LaTeX</a>, e per impararlo mi sono messo ad utilizzarlo per prendere appunti in aula.
                </p>
                <p>
                    Di conseguenza, tutte le dispense che ho realizzato sono in formato <Code>.tex</Code>, o in versione compilata in formato <Code>.pdf</Code>.
                </p>
            </Box>
        </Chapter>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Materiale realizzato
                </Heading>
                <p>
                    Ho cercato di riordinare gli appunti in base a come ricordo fosse ordinato il programma. Spero di non essermi sbagliato!
                </p>
                <ListOrdered>
                    <MaterialLi file="1_sottosuccessioni">
                        Sottosuccessioni
                    </MaterialLi>
                    <MaterialLi file="2_successioni_per_ricorrenza">
                        Successioni per ricorrenza
                    </MaterialLi>
                    <MaterialLi file="3_intorni_e_asintoti">
                        Intorni e asintoti
                    </MaterialLi>
                    <MaterialLi file="4_limiti">
                        Limiti
                    </MaterialLi>
                    <MaterialLi file="5_derivate">
                        Derivate
                    </MaterialLi>
                    <MaterialLi file="6_punti_di_estremo">
                        Punti di estremo
                    </MaterialLi>
                    <MaterialLi file="7_studio_di_funzione">
                        Studio di funzione
                    </MaterialLi>
                    <MaterialLi file="8_serie">
                        Serie
                    </MaterialLi>
                    <MaterialLi file="9_numeri_complessi">
                        Numeri complessi
                    </MaterialLi>
                    <MaterialLi file="10_equazioni_complessi">
                        Equazioni di numeri complessi
                    </MaterialLi>
                    <MaterialLi file="11_primitive">
                        Integrali e primitive
                    </MaterialLi>
                    <MaterialLi file="12_integrazione">
                        Integrazione
                    </MaterialLi>
                </ListOrdered>
                <p>
                    Questi sono materiali extra utili per preparare l&apos;orale.
                </p>
                <ListUnordered>
                    <MaterialLi file="X_weierstrass">
                        Teorema di Weierstrass
                    </MaterialLi>
                    <MaterialLi file="X_teoremiprincipali">
                        I 10 teoremi principali
                    </MaterialLi>
                    <ListUnordered.Item>
                        Successioni (<A href={`/materials/year1/analisi/X_successioni.md`}><Code>.md</Code></A>)
                    </ListUnordered.Item>
                </ListUnordered>
                <Dialog builtinColor='yellow'>
                    <B>Attenzione:</B> questi file non sono stati ricontrollati da quando sono stati scritti, e potrebbero contenere errori!<br/>
                    <small>Usali a tuo rischio e pericolo!</small>
                </Dialog>
                <Dialog builtinColor='yellow'>
                    <B>Attenzione:</B> questi file sono incompleti, e non sono quindi sufficienti per dare l&apos;esame!<br/>
                    <small>Studia sul materiale, e poi usa questi per verificare quello che hai studiato.</small>
                </Dialog>
            </Box>
        </Chapter>
    </>
}

export default Analisi
