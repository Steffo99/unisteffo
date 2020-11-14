import {BoxColors, Panel} from "bluelib";

export default function (props) {
    return (
        <Panel title={"To be continued"} color={BoxColors.YELLOW}>
            <p>
                Questa sezione è incompleta. Torna più avanti!
            </p>
            {props.children}
        </Panel>
    )
}
