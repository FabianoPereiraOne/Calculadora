let num1 = document.getElementById("caixanum1")
let num2 = document.getElementById("caixanum2")
let boto = document.getElementsByClassName('botoes')
let res = document.getElementById("res")
res.innerHTML = ""
function calcular(tipo){
    if(num1.value.length == 0 || num2.value.length == 0){
        window.alert('[ERRO] Digite um valor válido!')
    }else{
        let n1 = Number(num1.value)
        let n2 = Number(num2.value)
        if(tipo == 'soma'){
            let soma = n1 + n2
            res.innerHTML = `\u{1F449} ${soma} \u{1F448}`
            num1.value = ''
            num2.value = ''
            num1.focus()
        }
        if(tipo == 'subtrair'){
            let sub = n1 - n2
            res.innerHTML = `\u{1F449} ${sub} \u{1F448}`
            num1.value = ''
            num2.value = ''
            num1.focus()
        }
        if(tipo == 'multiplicar'){
            let multi = n1 * n2
            res.innerHTML = `\u{1F449} ${multi} \u{1F448}`
            num1.value = ''
            num2.value = ''
            num1.focus()
        }
        if(tipo == 'dividir'){
            if(n2 == 0){
                res.innerHTML =  `\u{1F449} ${n1} \u{1F448}`
            }else{
                let divi = n1 / n2
                res.innerHTML = `\u{1F449} ${divi} \u{1F448}`
                num1.value = ''
                num2.value = ''
                num1.focus()
            }
            
        }
        if(tipo == 'potenciaçao'){
            let pot = n1 ** n2
            res.innerHTML = `\u{1F449} ${pot} \u{1F448}`
            num1.value = ''
            num2.value = ''
            num1.focus()
        }
    }
    
}

