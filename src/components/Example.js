import style from "./Example.less";

export default function(props) {
    return (
        <div class={style.example}>
            {props.children}
        </div>
    );
}
