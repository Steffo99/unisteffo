import React from "react"


export interface ChapterProps {
	children: React.ReactNode,
	heading: React.ReactNode,
	columns: number,
}


export function Chapter(props: ChapterProps) {
	return (
		<section className={`chapter-${props.columns}`}>
			<h2>
				{props.heading}
			</h2>
			{props.children}
		</section>
	)
}
