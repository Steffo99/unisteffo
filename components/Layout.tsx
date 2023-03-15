import style from "./Layout.module.css"
import Link from "next/link"


export interface LayoutProps {
	heading: React.ReactNode,
	main: React.ReactNode,
	sidebar: React.ReactNode,
}


export function Layout(props: LayoutProps) {
	return (
		<div className={style.layout}>
			<Link href={{pathname: "/"}} className={style.heading}>
				<h1>
					{props.heading}
				</h1>
			</Link>
			<main className={style.main}>
				{props.main}
			</main>
			<aside className={style.sidebar}>
				{props.sidebar}
			</aside>
		</div>
	)
}
