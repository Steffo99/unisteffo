(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"9cHI":function(i,e,l){"use strict";l.r(e),function(i){l("hosL");var n=l("OPqz"),t=l("imVn"),o=(l("Wxxq"),l("c6ws"),l("QNda"));e.default=function(){return i("div",null,i("h1",null,"Apprendimento ed evoluzione in sistemi artificiali"),i(n.a,{title:"Informazioni"},i(t.a,{title:"Contatti"},i("ul",null,i("li",null,i("a",{href:"mailto:marco.villani@unimore.it"},"Prof. Marco Villani")))),i(t.a,{title:"Archivio"},i("p",null,"Se sei uno ",i("b",null,"studente dell'Unimore"),", puoi accedere all'",i("b",null,i("a",{href:"https://drive.google.com/drive/folders/1GcjP1Z5UtRjyAag7qjFQ-kx3s06G8ZoP"},"archivio del corso su Google Drive"),"."),"."))),i(n.a,{title:"Esame"},i(t.a,{title:"Scritto"},i("ul",null,i("li",null,"Scegli 2 tra 6 domande possibili"),i("li",null,"90 minuti"))),i(t.a,{title:"Appelli"},i("ol",null,i("li",null,i(o.a,{to:"2020-06-23"})),i("li",null,i(o.a,{to:"2020-07-08"})),i("li",null,i(o.a,{to:"2020-07-22"}))))),i(n.a,{title:"NetLogo"},i(t.a,{title:"Cos'è?"},i("p",null,"NetLogo è un software di modellazione sistemi multiagente, da noi usato per le lezioni di laboratorio."),i("p",null,"Si può ",i("a",{href:"https://ccl.northwestern.edu/netlogo/download.shtml"},"scaricare")," o ",i("a",{href:"https://www.netlogoweb.org/launch"},"usare da browser"),"."),i("p",null,"Il suo codice sorgente è disponibile su ",i("a",{href:"https://github.com/NetLogo/NetLogo"},"GitHub"),", e ha una pagina di ",i("a",{href:"https://ccl.northwestern.edu/netlogo/docs/dictionary.html"},"documentazione"),"."),i("p",null,i("b",{style:"font-size: x-large;"},i("a",{href:"/apprendimento/netlogo"},"Consulta i miei appunti su NetLogo qui!"))))),i(n.a,{title:"Agenti"},i(t.a,{title:"Secondo il paradigma debole"},i("p",null,"Sono ",i("b",null,"sistemi")," con le seguenti caratteristiche:"),i("ul",null,i("li",null,i("b",null,"Autonomia"),": agiscono gli uni indipendentemente dagli altri"),i("li",null,i("b",null,"Reattività"),": percepiscono ciò che sta nel loro ambiente e ",i("i",null,"reagiscono")," ai cambiamenti di quest'ultimo"),i("li",null,i("b",null,"Proattività"),": agiscono in maniera tale da portare a termine i loro obiettivi"),i("li",null,i("b",null,"Socialità"),": comunicano con gli altri agenti, scambiando informazioni"))),i(t.a,{title:"Secondo il paradigma forte"},i("p",null,"Hanno anche caratteristiche di livello più alto derivate dalle quattro precedenti:"),i("ul",null,i("li",null,"Conoscenza"),i("li",null,"Intenzioni"),i("li",null,"Emozioni"),i("li",null,"Obblighi"),i("li",null,"Obiettivi"),i("li",null,"etc..."))),i(t.a,{title:"Caratteristiche aggiuntive"},i("p",null,"Gli agenti solitamente hanno anche:"),i("ul",null,i("li",null,i("b",null,"Mobilità"),": possono muoversi nell'ambiente"),i("li",null,i("b",null,"Veridicità"),": producono informazioni corrette"),i("li",null,i("b",null,"Benevolenza"),": agiscono nel modo corretto"),i("li",null,i("b",null,"Razionalità"),": compiono le azioni necessarie per raggiungere i loro obiettivi, e non altre che glielo impedirebbero")))),i(n.a,{title:"Architetture di agente"},i(t.a,{title:"Classe"},i("p",null,"Classificazione in base a ",i("b",null,"come prende le decisioni")," un agente:"),i("ul",null,i("li",null,i("b",null,"Logic-based"),": prende le decisioni attraverso deduzioni ",i("i",null,"logiche")),i("li",null,i("b",null,"Reactive"),": mappa una ",i("i",null,"reazione")," a ogni situazione dell'ambiente"),i("li",null,i("b",null,"Belief-desire-intention"),": per decidere, considera le proprie ",i("i",null,"assunzioni sul mondo")," (",i("i",null,"belief"),"), i propri ",i("i",null,"desideri")," (",i("i",null,"desire"),") e le sue ",i("i",null,"intenzioni")," correnti (",i("i",null,"intention"),")"),i("li",null,i("b",null,"Layered"),": utilizza diversi ",i("i",null,"strati")," di capacità cognitive per giungere a una decisione"))),i(t.a,{title:"Comportamento"},i("p",null,"Classificazione in base a ",i("b",null,"come sono definiti gli obiettivi")," di un agente:"),i("ul",null,i("li",null,i("b",null,"Teleonomico"),": gli obiettivi sono predefiniti ed espliciti"),i("li",null,i("b",null,"Riflessivo"),": l'agente è libero di scegliere il suo obiettivo in base alle proprie percezioni interne"))),i(t.a,{title:"Conoscenze"},i("p",null,"Classificazione in base a ",i("b",null,"quanto conosce dell'ambiente")," un agente:"),i("ul",null,i("li",null,i("b",null,"Cognitivo"),": l'agente è immediatamente a conoscenza di ",i("b",null,"tutto l'ambiente")),i("li",null,i("b",null,"Reattivo"),": l'agente deve scoprire l'ambiente con le sue capacità sensoriali")))),i(n.a,{title:"Sistemi multi-agente"},i(t.a,{title:"Vantaggi"},i("ul",null,i("li",null,i("b",null,"Distribuzione"),": più agenti possono coprire aree di ambiente più vaste, o elaborare più in fretta zone più dense di informazione"),i("li",null,i("b",null,"Rappresentazione"),": i sistemi multi-agente modellano più accuratamente il mondo reale")))))}}.call(this,l("hosL").h)},QNda:function(i,e,l){"use strict";(function(i){l.d(e,"a",(function(){return a}));var n=l("hosL"),t=l("e8JA"),o=l.n(t);class a extends n.Component{constructor(){super(),this.state={now:Date.now()},this.timer=null}componentDidMount(){this.timer=setInterval(()=>{this.setState({now:Date.now()})},1e3)}componentWillUnmount(){null!==this.timer&&clearInterval(this.timer)}render(){let e="Unknown date",l=o.a.timer,n={milliseconds:"?",seconds:"?",minutes:"?",hours:"?",days:"?"};if(this.props.to){e=new Date(this.props.to);let i=e-this.state.now;i>0?n={milliseconds:i%1e3,seconds:Math.floor(i/1e3)%60,minutes:Math.floor(i/6e4)%60,hours:Math.floor(i/36e5)%24,days:Math.floor(i/864e5)}:(n={milliseconds:0,seconds:0,minutes:0,hours:0,days:0},l+=" "+o.a.expired)}else l+=" "+o.a.unknown;return i("div",{class:l,title:e},i("div",{class:o.a.days+" "+o.a.count},n.days),i("div",{className:o.a.days+" "+o.a.text},"giorni"),i("div",{class:o.a.hours+" "+o.a.count},n.hours),i("div",{className:o.a.hours+" "+o.a.text},"ore"),i("div",{class:o.a.minutes+" "+o.a.count},n.minutes),i("div",{className:o.a.minutes+" "+o.a.text},"minuti"),i("div",{class:o.a.seconds+" "+o.a.count},n.seconds),i("div",{class:o.a.seconds+" "+o.a.text},"secondi"))}}}).call(this,l("hosL").h)},e8JA:function(i){i.exports={timer:"timer__3Z2pL",days:"days__myhe2",hours:"hours__3JUDn",minutes:"minutes__24lD7",seconds:"seconds__2vZ4f",count:"count__chi9X",text:"text__34ldC",unknown:"unknown__3sT2P",expired:"expired__zNiuP"}}}]);
//# sourceMappingURL=route-ApprendimentoSistemiArtificiali.chunk.12c88.esm.js.map