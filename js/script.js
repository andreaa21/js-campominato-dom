/*
L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

-------------------------------------------------------------------------------

****L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
**BONUS:**
1- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
****2- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste
**Consigli del giorno:** 
****Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.
*/ 


/*
    COSE DA FARE

    - scelgo la difficoltà


    - PLAY    
        - generare la griglia quadrata in base alla difficoltä scelta
            - quando genero la griglia genero anche le bombe

        - inserire le celle dentro la griglia

        - inserire il numero dentro le celle

        - creare le bombe

    - al CLICK della cella
        - verificare se è una bomba ----- FINE GIOCO
        - la cella si colora

    - termina la partita se ho cliccato su una bomba o se ho finito i tentativi
        -stampo il messaggio di fine partita
        - accendo tutte le bombe 
        - congelo la griglia

    - RESET
        - cancello la vecchia griglia
        - cancello le bombe
*/


const main = document.querySelector('.main-wrapper');
const btn = document.querySelector('#button');
const levelChoice = document.querySelector ('#level'); 
const bombNumber = 16;


btn.addEventListener('click', play);


function play(){
    // stabilisco il numero di square in base alla difficoltà
     const squareNumber = levelChoice.value;

    reset();

    // genero la griglia
    createGrid(squareNumber);

}


function createGrid(squareNumber){
    // creo la griglia
    const grid = document.createElement('div');
    // gli aggiungo la classe grid
    grid.className = 'grid';
    // aggiungo le classi che servono
    grid.classList.add('d-flex', 'flex-wrap', 'align-items-center');

    // creo gli square
    for(let i = 1; i <= squareNumber; i++){
        const square = createSquare(i, squareNumber);
        grid.append(square);
    }
    // stampo la griglia nel main
    main.append(grid);
}

function createSquare(squareId, squareNumber){
    // creo lo square
    const square = document.createElement('div');
    // gli do la classe square
    square.className = 'square';
    // gli aggiungo le classi che mi servono
    square.classList.add('d-flex', 'align-items-center', 'justify-content-center', 'square'+squareNumber )
    // creo l' id custom
    square.squareId = squareId;
    // scrivo l'id custom dentro lo square
    square.innerHTML = `${squareId}`; 
    // aggiungo il click agli square
    square.addEventListener('click', clickSquare)
    // restituisco lo square
    return square;
}

function clickSquare(event){
    console.log(this.squareId);
    this.classList.add('clicked')
}

function reset(){
    // cancello la vecchia griglia 
    main.innerHTML = '';
}