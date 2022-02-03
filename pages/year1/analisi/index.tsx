import { Heading, Chapter, Box, Idiomatic as I, Code, Anchor as A, ListOrdered, ListUnordered, Panel} from '@steffo/bluelib-react'
import type { NextPage } from 'next'
import { Link } from '../../../components/compat-old'

const MaterialLi = ({children, file}) => {
    return <ListOrdered.Item>
        {children} (<Link href={`/materials/year1/analisi/${file}.tex`}><Code>.tex</Code></Link>, <Link href={`/materials/year1/analisi/${file}.pdf`}><Code>.pdf</Code></Link>)
    </ListOrdered.Item>
}

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
                    Ho adorato il corso di <I>Analisi matematica</I>.
                </p>
                <p>
                    La prof. Eleuteri è stata un&apos;'inizio fantastico alla mia carriera universitaria!<br/>
                    Tutti i corsi dovrebbero avere docenti altrettanto disponibili...
                </p>
            </Box>
        </Chapter>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Materiale raccolto
                </Heading>
                <p>
                    Durante il corso, mi sono interessato al <a href="https://it.wikipedia.org/wiki/LaTeX">LaTeX</a>, e per impararlo l'ho utilizzato per prendere appunti in aula.
                </p>
                <p>
                    Di conseguenza, tutte le dispense che ho realizzato per questo corso sono in formato <Code>.tex</Code> e <Code>.pdf</Code>.
                </p>
                <Chapter>
                    <Panel>
                        <Heading level={4}>
                            Appunti di teoria
                        </Heading>
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
                    </Panel>
                    <Panel>
                        <Heading level={4}>
                            Appunti extra per l&apos;orale
                        </Heading>
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
                    </Panel>
                </Chapter>
            </Box>
        </Chapter>
    </>
}

export default Page
