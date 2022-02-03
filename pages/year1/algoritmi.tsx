import { Heading, Chapter, Box, Idiomatic as I, Code, Anchor as A, Dialog, BringAttention as B, ListOrdered, ListUnordered } from "@steffo/bluelib-react"
import type { NextPage } from "next"
import { WarningUnchecked } from "../../components/warnings"


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
                    Introduzione
                </Heading>
                <p>
                    Il corso di <I>Algoritmi e strutture dati</I> è stato piuttosto impegnativo ma al tempo stesso interessante: quasi tutto il materiale era composto da concetti a me nuovi, e di conseguenza ho preso appunti dettagliati su tutto.
                </p>
            </Box>
        </Chapter>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Materiale realizzato
                </Heading>
                <WarningUnchecked/>
                <ListOrdered>
                    <MaterialLi file="01_IlNomeDelCorso.md">
                        Il nome del corso
                    </MaterialLi>
                    <MaterialLi file="02_EfficienzaDegliAlgoritmi.md">
                        Efficienza degli algoritmi
                    </MaterialLi>
                    <MaterialLi file="03_ModelliAlgoritmici.md">
                        Modelli algoritmici
                    </MaterialLi>
                    <MaterialLi file="04_NotazioneAsintotica.md">
                        Notazione asintotica
                    </MaterialLi>
                    <MaterialLi file="05_ProblemiAlgoritmici.md">
                        Problemi algoritmici
                    </MaterialLi>
                    <MaterialLi file="06_RicercaBinaria.md">
                        Ricerca binaria
                    </MaterialLi>
                    <MaterialLi file="07_DivideEtImpera.md">
                        Divide et impera
                    </MaterialLi>
                    <MaterialLi file="08_MasterTheorem.md">
                        Master theorem
                    </MaterialLi>
                    <MaterialLi file="09_MasterTheoremSubset.md">
                        Master theorem subset
                    </MaterialLi>
                    <MaterialLi file="10_Ordinamento.md">
                        Ordinamento
                    </MaterialLi>
                    <MaterialLi file="11_InsertionSort.md">
                        Insertion sort
                    </MaterialLi>
                    <MaterialLi file="11_MergeSort.md">
                        Merge sort
                    </MaterialLi>
                    <MaterialLi file="11_QuickSort.md">
                        Quick sort
                    </MaterialLi>
                    <MaterialLi file="12_CountingSort.md">
                        Counting sort
                    </MaterialLi>
                    <MaterialLi file="13_IntroAlleStruttureDati.md">
                        Introduzione alle strutture dati
                    </MaterialLi>
                    <MaterialLi file="14_Array.md">
                        Array
                    </MaterialLi>
                    <MaterialLi file="14_Lista.md">
                        Lista
                    </MaterialLi>
                    <MaterialLi file="15_Coda.md">
                        Coda
                    </MaterialLi>
                    <MaterialLi file="15_Pila.md">
                        Pila
                    </MaterialLi>
                    <MaterialLi file="16_AlberoRadicato.md">
                        Albero radicato
                    </MaterialLi>
                    <MaterialLi file="17_BreadthFirstSearch.md">
                        Breadth-first search
                    </MaterialLi>
                    <MaterialLi file="17_DepthFirstSearch.md">
                        Depth-first search
                    </MaterialLi>
                    <MaterialLi file="18_AlberoBinarioDiRicerca.md">
                        Albero binario di ricerca
                    </MaterialLi>
                    <MaterialLi file="19_HeapBinario.md">
                        Heap binario
                    </MaterialLi>
                    <MaterialLi file="20_CodaConPriorità.md">
                        Coda con priorità
                    </MaterialLi>
                    <MaterialLi file="20_HeapSort.md">
                        Heap sort
                    </MaterialLi>
                    <MaterialLi file="21_Grafo.md">
                        Grafo
                    </MaterialLi>
                    <MaterialLi file="22_VisitareUnGrafo.md">
                        Visitare un grafo
                    </MaterialLi>
                    <MaterialLi file="23_AlgoritmiGreedy.md">
                        Algoritmi greedy
                    </MaterialLi>
                    <MaterialLi file="24_PercorsoPiùBreve.md">
                        Percorso più breve
                    </MaterialLi>
                    <MaterialLi file="25_AlgoritmoDiDijkstra.md">
                        Algoritmo di Dijkstra
                    </MaterialLi>
                    <MaterialLi file="26_AlgoritmoDiBellmanFord.md">
                        Algoritmo di Bellman-Ford
                    </MaterialLi>
                    <MaterialLi file="27_DisjointSet.md">
                        Disjoint set
                    </MaterialLi>
                    <MaterialLi file="28_TrovareIlMST.md">
                        Trovare il minimum spanning tree
                    </MaterialLi>
                    <MaterialLi file="29_AlgoritmoDiKruskal.md">
                        Algoritmo di Kruskal
                    </MaterialLi>
                    <MaterialLi file="29_AlgoritmoDiPrim.md">
                        Algoritmo di Prim
                    </MaterialLi>
                    <MaterialLi file="30_Compressione.md">
                        Compressione
                    </MaterialLi>
                    <MaterialLi file="31_AlgoritmoDiHuffman.md">
                        Algoritmo di Huffman
                    </MaterialLi>
                    <MaterialLi file="32_Dizionari.md">
                        Dizionari
                    </MaterialLi>
                    <MaterialLi file="33_ProgrammazioneDinamica.md">
                        Programmazione dinamica
                    </MaterialLi>
                    <MaterialLi file="34_ProblemaDelloZaino.md">
                        Problema dello zaino
                    </MaterialLi>
                    <MaterialLi file="35_ProblemiIntrattabili.md">
                        Problemi intrattabili
                    </MaterialLi>
                </ListOrdered>
            </Box>
        </Chapter>
    </>
}

export default Page
