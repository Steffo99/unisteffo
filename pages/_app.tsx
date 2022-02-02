import "../styles/global.css"
import type { AppProps } from 'next/app'
import Link from "next/link"
import {Bluelib, Heading, LayoutThreeCol, Anchor as A} from "@steffo/bluelib-react"

function MyApp({ Component, pageProps }: AppProps) {
	return (
        <Bluelib theme="sophon" id="root">
            <LayoutThreeCol>
                <LayoutThreeCol.Center>
                    <Heading level={1}>
                        <Link href="/">
                            <A href="#">Unisteffo</A>
                        </Link>
                    </Heading>
                    <Component {...pageProps} />
                </LayoutThreeCol.Center>
            </LayoutThreeCol>
        </Bluelib>
	)
}

export default MyApp
