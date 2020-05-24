import style from "Unfeasible.less";

export default function (props) {
    return (
        <span class={style.unfeasible}>{this.props.children}</span>
    );
}
