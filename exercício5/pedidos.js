function valorTotal() {
    const inputQTDMaq = document.querySelectorAll(".ColDir")[0].children[1];
    const inputQTDCaf = document.querySelectorAll(".ColDir")[1].children[1];
    const inputTotal = document.querySelectorAll(".InpBoxMed")[1];
    const selectMaquina = document.querySelector(".SelMaquina");
    const selectCapsula = document.querySelector(".SelCapsula");
    const buttonAddMaq = document.querySelectorAll(".ColDir")[0].children[2];
    const buttonAddCaf = document.querySelectorAll(".ColDir")[1].children[2];
    const textArea = document.querySelector('.lisPedArea')
    const totalValor = document.querySelector('.InpBoxMedLeft')
    const defaultMaquina = selectMaquina.children[0]
    const defaultCapsula = selectCapsula.children[0]
    // função que verifica e select ativo e retorna o valor total da opção selecionada
    function calcularTotal() {
        var qtdMaquina = inputQTDMaq.value
        var qtdCafe = +inputQTDCaf.value
        var precoMaquina = +selectMaquina.value
        var precoCafe = +selectCapsula.value
        var nomeCapsula = selectCapsula.options[selectCapsula.selectedIndex].text
        if (nomeCapsula == "----") {
            return qtdMaquina * precoMaquina
        } else {
            return qtdCafe * precoCafe
        }
    }
    selectMaquina.addEventListener('change', () => {
        defaultCapsula.selected = true;
        inputQTDMaq.value = 1
        inputTotal.value = calcularTotal()

    })
    selectCapsula.addEventListener('change', () => {
        defaultMaquina.selected = true;
        inputQTDCaf.value = 1
        inputTotal.value = calcularTotal()
    })

    inputQTDMaq.addEventListener('change', () => {
        inputTotal.value = calcularTotal()
    })

    inputQTDCaf.addEventListener('change', () => {
        inputTotal.value = calcularTotal()
    })
    
    var soma = 0
    function somar(valor) {
        return soma += valor
    }

    buttonAddMaq.addEventListener('click', () => {
        var qtdMaquina = inputQTDMaq.value
        var nomeMaquina = selectMaquina.options[selectMaquina.selectedIndex].text
        if (nomeMaquina == "----") {
            alert('Nenhum Produto selecionado!')
        }else if (qtdMaquina > 5 | qtdMaquina < 1) {
            alert('selecione valores entre 1 e 5')
        } else {
            var resumoDaCompra = `${nomeMaquina} (${qtdMaquina}) R$ ${calcularTotal()},00` + '\n'
            textArea.innerHTML += resumoDaCompra
            totalValor.value = somar(calcularTotal())
        }
    })


    buttonAddCaf.addEventListener('click', () => {
        var qtdCafe = +inputQTDCaf.value
        var nomeCapsula = selectCapsula.options[selectCapsula.selectedIndex].text
        if (nomeCapsula == "----") {
            alert('Nenhum Produto selecionado!')
        }else if (qtdCafe > 30 | qtdCafe < 0) {
            alert('selecione valores entre 1 e 30')
        } else {
            var resumoDaCompra = `${nomeCapsula} (${qtdCafe}) R$ ${calcularTotal()},00` + '\n'
            textArea.innerHTML += resumoDaCompra
            totalValor.value = somar(calcularTotal())
        }
    })

}



