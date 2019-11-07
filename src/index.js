import './index.css';
import { Component } from 'preact';
import Latex from './components/latex';
import Panel from './components/panel';
import Split from './components/split';

export default class App extends Component {
	render() {
		return (
			<div>
				<h1>
					Titolo
				</h1>
				<h2>
					Sottotitolo
				</h2>
				<Panel>
					Ciao! Sono un paragrafo che include formule matematiche: <Latex>a_1 + b_2 + c_3</Latex>!
				</Panel>
				<Split>
					<Panel>
						<h3>Sottoaceto</h3>
						<Split>
							<Panel>
								<h4>Ligma</h4>
								<div>
									Andross gave his troops ligma!
								</div>
							</Panel>
							<Panel>
								<h4>Sugma</h4>
								<div>
									SLIPPY NO
								</div>
							</Panel>
							<Panel>
								<h4>Bofa</h4>
								<div>
									Falco Lombardi
								</div>
							</Panel>
						</Split>
					</Panel>
					<Panel>
						<h3>Sottolio</h3>
						<div>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</div>
					</Panel>
					<Panel>
						<h3>Kebab</h3>
						<div>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</div>
					</Panel>
				</Split>
			</div>
		);
	}
}
