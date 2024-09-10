function rollDice() {
    // Gera resultados aleatórios para dois dados
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    
    // Calcula a soma dos dados
    const sum = dice1 + dice2;
    
    // Atualiza a exibição dos resultados dos dados
    document.getElementById('diceResult').innerText = `Dados: ${dice1} + ${dice2} = ${sum}`;
    
    // Move o cavalo correspondente à soma dos dados
    moveHorse(sum);
}

function moveHorse(steps) {
    // Verifica se a soma está dentro do intervalo de cavalos disponíveis
    if (steps >= 1 && steps <= 12) {
        // Seleciona o cavalo correspondente à soma dos dados
        const horse = document.getElementById(`horse${steps}`);
        
        if (horse) {
            // Move o cavalo e preserva sua posição
            const currentPosition = parseInt(horse.style.left || '0', 10);
            horse.style.left = `${currentPosition + 50}px`;
        }
    }
}
