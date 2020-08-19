let num1 = document.getElementById("caixanum1")
let num2 = document.getElementById("caixanum2")
let boto = document.getElementsByClassName('botoes')
let res = document.createElement("p")
res.setAttribute("class","resul")
let conteiner = document.getElementById("opera-2")
conteiner.appendChild(res)

function calcular(tipo){
    if(num1.value.length == 0 || num2.value.length == 0){
        window.alert('[ERRO] Digite um valor válido!')
    }else{
        res.style.backgroundColor = "#0480aa"
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
        if(tipo =="min"){
            let min = Math.min(n1,n2)
            res.innerHTML = `\u{1F449} ${min} \u{1F448}`
            num1.value = ''
            num2.value = ''
            num1.focus()     
        }
        if(tipo ==  "max"){
            let max = Math.max(n1,n2)
            res.innerHTML = `\u{1F449} ${max} \u{1F448}`
            num1.value = ''
            num2.value = ''
            num1.focus()     
        }
        if(tipo == "media"){
            let media = (n1 + n2)/2
            res.innerHTML = `\u{1F449} ${media} \u{1F448}`
            num1.value = ''
            num2.value = ''
            num1.focus()     
        }
    }
    
}

