const nome = prompt("Qual é o seu nome?");
const idade = Number(prompt("Qual é a sua idade?"));

nome === "José" ? console.log("Oi, Zé!") : console.log("Olá, "+nome);
idade >= 18 ? console.log("pode tirar carteira de motorista!") : console.log("Ainda não pode tirar carteira de motorista");
