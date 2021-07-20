import React from "react"
import { Anchor, BaseLink, Bold as B, ListItem as LI, Paragraph as P, Size, Box } from "bluelib/lib/components"
import Split from "../components/Split"
import SelectSkin from "../components/SelectSkin"


export default function Home({ skin, setSkin }) {
    return (
        <article>
            <Split title={<span>Appunti open source di <Anchor href={"https://steffo.eu"}>Steffo</Anchor></span>}>
                <Box title={"Unisteffo"}>
                    <P>
                        Ciao! Benvenuto a <B>Unisteffo</B>, il sito in cui carico tutto il materiale che uso per
                        studiare!
                    </P>
                    <P>
                        Se trovi un errore negli appunti, o un bug del sito, per favore <Anchor
                        href={"https://github.com/Steffo99/appuntiweb/issues/new"}
                    >segnalamelo su GitHub</Anchor>!
                    </P>
                </Box>
                <Box title={"Tema"}>
                    <P>
                        Se i colori ti deconcentrano, non ti piacciono, o vuoi stampare alcune di queste pagine, puoi
                        cambiare tema del sito qui:
                    </P>
                    <P>
                        <SelectSkin skin={skin} setSkin={setSkin}/>
                    </P>
                </Box>
            </Split>
            <Split title={"I miei appunti"}>
                <Box title={"Primo anno"}>
                    <Size value={"l"}>
                        <ul>
                            <LI>
                                <Anchor href={"https://github.com/Steffo99/appunti-universitari/tree/master/2018_Analisi1"}>
                                    🕸️ Analisi matematica
                                </Anchor>
                            </LI>
                            <LI>
                                <Anchor href={"https://github.com/Steffo99/appunti-universitari/tree/master/2018_AlgebraLineare"}>
                                    🕸️ Algebra lineare
                                </Anchor>
                            </LI>
                            <LI>
                                <Anchor href={"https://github.com/Steffo99/appunti-universitari/blob/master/2018_ArchitetturaDeiCalcolatori/08_AppuntiEDeduzioni.md"}>
                                    🕸️ Architettura dei calcolatori
                                </Anchor>
                            </LI>
                            <LI>
                                <Anchor href={"https://github.com/Steffo99/appunti-universitari/tree/master/2018_AlgoritmiEStruttureDati"}>
                                    🕸️ Algoritmi e strutture dati
                                </Anchor>
                            </LI>
                        </ul>
                    </Size>
                </Box>
                <Box title={"Secondo anno"}>
                    <Size value={"l"}>
                        <ul>
                            <LI>
                                <BaseLink href={"/fisica"}>
                                    ✨ Fisica
                                </BaseLink>
                            </LI>
                            <LI>
                                <Anchor href={"https://github.com/Steffo99/appunti-universitari/tree/master/2019_ProgrammazioneAdOggetti"}>
                                    🕸️ Programmazione ad oggetti
                                </Anchor>
                            </LI>
                            <LI>
                                <BaseLink href={"/statistica"}>
                                    ✨ Statistica ed elementi di probabilità
                                </BaseLink>
                            </LI>
                            <LI>
                                <BaseLink href={"/apprendimento"}>
                                    ✨ Apprendimento ed evoluzione in sistemi artificiali
                                </BaseLink>
                            </LI>
                            <LI>
                                <Anchor href={"https://old.uni.steffo.eu/#/basididati"}>
                                    🕸️ Basi di dati
                                </Anchor>
                            </LI>
                            <LI>
                                <Anchor href={"https://old.uni.steffo.eu/#/calcolonumerico"}>
                                    🕸️ Calcolo numerico
                                </Anchor>
                            </LI>
                            <LI>
                                <BaseLink href={"/oli"}>
                                    ✨ Ottimizzazione lineare intera
                                </BaseLink>
                            </LI>
                        </ul>
                    </Size>
                </Box>
                <Box title={"Terzo anno"}>
                    <Size value={"l"}>
                        <ul>
                            <LI>
                                <BaseLink href={"/gestinfo"}>
                                    ✨ Gestione dell'informazione
                                </BaseLink>
                            </LI>
                        </ul>
                    </Size>
                </Box>
            </Split>
            <Split title={"I miei progetti"}>
                <Box title={"Primo anno"}>
                    <Size value={"l"}>
                        <ul>
                            <LI>
                                <BaseLink href={"/algebra/cheatsheet"}>
                                    ✨ <Size value={"l"}>Cheatsheet</Size><Size value={"xs"}> per l'esame di Algebra Lineare</Size>
                                </BaseLink>
                            </LI>
                        </ul>
                    </Size>
                </Box>
                <Box title={"Secondo anno"}>
                    <ul>
                        <LI>
                            <BaseLink href={"/sistemioperativi/arzigogoli"}>
                                ✨ <Size value={"l"}>Arzigogoli</Size><Size value={"xs"}> di Sistemi operativi</Size>
                            </BaseLink>
                        </LI>
                        <LI>
                            <Anchor href={"https://github.com/Steffo99/mandarin"}>
                                ↪️ <Size value={"l"}>Cleaver</Size><Size value={"xs"}>, progetto di Programmazione a Oggetti</Size>
                            </Anchor>
                        </LI>
                        <LI>
                            <Anchor href={"https://github.com/Steffo99/alexandria"}>
                                ↪️ <Size value={"l"}>Alexandria</Size><Size value={"xs"}>, progetto di Basi di Dati</Size>
                            </Anchor>
                        </LI>
                        <LI>
                            <Anchor href={"https://github.com/Steffo99/turtle007"}>
                                ↪️ <Size value={"l"}>Turtle007</Size><Size value={"xs"}>, miniprogetti di Apprendimento ed evoluzione in sistemi artificiali</Size>
                            </Anchor>
                        </LI>
                        <LI>
                            <Anchor href={"https://github.com/Steffo99/matlab-stuff"}>
                                ↪️ <Size value={"l"}>Esercizi risolti</Size><Size value={"xs"}> di Calcolo numerico</Size>
                            </Anchor>
                        </LI>
                    </ul>
                </Box>
                <Box title={"Terzo anno"}>
                    <ul>
                        <LI>
                            <Anchor href={"https://github.com/Steffo99/thorunimore"}>
                                ↪️ <Size value={"l"}>Thorunimore</Size><Size value={"xs"}>, bot del gruppo Unimore Informatica</Size>
                            </Anchor>
                        </LI>
                        <LI>
                            <Anchor href={"https://github.com/Steffo99/mandarin"}>
                                ↪️ <Size value={"l"}>Mandarin</Size><Size value={"xs"}>, parte del progetto di Gestione dell'Informazione</Size>
                            </Anchor>
                        </LI>
                        <LI>
                            <Anchor href={"https://github.com/Steffo99/mandarin-search"}>
                                ↪️ <Size value={"l"}>Mandarin Search</Size><Size value={"xs"}>, parte del progetto di Gestione dell'Informazione</Size>
                            </Anchor>
                        </LI>
                    </ul>
                </Box>
            </Split>
        </article>
    )
}
