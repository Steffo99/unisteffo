(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"2w3n":function(l){l.exports={red:"red__2y1B_",orange:"orange__dD2kx",yellow:"yellow__OEpwl",lime:"lime__CVe41",cyan:"cyan__26ZAg",blue:"blue__LO7Xm",magenta:"magenta__1Akee",example:"example__2PzAa"}},U6dl:function(l,e,o){"use strict";o.r(e),function(l){var i=o("mbOI"),r=o("ke5e");let a,t,n,c,u,m,s,d,p,g,x,v,_,f,w,q,h,y,M,V,Y,b,O,A,G,N=l=>l;const z=String.raw;e.default=function(){return l("div",null,l("h1",null,"Ripasso di Algebra Lineare ",l("small",null,"per ",l("a",{href:"/calcolonumerico"},"Calcolo Numerico"))),l(i.r,{title:"Matrici speciali"},l(i.q,{title:"Matrice identità"},l("p",null,"Elemento neutro della moltiplicazione matriciale."),l(r.a,null,l(i.p,null,z(a||(a=N`
                            \begin{pmatrix}
                                {\color{Yellow} 1} & {\color{Yellow} 0} & {\color{Yellow} 0}\\
                                {\color{Yellow} 0} & {\color{Yellow} 1} & {\color{Yellow} 0}\\
                                {\color{Yellow} 0} & {\color{Yellow} 0} & {\color{Yellow} 1}
                            \end{pmatrix}
                        `))))),l(i.q,{title:"Matrice diagonale"},l("p",null,"Matrice con elementi diversi da 0 solo sulla diagonale."),l(r.a,null,l(i.p,null,z(t||(t=N`
                            \begin{pmatrix}
                                {\color{Yellow} 3} & {\color{Gray} 0} & {\color{Gray} 0}\\
                                {\color{Gray} 0} & {\color{Yellow} 4} & {\color{Gray} 0}\\
                                {\color{Gray} 0} & {\color{Gray} 0} & {\color{Yellow} 5}
                            \end{pmatrix}
                        `))))),l(i.q,{title:"Matrice triangolare inferiore"},l("p",null,"Matrice con elementi diversi da 0 sopra la diagonale."),l(r.a,null,l(i.p,null,z(n||(n=N`
                            \begin{pmatrix}
                                {\color{Yellow} 3} & {\color{Gray} 0} & {\color{Gray} 0}\\
                                {\color{Orange} 4} & {\color{Yellow} 4} & {\color{Gray} 0}\\
                                {\color{Orange} 5} & {\color{Orange} 5} & {\color{Yellow} 5}
                            \end{pmatrix}
                        `))))),l(i.q,{title:"Matrice triangolare superiore"},l("p",null,"Matrice con elementi diversi da 0 sotto la diagonale."),l(r.a,null,l(i.p,null,z(c||(c=N`
                            \begin{pmatrix}
                                {\color{Yellow} 3} & {\color{Orange} 3} & {\color{Orange} 3}\\
                                {\color{Gray} 0} & {\color{Yellow} 4} & {\color{Orange} 4}\\
                                {\color{Gray} 0} & {\color{Gray} 0} & {\color{Yellow} 5}
                            \end{pmatrix}
                        `))))),l(i.q,{title:"Matrice non-singolare"},l("p",null,"Matrice con determinante diverso da 0."),l(i.p,null,z(u||(u=N`det(A) \neq 0`))),l("p",null,"Sono anche dette ",l("b",null,"matrici linearmente indipendenti")," o ",l("b",null,"matrici invertibili"),"."),l(r.a,null,l(i.p,null,z(m||(m=N`
                            \begin{pmatrix}
                                {\color{Yellow} 1} & {\color{Yellow} 1} & {\color{Yellow} 2}\\
                                {\color{Orange} 2} & {\color{Orange} 1} & {\color{Orange} 1}\\
                                {\color{Red} 1} & {\color{Red} 2} & {\color{Red} 1}
                            \end{pmatrix}
                        `))))),l(i.q,{title:"Matrice simmetrica"},l("p",null,"Matrice con un asse di simmetria lungo la diagonale."),l(i.p,null,z(s||(s=N`A = A^T`))),l(r.a,null,l(i.p,null,z(d||(d=N`
                            \begin{pmatrix}
                                1 & {\color{Yellow} 2} & {\color{Orange} 4}\\ 
                                {\color{Yellow} 2} & 3 & {\color{Red} 5}\\ 
                                {\color{Orange} 4} & {\color{Red} 5} & 6
                            \end{pmatrix}
                        `))))),l(i.q,{title:"Matrice antisimmetrica"},l("p",null,"Matrice con un asse di simmetria lungo la diagonale; gli elementi nel triangolo superiore sono però l'opposto di quelli del triangolo inferiore."),l("p",null,"Ha sempre degli ",l(i.h,null,"0")," lungo la diagonale."),l(i.p,null,z(p||(p=N`A = -A^T`))),l(r.a,null,l(i.p,null,z(g||(g=N`
                            \begin{pmatrix}
                                {\color{Gray} 0} & {\color{Yellow} -2} & {\color{Orange} -4}\\ 
                                {\color{Yellow} 2} & {\color{Gray} 0} & {\color{Red} -5}\\ 
                                {\color{Orange} 4} & {\color{Red} 5} & {\color{Gray} 0}
                            \end{pmatrix}
                        `))))),l(i.q,{title:"Matrice a diagonale dominante per riga/colonna"},l("p",null,"Matrice in cui i valori della diagonale sono maggiori della somma di tutti gli altri nella riga/colonna."),l(r.a,null,l(i.p,null,z(x||(x=N`
                            \begin{pmatrix}
                                {\color{Orange} 9} & 1 & 2\\
                                1 & {\color{Orange} 8} & 1\\
                                1 & 2 & {\color{Orange} 7}
                            \end{pmatrix}
                        `))))),l(i.q,{title:"Matrice ortogonale"},l("p",null,"Matrice che se moltiplicata per la sua trasposta dà come risultato la ",l("b",null,"matrice identità"),"."),l(i.p,null,z(v||(v=N`A^T \cdot A = I`))),l(r.a,null,l(i.p,null,z(_||(_=N`
                            \begin{pmatrix}
                             \frac{1}{3} & \frac{2}{3} & -\frac{2}{3}\\
                             \frac{2}{3} & \frac{1}{3} & \frac{2}{3}\\
                             \frac{2}{3} & -\frac{2}{3} & -\frac{1}{3}\\
                            \end{pmatrix}
                        `))))),l(i.q,{title:"Matrice inversa"},l("p",null,"Matrice tale che:"),l(i.p,null,z(f||(f=N`A^{-1} \cdot A = I`)))),l(i.q,{title:"Matrice sparsa"},l("p",null,"Matrice con pochissimi valori diversi da 0."),l(r.a,null,l(i.p,null,z(w||(w=N`
                            \begin{pmatrix}
                                {\color{Gray} 0} & 1 & {\color{Gray} 0}\\
                                1 & 1 & {\color{Gray} 0}\\
                                {\color{Gray} 0} & {\color{Gray} 0} & 1
                            \end{pmatrix}
                        `)))))),l(i.r,{title:"Norme vettoriali"},l(i.q,{title:"Norma vettoriale"},l("p",null,"Funzione che associa un valore positivo a ogni vettore diverso da 0, e 0 al vettore zero."),l(r.a,null,l("a",{href:"https://it.wikipedia.org/wiki/Norma_(matematica)#/media/File:Vector_norms.svg"},"Esempi su Wikipedia"))),l(i.q,{title:"Norma a infinito"},l("p",null,"Massimo dei valori assoluti di tutti gli elementi del vettore."),l("p",null,l(i.h,null,z(q||(q=N`\Vert x \Vert_\infty = max_{i = 1..n} | x_i |`))))),l(i.q,{title:"Norma a 1"},l("p",null,"Somma dei valori assoluti di tutti gli elementi del vettore."),l("p",null,l(i.h,null,z(h||(h=N`\Vert x \Vert_1 = \sum_{i = 1}^n | x_i |`))))),l(i.q,{title:"Norma a 2"},l("p",null,"Radice quadrata della somma dei quadrati di tutti gli elementi del vettore."),l("p",null,l(i.h,null,z(y||(y=N`\Vert x \Vert_2 = \sqrt{\sum_{i = 1}^n x_i^2}`)))))),l(i.r,{title:"Norme matriciali"},l(i.q,{title:"Norma matriciale indotta"},l("p",null,"Funzione che associa un valore positivo a ogni matrice diversa da 0, e 0 alla matrice zero."),l("p",null,"Si ricavano dalle norme vettoriali:"),l("p",null,l(i.h,null,z(M||(M=N`\Vert A \Vert = sup_{x \in \mathbb{R}, x \neq 0} \frac{\Vert A \cdot x \Vert}{\Vert x \Vert}`)))),l(r.a,null,l(i.h,null,"sup")," è l'estremo superiore di un insieme. E' molto simile al massimo: ricordi le prime lezioni di Analisi?")),l(i.q,{title:"Norma a infinito"},l("p",null,"Massimo delle somme dei valori assoluti di tutti gli elementi di ogni riga di una matrice."),l("p",null,l(i.h,null,z(V||(V=N`\Vert A \Vert_\infty = max_{i = 1..n} \sum_{j = 1}^n | a_{ij} |`))))),l(i.q,{title:"Norma a 1"},l("p",null,"Massimo delle somme dei valori assoluti di tutti gli elementi di ogni colonna di una matrice."),l("p",null,l(i.h,null,z(Y||(Y=N`\Vert A \Vert_1 = max_{j = 1..n} \sum_{i = 1}^n | a_{ij} |`))))),l(i.q,{title:"Norma a 2"},l("p",null,"Radice quadrata del rango del prodotto tra una matrice e la sua trasposta."),l("p",null,l(i.h,null,z(b||(b=N`\Vert A \Vert_2 = \sqrt{\rho ( A^T \times A ) }`)))))),l(i.r,{title:"Norme tra funzioni"},l(i.q,{title:"Norma di funzione"},l("p",null,"Funzione che associa un valore reale positivo a ogni funzione.")),l(i.q,{title:"Norma a infinito"},l("p",null,"Valore massimo che assume la funzione nel suo dominio."),l(i.p,null,z(O||(O=N`\| f \|_\infty = max | f(x) |`)))),l(i.q,{title:"Norma a 1"},l(i.u,null,"TODO: Esiste?")),l(i.q,{title:"Norma a 2"},l(i.u,null,"TODO: Esiste?"))),l(i.r,{title:"Errori"},l(i.q,{title:"Errore relativo tra vettori e matrici"},l("p",null,"Le norme sono usate per calcolare l'errore relativo tra due vettori o matrici:"),l("p",null,l(i.h,null,z(A||(A=N`\frac{\Vert x - y \Vert}{\Vert x \Vert}`))))),l(i.q,{title:"Errore assoluto tra funzioni"},l("p",null,"L'errore, ovvero la ",l("b",null,"massima distanza")," tra due funzioni, si ottiene con:"),l(i.p,null,z(G||(G=N`\| f - g \|_\infty`))))))}}.call(this,o("hosL").h)},ke5e:function(l,e,o){"use strict";(function(l){var i=o("2w3n"),r=o.n(i);e.a=function(e){return l("div",{class:r.a.example},e.children)}}).call(this,o("hosL").h)}}]);
//# sourceMappingURL=route-RipassoDiAlgebraLineare.chunk.0ebef.esm.js.map