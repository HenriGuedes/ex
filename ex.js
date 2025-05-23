
function Cadastrar() {

    event.preventDefault()


    let nome = document.getElementById("nome").value
    let preco = document.getElementById("preco").value

    let numeroPreco = parseFloat(preco)


    if (nome === "" || preco === "") {
        alert("Preencha todos os campos.")
        return false
    }

    if (isNaN(numeroPreco) || numeroPreco <= 0) {
        alert("Preço inválido.")
        return false
    }

    if (Math.round(numeroPreco * 100) !== numeroPreco * 100) {
        alert("Use até duas casas decimais.")
        return false
    }


    let checkboxes = document.querySelectorAll('input[name="opcao"]:checked')


    if (checkboxes.length === 0) {
        alert("Escolha pelo menos uma categoria.")
        return false
    }


    let categorias = [];
    for (let i = 0; i < checkboxes.length; i++) {
        categorias.push(checkboxes[i].value)
    }


    let li = document.createElement("li")
    li.innerText = "Produto: " + nome + ", Preço: R$ " + numeroPreco.toFixed(2) + ", Categoria(s): " + categorias.join(", ")


    if (categorias.includes("Alimentos")) {
        li.style.backgroundColor = "yellow"
    }

    if (categorias.includes("Tecnologia")) {
        li.style.fontWeight = "bold"
    }


    document.getElementById("MostrarItens").appendChild(li)


    document.getElementById("nome").value = ""
    document.getElementById("preco").value = ""
    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false
    }

    return false
}
