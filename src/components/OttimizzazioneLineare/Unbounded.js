import style from "./Styles.less";

export default function (props) {
    return (
        <abbr class={style.unbounded}
              title={"I punti del poliedro sono infiniti."}>{props.children ? props.children : "illimitato"}</abbr>
    );
}
