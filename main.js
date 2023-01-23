console.log('Hola mundo')

const valores = []

const render = () => {
    const resultValueList = document.getElementById("value-list")
    resultValueList.innerHTML = ""
    for (let i = 0; i < valores.length; i++){
        resultValueList.innerHTML += "<li>" + "R" + (i+1) + " = "  + valores[i] + "Ω" + "</li>"
    }
}

window.onload = () => {
    const form = document.getElementById("valores-form")
    form.onsubmit = (e) => {
        render()
        e.preventDefault()
        const valor = document.getElementById("resis-valor")
        const valorNum = valor.value
        console.log(valorNum)
        if (isNaN(Number(valorNum))){
            alert("Solo se aceptan valores númericos")
        }
        else if(valorNum == ""){
            alert("Solo se aceptan valores númericos")
        }
        else{
            valor.value = ""
            valores.push(valorNum)
            render()
        }
    }
}

const calcular = () => {
    const total = valores.map(v => 1/v).reduce(function (a,b) {
        return a + b
    })

    const result = document.getElementById("result")
    result.innerHTML = "RT = " + (1/total).toFixed(1) + "Ω"
    render()
}

const limpiarTodo = () => {
    valores.length = 0
    result.innerHTML = ""
    render()
}

const limpiarUltimo = () => {
    valores.pop()
    render()
}

