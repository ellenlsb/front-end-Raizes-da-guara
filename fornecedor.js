// ==========================
// GRÁFICO DE VENDAS SEMANAIS
// ==========================

// Seleciona o elemento <canvas> do HTML que terá o ID "weeklyChart"
const weeklyCtx = document.getElementById("weeklyChart").getContext("2d")

// Cria o gráfico de linhas (line chart) com Chart.js
const weeklyChart = new Chart(weeklyCtx, {
  type: "line", // Tipo de gráfico: linha
  data: {
    // Legendas do eixo X (dias da semana)
    labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],

    // Dados que serão plotados no gráfico
    datasets: [
      {
        label: "Vendas (R$)", // Nome da linha (pode aparecer no tooltip)
        data: [200, 280, 150, 320, 450, 380, 420], // Valores para cada dia

        // Cores e estilo da linha
        borderColor: "#16a34a", // Linha verde
        backgroundColor: "rgba(22, 163, 74, 0.1)", // Fundo esverdeado transparente
        tension: 0.4, // Deixa a linha mais "curvada" (suaviza)
        fill: true, // Preenche a área abaixo da linha
        pointBackgroundColor: "#16a34a", // Cor dos pontinhos
        pointBorderColor: "#16a34a",
        pointRadius: 4, // Tamanho dos pontos
        pointHoverRadius: 6, // Tamanho quando passa o mouse
      },
    ],
  },

  // Configurações visuais e comportamentais do gráfico
  options: {
    responsive: true, // O gráfico se ajusta ao tamanho da tela
    maintainAspectRatio: true, // Mantém proporção entre altura/largura
    plugins: {
      legend: {
        display: false, // Esconde a legenda (label do dataset)
      },
      tooltip: {
        // Estilo da janelinha que aparece ao passar o mouse
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        padding: 12,
        titleColor: "#fff",
        bodyColor: "#fff",
        borderColor: "#16a34a",
        borderWidth: 1,
      },
    },
    scales: {
      // Configurações do eixo Y (valores)
      y: {
        beginAtZero: true, // Começa em zero
        ticks: {
          callback: (value) => "R$" + value, // Adiciona o "R$" antes dos valores
        },
        grid: {
          color: "#e5e5e5", // Cor da linha de grade
        },
      },
      // Configurações do eixo X (dias)
      x: {
        grid: {
          display: false, // Remove as linhas de grade no eixo X
        },
      },
    },
  },
})


// ==========================
// GRÁFICO DE PRODUTOS POPULARES
// ==========================

// Seleciona o elemento <canvas> com ID "popularChart"
const popularCtx = document.getElementById("popularChart").getContext("2d")

// Cria o gráfico de barras (bar chart)
const popularChart = new Chart(popularCtx, {
  type: "bar", // Tipo: barras
  data: {
    // Legendas no eixo X (nomes dos produtos)
    labels: ["Tomates", "Morangos", "Alface", "Cenouras"],

    // Dados de vendas de cada produto
    datasets: [
      {
        label: "Vendas", // Nome do conjunto de dados
        data: [120, 95, 85, 70], // Quantidades vendidas
        // Cores de cada barra (uma cor por produto)
        backgroundColor: ["#16a34a", "#f59e0b", "#dc2626", "#eab308"],
        borderRadius: 8, // Arredonda as pontas das barras
        borderSkipped: false, // Faz o arredondamento aplicar em todos os cantos
      },
    ],
  },

  // Opções de estilo e comportamento
  options: {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false, // Esconde legenda
      },
      tooltip: {
        // Personaliza a caixinha que aparece quando passa o mouse
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        padding: 12,
        titleColor: "#fff",
        bodyColor: "#fff",
      },
    },
    scales: {
      y: {
        beginAtZero: true, // Eixo Y começa em zero
        grid: {
          color: "#e5e5e5", // Linhas horizontais cinzas
        },
      },
      x: {
        grid: {
          display: false, // Remove as linhas verticais
        },
      },
    },
  },
})


// ==========================
// UPLOAD DE FOTOS DO ESTABELECIMENTO
// ==========================

document.addEventListener("DOMContentLoaded", () => {
  // Pega o botão de upload e o input escondido
  const uploadArea = document.getElementById("upload-area");
  const fileInput = document.getElementById("file-input");

  // Se algum dos dois não existir, sai da função (evita erro)
  if (!uploadArea || !fileInput) return;

  // Quando clicar na área de upload → abre a janela de seleção de arquivos
  uploadArea.addEventListener("click", () => {
    fileInput.click();
  });

  // Quando o usuário selecionar arquivos no input
  fileInput.addEventListener("change", (e) => {
    const files = e.target.files;
    handleFiles(files);
  });

  // Função que trata os arquivos selecionados
  function handleFiles(files) {
    if (files.length > 5) {
      alert("Máximo de 5 fotos permitido."); // Limita a 5 fotos
      return;
    }

    console.log("[v0] Arquivos selecionados:", files.length);
    // Mostra o nome de cada arquivo no console
    for (let i = 0; i < files.length; i++) {
      console.log("→", files[i].name);
    }

    // Exibe alerta de sucesso
    alert(`${files.length} foto(s) adicionada(s) com sucesso!`);
  }
});


// ==========================
// BOTÃO "ADICIONAR NOVO PRODUTO"
// ==========================

document.addEventListener("DOMContentLoaded", () => {
  // Seleciona o botão de adicionar produto
  const btnAddProduct = document.getElementById("btnAddProduct");

  if (btnAddProduct) {
    // Quando clicar no botão, redireciona para a página de cadastro
    btnAddProduct.addEventListener("click", () => {
      window.location.href = "cadastroprod.html";
    });
  }
});
