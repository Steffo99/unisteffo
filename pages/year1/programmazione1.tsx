import { Heading, Chapter, Box, Idiomatic as I, Code, Anchor as A, Dialog, BringAttention as B, ListOrdered, ListUnordered, Image } from '@steffo/bluelib-react'
import type { NextPage } from 'next'

const Programmazione1: NextPage = () => {
    return <>
        <Heading level={2}>
            Programmazione 1
        </Heading>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Introduzione
                </Heading>
                <p>
                    Avendo già programmato in C / C++ alle scuole superiori, non ho avuto il minimo bisogno di studiare per l&apos;esame di Programmazione 1, e pertanto non ho preso appunti.
                </p>
                <p>
                    Il massimo che posso fare è consigliare qualche risorsa online per il C++, e allegare al sito la guida che avevo scritto al tempo per installare su Windows il compilatore C / C++ MinGW.
                </p>
            </Box>
        </Chapter>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Collegamenti utili
                </Heading>
                <ListUnordered>
                    <ListUnordered.Item>
                        <a href="https://en.cppreference.com/w/">cppreference.com</a>
                    </ListUnordered.Item>
                    <ListUnordered.Item>
                        <a href="https://www.cplusplus.com/reference/">cplusplus.com</a>
                    </ListUnordered.Item>
                    <ListUnordered.Item>
                        <a href="https://stackoverflow.com/questions">stackoverflow.com</a>
                    </ListUnordered.Item>
                </ListUnordered>
            </Box>
        </Chapter>
        <Chapter>
            <Box>
                <Heading level={3}>
                    Come installare correttamente MinGW su Windows
                </Heading>
                <p>
                    Scaricate <A href="https://osdn.net/projects/mingw/downloads/68260/mingw-get-setup.exe/">l&apos;installer ufficiale</A>, ed eseguitelo.
                </p>
                <Image limit="quarter" src="https://i.imgur.com/mDZSqjV.png"/>
                <p> 
                    Dovrebbe comparire questa schermata. Cliccate su <I>Install</I>, poi scegliete una cartella di installazione (ricordatevela!) e poi <I>Continue</I>. Lasciate stare le altre opzioni, dovrebbero essere tutte spuntate, tranne <I>For all users</I>, che dovrebbe essere disattivato.
                </p>
                <Image limit="quarter" src="https://i.imgur.com/brdw8Xy.png"/>
                <p> 
                    Aspettate che finisca il download. Pochi secondi dopo, dovrebbe finire e dovrebbe apparire un tasto <I>Continue</I>. Premetelo.
                </p>
                <Image limit="quarter" src="https://i.imgur.com/aPTwrxz.png"/>
                <p> 
                    Dovrebbe apparirvi questa finestra. L&apos;installer di MinGW è una specie di gestore pacchetti (tipo <Code>apt</Code> su Ubuntu); potete quali pacchetti installare, e quindi quali funzionalità.
                </p>
                <Image limit="quarter" src="https://i.imgur.com/5QLSkFN.png"/>
                <p> 
                    Nel nostro caso, dovrebbero servirci <Code>mingw32-base-bin</Code> (per il C e alcune librerie C++) e <Code>mingw32-gcc-g++-bin</Code> (per il C++). Cliccate, quindi, sui due quadratini corrispondenti, e premete <I>Mark for Installation</I>. Dovrebbe comparire una freccia gialla sul quadratino.
                </p>
                <Image limit="quarter" src="https://i.imgur.com/zP74nks.png"/>
                <p> 
                    Ora, è il momento di installare i pacchetti. Aprite il menù <I>Installation</I>, poi premete <I>Apply Changes</I>, e di nuovo <I>Apply</I>.
                </p>
                <Image limit="quarter" src="https://i.imgur.com/jp4uz5B.png"/>
                <p> 
                    Lasciate che scarichi, ci vorrà un po&apos;. Guardatevi un video nel frattempo, fatevi una partitina a qualcosa, tornate dopo circa 10 minuti.
                </p>
                <Image limit="quarter" src="https://i.imgur.com/Lq9IepY.png"/>
                <p> 
                    Una volta installato, dobbiamo aggiungere <Code>g++</Code> ai programmi eseguibili da Prompt dei Comandi: premete il tasto <kbd>Windows</kbd>, e scrivete <Code>PATH</Code>. Windows dovrebbe trovarvi automaticamente quell&apos;opzione.
                </p>
                <Image limit="quarter" src="https://i.imgur.com/dy3b5Ub.png"/>
                <p> 
                    Dentro la finestra di <I>Proprietà del Sistema</I>, premete <I>Variabili d&apos;ambiente</I>.
                </p>
                <Image limit="quarter" src="https://i.imgur.com/FjYpT1n.png"/>
                <p> 
                    Trovate la variabile d&apos;ambiente globale <code>Path</code>, e fateci doppio click per modificarla.
                </p>
                <Image limit="quarter" src="https://i.imgur.com/klZQ9So.png"/>
                <p> 
                    Ora dovreste vedere l&apos;elenco di tutte le cartelle contenenti programmi eseguibili da terminale: dobbiamo aggiungere quella di MinGW! Premete <I>Sfoglia</I>.
                </p>
                <Image limit="quarter" src="https://i.imgur.com/F6lBCqS.png"/>
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

export default Programmazione1
