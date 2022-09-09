const num = Number(prompt("Digite um número"));

// UTILIZANDO IFS ANINHADOS

/*
if(num % 2 === 0){
    if(num % 3 === 0){
        console.log( "O número " + num + " é divisível por 3 e 2");
    } else if(!num % 3 === 0){
        console.log( "O número " + num + " é divisível por 2, mas não é divisível por 3");
    }
} else if (num % 3 === 0) {
    if (!num % 2 === 0) {
        console.log( "O número " + num + " é divisível por 3, mas não é divisível por 2");
    }
    
} else {
    console.log("O número não é divisível nem por 3, nem por 2");
}
*/

// Utilizando operadores lógicos

if(num % 2 === 0 && num % 3 === 0) {
    console.log( "O número " + num + " é divisível por 3 e 2");
} else if (num % 2 === 0 && !num % 3 === 0) {
    console.log( "O número " + num + " é divisível por 2, mas não é divisível por 3");
} else if (!num % 2 === 0 && num % 3 === 0) {
    console.log( "O número " + num + " é divisível por 3, mas não é divisível por 2");
} else {
    console.log("O número não é divisível nem por 3, nem por 2");
}

