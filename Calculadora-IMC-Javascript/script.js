const  resultado  =  documento . querySelector ( '#resultado' )
const  altura  =  documento . querySelector ( '#altura' )
const peso =  documento . querySelector ( '#peso' )

const calcIMC =()  => { 

    if (altura.value !== '' && peso.value !== '') {
        const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
        let classification = ''

        if (imc < 18, 5) {
            classification = 'Abaixo do peso'
        } else if (imc < 25) {
            classification = 'Peso normal'
        } else if (imc < 30) {
            classification = 'Acima do peso'
        } else if (imc < 35) {
            classification = 'Obesidade Grau I'
        } else if (imc < 41) {
            classification = 'Obesidade Grau II'
        } else {
            classification = 'Obesidade Grau III'
        }

        resultado.innerHTML = `IMC: ${imc} ( ${classification} )`
    } else {
        resultado.innerHTML = 'Preencher os campos'
    }
}