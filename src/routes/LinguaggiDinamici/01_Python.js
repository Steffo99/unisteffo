import {Fragment} from "preact";
import {Section, Panel, ILatex, BLatex, PLatex, CodeDefaultLanguage, Code} from "bluelib";
import Link from "../../components/Link";

const r = String.raw;


export default function () {
    return (
        <CodeDefaultLanguage.Provider value={"python"}>

        <Fragment>
            <h1>Python</h1>
            <Section title={"Tipi immutabili"}>
                <Panel title={"int"}>
                    <p>
                        Gli <code>int</code> rappresentano numeri interi:
                    </p>
                    <Code>{r`
                        42
                    `}</Code>
                    <p>
                        Non hanno nessun limite di dimensione:
                    </p>
                    <Code>{r`
                        1000000000
                    `}</Code>
                    <p>
                        Per maggiore chiarezza, si possono usare liberamente underscore per formattarli:
                    </p>
                    <Code>{r`
                        1_000_000_000
                    `}</Code>
                </Panel>
                <Panel title={"float"}>
                    <p>
                        I <code>float</code> rappresentano numeri reali:
                    </p>
                    <Code>{r`
                        42.0
                    `}</Code>
                    <p>
                        Sono limitati alla doppia precisione di macchina:
                    </p>
                    <Code>{r`
                        13.999999999999999  # Diventa 13.999999999999998
                    `}</Code>
                    <p>
                        Per maggiore chiarezza, si possono scrivere in notazione scientifica:
                    </p>
                    <Code>{r`
                        4.2e1
                    `}</Code>
                </Panel>
            </Section>
            <Section>
                <Panel title={"str"}>
                    <p>
                        Le <code>str</code> rappresentano del testo Unicode.
                    </p>
                    <p>
                        Il testo va racchiuso tra uno dei due tipi di virgolette:
                    </p>
                    <Code>{r`
                        "Ciaone!"
                        'Ciaone!'
                    `}</Code>
                    <p>
                        Se nel testo compare lo stesso tipo di virgoletta usato come delimitatore, va prefisso un backslash ad ogni ricorrenza:
                    </p>
                    <Code>{r`
                        "Ciaone dall'Italia!"
                        'Ciaone dall\'Italia!'
                    `}</Code>
                    <p>
                        Il testo può contenere qualsiasi carattere Unicode:
                    </p>
                    <Code>{r`
                        "bel memë amicø 🔥"
                    `}</Code>
                    <p>
                        È possibile creare testi che continuino su più linee inserendo il delimitatore tre volte:
                    </p>
                    <Code>{r`
                        """
                        questa
                        stringa
                        è su più
                        righe
                        """
                    `}</Code>
                </Panel>
                <Panel title={"bytes"}>
                    <p>
                        I <code>bytes</code> rappresentano delle sequenze di bytes (rappresentate in ASCII).
                    </p>
                    <p>
                        I valori vanno racchiusi tra virgolette, più una <code>b</code> all'inizio:
                    </p>
                    <Code>{r`
                        b"Ciaone!"
                        b'Ciaone!'
                    `}</Code>
                    <p>
                        È possibile inserire valori che non corrispondono ad un carattere con <code>{r`\xXX`}</code>, dove XX è il valore dei due byte.
                    </p>
                    <Code>{r`
                        b"\x00\x01\x02\x03\x04"
                        b'\x63\x69\x61\x6f\x6e\x65'
                    `}</Code>
                    <p>
                        Possono rappresentare un particolare encoding (UTF-8) di una <code>str</code>:
                    </p>
                    <Code>{r`
                        b"bel mem\xc3\xab amic\xc3\xb8 \xf0\x9f\x94\xa5"
                    `}</Code>
                    <p>
                        Possono continuare su più linee inserendo le virgolette tre volte <i>(ma non fatelo, per piacere)</i>.
                    </p>
                    <Code>{r`
                        b"""
                        questi
                        bytes
                        sono su più
                        righe
                        """
                    `}</Code>
                </Panel>
            </Section>
            <Section>
                <Panel title={"Tuple"}>
                    <p>
                        Insiemi di zero, uno, o qualsiasi numero di valori:
                    </p>
                    <Code>{r`
                        ()
                        
                        (1,)
                        
                        (1, 2, 3, 5)
                    `}</Code>
                    <p>
                        Possono non essere omogenei:
                    </p>
                    <Code>{r`
                        (1, 2.0, "tre", b"cinque")
                    `}</Code>
                </Panel>
            </Section>
        </Fragment>

        </CodeDefaultLanguage.Provider>
    )
}
