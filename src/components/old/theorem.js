import style from "./theorem.css";
import Panel from "./panel.js";

export default class Theorem extends Panel {
    getStyle() {
        return super.getStyle() + " " + style.theorem;
    }
}
