/* O IMC é calculado por meio da divisão do peso do indivíduo
pela estatura, em metros, ao quadrado.
De forma simplificada, temos: peso/(altura x altura).
Vamos a um exemplo prático: se uma mulher pesa 60 kg e
tem 1.75 de altura, seu IMC será 19.59kg/m2 */

let form = document.querySelector('form')

form.addEventListener('submit',event=>{
    event.preventDefault();
    
    let altura = document.querySelector('.altura');
    let peso = document.querySelector('.peso');
    console.log(altura)
    //voltar e arrumar o bug de tipo de dados do imput
    
        peso = parseIn(peso.value)
        altura = Number(altura.value)

        imc = peso/(altura * altura)
        switch(imc){
            case imc < 18.5:
                console.log('magreza');
                break;
            case imc === 18.5 || imc <= 24.9:
                console.log('normal');
                break;
            case imc >= 25 || imc<=29.9:
                console.log('obesidade');
                break;
            case imc > 30 || imc < 34.9:
                console.log('obesidade 1')
                break;

            default:
                console(false)
        }

})