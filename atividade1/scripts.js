/* let nota1 = prompt('insira a primeira nota');
let nota2 = prompt('insira a segunda nota');
let respostas = document.querySelector('.resultados'); */

function media(){
    let nota1 = prompt('insira a primeira nota');
    let nota2 = prompt('insira a segunda nota');
    let respostas = document.querySelector('.resultados');

    nota1=Number(nota1);
    nota2= Number(nota2);

    calcMedia = (nota1 + nota2)/2;
    
    if(calcMedia >= 6){
        const aprovado = 'aprovado';
        respostas.innerHTML =  `<h1> ${aprovado} e com a média: ${calcMedia} </h1>`
        respostas.style.color = 'blue'
    }else{
        console.log('reprovado');
        const reprovado = 'reprovado';
        respostas.innerHTML =  `<h1> ${reprovado} e sua com a média: ${reprovado} </h1>`
        respostas.style.color = 'red'
    }
}

let enviar = document.querySelector('form').addEventListener('submit',(event)=>{
    event.preventDefault()
    let notaUm = document.querySelector('.notaUm');
    let notaDois = document.querySelector('.notaDois');
    let respostas2 = document.querySelector('.versao2');

    notaUm=Number(notaUm.value);
    notaDois= Number(notaDois.value);

    calcMedia = (notaUm + notaDois)/2;
    
    if(calcMedia >= 6){
        console.log(calcMedia)
        const aprovado = 'aprovado';
        respostas2.innerHTML =  `<h1> ${aprovado} e sua com a média: ${calcMedia} </h1>`
        respostas2.style.color = 'blue'
    }else{
        console.log(calcMedia);
        const reprovado = 'reprovado';
        respostas2.innerHTML =  `<h1> ${reprovado} e sua com a média: ${calcMedia} </h1>`
        respostas2.style.color = 'red'
    }
    
})

