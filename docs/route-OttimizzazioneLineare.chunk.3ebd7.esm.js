(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"2e/m":function(l,n,i){"use strict";(function(l){var e=i("UrZR"),a=i.n(e);n.a=function(n){return l("table",{class:a.a.tablepanel},n.children)}}).call(this,i("hosL").h)},"3duz":function(l){l.exports={example:"example__9acWs"}},"8uYk":function(l){l.exports={box:"box__3cKyY",default:"default__v-emJ",red:"red__339Cz",orange:"orange__24_8v",yellow:"yellow__1Jo9W",lime:"lime__34yV5",cyan:"cyan__3RqLr",blue:"blue__13Wnj",magenta:"magenta__2tkzq"}},FP0W:function(l,n,i){"use strict";(function(l){var e=i("VQ5Y"),a=i.n(e);n.a=function(n){return l("abbr",{class:a.a.min,title:"In problemi in cui il primale è di minimizzazione."},n.children?n.children:"min")}}).call(this,i("hosL").h)},JESo:function(l){l.exports={inline:"inline__1yl8V",block:"block__fPiiB"}},JyGO:function(l,n,i){"use strict";(function(l){var e=i("VQ5Y"),a=i.n(e);n.a=function(n){return l("abbr",{class:a.a.finite,title:"I punti del poliedro sono finiti."},n.children?n.children:"finito")}}).call(this,i("hosL").h)},KN5E:function(l){l.exports={todo:"todo__2IWIS"}},OPqz:function(l,n,i){"use strict";(function(l){var e=i("TWV3"),a=i("hosL");n.a=function(n){return l(a.Fragment,null,l("h2",null,n.title),l(e.a,null,n.children))}}).call(this,i("hosL").h)},OmdA:function(l){l.exports={title:"title__3ZVpg",contents:"contents__20_NI"}},Q7TX:function(l,n,i){"use strict";(function(l){var e=i("JESo"),a=i.n(e),t=i("QRet"),o=i("8CDw"),u=i("wQ73");n.a=function(n){let i,e=Object(t.b)(o.a),r=Object(t.b)(u.a);return i=void 0===n.inline?r:n.inline,l("img",i?{src:`https://latex.codecogs.com/svg.latex?\\inline {\\color{${e}} ${n.children} }`,alt:n.children,title:n.children,class:a.a.latex+" "+a.a.inline}:{src:`https://latex.codecogs.com/svg.latex?{\\color{${e}} ${n.children} }`,alt:n.children,title:n.children,class:a.a.latex+" "+a.a.block})}}).call(this,i("hosL").h)},QNda:function(l,n,i){"use strict";(function(l){i.d(n,"a",(function(){return o}));var e=i("hosL"),a=i("e8JA"),t=i.n(a);class o extends e.Component{constructor(){super(),this.state={now:Date.now()},this.timer=null}componentDidMount(){this.timer=setInterval(()=>{this.setState({now:Date.now()})},1e3)}componentWillUnmount(){null!==this.timer&&clearInterval(this.timer)}render(){let n="Unknown date",i=t.a.timer,e={milliseconds:"?",seconds:"?",minutes:"?",hours:"?",days:"?"};if(this.props.to){n=new Date(this.props.to);let l=n-this.state.now;l>0?e={milliseconds:l%1e3,seconds:Math.floor(l/1e3)%60,minutes:Math.floor(l/6e4)%60,hours:Math.floor(l/36e5)%24,days:Math.floor(l/864e5)}:(e={milliseconds:0,seconds:0,minutes:0,hours:0,days:0},i+=" "+t.a.expired)}else i+=" "+t.a.unknown;return l("div",{class:i,title:n},l("div",{class:t.a.days+" "+t.a.count},e.days),l("div",{className:t.a.days+" "+t.a.text},"giorni"),l("div",{class:t.a.hours+" "+t.a.count},e.hours),l("div",{className:t.a.hours+" "+t.a.text},"ore"),l("div",{class:t.a.minutes+" "+t.a.count},e.minutes),l("div",{className:t.a.minutes+" "+t.a.text},"minuti"),l("div",{class:t.a.seconds+" "+t.a.count},e.seconds),l("div",{class:t.a.seconds+" "+t.a.text},"secondi"))}}}).call(this,i("hosL").h)},QRet:function(l,n,i){"use strict";function e(l,n){q.options.__h&&q.options.__h(z,l,w||n),w=0;var i=z.__H||(z.__H={__:[],__h:[]});return l>=i.__.length&&i.__.push({}),i.__[l]}function a(l){return w=1,t(v,l)}function t(l,n,i){var a=e(g++,2);return a.t=l,a.__c||(a.__c=z,a.__=[i?i(n):v(void 0,n),function(l){var n=a.t(a.__[0],l);a.__[0]!==n&&(a.__[0]=n,a.__c.setState({}))}]),a.__}function o(l,n){var i=e(g++,3);!q.options.__s&&_(i.__H,n)&&(i.__=l,i.__H=n,z.__H.__h.push(i))}function u(l,n){var i=e(g++,4);!q.options.__s&&_(i.__H,n)&&(i.__=l,i.__H=n,z.__h.push(i))}function r(l){return w=5,c((function(){return{current:l}}),[])}function s(l,n,i){w=6,u((function(){"function"==typeof l?l(n()):l&&(l.current=n())}),null==i?i:i.concat(l))}function c(l,n){var i=e(g++,7);return _(i.__H,n)?(i.__H=n,i.__h=l,i.__=l()):i.__}function d(l,n){return w=8,c((function(){return l}),n)}function m(l){var n=z.context[l.__c],i=e(g++,9);return i.__c=l,n?(null==i.__&&(i.__=!0,n.sub(z)),n.props.value):l.__}function f(l,n){q.options.useDebugValue&&q.options.useDebugValue(n?n(l):l)}function b(){T.some((function(l){if(l.__P)try{l.__H.__h.forEach(h),l.__H.__h.forEach(p),l.__H.__h=[]}catch(n){return l.__H.__h=[],q.options.__e(n,l.__v),!0}})),T=[]}function h(l){"function"==typeof l.u&&l.u()}function p(l){l.u=l.__()}function _(l,n){return!l||n.some((function(n,i){return n!==l[i]}))}function v(l,n){return"function"==typeof n?n(l):n}i.d(n,"j",(function(){return a})),i.d(n,"h",(function(){return t})),i.d(n,"d",(function(){return o})),i.d(n,"f",(function(){return u})),i.d(n,"i",(function(){return r})),i.d(n,"e",(function(){return s})),i.d(n,"g",(function(){return c})),i.d(n,"a",(function(){return d})),i.d(n,"b",(function(){return m})),i.d(n,"c",(function(){return f}));var g,z,x,q=i("hosL"),w=0,T=[],L=q.options.__r,S=q.options.diffed,y=q.options.__c,A=q.options.unmount;q.options.__r=function(l){L&&L(l),g=0;var n=(z=l.__c).__H;n&&(n.__h.forEach(h),n.__h.forEach(p),n.__h=[])},q.options.diffed=function(l){S&&S(l);var n=l.__c;n&&n.__H&&n.__H.__h.length&&(1!==T.push(n)&&x===q.options.requestAnimationFrame||((x=q.options.requestAnimationFrame)||function(l){var n,i=function(){clearTimeout(e),cancelAnimationFrame(n),setTimeout(l)},e=setTimeout(i,100);"undefined"!=typeof window&&(n=requestAnimationFrame(i))})(b))},q.options.__c=function(l,n){n.some((function(l){try{l.__h.forEach(h),l.__h=l.__h.filter((function(l){return!l.__||p(l)}))}catch(i){n.some((function(l){l.__h&&(l.__h=[])})),n=[],q.options.__e(i,l.__v)}})),y&&y(l,n)},q.options.unmount=function(l){A&&A(l);var n=l.__c;if(n&&n.__H)try{n.__H.__.forEach(h)}catch(l){q.options.__e(l,n.__v)}}},RMzO:function(l,n,i){"use strict";i("KN5E"),n.a=function(){return null}},SgMg:function(l,n,i){"use strict";(function(l){var e=i("VQ5Y"),a=i.n(e);n.a=function(n){return l("abbr",{class:a.a.max,title:"In problemi in cui il primale è di massimizzazione."},n.children?n.children:"max")}}).call(this,i("hosL").h)},TWV3:function(l,n,i){"use strict";(function(l){var e=i("htlC"),a=i.n(e);n.a=function(n){let i;return i=Array.isArray(n.children)?n.children.map(n=>l("div",{class:a.a.splitchild},n)):l("div",{class:a.a.splitchild},n.children),l("div",{class:a.a.split},l("div",{class:a.a.splitparent},i))}}).call(this,i("hosL").h)},UEzA:function(l,n,i){"use strict";(function(l){var e=i("zDbI");n.a=function(n){return l("p",null,l(e.a,null,n.children))}}).call(this,i("hosL").h)},UrZR:function(l){l.exports={tablepanel:"tablepanel__1Wil3"}},VQ5Y:function(l){l.exports={unbounded:"unbounded__KZ9A2",unfeasible:"unfeasible__9LnzW",finite:"finite__3_e9S",min:"min__3VEkp",max:"max__BtCuw"}},Wxxq:function(l,n,i){"use strict";(function(l){var e=i("3duz"),a=i.n(e);i("hosL"),n.a=function(n){return l("div",{class:a.a.example},n.children)}}).call(this,i("hosL").h)},Y9Ml:function(l,n,i){"use strict";(function(l){var e=i("8uYk"),a=i.n(e);const t=Object.freeze({RED:a.a.red,ORANGE:a.a.orange,YELLOW:a.a.yellow,LIME:a.a.lime,CYAN:a.a.cyan,BLUE:a.a.blue,MAGENTA:a.a.magenta,DEFAULT:a.a.default});n.a=function(n){let i=t.DEFAULT;return n.color&&(i=n.color),l("div",{class:a.a.box+" "+i},n.children)}}).call(this,i("hosL").h)},Z395:function(l,n,i){"use strict";(function(l){var e=i("VQ5Y"),a=i.n(e);n.a=function(n){return l("abbr",{class:a.a.unfeasible,title:"Il poliedro non contiene punti."},n.children?n.children:"vuoto")}}).call(this,i("hosL").h)},"e3h+":function(l,n,i){"use strict";(function(l){var e=i("VQ5Y"),a=i.n(e);n.a=function(n){return l("abbr",{class:a.a.unbounded,title:"I punti del poliedro sono infiniti."},n.children?n.children:"illimitato")}}).call(this,i("hosL").h)},e8JA:function(l){l.exports={timer:"timer__3Z2pL",days:"days__myhe2",hours:"hours__3JUDn",minutes:"minutes__24lD7",seconds:"seconds__2vZ4f",count:"count__chi9X",text:"text__34ldC",unknown:"unknown__3sT2P",expired:"expired__zNiuP"}},hasd:function(l,n,i){"use strict";i.r(n),function(l){var e=i("OPqz"),a=i("Q7TX"),t=i("imVn"),o=i("Wxxq"),u=i("RMzO"),r=i("QNda"),s=i("Z395"),c=i("e3h+"),d=i("FP0W"),m=i("SgMg"),f=i("UEzA"),b=i("wQ73"),h=i("2e/m"),p=i("JyGO");let _,v,g,z,x,q,w,T,L,S,y,A,I,C,V,E,F,O,D,U,H,k,P,R,Q,M,j,N,W,Y,J,B,G,Z,X,K,$,ll,nl,il,el,al,tl,ol,ul,rl,sl,cl,dl,ml,fl,bl,hl,pl,_l,vl,gl,zl,xl,ql,wl,Tl,Ll,Sl,yl=l=>l;const Al=String.raw;n.default=function(){return l("div",null,l("h1",null,"Ottimizzazione lineare intera"),l(e.a,{title:"Unimore"},l(t.a,{title:"Videolezioni su YouTube"},l("p",null,"Ho rimosso il rumore in sottofondo da tutti i video di Ricerca Operativa!"),l("p",null,l("b",null,l("a",{href:"https://www.youtube.com/playlist?list=PLh93e8qjTszffkHNn-19CqUOhHFbhBlBh"},"Guardate i video qui!")))),l(t.a,{title:"Prossimi appelli"},l("ol",null,l("li",null,l(r.a,{to:"2020-06-08"})),l("li",null,l(r.a,{to:"2020-06-25"})),l("li",null,l(r.a,{to:"2020-07-14"}))))),l(b.a.Provider,{value:!1},l(e.a,{title:"Glossario"},l(h.a,null,l("thead",null,l("tr",null,l("th",null,l("abbr",{title:"Vettore / matrice"},"v")),l("th",null,l("abbr",{title:"Elemento singolo"},"s")),l("th",null,"Significato"))),l("tbody",null,l("tr",null,l("td",null,l(a.a,null,Al(_||(_=yl`\mathbf{x}`)))),l("td",null,l(a.a,null,Al(v||(v=yl`x_i`)))),l("td",null,"Incognite")),l("tr",null,l("td",null,l(a.a,null,Al(g||(g=yl`\mathbf{s}`)))),l("td",null,l(a.a,null,Al(z||(z=yl`s_i`)))),l("td",null,"Variabili slack")),l("tr",null,l("td",null,l(a.a,null,Al(x||(x=yl`\mathbf{c}`)))),l("td",null,l(a.a,null,Al(q||(q=yl`c_i`)))),l("td",null,"Coefficienti della funzione obiettivo")),l("tr",null,l("td",null,l(a.a,null,Al(w||(w=yl`\mathbf{A}`)))),l("td",null,l(a.a,null,Al(T||(T=yl`a_{ij}`)))),l("td",null,"Coefficienti dei vincoli")),l("tr",null,l("td",null,l(a.a,null,Al(L||(L=yl`\mathbf{b}`)))),l("td",null,l(a.a,null,Al(S||(S=yl`b_i`)))),l("td",null,"Termini noti dei vincoli")),l("tr",null,l("td",null,l(a.a,null,Al(y||(y=yl`\mathbf{y}`)))),l("td",null,l(a.a,null,Al(A||(A=yl`y_i`)))),l("td",null,"Incognite artificiali")),l("tr",null,l("td",null,l(a.a,null,Al(I||(I=yl`\mathbf{u}`)))),l("td",null,l(a.a,null,Al(C||(C=yl`u_i`)))),l("td",null,"Coefficienti di rilassamento")),l("tr",null,l("td",null),l("td",null,l(a.a,null,Al(V||(V=yl`c_0`)))),l("td",null,"Valore ottimo di un problema")),l("tr",null,l("td",null,l(a.a,null,Al(E||(E=yl`\mathbf{x}_B`)))),l("td",null),l("td",null,"Incognite in base")),l("tr",null,l("td",null,l(a.a,null,Al(F||(F=yl`\mathbf{c}_B`)))),l("td",null),l("td",null,"Coefficienti della funzione obiettivo delle variabili in base")),l("tr",null,l("td",null,l(a.a,null,Al(O||(O=yl`\mathbf{B}`)))),l("td",null),l("td",null,"Coefficienti dei vincoli delle variabili in base")),l("tr",null,l("td",null,l(a.a,null,Al(D||(D=yl`\mathbf{x}_F`)))),l("td",null),l("td",null,"Incognite fuori base")),l("tr",null,l("td",null,l(a.a,null,Al(U||(U=yl`\mathbf{c}_F`)))),l("td",null),l("td",null,"Coefficienti della funzione obiettivo delle variabili fuori base")),l("tr",null,l("td",null,l(a.a,null,Al(H||(H=yl`\mathbf{F}`)))),l("td",null),l("td",null,"Coefficienti dei vincoli delle variabili fuori base")))),l(h.a,null,l("thead",null,l("tr",null,l("th",null,"Simboli"),l("th",null,"Significato"))),l("tbody",null,l("tr",null,l("td",null,l(a.a,null,Al(k||(k=yl`\mathbf{c}^T \mathbf{x}`)))),l("td",null,"Soluzione del problema")),l("tr",null,l("td",null,l(a.a,null,Al(P||(P=yl`\mathbf{A} \mathbf{x} = \mathbf{b}`)))),l("td",null,"Vincoli in forma standard")),l("tr",null,l("td",null,l(a.a,null,Al(R||(R=yl`z(\dots)`)))),l("td",null,"Funzione obiettivo")),l("tr",null,l("td",null,l(a.a,null,Al(Q||(Q=yl`\mathbf{u}^T \mathbf{b}`)))),l("td",null,"Soluzione del problema duale")),l("tr",null,l("td",null,l(a.a,null,Al(M||(M=yl`\mathbf{u}^T \mathbf{A} = \mathbf{c}^T`)))),l("td",null,"Vincoli del problema duale in forma standard")))))),l(e.a,{title:"Le basi"},l(t.a,{title:"Funzione obiettivo"},l("p",null,"La funzione obiettivo è la funzione con valore noto sconosciuto:"),l("p",null,l(a.a,null,Al(j||(j=yl`z = C_1 \cdot x_1 + C_2 \cdot x_2 + C_n \cdot x_n`)))))),l(e.a,{title:"Problemi di ottimizzazione lineare"},l(t.a,{title:"Cosa sono?"},l("p",null,"I problemi di ottimizzazione lineare sono problemi che cercano di ",l(d.a,null,"minimizzare"),"/",l(m.a,null,"massimizzare")," il valore di una ",l("i",null,"funzione obiettivo")," le cui incognite sono sottoposte a un ",l("b",null,"sistema di ",l("i",null,"vincoli")),".")),l(t.a,{title:"Funzione obiettivo"},l("p",null,"La funzione da ",l(d.a,null,"minimizzare"),"/",l(m.a,null,"massimizzare"),"."),l("p",null,"Il vettore dei suoi coefficienti è detto ",l(a.a,null,Al(N||(N=yl`\mathbf{c}`))),", mentre quello delle sue incognite ",l(a.a,null,Al(W||(W=yl`\mathbf{x}`))),".")),l(t.a,{title:"Vincoli"},l("p",null,"Equazioni e disequazioni a cui devono sottostare le incognite perchè esse formino una soluzione valida."),l("p",null,"I loro coefficienti sono contenuti nella matrice ",l(a.a,null,Al(Y||(Y=yl`\mathbf{A}`))),", mentre i loro termini noti nel vettore ",l(a.a,null,Al(J||(J=yl`\mathbf{b}`))),".")),l(t.a,{title:"Valore ottimo"},l("p",null,"La ",l("b",null,"soluzione")," di un problema, ricavabile dal prodotto ",l(a.a,null,Al(B||(B=yl`\mathbf{c}^T \mathbf{x}`))),"."),l("p",null,"Spesso, la funzione obiettivo è indicata con il nome ",l(a.a,null,Al(G||(G=yl`z(\dots)`))),".")),l(t.a,{title:"Poliedro"},l("p",null,"L'",l("b",null,"insieme")," che racchiunde tutte le ",l("b",null,"soluzioni ammissibili")," di un problema."),l("p",null,"In particolare, il valore ottimo è un ",l("b",null,"vertice")," del poliedro, detto ",l("i",null,"vertice ottimo"),"."),l("p",null,"Può essere ",l("i",null,l(p.a,null)),", ",l("i",null,l(s.a,null))," oppure ",l("i",null,l(c.a,null)),".")),l(t.a,{title:"Gradiente"},l("p",null,l("b",null,"Funzione")," della funzione obiettivo che restituisce la direzione del suo aumento più veloce."),l("p",null,l(a.a,null,Al(Z||(Z=yl`\nabla f = \frac{\delta f}{\delta x_1} \mathbf{I}_1 + \frac{\delta f}{\delta x_2} \mathbf{I}_2 + \frac{\delta f}{\delta x_n} \mathbf{I}_n`)))),l(o.a,null,"La matrice ",l(a.a,null,Al(X||(X=yl`\mathbf{I}`)))," è la matrice identità."),l(o.a,null,"Se la funzione obiettivo è ",l(a.a,null,"z = 2w + 3x + 4y"),", il suo gradiente è ",l(a.a,null,Al(K||(K=yl`\nabla z = (2, 3, 4)`))),"."))),l(e.a,{title:"Forme di un problema di ottimizzazione"},l(t.a,{title:"Forma generale"},l("p",null,"Un problema con:"),l("ul",null,l("li",null,l("b",null,"Equazioni e disequazioni")),l("li",null,l("b",null,"Variabili non vincolate"))),l(f.a,null,Al($||($=yl`min \left\{ \mathbf{c}^T \mathbf{x} : \mathbf{A} \mathbf{x} = b,\quad \mathbf{A'} \mathbf{x} \geq \mathbf{b'} \quad x_j \geq 0,\quad j = 1 \dots n \right\}`)))),l(t.a,{title:"Forma canonica"},l("p",null,"Un problema con:"),l("ul",null,l("li",null,l("b",null,"Solo disequazioni")),l("li",null,l("b",null,"Vincoli di non-negatività sulle incognite"))),l(f.a,null,Al(ll||(ll=yl`min \left\{ \mathbf{c}^T \mathbf{x} : \mathbf{A} \mathbf{x} \geq b,\quad x_j \geq 0,\quad j = 1 \dots n \right\}`)))),l(t.a,{title:"Forma standard"},l("p",null,"Un problema con:"),l("ul",null,l("li",null,l("b",null,"Solo equazioni")),l("li",null,l("b",null,"Vincoli di non-negatività sulle incognite"))),l(f.a,null,Al(nl||(nl=yl`min \left\{ \mathbf{c}^T \mathbf{x} : \mathbf{A} \mathbf{x} = b,\quad x_j \geq 0,\quad j = 1 \dots n \right\}`))))),l(e.a,{title:"Conversioni tra le forme"},l(t.a,{title:"Standard e generale"},l("p",null,"Applica questa conversione a ogni equazione nel sistema:"),l("p",null,l(a.a,{inline:!1},Al(il||(il=yl`a = b \Leftrightarrow
                            \begin{cases}
                                a \leq b\\
                                a \geq b
                            \end{cases}
                        `)))),l(o.a,null,"Serve solo nella teoria per dimostrare che le forme sono equivalenti.")),l(t.a,{title:"Canonica e standard"},l("p",null,"Aggiungi una ",l("i",null,"variabile slack")," ",l(a.a,null,Al(el||(el=yl`s`)))," ",l("b",null,"non-vincolata")," a ogni disequazione nel sistema:"),l("p",null,l(a.a,{inline:!1},Al(al||(al=yl`
                            a \leq b \Leftrightarrow a + s = b
                        `)))),l("p",null,l(a.a,{inline:!1},Al(tl||(tl=yl`
                            a \geq b \Leftrightarrow a - s = b
                        `))))),l(t.a,{title:"Generale e canonica"},l("p",null,"Sdoppia ogni variabile non-vincolata in due variabili con vincolo di non-negatività:"),l("p",null,l(a.a,{inline:!1},Al(ol||(ol=yl`\begin{cases}
                            a = a^+ - a^-\\
                            a^+ \geq 0\\
                            a^- \geq 0
                        \end{cases}`)))))),l(e.a,{title:"La forma standard"},l(t.a,{title:"Tableau"},l("p",null,"Un modo per rappresentare sistemi in forma standard, anche noto come ",l("b",null,"matrice equivalente completa")," del sistema."),l(o.a,null,"Il sistema:",l("br",null),l("br",null),l(a.a,{inline:!1},Al(ul||(ul=yl`
                            \begin{cases}
                            2000x_1 + 1000x_2 = z\\
                            1x_1 \leq 3\\
                            1x_2 \leq 3\\
                            2x_1 + 2x_2 \leq 7
                            \end{cases}
                        `))),l("br",null),l("br",null),"Diventa il tableau:",l("br",null),l("br",null),l("table",{class:"right"},l("thead",null,l("tr",null,l("th",null,l("abbr",{title:"Termine noto"},"TN")),l("th",null,l(a.a,null,"x_1")),l("th",null,l(a.a,null,"x_2")),l("th",null,l(a.a,null,"s_1")),l("th",null,l(a.a,null,"s_2")))),l("tbody",null,l("tr",null,l("td",null,l(a.a,null,"z")),l("td",null,l(a.a,null,"2000")),l("td",null,l(a.a,null,"1000")),l("td",null,l(a.a,null,"0")),l("td",null,l(a.a,null,"0"))),l("tr",null,l("td",null,l(a.a,null,"3")),l("td",null,l(a.a,null,"1")),l("td",null,l(a.a,null,"0")),l("td",null,l(a.a,null,"1")),l("td",null,l(a.a,null,"0"))),l("tr",null,l("td",null,l(a.a,null,"3")),l("td",null,l(a.a,null,"0")),l("td",null,l(a.a,null,"1")),l("td",null,l(a.a,null,"0")),l("td",null,l(a.a,null,"1"))),l("tr",null,l("td",null,l(a.a,null,"7")),l("td",null,l(a.a,null,"2")),l("td",null,l(a.a,null,"2")),l("td",null,l(a.a,null,"0")),l("td",null,l(a.a,null,"0"))))))),l(t.a,{title:"Variabili nella base"},l("p",null,"Variabili che hanno ",l("b",null,"tutti 0 e un solo 1")," nella loro colonna del tableau."),l("p",null,"La loro controparte sono le ",l("i",null,"variabili fuori base"),", che hanno qualsiasi altro valore."))),l(e.a,{title:"Simplex primale"},l(t.a,{title:"Cos'è?"},l("p",null,"Un algoritmo per ",l(d.a,null,"minimizzare"),"/",l(m.a,null,"massimizzare")," trovare efficientemente ",l("b",null,"valore ottimo")," di problemi di ottimizzazione lineare, derivato da Gauss-Jordan."),l("p",null,"Da esso si può anche ricavare un ",l("b",null,"vertice ottimo ammissibile"),".",l("br",null),"C'è la possibilità che ne esistano anche altri: quello ottenuto dipende da come è stata effettuata la scelta delle variabili entranti."),l(o.a,null,"E' spiegato in modo semplice ",l("a",{href:"https://web.archive.org/web/20200523052252/https://www.cs.cmu.edu/~15451-f17/handouts/simplex.pdf"},"qui"),", e ci sono dei codici sorgenti di esempio ",l("a",{href:"https://www.cs.cmu.edu/~15451-f17/handouts/simplexcodes/"},"qui"),"."),l(o.a,{title:"Esempio"},l("p",null,l("a",{href:"https://i.imgur.com/1r405Mb.jpg"},"Questa")," è la soluzione passo per passo del problema 3 del file ",l("a",{href:"https://dolly.fim.unimore.it/2019/mod/resource/view.php?id=2716"},l("code",null,"Ex_LP_testo")),"."))),l(t.a,{title:"I passi"},l("ol",null,l("li",null,"Trasforma il sistema in ",l("b",null,"forma standard"),"."),l("li",null,"Trova tante variabili ",l("b",null,"linearmente indipendenti")," quante siano le righe: esse saranno la ",l("i",null,"base iniziale"),"."),l("li",null,"Finchè ci sono variabili con coefficienti ",l(d.a,null,"positivi"),"/",l(m.a,null,"negativi")," nella funzione obiettivo:",l("ol",null,l("li",null,l("b",null,"Scegli")," la prima variabile fuori base con coefficiente ",l(d.a,null,"positivo"),"/",l(m.a,null,"negativo")," nella funzione obiettivo: essa è la ",l("i",null,"variabile entrante"),".",l("br",null),l("aside",null,l("i",null,"Regola di Bland"),": Si potrebbe scegliere qualsiasi variabile come entrante, ma scegliendo sempre la prima ammissibile ci si assicura che l'algoritmo termini.")),l("li",null,l("b",null,"Scegli")," la variabile in base con il minor rapporto positivo ",l(a.a,null,Al(rl||(rl=yl`\frac{termine\ noto}{coeff.\ variabile\ entrante}`))),".",l("aside",null,"Se non sei riuscito a trovare nessuna variabile con un rapporto positivo, significa che il poliedro è ",l(c.a,null),".")),l("li",null,l("u",null,"Pivot"),": ",l("b",null,"riscrivi")," tutte le funzioni del sistema in termini della variabile entrante."))),l("li",null,"Il poliedro è ",l(p.a,null),": i ",l("b",null,"termini noti dei vincoli")," sono le coordinate del suo vertice ottimo, mentre il ",l("b",null,"termine noto della funzione obiettivo")," è il valore ottimo.")),l(o.a,null,"È praticamente l'algoritmo di Gauss-Jordan applicato al tableau, con delle regole aggiuntive per la decisione delle variabili di pivot.")),l(t.a,{title:"Soluzioni di base degenerata"},l("p",null,"Una soluzione con almeno una variabile di valore ",l(a.a,null,"0"),", dovuta a uno o più ",l("b",null,"vincoli ridondanti"),"."),l("p",null,"Senza ",l("b",null,"Regola di Bland")," e in presenza di vincoli ridondanti si rischia di trovarsi a fare pivot infiniti."))),l(e.a,{title:"Metodo delle due fasi"},l(t.a,{title:"Metodo delle due fasi"},l("p",null,"Un estensione del Simplex per permettere la risoluzione di problemi la cui origine non è una soluzione ammissibile."),l("p",null,"Prevede l'introduzione di un ",l("i",null,"problema ausiliario"),", le cui incognite sono dette ",l("i",null,"artificiali"),"."),l("p",null,"Il vettore delle incognite artificiali è solitamente chiamato ",l(a.a,null,Al(sl||(sl=yl`\mathbf{y}`))),"."),l(o.a,null,"E' spiegato in modo semplice ",l("a",{href:"https://web.archive.org/web/20200523052252/https://www.cs.cmu.edu/~15451-f17/handouts/simplex.pdf"},"qui"),".")),l(t.a,{title:"Procedimento"},l("ol",null,l("li",null,"Crea un nuovo tableau, ",l("b",null,"aggiungendo variabili artificiali")," in modo da avere una base ammissibile."),l("li",null,"Sostituisci la vecchia funzione obiettivo con una nuova che ",l("b",null,"minimizzi la somma")," di tutte le variabili artificiali."),l("li",null,l("u",null,"Fase 1"),": ",l("b",null,"Risolvi")," il nuovo problema con il simplex primale."),l("li",null,"Se il Simplex termina quando ci sono ancora ",l("b",null,"variabili artificiali nella base"),", allora il poliedro è ",l("b",null,l(s.a,null)),"."),l("li",null,"Una volta che le variabili artificiali sono fuori base, ",l("b",null,"elimina")," le loro colonne e la nuova funzione obiettivo.",l("br",null)),l("li",null,"Riporta il tableau in forma base compiendo operazioni per ",l("b",null,"azzerare i coefficienti")," delle variabili di base nella funzione obiettivo."),l("li",null,l("u",null,"Fase 2"),": ",l("b",null,"Risolvi")," il tableau con il simplex primale.")))),l(e.a,{title:"Rilassamento"},l(t.a,{title:"Cos'è?"},l("p",null,"Una versione semplificata di un problema nella quale si ",l("b",null,"ignora la violazione")," di uno o più vincoli.")),l(t.a,{title:"Rilassamento di Lagrange"},l("p",null,"Un rilassamento che permette di misurare ",l("b",null,"di quanto i vincoli vengono violati"),"."),l("p",null,"I vincoli, moltiplicati per ",l("b",null,"coefficienti di rilassamento"),", vengono inseriti nella funzione obiettivo."),l("p",null,"Il vettore dei coefficienti di rilassamento solitamente è indicato con ",l(a.a,null,Al(cl||(cl=yl`\mathbf{u}`))),"."),l(o.a,null,l("p",null,"Il sistema:"),l(a.a,{inline:!1},Al(dl||(dl=yl`
                            \begin{cases}
                            z = 3 x_1 + 5 x_2\\
                            2 x_1 + 3 x_2 \geq 12\\
                            - x_1 + 3 x_2 \geq 3\\
                            x_1 \geq 0\\
                            x_2 \geq 0
                            \end{cases}
                        `))),l("p",null,"diventa:"),l(a.a,{inline:!1},Al(ml||(ml=yl`
                            \begin{cases}
                            z = 3 x_1 + 5 x_2 + u_1 ( 12 - 2 x_1 - 3 x_2 ) + u_2 ( 3 + x_1 - 3 x_2 )\\
                            x_1 \geq 0\\
                            x_2 \geq 0
                            \end{cases}
                        `)))))),l(e.a,{title:"Dualità"},l(t.a,{title:"Duale"},l("p",null,"Il sistema che ",l("b",null,l(d.a,null,"massimizza"),"/",l(m.a,null,"minimizza")," i moltiplicatori di rilassamento")," di un problema detto ",l("i",null,"primale"),".")),l(t.a,{title:"In termini matriciali"},l("p",null,"Possiamo ",l("b",null,"trasporre")," il tableau e sostituire le variabili ",l(a.a,null,Al(fl||(fl=yl`x_n`)))," con variabili ",l(a.a,null,Al(bl||(bl=yl`u_n`)))," per ottenere il sistema duale!"),l("p",null,"I maggiori e minori dei vincoli diventeranno maggiori e minori delle variabili e viceversa.")),l(t.a,{title:"Feasibility del duale"},l("ul",null,l("li",null,"Se un problema ha una ",l("b",null,"soluzione finita"),", allora anche il suo duale la avrà."),l("li",null,"Se un problema è ",l("b",null,l(s.a,null)),", allora il suo duale potrà essere ",l(s.a,null)," oppure ",l(c.a,null),"."),l("li",null,"Se un problema è ",l("b",null,l(c.a,null)),", allora il suo duale sarà certamente ",l(s.a,null),".")))),l(e.a,{title:"Un po' di teoria"},l(t.a,{title:"Lemma di Farkas"},l("p",null,"Una disuguaglianza lineare ",l(a.a,null,Al(hl||(hl=yl`c_0 \leq \mathbf{c}^T \mathbf{x}`)))," è verificata da tutti i punti di un poliedro non-",l(s.a,null)," se e solo se esiste un vettore ",l(a.a,null,Al(pl||(pl=yl`u \in \mathfrak{R}^m`)))," tale che:"),l(f.a,null,Al(_l||(_l=yl`\mathbf{c}^T \geq \mathbf{u}^T \mathbf{A}`))),l(f.a,null,Al(vl||(vl=yl`c_0 \leq \mathbf{u}^T \mathbf{b}`))),l("p",null,l(u.a,null,"TODO: Cioè?"))),l(t.a,{title:"Dualità forte"},l("p",null,"Il teorema che dimostra l'equivalenza tra primale e duale."),l("p",null,"Se uno dei due problemi è finito, la soluzione di uno coincide con la soluzione dell'altro."),l("p",null,l(a.a,null,Al(gl||(gl=yl`\mathbf{c}^T \mathbf{x} = \mathbf{u}^T \mathbf{b}`)))),l("p",null,l(u.a,null,"TODO: Anche qui c'è una lunga dimostrazione..."))),l(t.a,{title:"Dualità debole"},l("p",null,"Il teorema che dimostra che il valore della funzione obiettivo del duale (di un qualsiasi tableau) è sempre ",l(d.a,null,"minore o uguale"),"/",l(m.a,null,"maggiore o uguale")," alla soluzione del corrispettivo primale."),l("p",null,l(u.a,null,"TODO: Dimostrazione cortina, ma sembra complicata."))),l(t.a,{title:"Condizioni di ottimalità"},l("p",null,"Il teorema che ci permette di passare dalla soluzione del duale alla soluzione del primale. ",l(u.a,null,"TODO: credo?")),l("p",null,"Si deriva combinando le seguenti condizioni:"),l("ul",null,l("li",null,"Ammissibilità del primale: ",l(a.a,null,Al(zl||(zl=yl`\mathbf{A} \mathbf{X} \geq \mathbf{b}, \quad \mathbf{x} \geq 0`)))),l("li",null,"Ammissibilità del duale: ",l(a.a,null,Al(xl||(xl=yl`\mathbf{u}^T \mathbf{A} \leq \mathbf{c}^T, \quad \mathbf{u} \geq 0`)))),l("li",null,"Teorema della dualità forte: ",l(a.a,null,Al(ql||(ql=yl`\mathbf{c}^T \mathbf{x} = \mathbf{u}^T \mathbf{b}`)))," (alla soluzione ottima)")),l("p",null,"Ne risulta che una soluzione è ottima se e solo se:"),l(f.a,null,Al(wl||(wl=yl`\left( \mathbf{c}^T - \mathbf{u}^T \mathbf{A} \right) \mathbf{x} = 0`))),l(f.a,null,Al(Tl||(Tl=yl`\mathbf{u}^T \left( \mathbf{A} \mathbf{x} - \mathbf{b}  \right) = 0`))))),l(e.a,{title:"Simplex duale"},l(t.a,{title:"Cos'è?"},l("p",null,"Un'estensione al Simplex primale che opera sul problema duale.")),l(t.a,{title:"Come funziona?"},l("p",null,"Funziona esattamente come il Simplex primale, ma opera sulle righe invece che sulle colonne, cercando di rendere ",l(d.a,null,"positivi"),"/",l(m.a,null,"negativi")," tutti i termini noti."),l(o.a,null,"Significa che si possono moltiplicare tutti i valori di una riga per lo stesso numero e il risultato non cambia...?"))),l(e.a,{title:"Analisi di sensibilità"},l(t.a,{title:"Cos'è?"},l("p",null,"Un procedimento che misura di ",l("b",null,"quanto può variare")," il termine noto di un vincolo ",l(a.a,null,Al(Ll||(Ll=yl`b_i`)))," o il coefficiente della funzione obiettivo ",l(a.a,null,Al(Sl||(Sl=yl`c_i`)))," prima che la base degeneri. ",l(u.a,null,"TODO: verificare")))))}}.call(this,i("hosL").h)},htlC:function(l){l.exports={splitparent:"splitparent__3-wBs",splitchild:"splitchild__begkX"}},imVn:function(l,n,i){"use strict";(function(l){var e=i("OmdA"),a=i.n(e),t=i("Y9Ml");n.a=function(n){return l(t.a,{color:n.color},l("h3",{class:a.a.title},n.title),l("div",{class:a.a.contents},n.children))}}).call(this,i("hosL").h)},wQ73:function(l,n,i){"use strict";var e=i("hosL");n.a=Object(e.createContext)(!0)},zDbI:function(l,n,i){"use strict";(function(l){var e=i("Q7TX");n.a=function(n){return l(e.a,{inline:!1},n.children)}}).call(this,i("hosL").h)}}]);
//# sourceMappingURL=route-OttimizzazioneLineare.chunk.3ebd7.esm.js.map