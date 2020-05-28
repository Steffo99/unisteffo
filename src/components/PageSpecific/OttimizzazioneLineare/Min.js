import style from "./Styles.less";

export default function (props) {
    return (
        <abbr class={style.min} title={"In problemi in cui il primale è di minimizzazione."}>{props.children ? props.children : "min"}</abbr>
    );
}
