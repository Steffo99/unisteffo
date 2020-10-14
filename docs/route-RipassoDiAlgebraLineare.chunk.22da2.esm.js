(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"2w3n":function(l){l.exports={red:"red__2y1B_",orange:"orange__dD2kx",yellow:"yellow__OEpwl",lime:"lime__CVe41",cyan:"cyan__26ZAg",blue:"blue__LO7Xm",magenta:"magenta__1Akee",example:"example__2PzAa"}},U6dl:function(l,e,r){"use strict";r.r(e),function(l){var o=r("mbOI"),i=r("ke5e");let a,n,t,c,u,m,s,d,p,g,x,v,_,f,w,y,b,M,q,G,h,V,Y,A,z,O,N=l=>l;const R=String.raw;e.default=function(){return l("div",null,l("h1",null,"Ripasso di Algebra Lineare ",l("small",null,"per ",l("a",{href:"/calcolonumerico"},"Calcolo Numerico"))),l(o.s,{title:"Matrici speciali"},l(o.r,{title:"Matrice identità"},l("p",null,"Elemento neutro della moltiplicazione matriciale."),l(i.a,null,l(o.q,null,R(a||(a=N`
                            \begin{pmatrix}
                                {\color{Yellow} 1} & {\color{Yellow} 0} & {\color{Yellow} 0}\\
                                {\color{Yellow} 0} & {\color{Yellow} 1} & {\color{Yellow} 0}\\
                                {\color{Yellow} 0} & {\color{Yellow} 0} & {\color{Yellow} 1}
                            \end{pmatrix}
                        `))))),l(o.r,{title:"Matrice diagonale"},l("p",null,"Matrice con elementi diversi da 0 solo sulla diagonale."),l(i.a,null,l(o.q,null,R(n||(n=N`
                            \begin{pmatrix}
                                {\color{Yellow} 3} & {\color{Gray} 0} & {\color{Gray} 0}\\
                                {\color{Gray} 0} & {\color{Yellow} 4} & {\color{Gray} 0}\\
                                {\color{Gray} 0} & {\color{Gray} 0} & {\color{Yellow} 5}
                            \end{pmatrix}
                        `))))),l(o.r,{title:"Matrice triangolare inferiore"},l("p",null,"Matrice con elementi diversi da 0 sopra la diagonale."),l(i.a,null,l(o.q,null,R(t||(t=N`
                            \begin{pmatrix}
                                {\color{Yellow} 3} & {\color{Gray} 0} & {\color{Gray} 0}\\
                                {\color{Orange} 4} & {\color{Yellow} 4} & {\color{Gray} 0}\\
                                {\color{Orange} 5} & {\color{Orange} 5} & {\color{Yellow} 5}
                            \end{pmatrix}
                        `))))),l(o.r,{title:"Matrice triangolare superiore"},l("p",null,"Matrice con elementi diversi da 0 sotto la diagonale."),l(i.a,null,l(o.q,null,R(c||(c=N`
                            \begin{pmatrix}
                                {\color{Yellow} 3} & {\color{Orange} 3} & {\color{Orange} 3}\\
                                {\color{Gray} 0} & {\color{Yellow} 4} & {\color{Orange} 4}\\
                                {\color{Gray} 0} & {\color{Gray} 0} & {\color{Yellow} 5}
                            \end{pmatrix}
                        `))))),l(o.r,{title:"Matrice non-singolare"},l("p",null,"Matrice con determinante diverso da 0."),l(o.q,null,R(u||(u=N`det(A) \neq 0`))),l("p",null,"Sono anche dette ",l("b",null,"matrici linearmente indipendenti")," o ",l("b",null,"matrici invertibili"),"."),l(i.a,null,l(o.q,null,R(m||(m=N`
                            \begin{pmatrix}
                                {\color{Yellow} 1} & {\color{Yellow} 1} & {\color{Yellow} 2}\\
                                {\color{Orange} 2} & {\color{Orange} 1} & {\color{Orange} 1}\\
                                {\color{Red} 1} & {\color{Red} 2} & {\color{Red} 1}
                            \end{pmatrix}
                        `))))),l(o.r,{title:"Matrice simmetrica"},l("p",null,"Matrice con un asse di simmetria lungo la diagonale."),l(o.q,null,R(s||(s=N`A = A^T`))),l(i.a,null,l(o.q,null,R(d||(d=N`
                            \begin{pmatrix}
                                1 & {\color{Yellow} 2} & {\color{Orange} 4}\\ 
                                {\color{Yellow} 2} & 3 & {\color{Red} 5}\\ 
                                {\color{Orange} 4} & {\color{Red} 5} & 6
                            \end{pmatrix}
                        `))))),l(o.r,{title:"Matrice antisimmetrica"},l("p",null,"Matrice con un asse di simmetria lungo la diagonale; gli elementi nel triangolo superiore sono però l'opposto di quelli del triangolo inferiore."),l("p",null,"Ha sempre degli ",l(o.i,null,"0")," lungo la diagonale."),l(o.q,null,R(p||(p=N`A = -A^T`))),l(i.a,null,l(o.q,null,R(g||(g=N`
                            \begin{pmatrix}
                                {\color{Gray} 0} & {\color{Yellow} -2} & {\color{Orange} -4}\\ 
                                {\color{Yellow} 2} & {\color{Gray} 0} & {\color{Red} -5}\\ 
                                {\color{Orange} 4} & {\color{Red} 5} & {\color{Gray} 0}
                            \end{pmatrix}
                        `))))),l(o.r,{title:"Matrice a diagonale dominante per riga/colonna"},l("p",null,"Matrice in cui i valori della diagonale sono maggiori della somma di tutti gli altri nella riga/colonna."),l(i.a,null,l(o.q,null,R(x||(x=N`
                            \begin{pmatrix}
                                {\color{Orange} 9} & 1 & 2\\
                                1 & {\color{Orange} 8} & 1\\
                                1 & 2 & {\color{Orange} 7}
                            \end{pmatrix}
                        `))))),l(o.r,{title:"Matrice ortogonale"},l("p",null,"Matrice che se moltiplicata per la sua trasposta dà come risultato la ",l("b",null,"matrice identità"),"."),l(o.q,null,R(v||(v=N`A^T \cdot A = I`))),l(i.a,null,l(o.q,null,R(_||(_=N`
                            \begin{pmatrix}
                             \frac{1}{3} & \frac{2}{3} & -\frac{2}{3}\\
                             \frac{2}{3} & \frac{1}{3} & \frac{2}{3}\\
                             \frac{2}{3} & -\frac{2}{3} & -\frac{1}{3}\\
                            \end{pmatrix}
                        `))))),l(o.r,{title:"Matrice inversa"},l("p",null,"Matrice tale che:"),l(o.q,null,R(f||(f=N`A^{-1} \cdot A = I`)))),l(o.r,{title:"Matrice sparsa"},l("p",null,"Matrice con pochissimi valori diversi da 0."),l(i.a,null,l(o.q,null,R(w||(w=N`
                            \begin{pmatrix}
                                {\color{Gray} 0} & 1 & {\color{Gray} 0}\\
                                1 & 1 & {\color{Gray} 0}\\
                                {\color{Gray} 0} & {\color{Gray} 0} & 1
                            \end{pmatrix}
                        `))))),l(o.r,{title:"Matrice di permutazione"},l("p",null,"Matrice riempita di 0 eccetto per un solo 1 per riga e per colonna."),l(i.a,null,l(o.q,null,R(y||(y=N`
                            \begin{pmatrix}
                                {\color{Gray} 0} & {\color{Gray} 0} & 1
                                {\color{Gray} 0} & 1 & {\color{Gray} 0}\\
                                1 & {\color{Gray} 0} & {\color{Gray} 0}\\
                            \end{pmatrix}
                        `)))),l("p",null,"Se premoltiplicata per una matrice, ne ",l("b",null,"riordina le righe"),"; se invece postmoltiplicata, ne ",l("b",null,"riordina le colonne"),"."),l(i.a,null,l("p",null,"Premoltiplicare la matrice precedente scambia la prima e la terza righa, postmoltiplicarla scambia la prima e la terza colonna."))),l(o.r,{title:"Matrice di permutazione elementare"},l("p",null,"Matrice di permutazione con un solo scambio."),l("p",null,"Sono ",l("b",null,"nonsingolari"),", ",l("b",null,"simmetriche")," e ",l("b",null,"ortogonali"),"."))),l(o.s,{title:"Norme vettoriali"},l(o.r,{title:"Norma vettoriale"},l("p",null,"Funzione che associa un valore positivo a ogni vettore diverso da 0, e 0 al vettore zero."),l(i.a,null,l("a",{href:"https://it.wikipedia.org/wiki/Norma_(matematica)#/media/File:Vector_norms.svg"},"Esempi su Wikipedia"))),l(o.r,{title:"Norma a infinito"},l("p",null,"Massimo dei valori assoluti di tutti gli elementi del vettore."),l("p",null,l(o.i,null,R(b||(b=N`\Vert x \Vert_\infty = max_{i = 1..n} | x_i |`))))),l(o.r,{title:"Norma a 1"},l("p",null,"Somma dei valori assoluti di tutti gli elementi del vettore."),l("p",null,l(o.i,null,R(M||(M=N`\Vert x \Vert_1 = \sum_{i = 1}^n | x_i |`))))),l(o.r,{title:"Norma a 2"},l("p",null,"Radice quadrata della somma dei quadrati di tutti gli elementi del vettore."),l("p",null,l(o.i,null,R(q||(q=N`\Vert x \Vert_2 = \sqrt{\sum_{i = 1}^n x_i^2}`)))))),l(o.s,{title:"Norme matriciali"},l(o.r,{title:"Norma matriciale indotta"},l("p",null,"Funzione che associa un valore positivo a ogni matrice diversa da 0, e 0 alla matrice zero."),l("p",null,"Si ricavano dalle norme vettoriali:"),l("p",null,l(o.i,null,R(G||(G=N`\Vert A \Vert = sup_{x \in \mathbb{R}, x \neq 0} \frac{\Vert A \cdot x \Vert}{\Vert x \Vert}`)))),l(i.a,null,l(o.i,null,"sup")," è l'estremo superiore di un insieme. E' molto simile al massimo: ricordi le prime lezioni di Analisi?")),l(o.r,{title:"Norma a infinito"},l("p",null,"Massimo delle somme dei valori assoluti di tutti gli elementi di ogni riga di una matrice."),l("p",null,l(o.i,null,R(h||(h=N`\Vert A \Vert_\infty = max_{i = 1..n} \sum_{j = 1}^n | a_{ij} |`))))),l(o.r,{title:"Norma a 1"},l("p",null,"Massimo delle somme dei valori assoluti di tutti gli elementi di ogni colonna di una matrice."),l("p",null,l(o.i,null,R(V||(V=N`\Vert A \Vert_1 = max_{j = 1..n} \sum_{i = 1}^n | a_{ij} |`))))),l(o.r,{title:"Norma a 2"},l("p",null,"Radice quadrata del rango del prodotto tra una matrice e la sua trasposta."),l("p",null,l(o.i,null,R(Y||(Y=N`\Vert A \Vert_2 = \sqrt{\rho ( A^T \times A ) }`)))))),l(o.s,{title:"Norme tra funzioni"},l(o.r,{title:"Norma di funzione"},l("p",null,"Funzione che associa un valore reale positivo a ogni funzione.")),l(o.r,{title:"Norma a infinito"},l("p",null,"Valore massimo che assume la funzione nel suo dominio."),l(o.q,null,R(A||(A=N`\| f \|_\infty = max | f(x) |`))))),l(o.s,{title:"Errori"},l(o.r,{title:"Errore relativo tra vettori e matrici"},l("p",null,"Le norme sono usate per calcolare l'errore relativo tra due vettori o matrici:"),l("p",null,l(o.i,null,R(z||(z=N`\frac{\Vert x - y \Vert}{\Vert x \Vert}`))))),l(o.r,{title:"Errore assoluto tra funzioni"},l("p",null,"L'errore, ovvero la ",l("b",null,"massima distanza")," tra due funzioni, si ottiene con:"),l(o.q,null,R(O||(O=N`\| f - g \|_\infty`))))))}}.call(this,r("hosL").h)},ke5e:function(l,e,r){"use strict";(function(l){var o=r("2w3n"),i=r.n(o);e.a=function(e){return l("div",{class:i.a.example},e.children)}}).call(this,r("hosL").h)}}]);
//# sourceMappingURL=route-RipassoDiAlgebraLineare.chunk.22da2.esm.js.map