import React from "react"
import { Anchor, BaseLink, Bold as B, ListItem as LI, Paragraph as P, Size } from "bluelib/lib/components"
import Split from "../components/Split"
import Box from "../components/Box"
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
            <Split title={"Università"}>
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
                                <Anchor href={"https://github.com/Steffo99/appunti-universitari/tree/master/2019_SistemiOperativi"}>
                                    🕸️ Sistemi operativi
                                </Anchor>
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
                                <Anchor href={"https://old.uni.steffo.eu/#/ottimizzazionelineare"}>
                                    🕸️ Ottimizzazione lineare intera
                                </Anchor>
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
        </article>
    )
}
