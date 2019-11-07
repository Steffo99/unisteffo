import style from './fisica.css';
import { Component } from 'preact';
import Latex from '../components/latex';
import Panel from '../components/panel';
import Split from '../components/split';

export default class Fisica extends Component {
	render() {
        return (
            <div>
                <h1>Fisica</h1>
                <h2>Vettori</h2>
                <Split>
                    <Panel>
                        <h3>
                            Componenti cartesiane
                        </h3>
                        <p>
                            Usa le regole base della trigonometria:
                        </p>
                        <p>
                            <Latex>{String.raw`\vec{v} = \vec{v_x} + \vec{v_y}`}</Latex>
                        </p>
                        <p>
                            <Latex>{String.raw`\left | \vec{v_x} \right | = \left | \vec{v} \right | \sin \alpha`}</Latex>
                        </p>
                        <p>
                            <Latex>{String.raw`\left | \vec{v_y} \right | = \left | \vec{v} \right | \cos \alpha`}</Latex>
                        </p>
                    </Panel>
                    <Panel>
                        <h3>
                            Somma
                        </h3>
                        <p>
                            Scomponi in componenti, poi sommali:
                        </p>
                        <p>
                            <Latex>{String.raw`\vec{v} + \vec{w} = (\vec{v_x} + \vec{w_x}) + (\vec{v_y} + \vec{w_y})`}</Latex>
                        </p>
                        <p>
                            Produce il vettore risultante dall'applicazione della regola del parallelogramma.
                        </p>
                    </Panel>
                    <Panel>
                        <h3>
                            Differenza
                        </h3>
                        <p>
                            Alla fine è sempre una somma:
                        </p>
                        <p>
                            <Latex>{String.raw`\vec{v} - \vec{w} = (\vec{v_x} - \vec{w_x}) + (\vec{v_y} - \vec{w_y})`}</Latex>
                        </p>
                        <p>
                            Produce il vettore che parte da <Latex>w</Latex> e arriva a <Latex>v</Latex>.
                        </p>
                    </Panel>
                    <Panel>
                        <h3>
                            Prodotto scalare
                        </h3>
                        <p>
                            Si chiama scalare perchè il risultato è uno scalare, non un vettore.
                        </p>
                        <p>
                            <Latex>{String.raw`\vec{v} \cdot \vec{w} = \left | \vec{v} \right | \left | \vec{w} \right | \cos \alpha`}</Latex>
                        </p>
                        <p>
                            Produce il modulo della proiezione di <Latex>{String.raw`\vec{a}`}</Latex> su <Latex>{String.raw`\vec{b}`}</Latex>.
                        </p>
                    </Panel>
                </Split>
                <h2>
                    Forza di gravità
                </h2>
                <Split>
                    <Panel>
                        <h3>
                            Tra due corpi
                        </h3>
                        <p>
                            Due corpi puntiformi si attirano uno verso l'altro con forza:
                        </p>
                        <p>
                            <Latex>{String.raw`\left | \vec{F} \right | = G \frac{m_1 m_2}{r^2}`}</Latex>
                        </p>
                        <p>
                            <Latex>G</Latex> è la <i>costante di gravitazione universale</i> e vale:
                        </p>
                        <p>
                            <Latex>{String.raw`G = 6.67 \cdot 10^{-11} \frac{N m^2}{{kg}^2}`}</Latex>
                        </p>
                    </Panel>
                    <Panel>
                        <h3>
                            Verso la Terra
                        </h3>
                        <p>
                            Se nel sistema di riferimento consideriamo la Terra ferma, allora un corpo è attratto verso la Terra con forza:
                        </p>
                        <p>
                            <Latex>{String.raw`\left | \vec{F} \right | = g m`}</Latex>
                        </p>
                        <p>
                            <Latex>g</Latex> è la <i>costante di gravità</i> della Terra, e vale:
                        </p>
                        <p>
                            <Latex>{String.raw`g = 9.81 \frac{m}{s^2}`}</Latex>
                        </p>
                    </Panel>
                    <Panel>
                        <h3>
                            Su pianeti diversi
                        </h3>
                        <p>
                            Per pianeti diversi dalla Terra vale la stessa regola:
                        </p>
                        <p>
                            <Latex>{String.raw`\left | \vec{F} \right | = g m`}</Latex>
                        </p>
                        <p>
                            L'unica differenza è che cambia la <i>costante di gravità</i>:
                        </p>
                        <p>
                            <Latex>{String.raw`g_{luna} = 1.62 \frac{m}{s^2}`}</Latex>
                        </p>
                        <p>
                            <Latex>{String.raw`g_{marte} = 3.71 \frac{m}{s^2}`}</Latex>
                        </p>
                    </Panel>
                </Split>
                <h2>
                    Forze di contatto
                </h2>
                <Split>
                    <Panel>
                        <h3>
                            Forza normale
                        </h3>
                        <p>
                            Si oppone alle forze applicate alla superficie di contatto.
                        </p>
                        <Panel>
                            Un libro appoggiato su un tavolo ha la <b>forza di gravità</b> che lo attira verso il terreno e la <b>forza normale</b> che lo trattiene dal cadere. 
                        </Panel>
                    </Panel>
                    <Panel>
                        <h3>
                            Attrito statico
                        </h3>
                        <p>
                            Impedisce a un corpo di muoversi se non viene spinto da una forza che supera una certa soglia:
                        </p>
                        <p>
                            <Latex>{String.raw`\left | \vec{F} \right | \leq \mu_{s} \left | \vec{F_{normale}} \right |`}</Latex>
                        </p>
                    </Panel>
                    <Panel>
                        <h3>
                            Attrito dinamico
                        </h3>
                        <p>
                            Rallenta i corpi che si stanno muovendo finchè essi non si fermano:
                        </p>
                        <p>
                            <Latex>{String.raw`\left | \vec{F} \right | \leq \mu_{d} \left | \vec{F_{normale}} \right |`}</Latex>
                        </p>
                    </Panel>
                </Split>
            </div>
        )
	}
}