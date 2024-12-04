const board_item = document.querySelectorAll(`.icon.cross`)
const cross = document.querySelector(`.icon cross`)
let currentPlayer = 'X';



/* board_item.addEventListener(`click`, () => {
    board_item.innerHTML = ""
    table.forEach(element => {
        const table_template = `<use xlink:href="./icons/icon-x.svg#icon-x"></use>`
        board_item.innerHTML = table_template
        
    });
       

    
}) */
//turnossss
function playerTurn() {
    if (table[index].player !== null) return; // Verificar si celda is vacia

    //actualizarrr
    table[index].player = currentPlayer;
    table[index].choice = currentPlayer;
    board_item[index].innerHTML = `<svg class="icon"><use xlink:href="./icons/icon-${currentPlayer.toLowerCase()}.svg#icon-${currentPlayer.toLowerCase()}"></use></svg>`;

    
    if (currentPlayer === 'X') {  
        currentPlayer = 'O';
    } else {
        currentPlayer = 'X';
    }
 
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; //lo mismo pero mas barato

}


board_item.addEventListener(`click`, playerTurn)
console.log(board_item)
    