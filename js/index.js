function scrollToNextSection() {
    document.getElementById('map-section').scrollIntoView({ behavior: 'smooth' });
}

function findTaxiRanks() {
    const departure = document.getElementById('departure').value;
    const destination = document.getElementById('destination').value;

    if (departure && destination) {
        // Simulate fetching taxi rank data
        const taxiRanks = [
            { name: 'Taxi Rank A', price: 'R50', distance: '10km', section: 'North Wing', policeStations: ['Station 1', 'Station 2'], safetyTips: 'Avoid late night trips.', hotspots: 'Hotspot Area 1' },
            { name: 'Taxi Rank B', price: 'R70', distance: '15km', section: 'South Wing', policeStations: ['Station 3', 'Station 4'], safetyTips: 'Travel with a companion.', hotspots: 'Hotspot Area 2' }
        ];

        let detailsHTML = '';
        taxiRanks.forEach(rank => {
            detailsHTML += `
                <div class="taxi-rank" onclick="showTaxiDetails(${JSON.stringify(rank)})">
                    <h3>${rank.name}</h3>
                    <p>Price: ${rank.price}</p>
                    <p>Distance: ${rank.distance}</p>
                </div>
            `;
});

document.getElementById('taxi-rank-details').innerHTML = detailsHTML;
} else {
    alert('Please fill in both departure and destination locations.');
}
}

function showTaxiDetails(rank) {
    const detailsHTML = `
        <h3>${rank.name}</h3>
        <p>Price: ${rank.price}</p>
        <p>Distance: ${rank.distance}</p>
        <p>Section: ${rank.section}</p>
        <p>Nearby Police Stations: ${rank.policeStations.join(', ')}</p>
        <p>Safety Tips: ${rank.safetyTips}</p>
        <p>Crime Hotspots: ${rank.hotspots}</p>
    `;
    document.getElementById('taxi-rank-details').innerHTML = detailsHTML;
}