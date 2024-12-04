
  const table = ["", "", "", "", "", "", "", "", ""]; 
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  
  let turn = 0; 
  let juegoActivo = true; 
  const boardItems = document.querySelectorAll(".board_item");
  
  boardItems.forEach((item, index) => {
    item.addEventListener("click", () => fillBoard(item, index));
  });
  
  function fillBoard(item, index) {
    if (!juegoActivo || table[index] !== "") return; 
  
   
    const template_cross = `<svg class="icon">
             <use xlink:href="./icons/icon-x.svg#icon-x"></use>
           </svg>`;
    const template_circle = `<svg class="icon circle">
               <use xlink:href="./icons/icon-o.svg#icon-o"></use>
             </svg>`;
    item.innerHTML = turn === 0 ? template_cross : template_circle;
  
    // Actualizar el estado del tablero
    table[index] = turn === 0 ? "X" : "O";
  
    
    if (checkWinner()) {
      juegoActivo = false;
      alert(`¡${turn === 0 ? "X" : "O"} ha ganado!`);
      return;
    } else if (table.every(cell => cell !== "")) {
      juegoActivo = false;
      alert("¡Es un empate!");
      return;
    }
  
    // Cambiar turno
    turn = turn === 0 ? 1 : 0;
  }
  
  function checkWinner() {
    return winningCombinations.some(combination => {
      const [a, b, c] = combination;
      return (
        table[a] !== "" &&
        table[a] === table[b] &&
        table[a] === table[c]
      );
    });
  }
  function showModalWinner() {
    const winner = 
    
  }
