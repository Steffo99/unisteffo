import "../styles/global.css"
import type { AppProps } from 'next/app'
import { Link } from "../components/compat-next"
import {Bluelib, Heading, LayoutThreeCol, Anchor as A, Footer} from "@steffo/bluelib-react"

function MyApp({ Component, pageProps }: AppProps) {
	return (
        <Bluelib theme="sophon" id="root">
            <LayoutThreeCol>
                <LayoutThreeCol.Center>
                    <Heading level={1}>
                        <Link href="/">
                            Unisteffo
                        </Link>
                    </Heading>
                    <Component {...pageProps} />
                </LayoutThreeCol.Center>
            </LayoutThreeCol>
            <Footer>
                <p>
                    © {new Date().getFullYear()} <A href="https://steffo.eu/">Stefano Pigozzi</A> - Tutto il contenuto del sito è reso disponibile con la licenza <A href="https://creativecommons.org/licenses/by-sa/3.0/it/">CC-BY-SA 3.0 IT</A>.
                </p>
                <p>
                    Sito web <A href="https://github.com/Steffo99/appuntiweb-omega">open source</A> basato su <A href="https://github.com/Steffo99/bluelib">Bluelib</A> e <A href="https://github.com/Steffo99/bluelib-react">Bluelib React</A>
                </p>
                <p>
                    Se il contenuto di questo sito ti è utile, <A href="https://ko-fi.com/steffo">offrimi un caffè</A>!
                </p>
            </Footer>
        </Bluelib>
	)
}

export default MyApp
