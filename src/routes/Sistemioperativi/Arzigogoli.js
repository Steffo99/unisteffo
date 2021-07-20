import {
    Anchor,
    Blockquote,
    Bold as B,
    Color,
    Italic as I,
    ListItem as LI,
    Paragraph as P,
    Title,
    Code as BluelibCode,
    Separator,
    Box,
    Todo,
} from "bluelib/lib/components"

import Split from "../../components/Split"


const r = String.raw
const Ex = ({ children, ...props }) => <Color builtin={"blue"}><Box {...props}>{children}</Box></Color>
const Code = ({ children, ...props }) => <code {...props}>{children}</code>


export default function Arzigogoli() {
    return (
        <div>
            <article>
                <Title size={"xxl"}>
                    Arzigogolo #5 del 2019
                </Title>
                <Split title={"Prerequisiti"} major={true}>
                    <Ex title={"Premessa"}>
                        <P>
                            Tutti gli esercizi devono essere svolti su un sistema guest <B>Arch Linux</B> testuale.
                        </P>
                    </Ex>
                </Split>
                <Split>
                    <Box title={"Preparazione del sistema guest"}>
                        <P>
                            Si allochino almeno 4 GB di memoria alla macchina virtuale Arch Linux, altrimenti <Code>cscope</Code> non sarà in grado di funzionare sul codice sorgente del kernel Linux.
                        </P>
                        <P>
                            All'interno di essa, si installino tramite <Code>pacman</Code> i programmi necessari allo svolgimento degli esercizi: <Code>pacman -S cscope wget git gcc</Code>.
                        </P>
                        <P>
                            <I>
                                Per semplicità, si assume che in fase di installazione si sia installato su Arch il pacchetto <Code>linux</Code> contenente il kernel Linux standard, e non pacchetti contenenti kernel alternativi come <Code>linux-hardened</Code> o <Code>linux-zen</Code>.
                            </I>
                        </P>
                    </Box>
                </Split>
                <Split title={"Parte 1"} major={true}>
                    <Ex title={"Consegna"}>
                        <P>
                            Si scarichi e si installi il software cscope per l’indicizzazione di alberi sorgenti. Si indicizzino gli alberi sorgenti dei seguenti software:
                        </P>
                        <ul>
                            <LI><B>kernel Linux</B> (l’esatta versione in esecuzione sul sistema guest)</LI>
                            <LI><B>libreria del C</B> (l’esatta versione in esecuzione sul sistema guest)</LI>
                        </ul>
                        <P>
                            Si documenti passo passo la procedura seguita e si evidenzino le eventuali difficoltà trovate.
                        </P>
                    </Ex>
                </Split>
                <Split>
                    <Box title={"Comandi utilizzati"}>
                        <ul>
                            <LI>
                                <Code>uname</Code> è un comando che permette di visualizzare informazioni sul sistema operativo attualmente in esecuzione: con l'opzione <Code>-r</Code>, esso stampa la release del kernel attualmente in uso.
                            </LI>
                            <LI>
                                <Code>wget</Code> è un comando che permette di scaricare file dal web: il primo argomento che gli viene passato specifica quale pagina o file esso deve scaricare.
                            </LI>
                            <LI>
                                <Code>tar</Code> è un comando che permette di estrarre o inserire file in un archivio: l'opzione <Code>-x</Code> specifica che deve estrarre (e<Code>x</Code>tract) i file da un archivio, mentre l'opzione <Code>{"-f {NOMEFILE}"}</Code> specifica il file archivio da cui deve estrarre i file.
                            </LI>
                            <LI>
                                <Code>ldd</Code> è un comando che permette di visualizzare le librerie dinamiche richieste per il funzionamento di un certo eseguibile; se usato con l'opzione <Code>--version</Code>, esso stamperà la versione della libreria C del sistema.
                            </LI>
                            <LI>
                                <Code>git clone</Code> è un comando che permette di creare una copia del repository Git presente alla posizione del primo argomento. Il primo argomento può essere il percorso di un file locale, un percorso di un file remoto accessibile tramite <Code>ssh</Code>, oppure l'URL di una pagina web accessibile tramite i protocolli <Code>https</Code> o <Code>git</Code>.
                            </LI>
                            <LI>
                                <Code>git checkout</Code> è un comando che permette di cambiare branch del repository Git presente nella current working directory: il primo argomento specifica il nome del branch a cui si vuole passare.
                            </LI>
                            <LI>
                                <Code>cscope</Code> è un comando che indicizza il codice sorgente C di un programma per permettere di ricercare velocemente simboli al suo interno.
                                <ul>
                                    <LI>Con l'opzione <Code>-b</Code>, <Code>cscope</Code> creerà l'indice dei simboli presenti nei file <Code>.c</Code>, <Code>.h</Code>, <Code>.l</Code> e <Code>.y</Code> della directory attuale.
                                    </LI>
                                    <LI>Con l'opzione <Code>-q</Code>, <Code>cscope</Code> creerà in aggiunta un indice inverso di simboli, permettendo l'utilizzo di un algoritmo più veloce per la ricerca (a costo di un maggiore utilizzo di memoria).</LI>
                                    <LI>Con l'opzione <Code>-k</Code>, <Code>cscope</Code> ignorerà le librerie presenti all'interno del sistema operativo (in <Code>/usr/include</Code>), e si limiterà a indicizzare i file nella directory attuale.</LI>
                                    Questa modalità è detta “kernel mode”, e viene utilizzata nel caso si stia indicizzando il codice sorgente del kernel Linux, in quanto esso implementa le funzioni definite all’interno degli header include.
                                    <LI>Con l'opzione <Code>-R</Code>, <Code>cscope</Code> cercherà file sorgenti ricorsivamente (all'interno di tutte le sottocartelle presenti nella cartella attuale).</LI>
                                    <LI>Con l'opzione <Code>-v</Code>, <Code>cscope</Code> stamperà ogni secondo informazioni sul progresso attuale dell'indicizzazione.</LI>
                                </ul>
                            </LI>
                        </ul>
                    </Box>
                </Split>
                <Split>
                    <Box title={"Scaricare il codice sorgente del kernel Linux"}>
                        <P>
                            Si controlli la release del kernel Linux attualmente in esecuzione sul sistema con il comando <Code>uname -r</Code>.
                        </P>
                        <P>
                            Si cerchi sul sito web <Anchor href={"https://www.kernel.org/"}>https://www.kernel.org/</Anchor> la versione corrispondente a quella attualmente in esecuzione, e se ne scarichi l'archivio del codice sorgente con il comando <Code>wget</Code>: nel caso della release 5.3.8, il comando è <Code>wget https://cdn.kernel.org/pub/linux/kernel/v5.x/linux-5.3.8.tar.xz</Code>.
                        </P>
                        <P>
                            Si estraggano i file dall'archivio scaricato con il comando <Code>tar -xf linux-5.3.8.tar.xz</Code>: esso creerà una nuova cartella <Code>linux-5.3.8</Code> contenente il codice sorgente del kernel attualmente in uso.
                        </P>
                    </Box>
                    <Box title={"Scaricare il codice sorgente della libreria C"}>
                        <P>
                            Si controlli la versione della libreria C (<Code>glibc</Code>) disponibile sul sistema con il comando <Code>ldd --version</Code>.
                        </P>
                        <P>
                            Si cloni il repository Git di <Code>glibc</Code>, disponibile all'URL <Code>git://sourceware.org/git/glibc.git</Code>: <Code>git clone git://sourceware.org/git/glibc.git</Code>; sarà creata una cartella <Code>glibc</Code> contenente il codice sorgente più recente della libreria C.
                        </P>
                        <P>
                            Si entri nella cartella <Code>glibc</Code> con <Code>cd glibc</Code>.
                        </P>
                        <P>
                            Si risalga al codice sorgente della release attuale con il comando <Code>git checkout</Code>: nel caso della release 2.30, il comando sarà <Code>git checkout release/2.30/master</Code>: terminata l'esecuzione, nella cartella sarà presente il codice sorgente della libreria C attualmente in uso dal sistema.
                        </P>
                    </Box>
                </Split>
                <Split>
                    <Box title={<span>Creazione del database <Code>cscope</Code></span>}>
                        <P>
                            Si entri nella cartella <Code>linux-5.3.8</Code>, e si esegua <Code>cscope -bqkRv</Code>; saranno creati i file <Code>cscope.out</Code>, <Code>cscope.in.out</Code>, <Code>cscope.po.out</Code>, rappresentanti l'indice del codice sorgente del kernel Linux; si esca infine dalla cartella con <Code>cd ..</Code>.
                        </P>
                        <P>
                            Si entri nella cartella <Code>glibc</Code> e si ripeta il comando <Code>cscope -bqkRv</Code>; si è ottenuto l'indice del codice sorgente della libreria C; si esca nuovamente dalla cartella con <Code>cd ..</Code>.
                        </P>
                    </Box>
                </Split>
                <Split title={"Parte 2"}>
                    <Ex title={"Consegna"}>
                        <P>
                            Si prenda dimestichezza con il sistema di tracciatura di Linux, <Code>ftrace</Code>.
                        </P>
                        <P>
                            Nello specifico, si documentino i passi necessari per:
                        </P>
                        <ul>
                            <LI>
                                verificare che tale strumento <B>sia supportato</B> nel sistema guest;
                            </LI>
                            <LI>
                                verificare che tale strumento <B>sia attivo</B> nel sistema guest;
                            </LI>
                            <LI>
                                <B>attivare</B> lo strumento nel sistema guest;
                            </LI>
                            <LI>
                                <B>disattivare</B> lo strumento nel sistema guest;
                            </LI>
                            <LI>
                                <B>abilitare la tracciatura completa</B> di tutte le funzioni del kernel;
                            </LI>
                            <LI>
                                <B>recuperare la traccia</B> di esecuzione completa delle funzioni del kernel.
                            </LI>
                        </ul>
                        <P>
                            Si evidenzino eventuali difficoltà trovate.
                        </P>
                    </Ex>
                </Split>
                <Split>
                    <Box title={"Comandi utilizzati"}>
                        <ul>
                            <LI>
                                <Code>mount</Code> è un comando che permette di connettere ad una cartella il file system di un dispositivo collegato al computer.
                                <ul>
                                    <LI>
                                        L'opzione <Code>{"-t {TIPO}"}</Code> specifica il tipo di filesystem che si sta montando: ad esempio, alcuni tipi che possono essere specificati sono <Code>ext4</Code> (filesystem usato principalmente da Linux), <Code>ntfs</Code> (filesystem usato da Windows), e anche tipi speciali come <Code>tracefs</Code> (contenente file per la tracciatura di eventi nel kernel) e <Code>debugfs</Code> (contenente file per il debug del kernel) che non rappresentano dati contenuti all'interno di un dispositivo.
                                    </LI>
                                    <LI>
                                        Il primo argomento specifica il percorso del file dispositivo che si vuole montare; può essere il nome speciale <Code>nodev</Code>, che rappresenta nessun dispositivo ed è utilizzato dai tipi speciali precedentemente menzionati.
                                    </LI>
                                    <LI>
                                        Il secondo argomento specifica la directory in cui si vuole montare il file system; essa verrà popolata con tutti i rispettivi file al termine dell'esecuzione del comando.
                                    </LI>
                                </ul>
                            </LI>
                        </ul>
                    </Box>
                </Split>
                <Split>
                    <Box title={<span>Verificare che <Code>ftrace</Code> sia supportato dal kernel</span>}>
                        <P>
                            Se la cartella esiste, è possibile montarvi il filesystem speciale <Code>tracefs</Code>, contenente tutti i file relativi al tracing, tramite il comando <Code>mount -t tracefs nodev /sys/kernel/tracing</Code>.
                        </P>
                    </Box>
                    <Box title={<span>Verificare che <Code>ftrace</Code> sia attivo nel sistema</span>}>
                        <P>
                            E' possibile vedere lo stato di attivazione del tracing leggendo i contenuti del file <Code>/sys/kernel/tracing/tracing_on</Code>: esso conterrà <Code>0</Code> se <Code>ftrace</Code> è disattivato e <Code>1</Code> se <Code>ftrace</Code> è attivato.
                        </P>
                    </Box>
                </Split>
                <Split>
                    <Box title={<span>Attivare o disattivare <Code>ftrace</Code></span>}>
                        <P>
                            E' possibile attivare o disattivare <Code>ftrace</Code> scrivendo rispettivamente <Code>1</Code> o <Code>0</Code> nel file <Code>/sys/kernel/tracing/tracing_on</Code>: il modo più facile per farlo è con i comandi <Code>echo 1 > /sys/kernel/tracing/tracing_on</Code> e <Code>echo 0 > /sys/kernel/tracing/tracing_on</Code>.
                        </P>
                    </Box>
                </Split>
                <Split>
                    <Box title={<span>Abilitare la tracciatura completa di tutte le funzioni del kernel</span>}>
                        <P>
                            E' possibile selezionare il tipo di tracciatura che si vuole effettuare scrivendo una stringa all'interno del file <Code>/sys/kernel/tracing/current_tracer</Code>.
                        </P>
                        <P>
                            Un elenco di tutti i tipi di tracciatura supportati è presente all'interno del file <Code>/sys/kernel/tracing/available_tracers</Code>.
                        </P>
                        <P>
                            Il tipo di tracciatura necessario per ottenere l'albero delle funzioni del kernel è <Code>function_graph</Code>; lo si scriva quindi sul file <Code>current_tracer</Code> con il comando <Code>echo "function_graph" > /sys/kernel/tracing/current_tracer</Code>.
                        </P>
                    </Box>
                </Split>
                <Split>
                    <Box title={<span>Recuperare la traccia di esecuzione completa delle funzioni del kernel</span>}>
                        <P>
                            Una volta sottoscritti a uno più eventi, è possibile visualizzare la traccia degli eventi a cui si è sottoscritti all'interno del file <Code>/sys/kernel/tracing/trace</Code> (ad esempio con il comando <Code>cat /sys/kernel/tracing/trace</Code>).
                        </P>
                    </Box>
                </Split>
                <Split title={"Parte 3"}>
                    <Ex>
                        <P>
                            Si scriva un programma in C che svolga tutte e sole le seguenti operazioni elementari:
                        </P>
                        <ul>
                            <LI>
                                controlla se <B>è in grado di accedere</B> al file <Code>/etc/passwd</Code>;
                            </LI>
                            <LI>
                                <B>stampa</B> il messaggio <I>"/etc/passwd è leggibile"</I> se <Code>/etc/passwd</Code> è leggibile;
                            </LI>
                            <LI>
                                <B>stampa</B> il messaggio <I>"/etc/passwd non è leggibile"</I> se <Code>/etc/passwd</Code> non è leggibile.
                            </LI>
                        </ul>
                        <P>
                            Sia <code>s</code> la funzione di libreria usata per verificare l’accesso al file <Code>/etc/passwd</Code>. Si documenti sinteticamente <code>s</code>. Inoltre, facendo uso di tutti gli strumenti opportuni (presenti e passati), si scriva la cascata completa di funzioni scatenata da s nella libreria del C e nel kernel. Si commenti a grandilinee lo scopo di ciascuna funzione invocata.
                        </P>
                    </Ex>
                </Split>
                <Split>
                    <Box title={"Comandi utilizzati"}>
                        <P>
                            Il comando <Code>gcc</Code> compila i file sorgente C che gli vengono passati come argomenti e come risultato crea il file eseguibile <Code>a.out</Code>.
                        </P>
                    </Box>
                </Split>
                <Split>
                    <Box title={"Programma in C"}>
                        <P>
                            Si crei il seguente programma C, salvandolo su un file chiamato <Code>programma.c</Code>:
                        </P>
                        <BluelibCode language={"c"}>{r`
                            #include <stdio.h>
                            #include <unistd.h>

                            int main(int argc, char* argv[]) {
                                if(access("/etc/passwd", R_OK)) {
                                    printf("/etc/passwd è leggibile dall'utente attuale");
                                    return 0;
                                }
                                else {
                                    printf("/etc/passwd NON è leggibile dall'utente attuale");
                                    return 1;
                                }
                            }
                        `}</BluelibCode>
                    </Box>
                </Split>
                <Split>
                    <Box title={<span><Code>access()</Code> (la funzione <Code>s</Code>)</span>}>
                        <P>
                            La funzione <Code>int access(const char *pathname, int mode);</Code> è una funzione di <Code>glibc</Code> che permette di controllare se un file esiste e se l'utente che ha eseguito il programma (l'utente _reale_, non l'utente _effettivo_) ha i permessi di leggere/scrivere/eseguire quel file.
                        </P>
                        <P>
                            Per effettuare la verifica, la funzione effettua una syscall, chiamando la funzione <Code>sys_access</Code> del kernel Linux.
                        </P>
                        <P>
                            L'argomento <Code>pathname</Code> specifica il percorso del file su cui si vuole effettuare il controllo.
                        </P>
                        <P>
                            L'argomento <Code>mode</Code> specifica quali controlli si vogliono effettuare sui permessi del file:
                        </P>
                        <ul>
                            <LI>
                                Con il flag <Code>F_OK</Code> si verifica solo l'esistenza del file
                            </LI>
                            <LI>
                                Con il flag <Code>R_OK</Code> si verifica se l'utente che ha eseguito il programma ha permessi di lettura sul file
                            </LI>
                            <LI>
                                Con il flag <Code>W_OK</Code> si verifica se l'utente che ha eseguito il programma ha permessi di scrittura sul file
                            </LI>
                            <LI>
                                Con il flag <Code>X_OK</Code> si verifica se l'utente che ha eseguito il programma ha permessi di esecuzione sul file
                            </LI>
                        </ul>
                        <P>
                        E' possibile effettuare l'OR bitwise tra più flag (<Code>R_OK | W_OK</Code>) per verificare che l'utente abbia tutti i permessi delle flag passate.
                        </P>
                    </Box>
                </Split>
                <Split>
                    <Box title={"Compilazione del programma"}>
                        <P>
                            Si compili il file invocando il comando <Code>gcc programma.c</Code>; sarà creato l'eseguibile linkato dinamicamente <Code>a.out</Code>.
                        </P>
                        <P>
                            Per creare l'albero di funzioni di <Code>access()</Code>, si userà <Code>ftrace</Code>, già configurato in precedenza, e <Code>ltrace</Code>, descritto nella sezione _Esercizio 3 > Comandi utilizzati_.
                        </P>
                    </Box>
                    <Box title={"Recupero dell'albero di funzioni"}>
                        <P>
                            Si disattivi il tracing scrivendo <Code>0</Code> su <Code>/sys/kernel/tracing/tracing_on</Code> (<Code>echo 0 > /sys/kernel/tracing/tracing_on</Code>).
                        </P>
                        <P>
                            Si svuoti la traccia attuale scrivendo <Code>""</Code> su <Code>/sys/kernel/tracing/trace</Code> (<Code>echo "" > /sys/kernel/tracing/trace</Code>).
                        </P>
                    </Box>
                </Split>
                <Split>
                    <Box title={"Commento dell'albero di funzioni"}>
                        <BluelibCode language={"c"}>{r`
                            // La chiamata di sistema access, per l'architettura x64
                            __x64_sys_access() {
                                // Funzione corrispondente alla chiamata di sistema access
                                do_faccessat() {
                                    // Crea una struttura "creds" modificabile, contenente le credenziali di un utente, e incrementa di 1 il suo reference counter
                                    prepare_creds() {
                                        // Alloca memoria dalla cache
                                        kmem_cache_alloc() {
                                            should_failslab();
                                            memcg_kmem_get_cache() {
                                                __rcu_read_lock();
                                                preempt_count_add();
                                                preempt_count_sub();
                                                __rcu_read_unlock();
                                            }
                                            memcg_kmem_put_cache() {
                                                preempt_count_add();
                                                preempt_count_sub();
                                            }
                                        }
                                        // Riempi la struttura con dei dati
                                        security_prepare_creds() {
                                            lsm_cred_alloc.isra.0();
                                        }
                                    }
                                    // Se si passa da root a un altro utente, rimuovi i permessi
                                    make_kuid() {
                                        map_id_range_down();
                                    }
                                    // Cambia le credenziali del processo attuale
                                    override_creds();
                                    // Trova un file a un dato percorso in userspace
                                    user_path_at_empty() {
                                        // Trova le flag dei permessi del file con un dato nome
                                        getname_flags() {
                                            kmem_cache_alloc() {
                                                should_failslab();
                                                memcg_kmem_put_cache();
                                            }
                                            __check_object_size() {
                                                check_stack_object();
                                                __virt_addr_valid();
                                                __check_heap_object();
                                            }
                                        }
                                        // Cerca il file con un dato nome
                                        filename_lookup() {
                                            path_lookupat.isra.0() {
                                                path_init() {
                                                    __rcu_read_lock();
                                                    // Parti dalla root directory ( / )
                                                    set_root();
                                                    nd_jump_root();
                                                }
                                                // Attraversa le varie directory
                                                link_path_walk() {
                                                    // Assicurati di avere i permessi per entrare in una directory
                                                    inode_permission() {
                                                        generic_permission();
                                                        security_inode_permission();
                                                    }
                                                    // Entra nella directory
                                                    walk_component() {
                                                        lookup_fast() {
                                                            __d_lookup_rcu();
                                                            __follow_mount_rcu.isra.0() {
                                                                __lookup_mnt();
                                                            }
                                                        }
                                                    }
                                                    inode_permission() {
                                                        generic_permission();
                                                        security_inode_permission();
                                                    }
                                                }
                                                walk_component() {
                                                    lookup_fast() {
                                                        __d_lookup_rcu();
                                                        __follow_mount_rcu.isra.0();
                                                    }
                                                }
                                                // Termina l'esplorazione delle directory
                                                complete_walk() {
                                                    unlazy_walk() {
                                                        legitimize_links();
                                                        legitimize_path.isra.0() {
                                                            __legitimize_mnt();
                                                        }
                                                        __rcu_read_unlock();
                                                    }
                                                }
                                                // Restituisci il risultato
                                                terminate_walk() {
                                                    dput();
                                                    mntput();
                                                }
                                            }
                                            restore_nameidata();
                                            putname() {
                                                kmem_cache_free();
                                            }
                                        }
                                    }
                                    // Controlla di avere i permessi di lettura
                                    inode_permission() {
                                        generic_permission();
                                        security_inode_permission();
                                    }
                                    // Libera la memoria 
                                    path_put() {
                                        dput() {
                                            __rcu_read_lock();
                                            __rcu_read_unlock();
                                        }
                                        mntput() {
                                            mntput_no_expire() {
                                                __rcu_read_lock();
                                                __rcu_read_unlock();
                                            }
                                        }
                                    }
                                    // Ritorna alle credenziali originali
                                    revert_creds();
                                    // Decrementa di 1 il reference counter delle credenziali create in precedenza, al fine di deallocare la struttura se nessun altro processo la stausando
                                    __put_cred() {
                                        put_cred_rcu() {
                                            security_cred_free();
                                            key_put();
                                            key_put();
                                            key_put();
                                            key_put();
                                            free_uid();
                                            // Il reference counter ha raggiunto 0, si può deallocare la memoria occupata dalla struttura “creds” in sicurezza
                                            kmem_cache_free();
                                        }
                                    }
                                }
                            }
                        `}</BluelibCode>
                    </Box>
                </Split>
            </article>
        </div>
    )
}
