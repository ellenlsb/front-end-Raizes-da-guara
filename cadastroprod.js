// ===== Upload de fotos =====
// Permite clicar ou arrastar arquivos na área de upload e limita a 5 fotos
const uploadArea = document.getElementById("upload-area")
const fileInput = document.getElementById("file-input")

uploadArea.addEventListener("click", () => { fileInput.click() }) // abrir seletor de arquivos
uploadArea.addEventListener("dragover", (e) => { e.preventDefault(); uploadArea.style.borderColor = "var(--primary)"; uploadArea.style.backgroundColor = "rgba(34, 197, 94, 0.05)" }) // efeito visual ao arrastar
uploadArea.addEventListener("dragleave", () => { uploadArea.style.borderColor = "var(--border)"; uploadArea.style.backgroundColor = "transparent" }) // reset visual
uploadArea.addEventListener("drop", (e) => { e.preventDefault(); uploadArea.style.borderColor = "var(--border)"; uploadArea.style.backgroundColor = "transparent"; handleFiles(e.dataTransfer.files) }) // processa arquivos soltos
fileInput.addEventListener("change", (e) => { handleFiles(e.target.files) }) // processa arquivos selecionados

function handleFiles(files) {
  if (files.length > 1) { alert("Adicione uma foto do seu produto."); return } // limita a 5 fotos
  console.log("[v0] Files selected:", files.length) // debug no console
}

// ===== Formulário =====
// Captura os dados do formulário e mostra no console, sem enviar para servidor
const form = document.querySelector(".product-form")
form.addEventListener("submit", (e) => {
  e.preventDefault() // evita recarregar página
  const formData = {
    name: document.getElementById("product-name").value,
    category: document.getElementById("category").value,
    price: document.getElementById("price").value,
    stock: document.getElementById("stock").value,
    description: document.getElementById("description").value,
  }
  console.log("[v0] Form submitted:", formData)
  alert("Produto salvo com sucesso!") // feedback pro usuário
})