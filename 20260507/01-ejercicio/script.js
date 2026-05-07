function calcularIMC() {
    /*Obtener datos*/
    let peso = Number(document.getElementById('input-peso').value);
    let altura = Number(document.getElementById('input-altura').value);
    let etiqueta = document.getElementById('mensaje-salida');

    //FORMULA DEL IMC : peso / altura(cuadrado)
    // let imc = peso / (altura ** 2 ); 
    let imc = peso / (altura * altura);
    
    // RETO DE HOY
    // MULTIPLES DECISIONES
    // imc < 18.5 = Estas bajo de peso
    // imc >= 18.5 && imc <= 24.9 = Peso saludable
    // imc >= 25 sobrepeso

}