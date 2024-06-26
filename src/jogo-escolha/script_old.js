const questions = {
    "web": [
        {
            "pergunta": "Qual é a diferença entre as tags <ul> e <ol> em HTML?",
            "a": {
                "resposta": "Ambas criam listas ordenadas, mas <ul> usa pontos e <ol> usa números.",
                "correto": false,
                "mensagem": "A tag <ul> cria listas não ordenadas usando pontos, enquanto a tag <ol> cria listas ordenadas usando números."
            },
            "b": {
                "resposta": "<ul> cria uma lista não ordenada e <ol> cria uma lista ordenada.",
                "correto": true,
                "mensagem": "Essa é a resposta correta!"
            },
            "c": {
                "resposta": "<ul> é usada para listas ordenadas e <ol> é usada para listas não ordenadas.",
                "correto": false,
                "mensagem": "<ul> é usada para listas não ordenadas, enquanto <ol> é usada para listas ordenadas."
            },
            "d": {
                "resposta": "Nenhuma das opções anteriores está correta.",
                "correto": false,
                "mensagem": "A tag <ul> cria listas não ordenadas e a tag <ol> cria listas ordenadas."
            }
        },
        {
            "pergunta": "Qual propriedade CSS é usada para alterar a cor de fundo de um elemento?",
            "a": {
                "resposta": "font-color",
                "correto": false,
                "mensagem": "A propriedade font-color não existe. Use color para alterar a cor do texto."
            },
            "b": {
                "resposta": "background-color",
                "correto": true,
                "mensagem": "background-color é usada para alterar a cor de fundo de um elemento."
            },
            "c": {
                "resposta": "color",
                "correto": false,
                "mensagem": "A propriedade color altera a cor do texto, não a cor de fundo."
            },
            "d": {
                "resposta": "bg-color",
                "correto": false,
                "mensagem": "A propriedade bg-color não existe em CSS. Use background-color."
            }
        },
        {
            "pergunta": "Qual tag HTML é usada para inserir uma imagem em uma página web?",
            "a": {
                "resposta": "<img>",
                "correto": true,
                "mensagem": "Essa é a resposta correta!"
            },
            "b": {
                "resposta": "<image>",
                "correto": false,
                "mensagem": "A tag correta para inserir uma imagem é <img>."
            },
            "c": {
                "resposta": "<picture>",
                "correto": false,
                "mensagem": "A tag <picture> pode ser usada para fornecer diferentes fontes de imagem, mas <img> é usada para a inserção de imagens."
            },
            "d": {
                "resposta": "<src>",
                "correto": false,
                "mensagem": "A tag correta para inserir uma imagem é <img>. src é um atributo da tag <img>."
            }
        },
        {
            "pergunta": "Qual das seguintes opções é usada para criar um link em HTML?",
            "a": {
                "resposta": "<link>",
                "correto": false,
                "mensagem": "A tag <link> é usada para definir uma relação entre o documento atual e um recurso externo, como uma folha de estilo."
            },
            "b": {
                "resposta": "<a>",
                "correto": true,
                "mensagem": "A tag <a> é usada para criar um link em HTML."
            },
            "c": {
                "resposta": "<href>",
                "correto": false,
                "mensagem": "href é um atributo da tag <a> usado para especificar o URL do link."
            },
            "d": {
                "resposta": "<url>",
                "correto": false,
                "mensagem": "Não existe uma tag <url> em HTML. Use a tag <a> para criar um link."
            }
        },
        {
            "pergunta": "Qual propriedade CSS é usada para alterar o tamanho da fonte de um elemento?",
            "a": {
                "resposta": "font-style",
                "correto": false,
                "mensagem": "font-style é usada para aplicar estilo à fonte, como itálico, mas não altera o tamanho."
            },
            "b": {
                "resposta": "font-weight",
                "correto": false,
                "mensagem": "font-weight é usada para definir a espessura da fonte, não o tamanho."
            },
            "c": {
                "resposta": "font-size",
                "correto": true,
                "mensagem": "font-size é usada para alterar o tamanho da fonte de um elemento."
            },
            "d": {
                "resposta": "text-size",
                "correto": false,
                "mensagem": "A propriedade correta para alterar o tamanho da fonte é font-size."
            }
        }
    ],
    "fundamentos": [
        {
            "pergunta": "Qual das opções abaixo representa a geração onde ocorreu a criação dos transistors.",
            "a": {
                "resposta": "1ª geração",
                "correto": false,
                "mensagem": "Na primeira geração foram criadas as válvulas."
            },
            "b": {
                "resposta": "2ª geração",
                "correto": true,
                "mensagem": "Essa é a resposta correta!"
            },
            "c": {
                "resposta": "3ª geração",
                "correto": false,
                "mensagem": "Na terceira geração foram criados os Chips."
            },
            "d": {
                "resposta": "4ª geração",
                "correto": false,
                "mensagem": "Na quarta geração foram criados os microprocessadores."
            }
        },
        {
            "pergunta": "A alternativa que corresponde o número 50 em binário é:",
            "a": {
                "resposta": "00110010",
                "correto": true,
                "mensagem": "Essa é a resposta correta!"
            },
            "b": {
                "resposta": "00111100",
                "correto": false,
                "mensagem": "Essa seria a representação do número 60 em binário."
            },
            "c": {
                "resposta": "10101010",
                "correto": false,
                "mensagem": "Essa seria a representação do número 170 em binário."
            },
            "d": {
                "resposta": "11111000",
                "correto": false,
                "mensagem": "Essa seria a representação do número 248 em binário."
            }
        },
        {
            "pergunta": "Quem foi o responsável pela criação da Apple:",
            "a": {
                "resposta": "Steve Paul Jobs",
                "correto": true,
                "mensagem": "Essa é a resposta correta!"
            },
            "b": {
                "resposta": "Willian Henry Gates",
                "correto": false,
                "mensagem": "Willian Henry Gates foi responsável pela criação da Microsoft Corporation."
            },
            "c": {
                "resposta": "Richard Stallman",
                "correto": false,
                "mensagem": "Richard Stallman foi o fundador do projeto GNU."
            },
            "d": {
                "resposta": "Alan Turing",
                "correto": false,
                "mensagem": "Alan Turing foi um matemático inglês que estudou a teoria da Computabilidade. Foi responsável pela criação dos protótipos de computadores que existem hoje em dia."
            }
        },
        {
            "pergunta": "Qual nome se dá aos componentes físicos de um sistema.",
            "a": {
                "resposta": "Hardware",
                "correto": true,
                "mensagem": "Essa é a resposta correta!"
            },
            "b": {
                "resposta": "Software",
                "correto": false,
                "mensagem": "Software são os componentes lógicos de um computador."
            },
            "c": {
                "resposta": "Firmware",
                "correto": false,
                "mensagem": "Firmware são instruções operacionais programadas diretamente no hardware."
            },
            "d": {
                "resposta": "Dispositivos de processamento",
                "correto": false,
                "mensagem": "Dispositivos de processamento executam instruções para o tratamento de informação."
            }
        }
    ],
    "logica": [
        {
            "pergunta": "Qual das variáveis a seguir vale 1.",
            "a": {
                "resposta": "Var1 <- 10 MOD 3",
                "correto": true,
                "mensagem": "Essa é a resposta correta!"
            },
            "b": {
                "resposta": "Var2 <- 10 DIV 3",
                "correto": false,
                "mensagem": "O valor dessa variável é 3."
            },
            "c": {
                "resposta": "Var3 <- 11 MOD 3",
                "correto": false,
                "mensagem": "O valor dessa variável é 2."
            },
            "d": {
                "resposta": "Var4 <- 9 MOD 3",
                "correto": false,
                "mensagem": "O valor dessa variável é 0."
            }
        },
        {
            "pergunta": "Se Var1 <- verdadeiro e (não falso) então ela é:",
            "a": {
                "resposta": "falsa",
                "correto": false,
                "mensagem": "Essa alternativa é incorreta pois o 'não falso' é verdadeiro. Portanto verdadeiro e verdadeiro = verdadeiro."
            },
            "b": {
                "resposta": "verdadeira",
                "correto": true,
                "mensagem": "Essa é a resposta correta!"
            }
        },
        {
            "pergunta": "No VisualG qual tag é usada para fazer um laço de repetição:",
            "a": {
                "resposta": "ESCREVAL",
                "correto": false,
                "mensagem": "Essa tag é usada para pedir para o usuário digitar algo no console do programa."
            },
            "b": {
                "resposta": "LEIA",
                "correto": false,
                "mensagem": "Essa tag é usada para entender o que o usuário digitou como uma variável específica determinada pelo programa."
            },
            "c": {
                "resposta": "ENQUANTO",
                "correto": true,
                "mensagem": "Essa é a resposta correta!"
            },
            "d": {
                "resposta": "LIMPATELA",
                "correto": false,
                "mensagem": "Essa tag é usada para limpar a tela do console do programa."
            }
        },
        {
            "pergunta": "Qual o tipo de variável no VisualG que armazena palavras e nomes?",
            "a": {
                "resposta": "Caracteres",
                "correto": true,
                "mensagem": "Essa é a resposta correta!"
            },
            "b": {
                "resposta": "Inteiro",
                "correto": false,
                "mensagem": "Armazena números inteiros."
            },
            "c": {
                "resposta": "Real",
                "correto": false,
                "mensagem": "Armazena números reais."
            },
            "d": {
                "resposta": "Lógico",
                "correto": false,
                "mensagem": "Armazena valores que representam verdadeiro ou falso."
            }
        }
    ],
    "matematica": [
        {
            "pergunta": "Quais das alternativas abaixo representam o domínio da função f(x) = 3/x:",
            "a": {
                "resposta": "D(f) = {x ∈ ℝ / x ≠ 0)",
                "correto": true,
                "mensagem": "Essa é a resposta correta!"
            },
            "b": {
                "resposta": "D(f) = ℝ",
                "correto": false,
                "mensagem": "Esse domínio está incorreto pois como existe uma divisão na função X deve ser ≠ 0 para que seja possível de realizar a divisão."
            },
            "c": {
                "resposta": "D(f) = {x ∈ ℝ / x = 0)",
                "correto": false,
                "mensagem": "O valor de X não pode ser 0, pois não existe divisão por 0."
            },
            "d": {
                "resposta": "D(f) = {x ∈ ℝ / x ≠ 1)",
                "correto": false,
                "mensagem": "X deve ser ≠ de 0 para que a divisão possa ser realizada."
            }
        },
        {
            "pergunta": "Sendo o conjunto A = {1,2,3,4} e o conjunto B = {3,4,5,6}. Qual alternativa corresponde a A∩B.",
            "a": {
                "resposta": "A∩B = {3,4}",
                "correto": true,
                "mensagem": "Essa é a resposta correta!"
            },
            "b": {
                "resposta": "A∩B = {1,2,3,4,5,6}",
                "correto": false,
                "mensagem": "Esse conjunto na verdade representa a união entre A e B."
            },
            "c": {
                "resposta": "A∩B = {1,2}",
                "correto": false,
                "mensagem": "Esse conjunto na verdade representa a diferença entre A e B."
            },
            "d": {
                "resposta": "A∩B = {5,6}",
                "correto": false,
                "mensagem": "Esse conjunto na verdade representa a diferença entre B e A."
            }
        }
    ]
};

let timerWidth = 100;

let gameStatus = "init";
let questionObj = questions.web[0];





//timer

const timer = document.getElementById("timer");
let myCallBack;
const tickTime = () => {
    timerWidth -= 0.1;
    if (Math.floor(timerWidth) == 100) { timer.style.backgroundColor = "green" }
    if (Math.floor(timerWidth) == 80) { timer.style.backgroundColor = "greenyellow" }
    if (Math.floor(timerWidth) == 50) { timer.style.backgroundColor = "yellow" }
    if (Math.floor(timerWidth) == 30) { timer.style.backgroundColor = "red" }
    if (Math.floor(timerWidth) == 10) { timer.style.backgroundColor = "rgb(77, 0, 0)" }
    timer.style.width = timerWidth + "%";
    if (timerWidth <= 0) {
        gameStatus = "end";
        checkForWin(selected, questionObj);
        return;
    };
    clearInterval(myCallBack);
    myCallBack = setInterval(tickTime, 1);
}


const until = (conditionFunction) => {
    const poll = resolve => {
        if (conditionFunction()) resolve();
        else setTimeout(_ => poll(resolve), 400);
    }

    return new Promise(poll);
};

const pickQuestion = async () => {
    for (var i = 0; i < 3; i++) {
        questionObj = questions.web[Math.floor(Math.random() * questions.web.length)];
        timerWidth = 100;
        drawQuestion(questionObj);
        await until(() => { return timerWidth === -100 });
        console.log("foi");

    };
    console.log("Vai toma no cu");

}
document.addEventListener("DOMContentLoaded", pickQuestion());

function drawQuestion(question) {
    gameStatus = "playing";
    document.getElementById("question").innerText = question.pergunta;
    document.getElementById("awnser-1").innerText = question.a.resposta;
    document.getElementById("awnser-2").innerText = question.b.resposta;
    document.getElementById("awnser-3").innerText = question.c.resposta;
    document.getElementById("awnser-4").innerText = question.d.resposta;
    tickTime();

}
const awnsers = document.getElementsByClassName("awnsers");
let selected;
for (let i of awnsers) {
    i.addEventListener("click", (e) => {
        if (gameStatus == "end") return;
        for (let i of awnsers) {
            i.classList = "awnsers";
        }
        if (selected == i.id) {
            i.classList = "awnsers";
            selected = "";
        } else {
            gameStatus = "selected";
            selected = i.id;
            i.classList = "awnsers selected";
        }
    })
}




function checkForWin(selected, question) {
    if (selected) {
        let obj = question[["", "a", "b", "c", "d"][selected.replace("awnser-", "")]];
        obj.correto ? document.getElementById("result").innerText = `Correto! ${obj.mensagem}` : document.getElementById("result").innerText = `Errado! ${obj.mensagem}`;
    } else {
        document.getElementById("result").innerText = "Errado! Você não selecionou nenhuma resposta.";
    };
    setTimeout(() => {
        timerWidth = -100;
    }, 5000);
    //send back to another question
}