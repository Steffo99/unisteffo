import style from "./Plus.less";

export default function (props) {
    return <span class={style.plus}>{props.children}</span>;
}
