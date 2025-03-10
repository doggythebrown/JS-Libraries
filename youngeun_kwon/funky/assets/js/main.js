document.addEventListener("DOMContentLoaded", function () {
    // initialize glide.js slider
    if (document.querySelector(".glide")) {
        new Glide(".glide", {
            type: "carousel",
            autoplay: 3000,
            perView: 1,
            animationDuration: 600,
            hoverpause: true
        }).mount();
    }

    // apply granim.js for animated gradient background in the hero section
    if (document.getElementById("hero-gradient")) {
        setTimeout(() => {
            new Granim({
                element: "#hero-gradient",
                direction: "diagonal",
                states: {
                    "default-state": {
                        gradients: [
                            ["#ff9966", "#ff5e62"],
                            ["#00F260", "#0575E6"],
                            ["#e1eec3", "#f05053"]
                        ],
                        transitionSpeed: 3000
                    }
                }
            });
        }, 500);
    }

    // initialize aos animations
    AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true
    });

    // apply masonry layout if grid exists
    var grid = document.querySelector(".grid");
    if (grid) {
        new Masonry(grid, {
            itemSelector: ".card",
            gutter: 30,
            fitWidth: true
        });
    }

    // initialize map only if #map exists
    var mapElement = document.getElementById("map");
    if (mapElement) {
        var map = L.map('map').setView([48.8566, 2.3522], 5);

        // add openstreetmap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        // add markers for major travel destinations
        var locations = [
            { name: "Paris, France", coords: [48.8566, 2.3522] },
            { name: "Rome, Italy", coords: [41.9028, 12.4964] },
            { name: "Toronto, Canada", coords: [43.65107, -79.347015] },
            { name: "Vancouver, Canada", coords: [49.2827, -123.1207] }
        ];

        locations.forEach(loc => {
            L.marker(loc.coords).addTo(map)
                .bindPopup(`<b>${loc.name}</b>`)
                .openPopup();
        });
    }
});
