import style from "./Styles.less";

export default function (props) {
    return (
        <abbr className={style.tick} title={"Un quanto di tempo del sistema."}>{props.children ? props.children : "tick"}</abbr>
    );
}
