const perguntas = [
    { pergunta: "Qual é a comida favorita do Felipe?", resposta: "lasanha" },
    { pergunta: "Qual é o esporte que o Felipe pratica?", resposta: "futebol" },
    { pergunta: "Qual é o jogo preferido do Felipe?", resposta: "valorant" },
    { pergunta: "Qual o anime preferido do Felipe?", resposta: "bleach" }
];

let currentQuestion = 0;
let pontos = 0;

function mostrarPergunta() {
    if (currentQuestion < perguntas.length) {
        document.getElementById("question").textContent = perguntas[currentQuestion].pergunta;
        document.getElementById("answer").value = "";
        document.getElementById("result").textContent = "";
    } else {
        finalizarJogo();
    }
}

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
    const correctAnswer = perguntas[currentQuestion].resposta.toLowerCase();

    if (userAnswer === correctAnswer) {
        pontos++;
        document.getElementById("result").textContent = "Resposta correta! 🥰";
    } else {
        document.getElementById("result").textContent = `Resposta errada! A resposta certa era: ${perguntas[currentQuestion].resposta}.`;
    }

    currentQuestion++;
    setTimeout(mostrarPergunta, 2000);
}

function finalizarJogo() {
    const message = pontos === perguntas.length
        ? `Parabéns, Matheus! Você acertou todas as perguntas e conhece o Felipe muito bem! 💕`
        : `Você acertou ${pontos} de ${perguntas.length} perguntas! Isso mostra o quanto vocês se completam. 😍`;

    document.getElementById("game").innerHTML = "";
    document.getElementById("result").textContent = message;

    setTimeout(() => {
        document.getElementById("letter").style.display = "block";
    }, 3000);
}

window.onload = mostrarPergunta;
