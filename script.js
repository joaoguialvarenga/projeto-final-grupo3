document.addEventListener("DOMContentLoaded", function() {
    const btnMenuCompleto = document.getElementById('menu-completo');
    const cardGrid = document.getElementById('cards');

    btnMenuCompleto.addEventListener('click', function() {
        console.log("Botão 'Ver menu completo!' clicado.");
        fetchHamburgueres(); // Chama a função para carregar os hambúrgueres
    });

    function fetchHamburgueres() {
        console.log("Iniciando a requisição para buscar hambúrgueres.");
        fetch('http://localhost:3000/hamburgueres')
            .then(response => {
                console.log("Resposta recebida:", response);
                if (!response.ok) {
                    throw new Error('Falha ao buscar dados da API');
                }
                return response.json();
            })
            .then(data => {
                console.log("Dados recebidos:", data);
                updateCards(data);
                btnMenuCompleto.style.display = 'none'; // Esconde o botão
            })
            .catch(error => {
                console.error('Erro ao carregar dados:', error);
                alert("Não foi possível carregar os dados dos hambúrgueres.");
            });
    }

    function updateCards(hamburgueres) {
        console.log("Atualizando os cards com os dados dos hambúrgueres.");
        // Limpa o conteúdo anterior do grid
        cardGrid.innerHTML = '';

        hamburgueres.forEach(hamburguer => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
                <div class="image">
                    <img src="${hamburguer.imagem}" alt="Imagem de ${hamburguer.nome}">
                </div>
                <div class="texto">
                    <h4>${hamburguer.nome}</h4>
                    <p>Ingredientes: ${hamburguer.ingredientes.join(', ')}</p>
                    <h4>Preço: R$${hamburguer.preco.toFixed(2)}</h4>
                </div>
            `;
            cardGrid.appendChild(card);
        });
    }
});
