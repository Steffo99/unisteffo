import style from "./ErrorAbbr.less"
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function (props) {
	return (
		<abbr class={style.errorabbr} title={props.error.toString()}><FontAwesomeIcon icon={faExclamationCircle}/> {props.children}</abbr>
	);
}
