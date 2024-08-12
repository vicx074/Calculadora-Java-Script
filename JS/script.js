const display = document.getElementById('display');
let currentInput = ''; // A entrada que estou digitando atualmente
let operator = ''; // O operador que eu selecionei
let previousInput = ''; // O número que eu digitei antes de selecionar o operador


document.addEventListener('DOMContentLoaded', () => {
    // Adiciono eventos de clique para os botões
    document.getElementById('ac').addEventListener('click', clearDisplay);
    document.getElementById('del').addEventListener('click', deleteLastCharacter);
    document.getElementById('divisao').addEventListener('click', () => setOperator('/'));
    document.getElementById('multiplicacao').addEventListener('click', () => setOperator('*'));
    document.getElementById('adicao').addEventListener('click', () => setOperator('+'));
    document.getElementById('subtracao').addEventListener('click', () => setOperator('-'));
    document.getElementById('igual').addEventListener('click', calculate);
    document.getElementById('ponto').addEventListener('click', () => addToDisplay('.'));
    
    // Adiciono eventos de clique para os botões numéricos
    for (let i = 0; i <= 9; i++) {
        document.getElementById(`num${i}`).addEventListener('click', () => addToDisplay(i));
    }
});

// Limpo a tela e reseto as variáveis
function clearDisplay() {
    display.textContent = '0';
    currentInput = '';
    previousInput = '';
    operator = '';
}

// Removo o último caractere da entrada atual
function deleteLastCharacter() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

// Adiciono um valor à entrada atual e atualizo a tela
function addToDisplay(value) {
    if (currentInput === '' && value === '.') return; // Impede começar com um ponto
    currentInput += value;
    updateDisplay();
}

// Atualizo o conteúdo da tela com a entrada atual
function updateDisplay() {
    display.textContent = currentInput || '0';
}

// Defino o operador e armazeno a entrada atual como a entrada anterior
function setOperator(op) {
    if (currentInput === '') return; // Não deixo definir operador sem um número
    previousInput = currentInput;
    currentInput = '';
    operator = op;
}

// Calculo o resultado com base na entrada anterior, entrada atual e operador
function calculate() {
    if (previousInput === '' || currentInput === '' || operator === '') return;
    
    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
    }

    currentInput = result.toString();
    operator = '';
    previousInput = '';
    updateDisplay();
}
