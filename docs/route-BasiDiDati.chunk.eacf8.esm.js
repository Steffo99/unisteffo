(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"8uYk":function(t){t.exports={box:"box__3cKyY",default:"default__v-emJ",red:"red__339Cz",orange:"orange__24_8v",yellow:"yellow__1Jo9W",lime:"lime__34yV5",cyan:"cyan__3RqLr",blue:"blue__13Wnj",magenta:"magenta__2tkzq"}},OPqz:function(t,n,e){"use strict";(function(t){var l=e("TWV3"),i=e("hosL");n.a=function(n){return t(i.Fragment,null,t("h2",null,n.title),t(l.a,null,n.children))}}).call(this,e("hosL").h)},OmdA:function(t){t.exports={title:"title__3ZVpg",contents:"contents__20_NI"}},QNda:function(t,n,e){"use strict";(function(t){e.d(n,"a",(function(){return o}));var l=e("hosL"),i=e("e8JA"),s=e.n(i);class o extends l.Component{constructor(){super(),this.state={now:Date.now()},this.timer=null}componentDidMount(){this.timer=setInterval(()=>{this.setState({now:Date.now()})},1e3)}componentWillUnmount(){null!==this.timer&&clearInterval(this.timer)}render(){let n="Unknown date",e=s.a.timer,l={milliseconds:"?",seconds:"?",minutes:"?",hours:"?",days:"?"};if(this.props.to){n=new Date(this.props.to);let t=n-this.state.now;t>0?l={milliseconds:t%1e3,seconds:Math.floor(t/1e3)%60,minutes:Math.floor(t/6e4)%60,hours:Math.floor(t/36e5)%24,days:Math.floor(t/864e5)}:(l={milliseconds:0,seconds:0,minutes:0,hours:0,days:0},e+=" "+s.a.expired)}else e+=" "+s.a.unknown;return t("div",{class:e,title:n},t("div",{class:s.a.days+" "+s.a.count},l.days),t("div",{className:s.a.days+" "+s.a.text},"giorni"),t("div",{class:s.a.hours+" "+s.a.count},l.hours),t("div",{className:s.a.hours+" "+s.a.text},"ore"),t("div",{class:s.a.minutes+" "+s.a.count},l.minutes),t("div",{className:s.a.minutes+" "+s.a.text},"minuti"),t("div",{class:s.a.seconds+" "+s.a.count},l.seconds),t("div",{class:s.a.seconds+" "+s.a.text},"secondi"))}}}).call(this,e("hosL").h)},"S+8T":function(t,n,e){"use strict";e.r(n),function(t){e.d(n,"default",(function(){return a}));var l=e("hosL"),i=e("OPqz"),s=e("imVn"),o=e("QNda");class a extends l.Component{render(){return t("div",null,t("h1",null,"Basi di dati"),t(i.a,{title:"Esame"},t(s.a,{title:"Scritto"},t("p",null,"Uno scritto con tre domande:"),t("ul",null,t("li",null,"Progettazione concettuale e logica"),t("li",null,"Formulazione interrogazione"),t("li",null,"Una domanda tra:",t("ul",null,t("li",null,"Studio dato derivato"),t("li",null,"Progettazione fisica"),t("li",null,"Tecnologia database"))))),t(s.a,{title:"Prossimi appelli"},t("ol",null,t("li",null,t(o.a,{to:"2020-06-24"})),t("li",null,t(o.a,{to:"2020-07-09"})),t("li",null,t(o.a,{to:"2020-07-28"})))),t(s.a,{title:"Progetto"},t("p",null,"In gruppo, progettare un database secondo ",t("a",{href:"https://t.me/unimorefiles/23"},"queste")," specifiche."),t("p",null,"Va consegnato almeno 10 giorni prima dell'esame."),t("p",null,"Consegnando il progetto prima della fine di Luglio si otterrà un bonus!"),t(o.a,{to:"2020-07-31 23:59:59"}),t("p",null,"Esempi di progetti degli anni passati:"),t("ul",null,t("li",null,t("a",{href:"https://t.me/unimorefiles/25"},"Esempio 1")),t("li",null,t("a",{href:"https://t.me/unimorefiles/26"},"Esempio 2"))),t("p",null,"Presentando il progetto si otterrà un bonus!"))))}}}.call(this,e("hosL").h)},TWV3:function(t,n,e){"use strict";(function(t){var l=e("htlC"),i=e.n(l);n.a=function(n){let e;return e=Array.isArray(n.children)?n.children.map(n=>t("div",{class:i.a.splitchild},n)):t("div",{class:i.a.splitchild},n.children),t("div",{class:i.a.split},t("div",{class:i.a.splitparent},e))}}).call(this,e("hosL").h)},Y9Ml:function(t,n,e){"use strict";(function(t){var l=e("8uYk"),i=e.n(l);const s=Object.freeze({RED:i.a.red,ORANGE:i.a.orange,YELLOW:i.a.yellow,LIME:i.a.lime,CYAN:i.a.cyan,BLUE:i.a.blue,MAGENTA:i.a.magenta,DEFAULT:i.a.default});n.a=function(n){let e=s.DEFAULT;return n.color&&(e=n.color),t("div",{class:i.a.box+" "+e},n.children)}}).call(this,e("hosL").h)},e8JA:function(t){t.exports={timer:"timer__3Z2pL",days:"days__myhe2",hours:"hours__3JUDn",minutes:"minutes__24lD7",seconds:"seconds__2vZ4f",count:"count__chi9X",text:"text__34ldC",unknown:"unknown__3sT2P",expired:"expired__zNiuP"}},htlC:function(t){t.exports={splitparent:"splitparent__3-wBs",splitchild:"splitchild__begkX"}},imVn:function(t,n,e){"use strict";(function(t){var l=e("OmdA"),i=e.n(l),s=e("Y9Ml");n.a=function(n){return t(s.a,{color:n.color},t("h3",{class:i.a.title},n.title),t("div",{class:i.a.contents},n.children))}}).call(this,e("hosL").h)}}]);
//# sourceMappingURL=route-BasiDiDati.chunk.eacf8.esm.js.map