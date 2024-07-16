document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('ac-simulator-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        let tipoAmbiente = document.getElementById('tipo-ambiente').value;
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

        // Resultados (exemplo)
        const resultados = `
            <h2>Resultados da Simulação</h2>
            <p>BTUs Necessários: ${btus}</p>
            <h4>Produtos Sugeridos:</h4>
            <ul>
                <li>Modelo X - 12000 BTUs - €2000,00</li>
                <li>Modelo Y - 18000 BTUs - €3000,00</li>
            </ul>
        `;
        document.getElementById('results').innerHTML = resultados;
    });
});
