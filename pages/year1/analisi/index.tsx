import { Heading, Chapter, Box, Idiomatic as I, Code, Anchor as A, ListOrdered, ListUnordered, Panel} from '@steffo/bluelib-react'
import type { NextPage } from 'next'
import { MaterialLi } from '../../../components/materialLi'


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
                    La prof. Eleuteri è stata un&apos;inizio fantastico alla mia carriera universitaria!<br/>
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
                    Durante il corso, mi sono interessato al <a href="https://it.wikipedia.org/wiki/LaTeX">LaTeX</a>, e per impararlo l&apos;ho utilizzato per prendere appunti in aula.
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
                            <MaterialLi base="/materials/year1/analisi" tex="1_sottosuccessioni" pdf="1_sottosuccessioni">
                                Sottosuccessioni
                            </MaterialLi>
                            <MaterialLi base="/materials/year1/analisi" tex="2_successioni_per_ricorrenza" pdf="2_successioni_per_ricorrenza">
                                Successioni per ricorrenza
                            </MaterialLi>
                            <MaterialLi base="/materials/year1/analisi" tex="3_intorni_e_asintoti" pdf="3_intorni_e_asintoti">
                                Intorni e asintoti
                            </MaterialLi>
                            <MaterialLi base="/materials/year1/analisi" tex="4_limiti" pdf="4_limiti">
                                Limiti
                            </MaterialLi>
                            <MaterialLi base="/materials/year1/analisi" tex="5_derivate" pdf="5_derivate">
                                Derivate
                            </MaterialLi>
                            <MaterialLi base="/materials/year1/analisi" tex="6_punti_di_estremo" pdf="6_punti_di_estremo">
                                Punti di estremo
                            </MaterialLi>
                            <MaterialLi base="/materials/year1/analisi" tex="7_studio_di_funzione" pdf="7_studio_di_funzione">
                                Studio di funzione
                            </MaterialLi>
                            <MaterialLi base="/materials/year1/analisi" tex="8_serie" pdf="8_serie">
                                Serie
                            </MaterialLi>
                            <MaterialLi base="/materials/year1/analisi" tex="9_numeri_complessi" pdf="9_numeri_complessi">
                                Numeri complessi
                            </MaterialLi>
                            <MaterialLi base="/materials/year1/analisi" tex="10_equazioni_complessi" pdf="10_equazioni_complessi">
                                Equazioni di numeri complessi
                            </MaterialLi>
                            <MaterialLi base="/materials/year1/analisi" tex="11_primitive" pdf="11_primitive">
                                Integrali e primitive
                            </MaterialLi>
                            <MaterialLi base="/materials/year1/analisi" tex="12_integrazione" pdf="12_integrazione">
                                Integrazione
                            </MaterialLi>
                        </ListOrdered>
                    </Panel>
                    <Panel>
                        <Heading level={4}>
                            Appunti extra per l&apos;orale
                        </Heading>
                        <ListUnordered>
                            <MaterialLi base="/materials/year1/analisi" tex="X_weierstrass" pdf="X_weierstrass">
                                Teorema di Weierstrass
                            </MaterialLi>
                            <MaterialLi base="/materials/year1/analisi" tex="X_teoremiprincipali" pdf="X_teoremiprincipali">
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
