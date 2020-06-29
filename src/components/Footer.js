import style from './Footer.less';
import Link from "./Link";

export default function(props) {
	return (
		<div class={style.footer}>
			© {new Date().getFullYear()}
			&nbsp;-&nbsp;
			<Link href={"https://steffo.eu/"}>Stefano Pigozzi</Link>
			&nbsp;-&nbsp;
			<Link href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</Link>
			&nbsp;-&nbsp;
			<Link href="https://github.com/Steffo99/uni.steffo.eu">uni.steffo.eu {process.env.RELEASE}</Link>
			&nbsp;-&nbsp;
			<Link href={"https://ko-fi.com/steffo"}>Supportami</Link>
		</div>
	);
}
