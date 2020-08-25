import Intro from "./00_Intro";
import SistemiLineari from "./01_SistemiLineari";
import ZeriDiFunzione from "./02_ZeriDiFunzione";
import Interpolazione from "./03_Interpolazione";
import InterpolazioneATratti from "./04_InterpolazioneATratti";

const r = String.raw;


export default function (props) {
    return (
        <div>
            <h1>Calcolo Numerico</h1>
            <Intro/>
            <SistemiLineari/>
            <ZeriDiFunzione/>
            <Interpolazione/>
            <InterpolazioneATratti/>
        </div>
    )
}
