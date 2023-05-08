import { Heading, Chapter, Box, Idiomatic as I, Code, Anchor as A, Panel, BringAttention as B, ListOrdered, ListUnordered } from "@steffo/bluelib-react"
import type { NextPage, NextPageContext } from "next"
import { MaterialLi } from "../../../components/materialLi"


export async function getStaticProps(_context: NextPageContext) {
    return {
        props: {}
    }
}


const Page: NextPage = () => {
    return <>
        <Heading level={2}>
            Algoritmi e strutture dati
        </Heading>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Premessa
                </Heading>
                <p>
                    Il corso di <I>Algoritmi e strutture dati</I> è stato piuttosto impegnativo ma al tempo stesso interessante: quasi tutti i concetti mi erano nuovi, e di conseguenza ho imparato un sacco!
                </p>
            </Box>
        </Chapter>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Materiale raccolto
                </Heading>
                <p>
                    Tutto il materiale che ho realizzato per il corso è in formato Markdown esteso con espressioni matematiche TeX.
                </p>
                <Chapter>
                    <Panel>
                        <Heading level={4}>
                            Appunti di teoria
                        </Heading>
                        <ListOrdered>
                            <MaterialLi base="/materials/year1/algoritmi" md="01_IlNomeDelCorso">
                                Il nome del corso
                            </MaterialLi>
                            <MaterialLi base="/materials/year1/algoritmi" md="02_EfficienzaDegliAlgoritmi">
                                Efficienza degli algoritmi
                            </MaterialLi>
                            <MaterialLi base="/materials/year1/algoritmi" md="03_ModelliAlgoritmici">
                                Modelli algoritmici
                            </MaterialLi>
                            <MaterialLi base="/materials/year1/algoritmi" md="04_NotazioneAsintotica">
                                Notazione asintotica
                            </MaterialLi>
                            <MaterialLi base="/materials/year1/algoritmi" md="05_ProblemiAlgoritmici">
                                Problemi algoritmici
                            </MaterialLi>
                            <MaterialLi base="/materials/year1/algoritmi" md="06_RicercaBinaria">
                                Ricerca binaria
                            </MaterialLi>
                            <MaterialLi base="/materials/year1/algoritmi" md="07_DivideEtImpera">
                                Divide et impera
                            </MaterialLi>
                            <MaterialLi base="/materials/year1/algoritmi" md="08_MasterTheorem">
                                Master theorem
                            </MaterialLi>
                            <MaterialLi base="/materials/year1/algoritmi" md="09_MasterTheoremSubset">
                                Master theorem subset
                            </MaterialLi>
                            <MaterialLi base="/materials/year1/algoritmi" md="10_Ordinamento">
                                Ordinamento
                            </MaterialLi>
                            <MaterialLi base="/materials/year1/algoritmi" md="11_InsertionSort">
                                Insertion sort
                            </MaterialLi>
                            <MaterialLi base="/materials/year1/algoritmi" md="11_MergeSort">
                                Merge sort
                            </MaterialLi>
                            <MaterialLi base="/materials/year1/algoritmi" md="11_QuickSort">
                                Quick sort
                            </MaterialLi>
                            <MaterialLi base="/materials/year1/algoritmi" md="12_CountingSort">
                                Counting sort
                            </MaterialLi>
                            <MaterialLi base="/materials/year1/algoritmi" md="13_IntroAlleStruttureDati">
                                Introduzione alle strutture dati
                            </MaterialLi>
                            <MaterialLi base="/materials/year1/algoritmi" md="14_Array">
                                Array
                            </MaterialLi>
                            <MaterialLi base="/materials/year1/algoritmi" md="14_Lista">
                                Lista
                            </MaterialLi>
                            <MaterialLi base="/materials/year1/algoritmi" md="15_Coda">
                                Coda
                            </MaterialLi>
                            <MaterialLi base="/materials/year1/algoritmi" md="15_Pila">
                                Pila
                            </MaterialLi>
                            <MaterialLi base="/materials/year1/algoritmi" md="16_AlberoRadicato">
                                Albero radicato
                            </MaterialLi>
                            <MaterialLi base="/materials/year1/algoritmi" md="17_BreadthFirstSearch">
                                Breadth-first search
                            </MaterialLi>
                            <MaterialLi base="/materials/year1/algoritmi" md="17_DepthFirstSearch">
                                Depth-first search
                            </MaterialLi>
                            <MaterialLi base="/materials/year1/algoritmi" md="18_AlberoBinarioDiRicerca">
                                Albero binario di ricerca
                            </MaterialLi>
                            <MaterialLi base="/materials/year1/algoritmi" md="19_HeapBinario">
                                Heap binario
                            </MaterialLi>
                            <MaterialLi base="/materials/year1/algoritmi" md="20_CodaConPriorità">
                                Coda con priorità
                            </MaterialLi>
                            <MaterialLi base="/materials/year1/algoritmi" md="20_HeapSort">
                                Heap sort
                            </MaterialLi>
                            <MaterialLi base="/materials/year1/algoritmi" md="21_Grafo">
                                Grafo
                            </MaterialLi>
                            <MaterialLi base="/materials/year1/algoritmi" md="22_VisitareUnGrafo">
                                Visitare un grafo
                            </MaterialLi>
                            <MaterialLi base="/materials/year1/algoritmi" md="23_AlgoritmiGreedy">
                                Algoritmi greedy
                            </MaterialLi>
                            <MaterialLi base="/materials/year1/algoritmi" md="24_PercorsoPiùBreve">
                                Percorso più breve
                            </MaterialLi>
                            <MaterialLi base="/materials/year1/algoritmi" md="25_AlgoritmoDiDijkstra">
                                Algoritmo di Dijkstra
                            </MaterialLi>
                            <MaterialLi base="/materials/year1/algoritmi" md="26_AlgoritmoDiBellmanFord">
                                Algoritmo di Bellman-Ford
                            </MaterialLi>
                            <MaterialLi base="/materials/year1/algoritmi" md="27_DisjointSet">
                                Disjoint set
                            </MaterialLi>
                            <MaterialLi base="/materials/year1/algoritmi" md="28_TrovareIlMST">
                                Trovare il minimum spanning tree
                            </MaterialLi>
                            <MaterialLi base="/materials/year1/algoritmi" md="29_AlgoritmoDiKruskal">
                                Algoritmo di Kruskal
                            </MaterialLi>
                            <MaterialLi base="/materials/year1/algoritmi" md="29_AlgoritmoDiPrim">
                                Algoritmo di Prim
                            </MaterialLi>
                            <MaterialLi base="/materials/year1/algoritmi" md="30_Compressione">
                                Compressione
                            </MaterialLi>
                            <MaterialLi base="/materials/year1/algoritmi" md="31_AlgoritmoDiHuffman">
                                Algoritmo di Huffman
                            </MaterialLi>
                            <MaterialLi base="/materials/year1/algoritmi" md="32_Dizionari">
                                Dizionari
                            </MaterialLi>
                            <MaterialLi base="/materials/year1/algoritmi" md="33_ProgrammazioneDinamica">
                                Programmazione dinamica
                            </MaterialLi>
                            <MaterialLi base="/materials/year1/algoritmi" md="34_ProblemaDelloZaino">
                                Problema dello zaino
                            </MaterialLi>
                            <MaterialLi base="/materials/year1/algoritmi" md="35_ProblemiIntrattabili">
                                Problemi intrattabili
                            </MaterialLi>
                        </ListOrdered>
                    </Panel>
                </Chapter>
            </Box>
        </Chapter>
    </>
}

export default Page
