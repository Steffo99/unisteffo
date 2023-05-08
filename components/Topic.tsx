import React from "react"


export interface TopicProps {
	children: React.ReactNode,
	heading: React.ReactNode,
}


export function Topic(props: TopicProps) {
	return (
		<section className="panel box">
			<h3>
				{props.heading}
			</h3>
			{props.children}
		</section>
	)
}
