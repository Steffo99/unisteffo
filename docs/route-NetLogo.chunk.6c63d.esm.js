(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{hkqw:function(l,e,a){"use strict";a.r(e),function(l){var i=a("OPqz"),t=a("imVn"),n=a("Wxxq"),o=a("c6ws");let r,u,s,p,c,g,d,v,b,m,h,f,w,k,L,z=l=>l;const A=String.raw;e.default=function(){return l("div",null,l("h1",null,l("a",{href:"/apprendimento"},"Apprendimento"),": NetLogo"),l(i.a,{title:"Agenti di NetLogo"},l(t.a,{title:"Observer"},l("p",null,"L'",l("b",null,"utente")," di NetLogo, che vive nel contesto globale e dà ordini agli altri agenti.")),l(t.a,{title:"Turtle"},l("p",null,"Entità che possono ",l("b",null,"muoversi")," per il mondo."),l(n.a,null,"Sono più o meno come le ",l("a",{href:"https://www.computercraft.info/wiki/Turtle"},"Turtle di Computercraft"),"!"),l("p",null,"Possono essere di una ",l("i",null,"breed")," (razza) specifica, definite con:"),l(o.a,{language:"lisp"},A(r||(r=z`breed [<plurale> <singolare>]`))),l(n.a,null,"Le breed sono praticamente sottoclassi di turtle.")),l(t.a,{title:"Patch"},l("p",null,"I ",l("b",null,"quadratini")," del mondo. Possono essere di vari colori e avere varie proprietà."),l(n.a,null,"...possiamo dire che questi siano i blocchi di Minecraft?")),l(t.a,{title:"Link"},l("p",null,l("b",null,"Collegamenti")," tra due turtle."))),l(i.a,{title:"Creazione di agenti"},l(t.a,{title:"Observer"},l("p",null,"L'observer viene creato automaticamente all'apertura della simulazione.")),l(t.a,{title:"Turtle"},l("p",null,"Nuove turtle possono essere create con il comando:"),l(o.a,{language:"lisp"},A(u||(u=z`<prefisso>-<breed> <quantità>`))),l("p",null,"Dove prefisso varia in base al contesto attuale:"),l("table",null,l("thead",null,l("tr",null,l("th",null,"Contesto"),l("th",null,"Prefisso"))),l("tbody",null,l("tr",null,l("td",null,"Observer"),l("td",null,l(o.a,{language:"lisp"},A(s||(s=z`create`))))),l("tr",null,l("td",null,"Turtle"),l("td",null,l(o.a,{language:"lisp"},A(p||(p=z`hatch`))))),l("tr",null,l("td",null,"Patch"),l("td",null,l(o.a,{language:"lisp"},A(c||(c=z`sprout`))))))))),l(i.a,{title:"Variabili"},l(t.a,{title:"Observer"},l("p",null,"All'inizio del codice:"),l(o.a,{language:"lisp"},"globals [var1 var2 var3]"),l(n.a,null,"Sono a tutti gli effetti variabili globali.")),l(t.a,{title:"Turtle"},l("p",null,"Aggiungi proprietà a tutte le turtle:"),l(o.a,{language:"lisp"},"turtles-own [var1 var2 var3]"),l("p",null,"Aggiungi proprietà alle turtle di un breed:"),l(o.a,{language:"lisp"},"<breed>-own [var1 var2 var3]")),l(t.a,{title:"Patch"},l("p",null,"Aggiungi proprietà alle patch:"),l(o.a,{language:"lisp"},A(g||(g=z`patches-own [var1 var2 var3]`)))),l(t.a,{title:"Link"},l("p",null,"Aggiungi proprietà ai link:"),l(o.a,{language:"lisp"},A(d||(d=z`links-own [var1 var2 var3]`))))),l(i.a,null,l(t.a,{title:"Locali"},l("p",null,"Si possono creare con:"),l(o.a,{language:"lisp"},A(v||(v=z`let <nome> <valore>`)))),l(t.a,{title:"Set"},l("p",null,"Si può impostare il valore di una variabile con:"),l(o.a,{language:"lisp"},A(b||(b=z`set <nome> <valore>`))))),l(i.a,{title:"Blocchi di codice"},l(t.a,{title:"Cambi di contesto"},l("p",null,"Per cambiare contesto:"),l(o.a,{language:"lisp"},A(m||(m=z`
                        ask <bersaglio> [
                            <blocco di codice>
                        ]
                    `))),l("p",null,"Nel caso ci siano più bersagli, verranno eseguiti uno")),l(t.a,{title:"Commands"},l("p",null,"Funzioni che non restituiscono nulla:"),l(o.a,{language:"lisp"},A(h||(h=z`
                        to <nome>
                            <blocco di codice>
                        end
                    `))),l("p",null,"Con argomenti:"),l(o.a,{language:"lisp"},A(f||(f=z`
                        to <nome> [var1 var2 var3]
                            <blocco di codice>
                        end
                    `)))),l(t.a,{title:"Reporter"},l("p",null,"Funzioni che restituiscono un valore:"),l(o.a,{language:"lisp"},A(w||(w=z`
                        to-report <nome> [var1 var2 var3]
                            <blocco di codice>
                            report <restituito>
                        end
                    `))))),l(i.a,{title:"Comandi per turtle"},l(t.a,{title:"Avanti"},l("p",null,"Muoviti di 10 unità:"),l(o.a,{language:"lisp"},A(k||(k=z`
                        forward 10
                        back 10
                    `))),l("p",null,"Nota che la velocità massima delle tartarughe è di 1 unità/tick, quindi muoversi di 10 unità richiederà 10 tick.")),l(t.a,{title:"Ruota"},l("p",null,"Ruota di 10 gradi:"),l(o.a,{language:"lisp"},A(L||(L=z`
                        left 10
                        right 10
                    `))))))}}.call(this,a("hosL").h)}}]);
//# sourceMappingURL=route-NetLogo.chunk.6c63d.esm.js.map