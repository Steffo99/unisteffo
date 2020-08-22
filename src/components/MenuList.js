import style from "./MenuList.less";

export default function(props) {
    return (
        <ul class={style.menulist}>
            {props.children}
        </ul>
    )
}