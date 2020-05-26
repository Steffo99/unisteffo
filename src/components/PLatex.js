import Latex from "./Latex";

export default function (props) {
    return (
        <p>
            <Latex inline={false}>{props.children}</Latex>
        </p>
    );
}
