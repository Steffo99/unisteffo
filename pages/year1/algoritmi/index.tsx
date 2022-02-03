import { Heading, Chapter, Box, Idiomatic as I, Code, Anchor as A, Panel, BringAttention as B, ListOrdered, ListUnordered } from "@steffo/bluelib-react"
import type { NextPage } from "next"


const MaterialLi = ({children, file}) => {
    return <ListOrdered.Item>
        {children} (<A href={`/materials/year1/algoritmi/${file}.md`}><Code>.md</Code></A>)
    </ListOrdered.Item>
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
                            <MaterialLi file="01_IlNomeDelCorso">
                                Il nome del corso
                            </MaterialLi>
                            <MaterialLi file="02_EfficienzaDegliAlgoritmi">
                                Efficienza degli algoritmi
                            </MaterialLi>
                            <MaterialLi file="03_ModelliAlgoritmici">
                                Modelli algoritmici
                            </MaterialLi>
                            <MaterialLi file="04_NotazioneAsintotica">
                                Notazione asintotica
                            </MaterialLi>
                            <MaterialLi file="05_ProblemiAlgoritmici">
                                Problemi algoritmici
                            </MaterialLi>
                            <MaterialLi file="06_RicercaBinaria">
                                Ricerca binaria
                            </MaterialLi>
                            <MaterialLi file="07_DivideEtImpera">
                                Divide et impera
                            </MaterialLi>
                            <MaterialLi file="08_MasterTheorem">
                                Master theorem
                            </MaterialLi>
                            <MaterialLi file="09_MasterTheoremSubset">
                                Master theorem subset
                            </MaterialLi>
                            <MaterialLi file="10_Ordinamento">
                                Ordinamento
                            </MaterialLi>
                            <MaterialLi file="11_InsertionSort">
                                Insertion sort
                            </MaterialLi>
                            <MaterialLi file="11_MergeSort">
                                Merge sort
                            </MaterialLi>
                            <MaterialLi file="11_QuickSort">
                                Quick sort
                            </MaterialLi>
                            <MaterialLi file="12_CountingSort">
                                Counting sort
                            </MaterialLi>
                            <MaterialLi file="13_IntroAlleStruttureDati">
                                Introduzione alle strutture dati
                            </MaterialLi>
                            <MaterialLi file="14_Array">
                                Array
                            </MaterialLi>
                            <MaterialLi file="14_Lista">
                                Lista
                            </MaterialLi>
                            <MaterialLi file="15_Coda">
                                Coda
                            </MaterialLi>
                            <MaterialLi file="15_Pila">
                                Pila
                            </MaterialLi>
                            <MaterialLi file="16_AlberoRadicato">
                                Albero radicato
                            </MaterialLi>
                            <MaterialLi file="17_BreadthFirstSearch">
                                Breadth-first search
                            </MaterialLi>
                            <MaterialLi file="17_DepthFirstSearch">
                                Depth-first search
                            </MaterialLi>
                            <MaterialLi file="18_AlberoBinarioDiRicerca">
                                Albero binario di ricerca
                            </MaterialLi>
                            <MaterialLi file="19_HeapBinario">
                                Heap binario
                            </MaterialLi>
                            <MaterialLi file="20_CodaConPriorità">
                                Coda con priorità
                            </MaterialLi>
                            <MaterialLi file="20_HeapSort">
                                Heap sort
                            </MaterialLi>
                            <MaterialLi file="21_Grafo">
                                Grafo
                            </MaterialLi>
                            <MaterialLi file="22_VisitareUnGrafo">
                                Visitare un grafo
                            </MaterialLi>
                            <MaterialLi file="23_AlgoritmiGreedy">
                                Algoritmi greedy
                            </MaterialLi>
                            <MaterialLi file="24_PercorsoPiùBreve">
                                Percorso più breve
                            </MaterialLi>
                            <MaterialLi file="25_AlgoritmoDiDijkstra">
                                Algoritmo di Dijkstra
                            </MaterialLi>
                            <MaterialLi file="26_AlgoritmoDiBellmanFord">
                                Algoritmo di Bellman-Ford
                            </MaterialLi>
                            <MaterialLi file="27_DisjointSet">
                                Disjoint set
                            </MaterialLi>
                            <MaterialLi file="28_TrovareIlMST">
                                Trovare il minimum spanning tree
                            </MaterialLi>
                            <MaterialLi file="29_AlgoritmoDiKruskal">
                                Algoritmo di Kruskal
                            </MaterialLi>
                            <MaterialLi file="29_AlgoritmoDiPrim">
                                Algoritmo di Prim
                            </MaterialLi>
                            <MaterialLi file="30_Compressione">
                                Compressione
                            </MaterialLi>
                            <MaterialLi file="31_AlgoritmoDiHuffman">
                                Algoritmo di Huffman
                            </MaterialLi>
                            <MaterialLi file="32_Dizionari">
                                Dizionari
                            </MaterialLi>
                            <MaterialLi file="33_ProgrammazioneDinamica">
                                Programmazione dinamica
                            </MaterialLi>
                            <MaterialLi file="34_ProblemaDelloZaino">
                                Problema dello zaino
                            </MaterialLi>
                            <MaterialLi file="35_ProblemiIntrattabili">
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
