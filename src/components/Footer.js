import style from "./Footer.module.css"
import { Anchor, Title } from "bluelib/lib/components"


export default function Footer() {
    return (
        <div className={style.footer}>
            <Title size={"xs"}>
                © {new Date().getFullYear().toString()}
                &nbsp;-&nbsp;
                <Anchor href="https://steffo.eu/">Stefano Pigozzi</Anchor>
                &nbsp;-&nbsp;
                <Anchor href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</Anchor>
                &nbsp;-&nbsp;
                <Anchor
                    href="https://github.com/Steffo99/uni.steffo.eu"
                >{process.env.REACT_APP_NAME} {process.env.REACT_APP_VERSION} ({process.env.NODE_ENV})</Anchor>
                &nbsp;-&nbsp;
                <Anchor href="https://ko-fi.com/steffo">Supportami</Anchor>
            </Title>
        </div>
    )
}
