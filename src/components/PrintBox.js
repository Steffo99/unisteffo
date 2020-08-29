import {BoxColors, CurrentPage, LatexRenderColor, Panel} from "bluelib";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAdjust, faChevronRight, faClock, faExclamationTriangle, faPrint} from "@fortawesome/free-solid-svg-icons";
import Router from "preact-router";
import {useContext} from "preact/hooks";

export default function(props) {
    const currentPage = useContext(CurrentPage);
    const latexColor = useContext(LatexRenderColor);

    if(currentPage === "/") {
        return null;
    }

    if(print === undefined) {
        return (
            <Panel color={BoxColors.ORANGE}>
                <FontAwesomeIcon icon={faExclamationTriangle}/> La stampa della pagina non è supportata su questo browser.
            </Panel>
        )
    }

    function toggleLatexColor() {
        if(latexColor === "White") {
            props.setLatexColor("Black")
        }
        else if(latexColor === "Black") {
            props.setLatexColor("White")
        }
    }

    return (
        <Panel color={BoxColors.CYAN}>
            Per stampare:&nbsp;
            <button onClick={toggleLatexColor}><FontAwesomeIcon icon={faAdjust}/> Inverti colore formule</button>
            &nbsp;
            <FontAwesomeIcon icon={faChevronRight}/>
            &nbsp;
            <button disabled={true}><FontAwesomeIcon icon={faClock}/> Aspetta che cambino tutte colore</button>
            &nbsp;
            <FontAwesomeIcon icon={faChevronRight}/>
            &nbsp;
            <button onClick={print}><FontAwesomeIcon icon={faPrint}/> Stampa</button>
        </Panel>
    )
}