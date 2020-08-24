(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"2w3n":function(l){l.exports={red:"red__2y1B_",orange:"orange__dD2kx",yellow:"yellow__OEpwl",lime:"lime__CVe41",cyan:"cyan__26ZAg",blue:"blue__LO7Xm",magenta:"magenta__1Akee",example:"example__2PzAa"}},"31Ft":function(l,i,e){"use strict";(function(l){e("4UPQ");var n=e("hosL"),a=e("mbOI"),o=e("ke5e");i.a=function(){return l(n.Fragment,null,l(a.r,{title:"Problema: Interpolazione"},l(a.q,{title:"Descrizione"},l("p",null,"Si vuole trovare una funzione in grado di ",l("b",null,"approssimarne")," un altra, di cui si conoscono però solo alcuni punti."),l(o.a,null,"È utile in un sacco di casi! Ad esempio, quando si vuole scalare un'immagine."))),l(a.r,{title:"Metodi di interpolazione"},l(a.q,{title:"Metodo dei coefficienti indeterminati"},l(a.u,null,"TODO")),l(a.q,{title:"Metodo di Lagrange"},l(a.u,null,"TODO"))),l(a.r,{title:"Resto di interpolazione"},l(a.q,{title:"Definizione"},l(a.u,null,"TODO")),l(a.q,{title:"Stima"},l(a.u,null,"TODO")),l(a.q,{title:"Fenomeno di Runge"},l(a.u,null,"TODO")),l(a.q,{title:"Nodi di Chebychev"},l(a.u,null,"TODO"))))}}).call(this,e("hosL").h)},"4UPQ":function(){},"5aVd":function(l){l.exports={menulist:"menulist__2Cmnq"}},FEtp:function(l,i,e){"use strict";(function(l){e("h/TB");var n=e("hosL"),a=e("mbOI"),o=e("ke5e");let t,u,r,c,s,d,p,m,f,h,b,g,z,_,v,q,k,x,L,A,O,M,C,S,w,T,D,F,E,I,U,N,P,G,Q,R,y,j,H,Y,J,B,X,V,Z,K,W,$,ll,il=l=>l;const el=String.raw;i.a=function(){return l(n.Fragment,null,l(a.r,{title:"Problema: Ricerca degli zeri di funzione"},l(a.q,{title:"Descrizione"},l("p",null,"Si vogliono trovare i punti (",l("i",null,"zeri"),") in cui una funzione ",l("b",null,"continua")," ",l(a.h,null,"f : [a, b] \\to R")," vale ",l(a.h,null,"0"),"."),l("p",null,"Per il ",l("b",null,"teorema del valore medio"),", se ",l(a.h,null,el(t||(t=il`f(a) \cdot f(b) \leq 0`))),", allora esiste sicuramente un punto in cui la funzione vale 0."),l("p",null,"Denominiamo il punto in cui la funzione vale ",l(a.h,null,"0")," come ",l(a.h,null,el(u||(u=il`x_{(*)}`))),".")),l(a.q,{title:"Condizionamento"},l("p",null,"Più la ",l("b",null,"derivata prima")," della funzione ",l("b",null,"si avvicina allo 0"),", ",l("b",null,"peggio")," il problema sarà condizionato."),l(a.p,null,el(r||(r=il`f'(x_{(*)}) \simeq 0 \implies mal\ condizionato`))))),l(a.r,null,l(a.q,{title:"Ordine di convergenza"},l("p",null,"Indice ",l(a.h,null,el(c||(c=il`{\color{Orange} p}`)))," di quanto in fretta una successione converge alla soluzione."),l(a.p,null,el(s||(s=il`\lim_{i \to +\infty} \frac{ \left| x_{(i+1)} - x_{(*)} \right| }{ \left| x_{(k)} - x_{(*)} \right|^{\color{Orange} p}}`))),l("ul",null,l("li",null,l("u",null,"Convergenza lineare"),": ",l(a.h,null,el(d||(d=il`p = 1`)))," e ",l(a.h,null,el(p||(p=il`0 < C < 1`)))),l("li",null,l("u",null,"Convergenza superlineare"),": ",l(a.h,null,el(m||(m=il`p = 1`)))," e ",l(a.h,null,el(f||(f=il`C = 0`)))),l("li",null,l("u",null,"Convergenza quadratica"),": ",l(a.h,null,el(h||(h=il`p = 2`)))," e ",l(a.h,null,el(b||(b=il`0 < C < 1`)))),l("li",null,l("u",null,"Convergenza superquadratica"),": ",l(a.h,null,el(g||(g=il`p = 2`)))," e ",l(a.h,null,el(z||(z=il`C = 0`)))),l("li",null,"...")))),l(a.r,{title:"Metodi dicotomici"},l(a.q,{title:"Cosa sono?"},l("p",null,"Sono ",l("b",null,"metodi iterativi")," in grado di ridurre sempre di più l'intervallo in cui è definita la funzione, facendolo convergere allo zero desiderato."),l("p",null,"Alcuni di essi sono il ",l("i",null,"metodo dicotomico")," e il ",l("i",null,"metodo regula falsi"),"."),l("p",null,"Richiedono ",l("b",null,"una valutazione di funzione non-lineare")," ad ogni iterazione."),l("p",null,"Ad ogni iterazione, l'intervallo viene sempre ",l("i",null,"almeno")," ",l("b",null,"dimezzato"),"; si ha, pertanto, che:"),l(a.p,null,el(_||(_=il`b_{(i)} - a_{(i)} = \frac{b - a}{2^{i - 1}}`))),l("p",null,"Hanno quindi ",l("b",null,"convergenza lineare")," (",l(a.h,null,el(v||(v=il`C = \frac{1}{2}, p = 1`))),")."),l("p",null,"Il loro ",l("i",null,"criterio di arresto")," è un ",l("b",null,"numero di iterazioni prefissato")," che dipende dalla ",l("b",null,"tolleranza")," sull'errore:"),l(a.p,null,el(q||(q=il`i \geq \log_2 \left( \frac{b - a}{\tau} \right)`))),l(o.a,null,"Dividi l'intervallo ",l(a.h,null,el(k||(k=il`[a, b]`)))," in tante parti grandi quanto la tolleranza. L'algoritmo di bisezione ne escluderà metà ad ogni iterazione; la tolleranza sarà raggiunta quando rimarrà una parte sola!"))),l(a.r,null,l(a.q,{title:"Metodo di bisezione"},l("ol",null,l("li",null,"Finchè non sono state compiute il numero di iterazioni prefissate:",l("ol",null,l("li",null,"Calcoliamo il ",l("b",null,"punto medio")," dell'intervallo ",l(a.h,null,el(x||(x=il`[a_{(n)}, b_{(n)}]`))),":",l(a.p,null,el(L||(L=il`c_{(n)} = a_{(n)} + \frac{b_{(n)} - a_{(n)}}{2}`)))),l("li",null,"Dividiamo l'intervallo in due parti, separate da ",l(a.h,null,el(A||(A=il`c_{(n)}`))),":",l("ul",null,l("li",null,l(a.h,null,el(O||(O=il`[a_{(n)}, c_{(n)}]`)))," è la ",l("b",null,"metà")," sinistra"),l("li",null,l(a.h,null,el(M||(M=il`[c_{(n)}, b_{(n)}]`)))," è la ",l("b",null,"metà")," destra"))),l("li",null,"Teniamo l'intervallo in cui i valori della funzione ai due estremi sono discordi, e rinominiamolo in ",l(a.h,null,el(C||(C=il`[a_{(n+1)}, b_{(n+1)}]`))),"."))))),l(a.q,{title:"Metodo regula falsi"},l("ol",null,l("li",null,"Finchè non sono state compiute il numero di iterazioni prefissate:",l("ol",null,l("li",null,"Calcoliamo l'",l("b",null,"intersezione")," tra la ",l("b",null,"retta che congiunge i due estremi")," ",l(a.h,null,el(S||(S=il`a_{(n)}, b_{(n)}`)))," e l'",l("b",null,"asse X"),":",l(a.p,null,el(w||(w=il`c_{(n)} = b_{(n)} - \frac{f(b_{(n)})}{\frac{f(b_{(n)}) - f(a_{(n)})}{b_{(n)} - a_{(n)}}}`)))),l("li",null,"Dividiamo l'intervallo in due parti, separate da ",l(a.h,null,el(T||(T=il`c_{(n)}`))),":",l("ul",null,l("li",null,l(a.h,null,el(D||(D=il`[a_{(n)}, c_{(n)}]`)))," è la parte sinistra"),l("li",null,l(a.h,null,el(F||(F=il`[c_{(n)}, b_{(n)}]`)))," è la parte destra"))),l("li",null,"Teniamo l'intervallo in cui i valori della funzione ai due estremi sono discordi, e rinominiamolo in ",l(a.h,null,el(E||(E=il`[a_{(n+1)}, b_{(n+1)}]`))),".")))))),l(a.r,{title:"Metodo delle approssimazioni successive"},l(a.q,{title:"Metodi delle approssimazioni successive"},l("p",null,"Sono ",l("b",null,"metodi iterativi")," che funzionano in modo molto simile ai metodi iterativi per i sistemi lineari, utilizzando una funzione ",l(a.h,null,el(I||(I=il`\phi`))),' come "metodo".'),l(a.p,null,el(U||(U=il`x = x - \phi(x) \cdot f(x)`))),l("p",null,"Che diventa:"),l(a.p,null,el(N||(N=il`x_{(k+1)} = g( x_{(k)} )`))),l("p",null,"Sfruttano i ",l("b",null,"punti fissi")," ",l(a.h,null,el(P||(P=il`g(x_{(*)}) = x_{(*)}`)))," della funzione ",l(a.h,null,el(G||(G=il`f`)))," per convergere:",l("br",null),"se ",l(a.h,null,el(Q||(Q=il`\phi(x)`)))," non ha zeri, allora i punti fissi ",l("b",null,"coincideranno")," con gli ",l("b",null,"zeri")," della funzione ",l(a.h,null,el(R||(R=il`f`))),"."),l(a.p,null,el(y||(y=il`g(x) = x - \phi(x) \cdot f(x)`))),l("p",null,"Si può raggiungere iterativamente ad un punto fisso attraverso la formula:"),l(a.p,null,el(j||(j=il`x_{(k+1)} = g( x_{(k)} )`))),l("p",null,l("u",null,"Teorema della mappa contrattiva"),": il punto fisso ",l("b",null,"esiste")," ed è ",l("b",null,"unico"),". ",l(a.u,null,"TODO: Studiarlo?")),l("p",null,"Non si conosce in anticipo il numero di iterazioni necessarie per soddisfare la tolleranza ",l(a.h,null,el(H||(H=il`\tau`))),"; ad ogni iterazione, si controlla se la tolleranza è soddisfatta:"),l("ul",null,l("li",null,"Nella differenza tra due iterate: ",l(a.h,null,el(Y||(Y=il`\frac{\left| x_{(k+1)} - x_{(k)} \right|}{\left| x_{(k+1)} \right|} \leq \tau`)))),l("li",null,"Nel ",l("i",null,"residuo")," del problema: ",l(a.h,null,el(J||(J=il`\left| f(x_{(k)}) \right| \leq \tau`))))))),l(a.r,null,l(a.q,{title:"Metodo di Newton"},l("p",null,"Sfrutta la ",l("b",null,"continuità")," delle funzioni per ottenere una convergenza di ordine più alto."),l(a.p,null,el(B||(B=il`\phi (x) = \frac{1}{f' (x)}`))),l(a.p,null,el(X||(X=il`x_{(k+1)} = x_{(k)} - \frac{ f(x_{(k)}) }{ f'(x_{(k)}) }`))),l(o.a,null,"Geometricamente, corrisponde a prolungare una retta nel punto ",l(a.h,null,el(V||(V=il`(x_{(k)}, f(x_{(k)}))`)))," con pendenza ",l(a.h,null,el(Z||(Z=il`f'(x_{(k)})`))),", e prendendo come nuovo punto la sua intersezione con l'asse X e la sua corrispettiva immagine nella funzione."),l("p",null,"Ha costo computazionale di ",l("b",null,"2 valutazioni di funzione")," più ",l("b",null,"2 valutazioni di derivata"),"."),l("p",null,"Ha ",l("b",null,"convergenza quadratica"),".")),l(a.q,{title:"Metodo delle secanti"},l("p",null,"È come il metodo di Newton, ma usa il ",l("b",null,"rapporto incrementale"),", in modo da poter essere applicato a funzioni non continue."),l(a.p,null,el(K||(K=il`\phi (x) = \frac{ 1 }{ \frac{ f(x_{(k)}) - f(x_{(k-1)}) }{ x_{(k)} - x_{(k-1)} } }`))),l(a.p,null,el(W||(W=il`x_{(k+1)} = x_{(k)} - \frac{ f(x_{(k)}) }{ \frac{ f(x_{(k)}) - f(x_{(k-1)}) }{ x_{(k)} - x_{(k-1)} } }`))),l(o.a,null,"Geometricamente, corrisponde a costruire una retta che attraversa i punti ",l(a.h,null,el($||($=il`(x_{(k)}, f(x_{(k)}))`)))," e ",l(a.h,null,el(ll||(ll=il`(x_{(k-1)}, f(x_{(k-1)}))`))),", e prendendo come nuovo punto la sua intersezione con l'asse X e la sua corrispettiva immagine nella funzione."),l("p",null,"Ha costo computazionale di ",l("b",null,"3 valutazioni di funzione"),"."),l("p",null,"Ha ",l("b",null,"convergenza superlineare"),"."))))}}).call(this,e("hosL").h)},"T/To":function(){},T2GU:function(l,i,e){"use strict";(function(l){var n=e("5aVd"),a=e.n(n);i.a=function(i){return l("ul",{class:a.a.menulist},i.children)}}).call(this,e("hosL").h)},"h/TB":function(){},ke5e:function(l,i,e){"use strict";(function(l){var n=e("2w3n"),a=e.n(n);i.a=function(i){return l("div",{class:a.a.example},i.children)}}).call(this,e("hosL").h)},lijF:function(l,i,e){"use strict";(function(l){e("zLC0");var n=e("mbOI"),a=e("YNhk"),o=e("ke5e"),t=e("hosL");let u,r,c,s,d,p,m,f,h,b,g,z,_,v,q,k,x,L,A,O,M,C,S,w,T,D,F,E,I,U,N,P,G,Q,R,y,j,H,Y,J,B,X,V,Z,K,W,$,ll,il,el,nl,al,ol,tl,ul,rl,cl,sl,dl,pl,ml,fl,hl,bl,gl,zl=l=>l;const _l=String.raw;i.a=function(){return l(t.Fragment,null,l(n.r,{title:"Problema: Risoluzione di sistemi lineari"},l(n.q,{title:"Descrizione"},l(n.u,null,"TODO")),l(n.q,{title:"Condizionamento"},l("p",null,"Il condizionamento della risoluzione di sistemi lineari è:"),l(n.p,null,_l(u||(u=zl`\frac{{\color{yellow} \|A\| \cdot \|A^{-1}\|} \cdot \| \Delta b \|}{\| b \|}`))),l("p",null,"In particolare, è segnato in giallo nella formula il ",l("b",null,"numero di condizionamento"),":"),l(n.p,null,_l(r||(r=zl`k(A) = \| A \| \cdot \| A^{-1} \|`))))),l(n.r,null,l(n.q,{title:"Metodi diretti"},l("p",null,"Metodi che trovano la soluzione esatta",l("abbr",{title:"Per quanto possibile nell'algebra di macchina."},"*")," di un sistema lineare."),l("p",null,"Tipicamente prevedono la ",l("b",null,"fattorizzazione")," della matrice dei coefficienti in due sottomatrici più facili da risolvere."),l("p",null,"Generalmente hanno una complessità temporale ",l(n.h,null,_l(c||(c=zl`O(n^3)`))),".")),l(n.q,{title:"Metodi iterativi"},l("p",null,"Metodi che trovano una soluzione imperfetta",l("abbr",{title:"Che però può essere la migliore ottenibile, considerando la precisione di macchina."},"*")," di un sistema lineare."),l("p",null,"Tipicamente prevedono l'applicazione ripetuta di un ",l("b",null,"metodo"),", in base al quale cambia la ",l("b",null,"velocità di convergenza")," alla soluzione."),l("p",null,"Generalmente hanno una complessità temporale ",l(n.h,null,_l(s||(s=zl`O(n^2)`))),"."))),l(n.r,{title:"Metodi diretti"},l(n.q,{title:"Divisione"},l("p",null,"Se la matrice dei coefficienti del sistema è ",l("b",null,"diagonale"),", allora è possibile trovare la soluzione ",l("i",null,"dividendo")," ogni termine noto per l'unico coefficiente diverso da zero presente nella sua riga:"),l(n.p,null,_l(d||(d=zl`x_i = \frac{b_i}{A_{ii}}`)))),l(n.q,{title:"Sostituzione"},l("p",null,"Se la matrice dei coefficienti del sistema è ",l("b",null,"triangolare")," inferiore o superiore, allora è possibile trovare la soluzione effettuando una ",l("i",null,"sostituzione")," all'avanti oppure all'indietro:"),l(n.p,null,_l(p||(p=zl`x_i = \frac{b_i - \sum_{k = 1}^{i - 1} (x_k \cdot A_{ik})}{A_{ii}}`))),l(n.p,null,_l(m||(m=zl`x_i = \frac{b_i - \sum_{k = i - 1}^{n} (x_k \cdot A_{ik})}{A_{ii}}`))))),l(n.r,null,l(n.q,{title:l("span",null,"Fattorizzazione ",l(n.h,null,_l(f||(f=zl`LU`))))},l("p",null,"Se la matrice dei coefficienti del sistema ",l("b",null,"non ha ",l(a.a,{href:"https://it.wikipedia.org/wiki/Minore_(algebra_lineare)"},"minori")," uguali a 0 ",l("small",null,"(eccetto l'ultimo)"))," allora è possibile ",l("i",null,"fattorizzarla")," in due matrici: una ",l(n.h,null,_l(h||(h=zl`L`)))," triangolare inferiore, e una ",l(n.h,null,_l(b||(b=zl`U`)))," triangolare superiore."),l(n.p,null,_l(g||(g=zl`A = L \cdot U`))),l(o.a,null,"Abbiamo fatto questo metodo in Algebra Lineare, chiamandolo ",l("b",null,"metodo di Gauss"),"."),l("p",null,"La matrice ",l(n.h,null,_l(z||(z=zl`L`)))," è così composta:"),l(n.p,null,_l(_||(_=zl`
                        \begin{cases}
                            L_{ii} = 1 \qquad \qquad (diagonale)\\
                            L_{ik} = -\frac{A_{ik}}{A_{kk}} \qquad (tri.\ infer.)
                        \end{cases}
                    `))),l(o.a,null,"Sono i moltiplicatori usati per rendere annullare il triangolo inferiore!"),l("p",null,"La matrice ",l(n.h,null,_l(v||(v=zl`U`)))," è così composta:"),l(n.p,null,_l(q||(q=zl`
                        \begin{cases}
                            U_{ik} = A_{ik} \quad se\ i \leq k \quad (tri.\ super.)\\
                            U_{ik} = 0 \qquad se\ i > k \quad (tri.\ infer.)
                        \end{cases}
                    `))),l("p",null,"Il sistema può essere poi risolto applicando due volte il metodo di sostituzione:"),l(n.p,null,_l(k||(k=zl`
                        \begin{cases}
                            L \cdot y = b\\
                            U \cdot x = y
                        \end{cases}
                    `))),l("p",null,"Questo metodo ha costo computazionale:"),l(n.p,null,_l(x||(x=zl`{\color{Yellow} O\left(\frac{n^3}{3}\right)} + 2 \cdot O\left(\frac{n^2}{2}\right)`)))),l(n.q,{title:l("span",null,"Fattorizzazione ",l(n.h,null,_l(L||(L=zl`LU`)))," con pivoting parziale")},l("p",null,"È possibile applicare la fattorizzazione ",l(n.h,null,_l(A||(A=zl`LU`)))," a ",l("b",null,"qualsiasi matrice non-singolare")," permettendo lo scambio (",l("i",null,"pivoting"),") delle righe, potenzialmente ",l("b",null,"aumentando la stabilità")," dell'algoritmo."),l(o.a,null,"Abbiamo fatto questo metodo in Algebra Lineare, chiamandolo ",l("b",null,"metodo di Gauss-Jordan"),"!"),l("p",null,"Alla formula precedente si aggiunge una ",l(a.a,{href:"https://it.wikipedia.org/wiki/Matrice_di_permutazione"},"matrice di permutazione")," che indica quali righe sono state scambiate:"),l(n.p,null,_l(O||(O=zl`P \cdot A = L \cdot U`))),l("p",null,"Questo metodo ha costo computazionale:"),l(n.p,null,_l(M||(M=zl`{\color{Yellow} O\left(\frac{n^2}{2}\right)} + O\left(\frac{n^3}{3}\right) + 2 \cdot O\left(\frac{n^2}{2}\right)`)))),l(n.q,{title:l("span",null,"Fattorizzazione ",l(n.h,null,_l(C||(C=zl`LU`)))," con pivoting totale")},l("p",null,"È possibile anche permettere il ",l("i",null,"pivoting")," ",l("b",null,"sulle colonne")," per ",l("b",null,"aumentare ulteriormente la stabilità")," dell'algoritmo, a costo di maggiore costo computazionale:"),l(n.p,null,_l(S||(S=zl`P \cdot A \cdot Q = L \cdot U`))),l("p",null,"Questo metodo ha costo computazionale:"),l(n.p,null,_l(w||(w=zl`{\color{Yellow} O\left(\frac{n^3}{3}\right)} + O\left(\frac{n^3}{3}\right) + 2 \cdot O\left(\frac{n^2}{2}\right)`))))),l(n.r,null,l(n.q,{title:l("span",null,"Fattorizzazione ",l(n.h,null,_l(T||(T=zl`LDL^{-1}`))))},l("p",null,"È possibile ",l("b",null,"ridurre la complessità computazionale")," della fattorizzazione ",l(n.h,null,_l(D||(D=zl`LU`)))," se la matrice dei coefficienti è ",l("b",null,"simmetrica"),":"),l(n.p,null,_l(F||(F=zl`A = L \cdot D \cdot L^{-1}`))),l("p",null,"In questo caso, si calcola solo la matrice L, utilizzando il ",l("b",null,"metodo di pavimentazione"),"."),l(n.p,null,_l(E||(E=zl`
                        \begin{cases}
                            d_{ii} = A_{ii} - \sum_{k=1}^{i-1} ( d_{kk} \cdot (l_{jk})^2 )\\
                            \\
                            l_{ij} = \frac{A_{ij} - \sum_{k=1}^{j-1} l_{ik} \cdot d_{kk} \cdot l_{jk}}{d_{ii}}
                        \end{cases}
                    `))),l(o.a,null,l("p",null,"La prima colonna della matrice sarà:"),l(n.p,null,_l(I||(I=zl`
                            \begin{cases}
                                d_{11} = A_{11}\\
                                \\
                                l_{i1} = \frac{A_{i1}}{d_{11}}
                            \end{cases}
                        `))),l("p",null,"La seconda colonna della matrice sarà:"),l(n.p,null,_l(U||(U=zl`
                            \begin{cases}
                                d_{22} = A_{22} - d_{11} \cdot (l_{21})^2\\
                                \\
                                l_{i2} = \frac{A_{i2} - l_{i1} \cdot d_{11} \cdot l_{21}}{d_{ii}}
                            \end{cases}
                        `)))),l("p",null,"Questo metodo ha costo computazionale:"),l(n.p,null,_l(N||(N=zl`{\color{Yellow} O\left(\frac{n^3}{6}\right)} + O\left(\frac{n^3}{3}\right) + 2 \cdot O\left(\frac{n^2}{2}\right)`)))),l(n.q,{title:l("span",null,"Fattorizzazione ",l(n.h,null,_l(P||(P=zl`\mathcal{L} \mathcal{L}^{-1}`))))},l("p",null,"È possibile dare ",l("b",null,"stabilità forte")," alla fattorizzazione ",l(n.h,null,_l(G||(G=zl`LDL^{-1}`)))," se la matrice dei coefficienti è ",l("b",null,"simmetrica definita positiva"),":"),l(n.p,null,_l(Q||(Q=zl`A = \mathcal{L} \cdot \mathcal{L}^{-1}`))),l("p",null,"Il ",l("b",null,"metodo di pavimentazione")," diventa:"),l(n.p,null,_l(R||(R=zl`
                        \begin{cases}
                            l_{ii} = \sqrt{A_{ii} - \sum_{k=1}^{i-1}  (l_{ik})^2 }\\
                            \\
                            l_{ij} = \frac{A_{ij} - \sum_{k=1}^{j-1} l_{ik} \cdot l_{jk}}{l_{ii}}
                        \end{cases}
                    `))),l("p",null,"Questo metodo ha costo computazionale:"),l(n.p,null,_l(y||(y=zl`O\left(\frac{n^3}{3}\right) + O\left(\frac{n^3}{3}\right) + 2 \cdot O\left(\frac{n^2}{2}\right)`))))),l(n.r,null,l(n.q,{title:"Trasformazione di Householder"},l("p",null,"Matrice ricavata dalla seguente formula:"),l(n.p,null,_l(j||(j=zl`U(v) = I - \frac{1}{\alpha} \cdot v \cdot v^T`))),l(n.p,null,_l(H||(H=zl`\alpha = \frac{1}{2} \| v \|_{(2)}^2`)))),l(n.q,{title:l("span",null,"Fattorizzazione ",l(n.h,null,_l(Y||(Y=zl`QR`))))},l("p",null,"Metodo che fornisce una ",l("b",null,"maggiore stabilità")," a costo di una ",l("b",null,"maggiore complessità computazionale"),"."),l("p",null,"La matrice ",l(n.h,null,_l(J||(J=zl`A`)))," viene ",l("i",null,"fattorizzata")," in due matrici, una ",l("b",null,"ortogonale")," ",l(n.h,null,_l(B||(B=zl`Q`)))," e una ",l("b",null,"triangolare superiore")," ",l(n.h,null,_l(X||(X=zl`R`))),":"),l(n.p,null,_l(V||(V=zl`A = Q \cdot R`))),l("p",null,"Le matrici si ottengono dal prodotto delle trasformazioni di Householder (",l(n.h,null,_l(Z||(Z=zl`Q`)))," sulle colonne della matrice ",l(n.h,null,_l(K||(K=zl`A`))),", trasformandola in una matrice triangolare superiore (",l(n.h,null,_l(W||(W=zl`R`))),")."),l("p",null,"Una volta fattorizzata, il sistema si può risolvere con:"),l(n.p,null,_l($||($=zl`
                        \begin{cases}
                            y = Q^T \cdot b\\
                            R \cdot x = y
                        \end{cases}
                    `))),l("p",null,"Questo metodo ha costo computazionale:"),l(n.p,null,_l(ll||(ll=zl`{\color{Yellow} O\left(\frac{2 \cdot n^3}{3}\right)} + 2 \cdot O\left(\frac{n^2}{2}\right)`))),l("p",null,l(n.u,null,"TODO: l'algoritmo con tau per ricavare la q se non è in memoria")))),l(n.r,{title:"Metodi iterativi"},l(n.q,{title:"Forma generale"},l("p",null,"Se si pone che:"),l(n.p,null,_l(il||(il=zl`
                        \begin{cases}
                            G = I - M^{-1} \cdot A\\
                            c = M^{-1} \cdot b
                        \end{cases}
                    `))),l("p",null,"Allora la formula generale di un sistema lineare può anche essere scritta in questo modo:"),l(n.p,null,_l(el||(el=zl`x = G \cdot x + c`))),l("p",null,"È particolarmente utile perchè ci permette di definire un ",l("b",null,"algoritmo ricorsivo")," che trovi ",l(n.h,null,_l(nl||(nl=zl`x`))),":"),l(n.p,null,_l(al||(al=zl`x_{(i+1)} = G \cdot x_{(i)} + c`))),l("p",null,l(n.h,null,_l(ol||(ol=zl`G`)))," è il ",l("b",null,"metodo"),", e in base ad esso cambiano stabilità e velocità di convergenza."),l("p",null,"Ponendo ",l(n.h,null,_l(tl||(tl=zl`A = M - N`))),", la formula può essere scritta anche in questo modo:"),l(n.p,null,_l(ul||(ul=zl`M \cdot x_{(i+1)} = N \cdot x_{(i)} + b`))),l("p",null,"Possiamo ottenere alcuni metodi separando ",l(n.h,null,"A")," in tre matrici:"),l("ul",null,l("li",null,"La parte diagonale ",l(n.h,null,_l(rl||(rl=zl`D`)))),l("li",null,"L'opposto del triangolo inferiore ",l(n.h,null,_l(cl||(cl=zl`E`)))),l("li",null,"L'opposto del triangolo superiore ",l(n.h,null,_l(sl||(sl=zl`F`))))),l(n.p,null,_l(dl||(dl=zl`A = D - E - F`)))),l(n.q,{title:"Convergenza di un metodo"},l("p",null,"Un metodo è convergente se e solo se:"),l(n.p,null,_l(pl||(pl=zl`\rho (M) < 1`))),l("p",null,"(dove ",l(n.h,null,_l(ml||(ml=zl`\rho`)))," è il ",l("b",null,"raggio spettrale"),", il massimo autovalore della matrice)"),l("p",null,"Perchè un metodo sia convergente, è sufficiente che:"),l(n.p,null,_l(fl||(fl=zl`\| M \| < 1`))),l("p",null,l(n.u,null,"TODO: l'algoritmo con tau per le condizioni di arresto")))),l(n.r,null,l(n.q,{title:"Metodo di Jacobi"},l("p",null,"Il metodo di Jacobi si ottiene ponendo:"),l(n.p,null,_l(hl||(hl=zl`
                        \begin{cases}
                            M = D\\
                            N = E + F
                        \end{cases}
                    `))),l("p",null,l("u",null,"Spostamenti simultanei"),": Permette di ottenere ogni componente di ",l(n.h,null,_l(bl||(bl=zl`x`)))," indipendentemente dagli altri: è ",l("b",null,"parallelizzabile"),"."),l("p",null,"Se la matrice è ",l("b",null,"diagonale dominante"),", allora il metodo di Jacobi ",l("b",null,"converge")," sicuramente.")),l(n.q,{title:"Metodo di Gauss-Seidel"},l("p",null,"Il metodo di Gauss-Seidel si ottiene ponendo:"),l(n.p,null,_l(gl||(gl=zl`
                        \begin{cases}
                            M = D - E\\
                            N = F
                        \end{cases}
                    `))),l("p",null,"Ha una velocità di convergenza ",l("b",null,"maggiore o uguale")," rispetto al metodo di Jacobi."),l("p",null,l("u",null,"Spostamenti successivi"),": Non è parallelizzabile, perchè ogni componente ",l("b",null,"dipende da quelle calcolate in precedenza"),"."),l("p",null,"Se la matrice è ",l("b",null,"diagonale dominante"),", allora il metodo di Gauss-Seidel ",l("b",null,"converge")," sicuramente."))))}}).call(this,e("hosL").h)},qXt2:function(l,i,e){"use strict";e.r(i),function(l){e("mbOI"),e("ke5e"),e("YNhk"),e("T2GU");var n=e("sl5E"),a=e("lijF"),o=e("FEtp"),t=e("31Ft");i.default=function(){return l("div",null,l("h1",null,"Calcolo Numerico"),l(n.a,null),l(a.a,null),l(o.a,null),l(t.a,null))}}.call(this,e("hosL").h)},sl5E:function(l,i,e){"use strict";(function(l){e("T/To");var n=e("mbOI"),a=e("YNhk"),o=e("T2GU"),t=e("ke5e"),u=e("hosL");let r,c,s,d,p,m,f,h,b,g,z,_,v,q,k,x,L,A,O,M,C,S=l=>l;const w=String.raw;i.a=function(){return l(u.Fragment,null,l(n.r,{title:"Esame"},l(n.q,{title:"Contatti"},l("ul",null,l("li",null,l(a.a,{href:"mailto:silvia.bonettini@unimore.it"},"Prof.ssa Silvia Bonettini")))),l(n.q,{title:"Orale"},l("p",null,"E' composto da:"),l("ul",null,l("li",null,"2 domande sugli argomenti teorici"),l("li",null,"1 domanda di implementazione algoritmo in MATLAB"))),l(n.q,{title:"Sessione autunnale"},l("ol",null,l("li",null,l(n.t,{to:"2020-08-31 09:00"})),l("li",null,l(n.t,{to:"2020-09-14 09:00"}))))),l(n.r,{title:"Informazioni"},l(n.q,{title:"Ripasso di Algebra Lineare"},l("p",null,"Prima di iniziare a studiare Calcolo Numerico, potrebbe essere una buona idea ripassare un pochino Algebra Lineare:"),l(o.a,null,l("li",null,l("a",{href:"/calcolonumerico/ripassodialgebralineare"},"Ripasso di Algebra Lineare")," ",l("small",null,"(per studenti sperduti di Calcolo Numerico)"))))),l(n.r,{title:"Algoritmi"},l(n.q,{title:"Algoritmi numerici"},l("p",null,"Particolari algoritmi che hanno:"),l("ul",null,l("li",null,"numeri reali in input e output"),l("li",null,"successioni delle quattro operazioni aritmetiche fondamentali come passi")))),l(n.r,{title:"Errore di rappresentazione"},l(n.q,{title:"Cos'è?"},l("p",null,"Con i numeri floating point può capitare che un certo numero ",l(n.h,null,w(r||(r=S`\alpha`)))," non sia rappresentato correttamente."),l("p",null,"In tal caso, il numero si indica con ",l(n.h,null,w(c||(c=S`\alpha^*`))),"."))),l(n.r,null,l(n.q,{title:"Errore assoluto"},l("p",null,"È la differenza tra il numero desiderato e il numero rappresentato:"),l(n.p,null,w(s||(s=S`E_a = \left | \alpha - \alpha^* \right |`)))),l(n.q,{title:"Errore relativo"},l("p",null,"Indica quanto il numero rappresentato differisce dal numero desiderato:"),l(n.p,null,w(d||(d=S`\forall \alpha \neq 0, E_r = \frac{E_a}{\left | \alpha \right |}`))))),l(n.r,null,l(n.q,{title:"Troncamento"},l("p",null,"Metodo con cui gestire gli ",l("b",null,"underflow floating point"),": le cifre meno significative vengono ",l("b",null,"rimosse"),"."),l(t.a,null,l("pre",null,"1.00  →  1.0",l("br",null),"1.01  →  1.0",l("br",null),"1.10  →  1.1",l("br",null),"1.11  →  1.1"))),l(n.q,{title:"Arrotondamento"},l("p",null,"Metodo con cui gestire gli ",l("b",null,"underflow floating point"),": se la cifra più significativa di quelle che devono essere rimosse è 1, allora ",l("b",null,"aumenta di 1")," anche quella meno signficativa che viene tenuta."),l(t.a,null,l("pre",null,"1.00  →  1.0",l("br",null),"1.01  →  1.0",l("br",null),"1.10  →  1.1",l("br",null),"1.11  → 10.")))),l(n.r,null,l(n.q,{title:"Precisione di macchina"},l("p",null,"Un numero reale rappresentato in ",l("b",null,"virgola mobile")," ha un ",l("b",null,"errore relativo")," minore o uguale alla ",l("i",null,"precisione di macchina"),":"),l("p",null,l(n.h,null,w(p||(p=S`E_r \leq k \cdot \beta^{1-t}`)))),l("ul",null,l("li",null,l(n.h,null,"\\beta")," è uguale alla base utilizzata (solitamente 2)."),l("li",null,l(n.h,null,"t")," è uguale al numero di cifre della mantissa."),l("li",null,l(n.h,null,"k")," è uguale a ",l(n.h,null,"1")," se il numero viene rappresentato per troncamento oppure a ",l(n.h,null,w(m||(m=S`\frac{1}{2}`)))," se viene rappresentato per arrotondamento."))),l(n.q,{title:"La funzione fl"},l("p",null,"Associa un valore reale al suo ",l("b",null,"corrispondente valore floating point"),", utilizzando uno dei due metodi di gestione dell'undeflow."),l(n.p,null,w(f||(f=S`fl(x) = (x)(1 + \epsilon_x)`))),l(t.a,null,"Indica che un valore è soggetto alla precisione di macchina.",l(n.p,null,w(h||(h=S`fl(1.11) = 1.1`)))))),l(n.r,null,l(n.q,{title:"Un nuovo insieme"},l("p",null,"L'insieme ",l(n.h,null,w(b||(b=S`\mathbb{F}`)))," è il sottoinsieme dei numeri reali rappresentabili in floating point dalla macchina che stiamo usando."),l("p",null,"Operazioni tra elementi di ",l(n.h,null,w(g||(g=S`\mathbb{F}`)))," producono risultati in ",l(n.h,null,w(z||(z=S`\mathbb{R}`))),", che però decaderanno nuovamente a elementi di ",l(n.h,null,w(_||(_=S`\mathbb{F}`))),", perdendo informazioni."),l("p",null,"Il teorema della precisione di macchina si applica quindi anche ai risultati delle operazioni.")),l(n.q,{title:"Caratteristiche delle operazioni di macchina"},l("ul",null,l("li",null,"Hanno ",l("b",null,"più elementi neutri"),"."),l("li",null,"Un numero ha ",l("b",null,"più opposti"),"."),l("li",null,l("b",null,"Non")," sono associative."),l("li",null,l("b",null,"Non")," sono distributive."),l("li",null,l("b",null,"Non")," vale la legge di annullamento del prodotto.")))),l(n.r,{title:"Errori nelle operazioni di macchina"},l(n.q,{title:"Errore inerente"},l("p",null,"Errore derivato da underflow sui ",l("b",null,"dati"),"."),l("p",null,"Si indica con ",l(n.h,null,w(v||(v=S`\epsilon_{nome\_var}`))),"."),l(t.a,null,"L'errore sulla variabile ",l(n.h,null,"x")," si indica con ",l(n.h,null,w(q||(q=S`\epsilon_{x}`))),".")),l(n.q,{title:"Errore algoritmico"},l("p",null,"Errore derivato da underflow durante l'",l("b",null,"esecuzione dell'algoritmo"),"."),l("p",null,"Si indica con ",l(n.h,null,w(k||(k=S`\epsilon_{num\_passo}`))),"."),l(t.a,null,"L'errore al primo passo dell'algoritmo si indica con ",l(n.h,null,w(x||(x=S`\epsilon_{1}`))),"."))),l(n.r,null,l(n.q,{title:"Condizionamento"},l("p",null,"Sensibilità di un problema all'",l("b",null,"errore inerente"),"."),l(t.a,null,l(n.h,null,w(L||(L=S`y = \frac{1}{x}`)))," è mal condizionato intorno allo 0 e ben condizionato lontano dallo 0.")),l(n.q,{title:"Stabilità"},l("p",null,"Sensibilità di un problema all'",l("b",null,"errore algoritmico"),"."),l(t.a,null,l("p",null,"Cerchiamo un algoritmo che risolva ",l(n.h,null,w(A||(A=S`2x^* = 4`))),"."),l("p",null,"Calcolare prima ",l(n.h,null,w(O||(O=S`t = fl \left( \frac{1}{4} \right)`)))," e poi ",l(n.h,null,w(M||(M=S`x = fl ( 2 \cdot t )`)))," porta a una perdita di precisione."),l("p",null,"Calcolare direttamente ",l(n.h,null,w(C||(C=S`x = fl \left( \frac{2}{4} \right)`)))," non ha alcuna perdita di precisione e rende l'algoritmo ",l("b",null,"più stabile")," del precedente.")))),l(n.r,null,l(n.q,{title:"Indice di condizionamento"},l("p",null,"È il coefficiente di proporzionalità tra i dati e l'",l("b",null,"errore inerente"),"."),l("p",null,"Essendo sempre maggiore di uno, si può dire che sia un coefficiente di amplificazione."),l("p",null,"Minore è l'indice di condizionamento, meglio condizionato è un problema.")),l(n.q,{title:"Indice algoritmico"},l("p",null,"È il coefficiente di proporzionalità tra i dati e l'",l("b",null,"errore algoritmico"),"."),l("p",null,"Essendo sempre maggiore di uno, si può dire che sia un coefficiente di amplificazione."))))}}).call(this,e("hosL").h)},zLC0:function(){}}]);
//# sourceMappingURL=route-CalcoloNumerico.chunk.980bc.esm.js.map