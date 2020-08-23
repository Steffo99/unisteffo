import {ILatex, Panel, PLatex, Section, Timer, Todo} from "bluelib";
import Example from "../../components/Example";
import Link from "../../components/Link";
import MenuList from "../../components/MenuList";
import Intro from "./00_Intro";
import SistemiLineari from "./01_SistemiLineari";
import ZeriDiFunzione from "./02_ZeriDiFunzione";
import Interpolazione from "./03_Interpolazione";

const r = String.raw;


export default function (props) {
    return (
        <div>
            <h1>Calcolo Numerico</h1>
            <Intro/>
            <SistemiLineari/>
            <ZeriDiFunzione/>
            <Interpolazione/>
        </div>
    )
}
