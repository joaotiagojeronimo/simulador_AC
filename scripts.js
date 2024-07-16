document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('ac-simulator-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        let tamanho = parseFloat(document.getElementById('tamanho').value);
        let numPessoas = parseInt(document.getElementById('num-pessoas').value);
        let exposicao = document.getElementById('exposicao').value;
        
        // Cálculo de BTUs
        let btus = tamanho * 600 + numPessoas * 600;
        if (exposicao === 'muito') {
            btus += 500;
        } else if (exposicao === 'pouco') {
            btus -= 500;
        }

        // Simulação de produto sugerido
        let produtoSugerido = `Ar Condicionado Ideal - ${btus} BTUs - Preço: €${(btus / 10).toFixed(2)}`;

        // Resultados
        const resultados = `
            <h2>Resultados da Simulação</h2>
            <p>BTUs Necessários: ${btus}</p>
            <h4>Produto Sugerido:</h4>
            <p>${produtoSugerido}</p>
        `;
        document.getElementById('results').innerHTML = resultados;
    });
});
