const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector("texto-resultado");

const perguntas = [
    {
        enunciado: "Pergunta 1",
        alternativas: [
            "alternativa 1",
            "alternativa 2",
        
        ]
    },
    {
        enunciado: "Pergunta 2",
        alternativas: [
            "alternativa 3",
            "alternativa 4",
        
        ]
    },{
        enunciado: "Pergunta 3",
        alternativas: [
            "alternativa 5",
            "alternativa 6",
        
        ]
    },{
        enunciado: "Pergunta 4",
        alternativas: [
            "alternativa 7",
            "alternativa 8",
        
        ]
    }
]

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual]
    caixaPerguntas.textContent = perguntaAtual.enunciado
}

mostraPergunta();

console.log(perguntas)