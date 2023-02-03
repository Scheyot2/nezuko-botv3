const fs = require('fs')

let enigma = [
{
numero: "ENIGMA 1",
respostaEne: "O fósforo",
charada: "Imagine que você está em uma sala escura ao lado de Sherlock. Nela há um fósforo, uma lâmpada de querosene, uma vela e uma lareira. O que você acenderia primeiro?"
},
{
numero: "ENIGMA 2",
respostaEne: "segredo",
charada: "O detetive Sherlock encontrou um bilhete que faz parte de uma pista de um mistério que precisa ser solucionado. “Se você me tem, quer me compartilhar; se você não me compartilha, você me manteve. O que eu sou?”"
},
{
numero: "ENIGMA 3",
respostaEne: "nenhum",
charada: "Watson e Sherlock adoram brincar com enigmas para treinar o método científico. Ajude-os a encontrar a resposta desse enigma: um macaco, um esquilo e um pássaro estão correndo para o topo de um coqueiro. Quem pegará a banana primeiro, o macaco, o esquilo ou o pássaro?"
},
{
numero: "ENIGMA 4",
respostaEne: "eco",
charada: "Eu falo, mas não tenho boca. Eu ouço, mas não tenho ouvidos. Não tenho corpo, mas vivo com o vento. Quem sou eu?"
},
{
numero: "ENIGMA 5",
respostaEne: "idade",
charada: "Eu sou algo que as pessoas amam ou odeiam. Eu mudo tanto a aparência das pessoas quanto seus pensamentos. Se uma pessoa cuida de si mesma, eu subo ainda mais. Eu engano algumas pessoas. E para outras, sou um verdadeiro mistério. Algumas pessoas bem que tentam me esconder, mas uma hora, inevitavelmente, eu apareço. Não importa o que as pessoas tentem, eu jamais cairei. Quem sou eu?"
},
{
numero: "ENIGMA 6",
respostaEne: "sombra",
charada: "Tenho apenas uma cor, mas posso ter vários tamanhos. Estou presente quando faz sol. Na chuva, jamais! Passo todo o tempo no chão, mas nunca fico sujo. Não faço mal algum e não posso sentir dor. Quem sou eu?"
},
{
numero: "ENIGMA 7",
respostaEne: "12 anos",
charada: "Perguntaram para Maria quantos anos ela tem. Maria respondeu que em dois anos terá o dobro da idade que ela tinha há cinco anos. Quantos anos Maria tem?"
},
{
numero: "ENIGMA 8",
respostaEne: "escuridão",
charada: "Quanto mais houver de mim, menos você verá. Quem sou eu?"
},
{
numero: "ENIGMA 9",
respostaEne: "esponja",
charada: "Sou cheio de buracos, mas ainda assim consigo reter muita água. Quem sou eu?"
},
{
numero: "ENIGMA 9",
respostaEne: "cotovelo direito",
charada: "O que você pode segurar com a sua mão esquerda, mas jamais com a direita?"
},
{
numero: "ENIGMA 10",
respostaEne: "âncora",
charada: "Quando precisa de mim, você me atira para longe, até um lugar onde ninguém pode me ver. Mas quando já não precisa mais, você me traz de volta. Quem sou eu?"
},
{
numero: "ENIGMA 11",
respostaEne: "as palavras",
charada: "Nós podemos machucar sem fazer um único movimento. Podemos envenenar sem tocar. Carregamos a verdade e a mentira. E não devemos ser julgadas pelo nosso tamanho Quem somos nós?"
},
{
numero: "ENIGMA 12",
respostaEne: "uma tesoura",
charada: "Ponha os dedos nos meus olhos que eu abrirei as minhas potentes mandíbulas. E vou devorar tudo o que vier pela frente: roupas, penas, papéis. Quem sou eu?"
},
{
numero: "ENIGMA 13",
respostaEne: "Alfabeto",
charada: "Eu posso guardar tudo dentro de mim. Tudo o que você pode imaginar: o vento, as florestas, o mundo, o universo e até Deus. Tudo o que vier à sua cabeça você pode encontrar dentro de mim. Quem sou eu?"
},
{
numero: "ENIGMA 14",
respostaEne: "dinheiro falso",
charada: "Quem me faz não diz que faz. Quem me tem não sabe que tem. E quem sabe não me quer ter de jeito nenhum. Quem sou eu?"
},
{
numero: "ENIGMA 15",
respostaEne: "escuridão",
charada: "Quanto mais houver de mim, menos você verá. Quem sou eu?"
}
]

module.exports = { enigma }
