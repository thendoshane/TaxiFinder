

    let map;

    function initMap() {
        map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: -30.5595, lng: 22.9375 }, // Centered in South Africa
            zoom: 6,
        });

        // Check for Geolocation
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const userLocation = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };

            // Center map on user's location
            map.setCenter(userLocation);

            // Add marker for user's location
            new google.maps.Marker({
                position: userLocation,
                map,
                title: "You are here!",
            });

            // Call function to display taxi ranks near user
            findNearbyTaxiRanks(userLocation);
        },
        () => {
            alert("Unable to fetch your location.");
    }
        );
    } else {
        alert("Geolocation is not supported by your browser.");
    }
    }

    function findNearbyTaxiRanks(userLocation) {
        // Simulated taxi ranks for demonstration purposes
        const taxiRanks = [
            { name: "Rank 1", location: { lat: -26.2041, lng: 28.0473 } }, // Johannesburg
            { name: "Rank 2", location: { lat: -33.9249, lng: 18.4241 } }, // Cape Town
        ];

        taxiRanks.forEach((rank) => {
            const marker = new google.maps.Marker({
                position: rank.location,
                map,
                title: rank.name,
            });

        const infoWindow = new google.maps.InfoWindow({
            content: `<h3>${rank.name}</h3><p>Click for details</p>`,
    });

    marker.addListener("click", () => {
        infoWindow.open(map, marker);
    });
    });
    }
