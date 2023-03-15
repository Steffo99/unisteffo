import "@steffo/bluelib/dist/base.root.css"
import "@steffo/bluelib/dist/classic.root.css"
import "@steffo/bluelib/dist/glass.root.css"
import "@steffo/bluelib/dist/fun.root.css"
import "@steffo/bluelib/dist/colors-royalblue.root.css"
import "@steffo/bluelib/dist/fonts-fira-ghpages.root.css"
import React from "react"


export const metadata = {
	title: 'Unisteffo',
	description: 'Gli appunti liberi di Steffo',
}


export interface RootLayoutProps {
	children: React.ReactNode,
}


export default function RootLayout(props: RootLayoutProps) {
	return (
		<html lang="it">
			<body>
				{props.children}
			</body>
		</html>
	)
}
