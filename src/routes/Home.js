import React from "react";
import {Split, Size, Color, Anchor, BaseLink as A, Paragraph as P, Bold as B, Italic as I, ListItem as LI} from "bluelib/lib/components";
import Page from "../components/Page";
import TitleSplit from "../components/TitleSplit";
import TitleBox from "../components/TitleBox";


export default function Home() {
    return (
        <Page subtitle={<span>Appunti open source di <A href={"https://steffo.eu"}>Steffo</A></span>}>
            <Split>
                <TitleBox title={"Unisteffo"}>
                    <P>
                        Ciao! Benvenuto a <B>Unisteffo</B>, il sito in cui carico tutto il materiale che uso per studiare!
                    </P>
                    <P>
                        Se trovi un errore negli appunti, o un bug del sito, per favore <Anchor href={"https://github.com/Steffo99/appuntiweb/issues/new"}>segnalamelo su GitHub</Anchor>!
                    </P>
                    <P>
                        <Color value={"yellow"}>🚧 Molte pagine non sono disponibili in quanto il sito è in fase di rinnovo.</Color>
                    </P>
                </TitleBox>
            </Split>
            <TitleSplit title={"Università"}>
                <TitleBox title={"Primo anno"}>
                    <ul>
                        <LI><Size value={"l"}><A href={"/analisi"} disabled={true}>Analisi matematica</A></Size></LI>
                        <LI><Size value={"l"}><A href={"/algebra"} disabled={true}>Algebra lineare</A></Size></LI>
                        <LI><Size value={"l"}><A href={"/algoritmi"} disabled={true}>Algoritmi e strutture dati</A></Size></LI>
                    </ul>
                </TitleBox>
                <TitleBox title={"Secondo anno"}>
                    <ul>
                        <LI><Size value={"l"}><A href={"/fisica"} disabled={true}>Fisica</A></Size></LI>
                        <LI><Size value={"l"}><A href={"/statistica"} disabled={true}>Statistica ed elementi di probabilità</A></Size></LI>
                        <LI><Size value={"l"}><A href={"/apprendimento"} disabled={true}>Apprendimento ed evoluzione in sistemi artificiali</A></Size></LI>
                        <LI><Size value={"l"}><A href={"/basididati"} disabled={true}>Basi di dati</A></Size></LI>
                        <LI><Size value={"l"}><A href={"/calcolo"} disabled={true}>Calcolo numerico</A></Size></LI>
                        <LI><Size value={"l"}><A href={"/oli"} disabled={true}>Ottimizzazione lineare intera</A></Size></LI>
                    </ul>
                </TitleBox>
                <TitleBox title={"Terzo anno"}>
                    <ul>
                        <LI><Size value={"l"}><A href={"/gestinfo"}>Gestione dell'informazione</A></Size></LI>
                    </ul>
                </TitleBox>
            </TitleSplit>
        </Page>
    )
}
