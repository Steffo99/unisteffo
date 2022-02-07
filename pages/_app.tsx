import "../styles/global.css"
import type { AppProps } from 'next/app'
import { Link } from "../components/link"
import {Bluelib, Heading, LayoutThreeCol, Anchor as A, Footer, useBluelib} from "@steffo/bluelib-react"
import { useState, useEffect, useRef } from "react"
import { BluelibTheme } from "@steffo/bluelib-react/dist/types"
import { Theme } from "../components/theme-switcher"

function MyApp({ Component, pageProps }: AppProps) {
    const [theme, setTheme] = useState<BluelibTheme>("sophon")

    const ref = useRef<HTMLBodyElement | null>(null)
    useEffect(
        () => {
            ref.current = document.body as HTMLBodyElement
        },
        [ref]
    )

    useBluelib(ref, {
        theme,
    })

	return (
        <Theme.Provider value={[theme, setTheme]}>
            <LayoutThreeCol>
                <LayoutThreeCol.Center>
                    <Heading level={1}>
                        <Link href="/">
                            Unisteffo
                        </Link>
                    </Heading>
                    <Component {...pageProps} />
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
                </LayoutThreeCol.Center>
            </LayoutThreeCol>
        </Theme.Provider>
	)
}

export default MyApp
