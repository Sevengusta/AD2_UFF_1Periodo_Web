const cafes = [
    { 'qtd': 'QTD: 10', 'gênero': 'Espresso', 'preco': 'Preço: R$ 18,00', 'nome': '../Imagens/CapDolceGusto_10_Espresso.jpg' },
    { 'qtd': 'QTD: 10', 'gênero': 'Intenso', 'preco': 'Preço: R$ 19,00', 'nome': '../Imagens/CapDolceGusto_10_Intenso.jpg' },
    { 'qtd': 'QTD: 30', 'gênero': 'Forza / Vibrante', 'preco': 'Preço: R$ 44,00', 'nome': '../Imagens/CapTresCoracoes_30_ForzaVibrante.jpg ' },
    { 'qtd': 'QTD: 10', 'gênero': 'Três Cor. Intenso', 'preco': 'Preço: R$ 20,00', 'nome': '../Imagens/CapTresCoracoesNespreso_10_Intenso.jpg' },
    { 'qtd': 'QTD: 10', 'gênero': 'Lor Forza', 'preco': 'Preço: R$ 21,00', 'nome': ' ../Imagens/CapLorNespreso_10_Forza.jpg' },
]

function mostrarCafe(cafe) {
    cafe = cafes[cafe]
    titulo = document.getElementById("tipDes")
    imagem = document.getElementById("imgDes")
    container = document.getElementById("qtdPrcDes")
    qtd = container.getElementsByTagName("p")[0]
    preco = container.getElementsByTagName("p")[1]
    titulo.textContent = cafe.gênero
    imagem.src = cafe.nome
    qtd.textContent = cafe.qtd
    preco.innerHTML = cafe.preco.slice(0, 10) + '<span class="preco">' + cafe.preco.slice(-5) + '</span>'
    
}