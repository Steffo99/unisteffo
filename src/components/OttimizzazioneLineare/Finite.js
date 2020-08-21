import style from "./Styles.less";

export default function (props) {
    return (
        <abbr class={style.finite}
              title={"I punti del poliedro sono finiti."}>{props.children ? props.children : "finito"}</abbr>
    );
}
