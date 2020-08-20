(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"2w3n":function(l){l.exports={red:"red__2y1B_",orange:"orange__dD2kx",yellow:"yellow__OEpwl",lime:"lime__CVe41",cyan:"cyan__26ZAg",blue:"blue__LO7Xm",magenta:"magenta__1Akee",example:"example__2PzAa"}},U6dl:function(l,o,e){"use strict";e.r(o),function(l){var r=e("mbOI"),a=e("ke5e");let i,t,n,c,u,p,d,m,s,g,w,x,v,_,y,f,Y,h,M,b=l=>l;const G=String.raw;o.default=function(){return l("div",null,l("h1",null,"Ripasso di ",l("a",{href:"/vldigeometria"},"Algebra Lineare")," ",l("small",null,"per ",l("a",{href:"/calcolonumerico"},"Calcolo Numerico"))),l(r.q,{title:"Matrici speciali"},l(r.p,{title:"Matrice identità"},l("p",null,"Elemento neutro della moltiplicazione matriciale."),l(a.a,null,l(r.o,null,G(i||(i=b`
                            \begin{pmatrix}
                                {\color{Yellow} 1} & {\color{Yellow} 0} & {\color{Yellow} 0}\\
                                {\color{Yellow} 0} & {\color{Yellow} 1} & {\color{Yellow} 0}\\
                                {\color{Yellow} 0} & {\color{Yellow} 0} & {\color{Yellow} 1}
                            \end{pmatrix}
                        `))))),l(r.p,{title:"Matrice diagonale"},l("p",null,"Matrice con elementi diversi da 0 solo sulla diagonale."),l(a.a,null,l(r.o,null,G(t||(t=b`
                            \begin{pmatrix}
                                {\color{Yellow} 3} & {\color{Gray} 0} & {\color{Gray} 0}\\
                                {\color{Gray} 0} & {\color{Yellow} 4} & {\color{Gray} 0}\\
                                {\color{Gray} 0} & {\color{Gray} 0} & {\color{Yellow} 5}
                            \end{pmatrix}
                        `))))),l(r.p,{title:"Matrice triangolare inferiore"},l("p",null,"Matrice con elementi diversi da 0 sopra la diagonale."),l(a.a,null,l(r.o,null,G(n||(n=b`
                            \begin{pmatrix}
                                {\color{Yellow} 3} & {\color{Gray} 0} & {\color{Gray} 0}\\
                                {\color{Orange} 4} & {\color{Yellow} 4} & {\color{Gray} 0}\\
                                {\color{Orange} 5} & {\color{Orange} 5} & {\color{Yellow} 5}
                            \end{pmatrix}
                        `))))),l(r.p,{title:"Matrice triangolare superiore"},l("p",null,"Matrice con elementi diversi da 0 sotto la diagonale."),l(a.a,null,l(r.o,null,G(c||(c=b`
                            \begin{pmatrix}
                                {\color{Yellow} 3} & {\color{Orange} 3} & {\color{Orange} 3}\\
                                {\color{Gray} 0} & {\color{Yellow} 4} & {\color{Orange} 4}\\
                                {\color{Gray} 0} & {\color{Gray} 0} & {\color{Yellow} 5}
                            \end{pmatrix}
                        `))))),l(r.p,{title:"Matrice non-singolare"},l("p",null,"Matrice con determinante diverso da 0."),l(r.o,null,G(u||(u=b`det(A) \neq 0`))),l("p",null,"Sono anche dette ",l("b",null,"matrici linearmente indipendenti")," o ",l("b",null,"matrici invertibili"),"."),l(a.a,null,l(r.o,null,G(p||(p=b`
                            \begin{pmatrix}
                                {\color{Yellow} 1} & {\color{Yellow} 1} & {\color{Yellow} 2}\\
                                {\color{Orange} 2} & {\color{Orange} 1} & {\color{Orange} 1}\\
                                {\color{Red} 1} & {\color{Red} 2} & {\color{Red} 1}
                            \end{pmatrix}
                        `))))),l(r.p,{title:"Matrice simmetrica"},l("p",null,"Matrice con un asse di simmetria lungo la diagonale."),l(r.o,null,G(d||(d=b`A = A^T`))),l(a.a,null,l(r.o,null,G(m||(m=b`
                            \begin{pmatrix}
                                1 & {\color{Yellow} 2} & {\color{Orange} 4}\\ 
                                {\color{Yellow} 2} & 3 & {\color{Red} 5}\\ 
                                {\color{Orange} 4} & {\color{Red} 5} & 6
                            \end{pmatrix}
                        `))))),l(r.p,{title:"Matrice antisimmetrica"},l("p",null,"Matrice con un asse di simmetria lungo la diagonale; gli elementi nel triangolo superiore sono però l'opposto di quelli del triangolo inferiore."),l("p",null,"Ha sempre degli ",l(r.h,null,"0")," lungo la diagonale."),l(r.o,null,G(s||(s=b`A = -A^T`))),l(a.a,null,l(r.o,null,G(g||(g=b`
                            \begin{pmatrix}
                                {\color{Gray} 0} & {\color{Yellow} -2} & {\color{Orange} -4}\\ 
                                {\color{Yellow} 2} & {\color{Gray} 0} & {\color{Red} -5}\\ 
                                {\color{Orange} 4} & {\color{Red} 5} & {\color{Gray} 0}
                            \end{pmatrix}
                        `))))),l(r.p,{title:"Matrice a diagonale dominante per riga/colonna"},l("p",null,"Matrice in cui i valori della diagonale sono maggiori della somma di tutti gli altri nella riga/colonna."),l(a.a,null,l(r.o,null,G(w||(w=b`
                            \begin{pmatrix}
                                {\color{Orange} 9} & 1 & 2\\
                                1 & {\color{Orange} 8} & 1\\
                                1 & 2 & {\color{Orange} 7}
                            \end{pmatrix}
                        `))))),l(r.p,{title:"Matrice ortogonale"},l("p",null,"Matrice che se moltiplicata per la sua trasposta dà come risultato la ",l("b",null,"matrice identità"),"."),l(r.o,null,G(x||(x=b`A^T \cdot A = I`))),l(a.a,null,l(r.o,null,G(v||(v=b`
                            \begin{pmatrix}
                             \frac{1}{3} & \frac{2}{3} & -\frac{2}{3}\\
                             \frac{2}{3} & \frac{1}{3} & \frac{2}{3}\\
                             \frac{2}{3} & -\frac{2}{3} & -\frac{1}{3}\\
                            \end{pmatrix}
                        `))))),l(r.p,{title:"Matrice inversa"},l("p",null,"Matrice tale che:"),l(r.o,null,G(_||(_=b`A^{-1} \cdot A = I`)))),l(r.p,{title:"Matrice sparsa"},l("p",null,"Matrice con pochissimi valori diversi da 0."),l(a.a,null,l(r.o,null,G(y||(y=b`
                            \begin{pmatrix}
                                {\color{Gray} 0} & 1 & {\color{Gray} 0}\\
                                1 & 1 & {\color{Gray} 0}\\
                                {\color{Gray} 0} & {\color{Gray} 0} & 1
                            \end{pmatrix}
                        `)))))),l(r.q,{title:"Norme"},l(r.p,{title:"Norma vettoriale"},l("p",null,"Funzione che associa un valore positivo a ogni vettore diverso da 0, e 0 al vettore zero."),l(a.a,null,l("a",{href:"https://it.wikipedia.org/wiki/Norma_(matematica)#/media/File:Vector_norms.svg"},"Esempi su Wikipedia"))),l(r.p,{title:"Norma a infinito"},l("p",null,"Massimo dei valori assoluti di tutti gli elementi del vettore."),l("p",null,l(r.h,null,G(f||(f=b`\Vert x \Vert_\infty = max_{i = 1..n} | x_i |`))))),l(r.p,{title:"Norma a 1"},l("p",null,"Somma dei valori assoluti di tutti gli elementi del vettore."),l("p",null,l(r.h,null,G(Y||(Y=b`\Vert x \Vert_1 = \sum_{i = 1}^n | x_i |`))))),l(r.p,{title:"Norma a 2"},l("p",null,"Radice quadrata della somma dei quadrati di tutti gli elementi del vettore."),l("p",null,l(r.h,null,G(h||(h=b`\Vert x \Vert_2 = \sqrt{\sum_{i = 1}^n x_i^2}`))))),l(r.p,{title:"Errore relativo tra vettori e matrici"},l("p",null,"Le norme sono usate per calcolare l'errore relativo tra due vettori o matrici:"),l("p",null,l(r.h,null,G(M||(M=b`\frac{\Vert x - y \Vert}{\Vert x \Vert}`)))))))}}.call(this,e("hosL").h)},ke5e:function(l,o,e){"use strict";(function(l){var r=e("2w3n"),a=e.n(r);o.a=function(o){return l("div",{class:a.a.example},o.children)}}).call(this,e("hosL").h)}}]);
//# sourceMappingURL=route-RipassoDiAlgebraLineare.chunk.f4d39.esm.js.map