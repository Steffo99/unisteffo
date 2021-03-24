import React from "react";
import {Size, Anchor, BaseLink as A, Paragraph as P, Bold as B, ListItem as LI} from "bluelib/lib/components";
import TitleSplit from "../components/TitleSplit";
import TitleBox from "../components/TitleBox";
import SelectSkin from "../components/SelectSkin";


export default function Home({skin, setSkin}) {
    return (
        <article>
            <TitleSplit title={<span>Appunti open source di <A href={"https://steffo.eu"}>Steffo</A></span>}>
                <TitleBox title={"Unisteffo"}>
                    <P>
                        Ciao! Benvenuto a <B>Unisteffo</B>, il sito in cui carico tutto il materiale che uso per studiare!
                    </P>
                    <P>
                        Se trovi un errore negli appunti, o un bug del sito, per favore <Anchor href={"https://github.com/Steffo99/appuntiweb/issues/new"}>segnalamelo su GitHub</Anchor>!
                    </P>
                </TitleBox>
                <TitleBox title={"Tema"}>
                    <P>
                        Se i colori ti deconcentrano, non ti piacciono, o vuoi stampare alcune di queste pagine, puoi cambiare tema del sito qui:
                    </P>
                    <P>
                        <SelectSkin skin={skin} setSkin={setSkin}/>
                    </P>
                </TitleBox>
            </TitleSplit>
            <TitleSplit title={"Università"}>
                <TitleBox title={"Primo anno"}>
                    <ul>
                        <LI><Size value={"l"}><Anchor href={"https://github.com/Steffo99/appunti-universitari/tree/master/2018_Analisi1"}>Analisi matematica</Anchor></Size></LI>
                        <LI><Size value={"l"}><Anchor href={"https://github.com/Steffo99/appunti-universitari/tree/master/2018_AlgebraLineare"}>Algebra lineare</Anchor></Size></LI>
                        <LI><Size value={"l"}><Anchor href={"https://github.com/Steffo99/appunti-universitari/blob/master/2018_ArchitetturaDeiCalcolatori/08_AppuntiEDeduzioni.md"}>Architettura dei calcolatori</Anchor></Size></LI>
                        <LI><Size value={"l"}><Anchor href={"https://github.com/Steffo99/appunti-universitari/tree/master/2018_AlgoritmiEStruttureDati"}>Algoritmi e strutture dati</Anchor></Size></LI>
                    </ul>
                </TitleBox>
                <TitleBox title={"Secondo anno"}>
                    <ul>
                        <LI><Size value={"l"}><A href={"/fisica"}>Fisica</A></Size></LI>
                        <LI><Size value={"l"}><Anchor href={"https://github.com/Steffo99/appunti-universitari/tree/master/2019_ProgrammazioneAdOggetti"}>Programmazione ad oggetti</Anchor></Size></LI>
                        <LI><Size value={"l"}><Anchor href={"https://old.uni.steffo.eu/#/statistica"}>Statistica ed elementi di probabilità</Anchor></Size></LI>
                        <LI><Size value={"l"}><Anchor href={"https://github.com/Steffo99/appunti-universitari/tree/master/2019_SistemiOperativi"}>Sistemi operativi</Anchor></Size></LI>
                        <LI><Size value={"l"}><Anchor href={"https://old.uni.steffo.eu/#/apprendimento"}>Apprendimento ed evoluzione in sistemi artificiali</Anchor></Size></LI>
                        <LI><Size value={"l"}><Anchor href={"https://old.uni.steffo.eu/#/basididati"}>Basi di dati</Anchor></Size></LI>
                        <LI><Size value={"l"}><Anchor href={"https://old.uni.steffo.eu/#/calcolonumerico"}>Calcolo numerico</Anchor></Size></LI>
                        <LI><Size value={"l"}><Anchor href={"https://old.uni.steffo.eu/#/ottimizzazionelineare"}>Ottimizzazione lineare intera</Anchor></Size></LI>
                    </ul>
                </TitleBox>
                <TitleBox title={"Terzo anno"}>
                    <ul>
                        <LI><Size value={"l"}><A href={"/gestinfo"}>Gestione dell'informazione</A></Size></LI>
                    </ul>
                </TitleBox>
            </TitleSplit>
        </article>
    )
}
