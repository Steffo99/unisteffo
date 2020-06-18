import {Panel} from "bluelib";


export default function(props) {
	return (
		<div>
			<h1>Come installare MinGW</h1>
			<Panel>
				<p> Scaricate <a href="https://osdn.net/projects/mingw/downloads/68260/mingw-get-setup.exe/">l'installer ufficiale</a>,
					ed eseguitelo.</p><img src="https://i.imgur.com/mDZSqjV.png" alt=""/>
				<p> Dovrebbe comparire questa schermata. Cliccate su <code>Install</code>, poi scegliete una cartella di installazione
					(ricordatevela!) e poi <code>Continue</code>. Lasciate stare le altre opzioni, dovrebbero essere tutte spuntate,
					tranne <code>For all users</code>, che dovrebbe essere disattivato.</p><img src="https://i.imgur.com/brdw8Xy.png" alt=""/>
				<p> Aspettate che finisca il download. Pochi secondi dopo, dovrebbe finire e dovrebbe apparire un tasto
					<code>Continue</code>. Premetelo.</p><img src="https://i.imgur.com/aPTwrxz.png" alt=""/>
				<p> Dovrebbe apparirvi questa finestra. L'installer di MinGW è una specie di gestore pacchetti (tipo <code>apt</code> su
					Ubuntu); potete scegliere quali pacchetti installare, e quindi quali funzionalità.</p><img src="https://i.imgur.com/5QLSkFN.png" alt=""/>
				<p> Nel nostro caso, dovrebbero servirci <code>mingw32-base-bin</code> (per il C e alcune librerie C++) e
					<code>mingw32-gcc-g++-bin</code> (per il C++). Cliccate, quindi, sui due quadratini corrispondenti, e premete
					<code>Mark for Installation</code>. Dovrebbe comparire una freccia gialla sul quadratino.</p><img src="https://i.imgur.com/zP74nks.png" alt=""/>
				<p> Ora, è il momento di installare i pacchetti. Aprite il menù <code>Installation</code>, poi premete
					<code>Apply Changes</code>, e di nuovo <code>Apply</code>.</p><img src="https://i.imgur.com/jp4uz5B.png" alt=""/>
				<p> Lasciate che scarichi, ci vorrà un po'. Guardatevi un video nel frattempo, fatevi una partitina a qualcosa, tornate
					dopo circa 10 minuti.</p><img src="https://i.imgur.com/Lq9IepY.png" alt=""/>
				<p> Una volta installato, dobbiamo aggiungere <code>g++</code> ai programmi eseguibili da Prompt dei Comandi: premete il
					tasto <kbd>Windows</kbd>, e scrivete <code>PATH</code>. Windows dovrebbe trovarvi automaticamente quell'opzione.</p>
				<img src="https://i.imgur.com/dy3b5Ub.png" alt=""/>
				<p> Dentro la finestra di <i>Proprietà del Sistema</i>, premete <code>Variabili d'ambiente</code>.</p><img src="https://i.imgur.com/FjYpT1n.png" alt=""/>
				<p> Trovate la variabile d'ambiente globale <code>Path</code>, e fateci doppio click per modificarla.</p><img src="https://i.imgur.com/klZQ9So.png" alt=""/>
				<p> Ora dovreste vedere l'elenco di tutte le cartelle contenenti programmi eseguibili da terminale: dobbiamo aggiungere
					quella di MinGW! Premete <code>Sfoglia</code>.</p><img src="https://i.imgur.com/F6lBCqS.png" alt=""/>
				<p> Trovate la cartella in cui avete installato MinGW (vi avevo detto di ricordarvela!); entrateci, poi selezionate la
					sottocartella <code>bin</code> e premete <code>OK</code> su tutte le finestre che avete aperto fino ad ora,
					chiudendole.</p>
				<p> Complimenti! Avete installato MinGW e potete compilare programmi C e C++ da Windows! Avete a disposizione
					<code>gcc</code> e <code>g++</code> sul Prompt dei Comandi, e potete finalmente creare dei file .exe! </p>
			</Panel>
		</div>
	);
}

