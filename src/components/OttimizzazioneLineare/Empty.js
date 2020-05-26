import style from "./Styles.less";

export default function (props) {
    return (
        <abbr class={style.unfeasible} title={"Il poliedro non contiene punti."}>{props.children ? props.children : "vuoto"}</abbr>
    );
}
