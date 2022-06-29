import { Heading, Chapter, Box, Idiomatic as I, Anchor as A, Code } from '@steffo/bluelib-react'
import type { NextPage, NextPageContext } from 'next'
import { Link } from '../../../components/compat-old'

import Image from "next/image"
import imgmDZSqjV from "../../../public/images/year1/programmazione1/mDZSqjV.png"
import imgbrdw8Xy from "../../../public/images/year1/programmazione1/brdw8Xy.png"
import imgaPTwrxz from "../../../public/images/year1/programmazione1/aPTwrxz.png"
import img5QLSkFN from "../../../public/images/year1/programmazione1/5QLSkFN.png"
import imgzP74nks from "../../../public/images/year1/programmazione1/zP74nks.png"
import imgjp4uz5B from "../../../public/images/year1/programmazione1/jp4uz5B.png"
import imgLq9IepY from "../../../public/images/year1/programmazione1/Lq9IepY.png"
import imgdy3b5Ub from "../../../public/images/year1/programmazione1/dy3b5Ub.png"
import imgFjYpT1n from "../../../public/images/year1/programmazione1/FjYpT1n.png"
import imgklZQ9So from "../../../public/images/year1/programmazione1/klZQ9So.png"
import imgF6lBCqS from "../../../public/images/year1/programmazione1/F6lBCqS.png"


export async function getStaticProps(_context: NextPageContext) {
    return {
        props: {}
    }
}


const Page: NextPage = () => {
    return <>
        <Heading level={2}>
            <Link href="/year1/programmazione1">
                Programmazione 1
            </Link>
        </Heading>
        <Chapter>
            <Heading level={3}>
                Come installare correttamente MinGW su Windows
            </Heading>
            <Box>
                <p>
                    Scaricate <A href="https://osdn.net/projects/mingw/downloads/68260/mingw-get-setup.exe/">l&apos;installer ufficiale</A>, ed eseguitelo.
                </p>
                <Image width={602} height={465} src={imgmDZSqjV} alt="La schermata iniziale di mingw-get." title="La schermata iniziale di mingw-get."/>
                <p> 
                    Dovrebbe comparire questa schermata. Cliccate su <I>Install</I>, poi scegliete una cartella di installazione (ricordatevela!) e poi <I>Continue</I>. Lasciate stare le altre opzioni, dovrebbero essere tutte spuntate, tranne <I>For all users</I>, che dovrebbe essere disattivato.
                </p>
                <Image width={602} height={465} src={imgbrdw8Xy} alt="La schermata di download di mingw-get." title="La schermata di download di mingw-get."/>
                <p> 
                    Aspettate che finisca il download. Pochi secondi dopo, dovrebbe finire e dovrebbe apparire un tasto <I>Continue</I>. Premetelo.
                </p>
                <Image width={996} height={525} src={imgaPTwrxz} alt="La schermata di selezione pacchetti di mingw-get." title="La schermata di selezione pacchetti di mingw-get."/>
                <p> 
                    Dovrebbe apparirvi questa finestra. L&apos;installer di MinGW è una specie di gestore pacchetti (tipo <Code>apt</Code> su Ubuntu); potete quali pacchetti installare, e quindi quali funzionalità.
                </p>
                <Image width={795} height={160} src={img5QLSkFN} alt="mingw-get con i pacchetti `mingw32-base-bin`, `mingw32-gcc-g++-bin` e `msys-base-bin` marcati per l'installazione." title="mingw-get con i pacchetti `mingw32-base-bin`, `mingw32-gcc-g++-bin` e `msys-base-bin` marcati per l'installazione."/>
                <p> 
                    Nel nostro caso, dovrebbero servirci <Code>mingw32-base-bin</Code> (per il C e alcune librerie C++) e <Code>mingw32-gcc-g++-bin</Code> (per il C++). Cliccate, quindi, sui due quadratini corrispondenti, e premete <I>Mark for Installation</I>. Dovrebbe comparire una freccia gialla sul quadratino.
                </p>
                <Image width={334} height={193} src={imgzP74nks} alt="Il menu Installation di mingw-get; il mouse è sopra ad Apply Changes." title="Il menu Installation di mingw-get; il mouse è sopra ad Apply Changes."/>
                <p> 
                    Ora, è il momento di installare i pacchetti. Aprite il menù <I>Installation</I>, poi premete <I>Apply Changes</I>, e di nuovo <I>Apply</I>.
                </p>
                <Image width={562} height={131} src={imgjp4uz5B} alt="Finestra di download di mingw-get." title="Finestra di download di mingw-get."/>
                <p> 
                    Lasciate che scarichi, ci vorrà un po&apos;. Guardatevi un video nel frattempo, fatevi una partitina a qualcosa, tornate dopo circa 10 minuti.
                </p>
                <Image width={414} height={186} src={imgLq9IepY} alt="Menu Start di Windows 10; è selezionato `Modifica le variabili di ambiente relative al sistema`." title="Menu Start di Windows 10; è selezionato `Modifica le variabili di ambiente relative al sistema`."/>
                <p> 
                    Una volta installato, dobbiamo aggiungere <Code>g++</Code> ai programmi eseguibili da Prompt dei Comandi: premete il tasto <kbd>Windows</kbd>, e scrivete <Code>PATH</Code>. Windows dovrebbe trovarvi automaticamente quell&apos;opzione.
                </p>
                <Image width={412} height={486} src={imgdy3b5Ub} alt="Finestra di Proprietà del sistema di Windows 10; il mouse è sopra al bottone `Variabili d'ambiente...`" title="Finestra di Proprietà del sistema di Windows 10; il mouse è sopra al bottone `Variabili d'ambiente...`"/>
                <p> 
                    Dentro la finestra di <I>Proprietà del Sistema</I>, premete <I>Variabili d&apos;ambiente</I>.
                </p>
                <Image width={618} height={585} src={imgFjYpT1n} alt="Finestra delle variabili d'ambiente di Windows 10; è selezionata la variabile di sistema `PATH`." title="Finestra delle variabili d'ambiente di Windows 10; è selezionata la variabile di sistema `PATH`."/>
                <p> 
                    Trovate la variabile d&apos;ambiente globale <code>Path</code>, e fateci doppio click per modificarla.
                </p>
                <Image width={527} height={501} src={imgklZQ9So} alt="Finestra di modifica del PATH di Windows 10; il mouse è sopra il pulsante `Sfoglia...`." title="Finestra di modifica del PATH di Windows 10; il mouse è sopra il pulsante `Sfoglia...`."/>
                <p> 
                    Ora dovreste vedere l&apos;elenco di tutte le cartelle contenenti programmi eseguibili da terminale: dobbiamo aggiungere quella di MinGW! Premete <I>Sfoglia</I>.
                </p>
                <Image width={320} height={410} src={imgF6lBCqS} alt="Finestra di selezione cartella; è selezionata la cartella `C:\MinGW\bin`." title="Finestra di selezione cartella; è selezionata la cartella `C:\MinGW\bin`."/>
                <p> 
                    Trovate la cartella in cui avete installato MinGW (vi avevo detto di ricordarvela!); entrateci, poi selezionate la sottocartella <Code>bin</Code> e premete <I>OK</I> su tutte le finestre che avete aperto fino ad ora, chiudendole.
                </p>
                <p> 
                    Complimenti! Avete installato MinGW e potete compilare programmi C e C++ da Windows! Avete a disposizione <Code>gcc</Code> e <Code>g++</Code> sul Prompt dei Comandi, e potete finalmente creare dei file <Code>.exe</Code>!
                </p>
            </Box>
        </Chapter>
    </>
}

export default Page
