document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('ac-simulator-form');
    const zonesContainer = document.getElementById('zones-container');
    const addZoneBtn = document.getElementById('add-zone-btn');
    let zoneCount = 1;

    addZoneBtn.addEventListener('click', function() {
        zoneCount++;
        const newZone = document.createElement('div');
        newZone.classList.add('zone');
        newZone.innerHTML = `
            <label for="zone${zoneCount}-area">Área da Zona ${zoneCount} (m²):</label>
            <input type="number" id="zone${zoneCount}-area" name="zone${zoneCount}-area" required>
        `;
        zonesContainer.appendChild(newZone);
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let totalBTUs = 0;

        for (let i = 1; i <= zoneCount; i++) {
            const area = parseFloat(document.getElementById(`zone${i}-area`).value);
            if (!isNaN(area)) {
                totalBTUs += area * 600;
            }
        }

        const results = document.getElementById('results');
        results.innerHTML = `
            <h2>Resultados</h2>
            <p>BTUs Necessários: ${totalBTUs}</p>
        `;
    });
});
