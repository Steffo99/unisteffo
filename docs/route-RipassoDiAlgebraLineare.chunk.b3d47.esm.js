(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"2w3n":function(l){l.exports={red:"red__2y1B_",orange:"orange__dD2kx",yellow:"yellow__OEpwl",lime:"lime__CVe41",cyan:"cyan__26ZAg",blue:"blue__LO7Xm",magenta:"magenta__1Akee",example:"example__2PzAa"}},U6dl:function(l,e,o){"use strict";o.r(e),function(l){var r=o("mbOI"),i=o("ke5e");let a,t,n,c,u,m,d,p,s,g,x,w,_,v,h,q,y,f,M,Y,V,b,A,G=l=>l;const O=String.raw;e.default=function(){return l("div",null,l("h1",null,"Ripasso di Algebra Lineare ",l("small",null,"per ",l("a",{href:"/calcolonumerico"},"Calcolo Numerico"))),l(r.r,{title:"Matrici speciali"},l(r.q,{title:"Matrice identità"},l("p",null,"Elemento neutro della moltiplicazione matriciale."),l(i.a,null,l(r.p,null,O(a||(a=G`
                            \begin{pmatrix}
                                {\color{Yellow} 1} & {\color{Yellow} 0} & {\color{Yellow} 0}\\
                                {\color{Yellow} 0} & {\color{Yellow} 1} & {\color{Yellow} 0}\\
                                {\color{Yellow} 0} & {\color{Yellow} 0} & {\color{Yellow} 1}
                            \end{pmatrix}
                        `))))),l(r.q,{title:"Matrice diagonale"},l("p",null,"Matrice con elementi diversi da 0 solo sulla diagonale."),l(i.a,null,l(r.p,null,O(t||(t=G`
                            \begin{pmatrix}
                                {\color{Yellow} 3} & {\color{Gray} 0} & {\color{Gray} 0}\\
                                {\color{Gray} 0} & {\color{Yellow} 4} & {\color{Gray} 0}\\
                                {\color{Gray} 0} & {\color{Gray} 0} & {\color{Yellow} 5}
                            \end{pmatrix}
                        `))))),l(r.q,{title:"Matrice triangolare inferiore"},l("p",null,"Matrice con elementi diversi da 0 sopra la diagonale."),l(i.a,null,l(r.p,null,O(n||(n=G`
                            \begin{pmatrix}
                                {\color{Yellow} 3} & {\color{Gray} 0} & {\color{Gray} 0}\\
                                {\color{Orange} 4} & {\color{Yellow} 4} & {\color{Gray} 0}\\
                                {\color{Orange} 5} & {\color{Orange} 5} & {\color{Yellow} 5}
                            \end{pmatrix}
                        `))))),l(r.q,{title:"Matrice triangolare superiore"},l("p",null,"Matrice con elementi diversi da 0 sotto la diagonale."),l(i.a,null,l(r.p,null,O(c||(c=G`
                            \begin{pmatrix}
                                {\color{Yellow} 3} & {\color{Orange} 3} & {\color{Orange} 3}\\
                                {\color{Gray} 0} & {\color{Yellow} 4} & {\color{Orange} 4}\\
                                {\color{Gray} 0} & {\color{Gray} 0} & {\color{Yellow} 5}
                            \end{pmatrix}
                        `))))),l(r.q,{title:"Matrice non-singolare"},l("p",null,"Matrice con determinante diverso da 0."),l(r.p,null,O(u||(u=G`det(A) \neq 0`))),l("p",null,"Sono anche dette ",l("b",null,"matrici linearmente indipendenti")," o ",l("b",null,"matrici invertibili"),"."),l(i.a,null,l(r.p,null,O(m||(m=G`
                            \begin{pmatrix}
                                {\color{Yellow} 1} & {\color{Yellow} 1} & {\color{Yellow} 2}\\
                                {\color{Orange} 2} & {\color{Orange} 1} & {\color{Orange} 1}\\
                                {\color{Red} 1} & {\color{Red} 2} & {\color{Red} 1}
                            \end{pmatrix}
                        `))))),l(r.q,{title:"Matrice simmetrica"},l("p",null,"Matrice con un asse di simmetria lungo la diagonale."),l(r.p,null,O(d||(d=G`A = A^T`))),l(i.a,null,l(r.p,null,O(p||(p=G`
                            \begin{pmatrix}
                                1 & {\color{Yellow} 2} & {\color{Orange} 4}\\ 
                                {\color{Yellow} 2} & 3 & {\color{Red} 5}\\ 
                                {\color{Orange} 4} & {\color{Red} 5} & 6
                            \end{pmatrix}
                        `))))),l(r.q,{title:"Matrice antisimmetrica"},l("p",null,"Matrice con un asse di simmetria lungo la diagonale; gli elementi nel triangolo superiore sono però l'opposto di quelli del triangolo inferiore."),l("p",null,"Ha sempre degli ",l(r.h,null,"0")," lungo la diagonale."),l(r.p,null,O(s||(s=G`A = -A^T`))),l(i.a,null,l(r.p,null,O(g||(g=G`
                            \begin{pmatrix}
                                {\color{Gray} 0} & {\color{Yellow} -2} & {\color{Orange} -4}\\ 
                                {\color{Yellow} 2} & {\color{Gray} 0} & {\color{Red} -5}\\ 
                                {\color{Orange} 4} & {\color{Red} 5} & {\color{Gray} 0}
                            \end{pmatrix}
                        `))))),l(r.q,{title:"Matrice a diagonale dominante per riga/colonna"},l("p",null,"Matrice in cui i valori della diagonale sono maggiori della somma di tutti gli altri nella riga/colonna."),l(i.a,null,l(r.p,null,O(x||(x=G`
                            \begin{pmatrix}
                                {\color{Orange} 9} & 1 & 2\\
                                1 & {\color{Orange} 8} & 1\\
                                1 & 2 & {\color{Orange} 7}
                            \end{pmatrix}
                        `))))),l(r.q,{title:"Matrice ortogonale"},l("p",null,"Matrice che se moltiplicata per la sua trasposta dà come risultato la ",l("b",null,"matrice identità"),"."),l(r.p,null,O(w||(w=G`A^T \cdot A = I`))),l(i.a,null,l(r.p,null,O(_||(_=G`
                            \begin{pmatrix}
                             \frac{1}{3} & \frac{2}{3} & -\frac{2}{3}\\
                             \frac{2}{3} & \frac{1}{3} & \frac{2}{3}\\
                             \frac{2}{3} & -\frac{2}{3} & -\frac{1}{3}\\
                            \end{pmatrix}
                        `))))),l(r.q,{title:"Matrice inversa"},l("p",null,"Matrice tale che:"),l(r.p,null,O(v||(v=G`A^{-1} \cdot A = I`)))),l(r.q,{title:"Matrice sparsa"},l("p",null,"Matrice con pochissimi valori diversi da 0."),l(i.a,null,l(r.p,null,O(h||(h=G`
                            \begin{pmatrix}
                                {\color{Gray} 0} & 1 & {\color{Gray} 0}\\
                                1 & 1 & {\color{Gray} 0}\\
                                {\color{Gray} 0} & {\color{Gray} 0} & 1
                            \end{pmatrix}
                        `)))))),l(r.r,{title:"Norme vettoriali"},l(r.q,{title:"Norma vettoriale"},l("p",null,"Funzione che associa un valore positivo a ogni vettore diverso da 0, e 0 al vettore zero."),l(i.a,null,l("a",{href:"https://it.wikipedia.org/wiki/Norma_(matematica)#/media/File:Vector_norms.svg"},"Esempi su Wikipedia"))),l(r.q,{title:"Norma a infinito"},l("p",null,"Massimo dei valori assoluti di tutti gli elementi del vettore."),l("p",null,l(r.h,null,O(q||(q=G`\Vert x \Vert_\infty = max_{i = 1..n} | x_i |`))))),l(r.q,{title:"Norma a 1"},l("p",null,"Somma dei valori assoluti di tutti gli elementi del vettore."),l("p",null,l(r.h,null,O(y||(y=G`\Vert x \Vert_1 = \sum_{i = 1}^n | x_i |`))))),l(r.q,{title:"Norma a 2"},l("p",null,"Radice quadrata della somma dei quadrati di tutti gli elementi del vettore."),l("p",null,l(r.h,null,O(f||(f=G`\Vert x \Vert_2 = \sqrt{\sum_{i = 1}^n x_i^2}`)))))),l(r.r,{title:"Norme matriciali"},l(r.q,{title:"Norma matriciale indotta"},l("p",null,"Funzione che associa un valore positivo a ogni matrice diversa da 0, e 0 alla matrice zero."),l("p",null,"Si ricavano dalle norme vettoriali:"),l("p",null,l(r.h,null,O(M||(M=G`\Vert A \Vert = sup_{x \in \mathbb{R}, x \neq 0} \frac{\Vert A \cdot x \Vert}{\Vert x \Vert}`)))),l(i.a,null,l(r.h,null,"sup")," è l'estremo superiore di un insieme. E' molto simile al massimo: ricordi le prime lezioni di Analisi?")),l(r.q,{title:"Norma a infinito"},l("p",null,"Massimo delle somme dei valori assoluti di tutti gli elementi di ogni riga di una matrice."),l("p",null,l(r.h,null,O(Y||(Y=G`\Vert A \Vert_\infty = max_{i = 1..n} \sum_{j = 1}^n | a_{ij} |`))))),l(r.q,{title:"Norma a 1"},l("p",null,"Massimo delle somme dei valori assoluti di tutti gli elementi di ogni colonna di una matrice."),l("p",null,l(r.h,null,O(V||(V=G`\Vert A \Vert_1 = max_{j = 1..n} \sum_{i = 1}^n | a_{ij} |`))))),l(r.q,{title:"Norma a 2"},l("p",null,"Radice quadrata del rango del prodotto tra una matrice e la sua trasposta."),l("p",null,l(r.h,null,O(b||(b=G`\Vert A \Vert_2 = \sqrt{\rho ( A^T \times A ) }`)))))),l(r.r,{title:"Errori"},l(r.q,{title:"Errore relativo tra vettori e matrici"},l("p",null,"Le norme sono usate per calcolare l'errore relativo tra due vettori o matrici:"),l("p",null,l(r.h,null,O(A||(A=G`\frac{\Vert x - y \Vert}{\Vert x \Vert}`)))))))}}.call(this,o("hosL").h)},ke5e:function(l,e,o){"use strict";(function(l){var r=o("2w3n"),i=o.n(r);e.a=function(e){return l("div",{class:i.a.example},e.children)}}).call(this,o("hosL").h)}}]);
//# sourceMappingURL=route-RipassoDiAlgebraLineare.chunk.b3d47.esm.js.map