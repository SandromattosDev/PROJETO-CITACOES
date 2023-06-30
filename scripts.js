const quots = [
    {
    quote: "A persistência é o caminho para o êxito.",
    actor: "Autor: Charles Chaplin",
},
{
    quote: "A Única forma de fazer um grande trabalho é amar o que se faz.",
    actor: "Autor: Steve Jobs",
},
{
    quote: "O sucesso é a soma de pequenos esforços dia após dia.",
    actor: "Autor: Robert Collier",
},
{
    quote: "O fracasso é a oportunidade de começar de novo com mais experiência.",
    actor: "Autor: Henry Ford",
},
{
    quote: "Não espere oportunidade, crie você mesmo as suas.",
    actor: "Autor Desconhecido",
},
{
    quote: "Acredite em si próprio e todo o resto virá naturalmente.",
    actor: "Autor: Elon Musk",
},
{
    quote: "Definir um objetivo é o ponto de partida de toda a realização.",
    actor: "Autor: W. Clement Stone.",
},
{
    quote: "A mente é tudo. Você se torna aquilo que você pensa.",
    actor: "Autor: Buda.",
},
{
    quote: "Se você ouve uma voz dentro de você dizendo ‘você não pode pintar’, então pinte e essa voz será silenciada.",
    actor: " Autor: Vincent Van Gogh.",
},
{
    quote: "A única pessoa que você está destinado a se tornar é a pessoa que você decide ser.",
    actor: " Autor: Ralph Waldo Emerson.",
},
{
    quote: "Não importa se você vai devagar, tanto quanto importa o fato de você não parar.",
    actor: " Autor: Confúcio.",
},
{
    quote: "Quando tudo parece estar indo contra você, lembre-se que o avião decola contra o vento, não a favor dele.",
    actor: " Autor: Henry Ford.",
},
{
    quote: "Se você pode sonhar, você pode conseguir.",
    actor: " Autor: Zig Ziglar.",
},
{
    quote: "Viver é enfrentar um problema atrás do outro. O modo como você o encara é que faz a diferença.",
    actor: " Autor: Benjamin Franklin.",
},
{
    quote: "Só existem 2 dias do ano em que você não pode fazer nada: um se chama ontem, e o outro amanhã.",
    actor: " Autor: Dalai Lama.",
},
{
    quote: "Para ser um campeão, você tem que acreditar em si mesmo quando ninguém mais acredita.",
    actor: " Autor: Muhammad Ali.",
},
{
    quote: "No fim, tudo dá certo, e se não deu certo é porque ainda não chegou ao fim.",
    actor: " Autor: Fernando Sabino",
},
{
    quote: "O pessimista vê dificuldade em toda oportunidade. O otimista vê oportunidade em toda dificuldade.",
    actor: " Autor: Winston Churchill",
},
{
    quote: "Comemore os seus sucessos. Veja com humor os seus fracassos.",
    actor: " Autor: Sam Walto",
},
{
    quote: "A confiança em si mesmo é o primeiro segredo do sucesso.",
    actor: " Autor: Ralph Waldo Emerson."
},
];

const quotBtn = document.querySelector("#quoteBtn")
const quotText = document.querySelector(".paragraph")
const quotActor = document.querySelector(".actor")


function getQuots(){
const index = Math.floor(Math.random() * quots.length)
quotText.textContent = quots[index].quote;
quotActor.textContent = quots[index].actor;
}

quotBtn.addEventListener("click", getQuots)