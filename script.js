document.addEventListener("DOMContentLoaded", function() {
    const seasonElement = document.getElementById('season');
    const dateElement = document.getElementById('date');
    const dayElement = document.getElementById('day');
    const timeElement = document.getElementById('time');

    // Function to detect hemisphere and update season
    function detectHemisphereAndSeason(hemisphere) {
        const now = new Date();
        const month = now.getMonth() + 1; // getMonth() returns 0-based index

        let currentSeason = '';
        if (hemisphere === 'northern') {
            // Determine Northern Hemisphere season
            if (month >= 3 && month <= 5) {
                currentSeason = 'Spring';
            } else if (month >= 6 && month <= 8) {
                currentSeason = 'Summer';
            } else if (month >= 9 && month <= 11) {
                currentSeason = 'Autumn';
            } else {
                currentSeason = 'Winter';
            }
        } else if (hemisphere === 'southern') {
            // Determine Southern Hemisphere season
            if (month >= 3 && month <= 5) {
                currentSeason = 'Autumn';
            } else if (month >= 6 && month <= 8) {
                currentSeason = 'Winter';
            } else if (month >= 9 && month <= 11) {
                currentSeason = 'Spring';
            } else {
                currentSeason = 'Summer';
            }
        }

        // Update season display
        seasonElement.textContent = currentSeason;
    }

    // Initial call to set default hemisphere (assuming Northern Hemisphere)
    detectHemisphereAndSeason('northern');

    // Event listener for form submission
    document.getElementById('hemisphereForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get selected hemisphere from form input
        const selectedOption = document.querySelector('input[name="hemisphere"]:checked');
        if (selectedOption) {
            const hemisphere = selectedOption.value;
            detectHemisphereAndSeason(hemisphere);
        }
    });

    // Function to update clock elements
    function updateClock() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');

        const day = now.getDate();
        const month = now.toLocaleString('default', { month: 'long' });
        const year = now.getFullYear();
        const weekDay = now.toLocaleString('default', { weekday: 'long' });

        const timeString = `${hours}:${minutes}:${seconds}`;
        const dateString = `${month} ${day}, ${year}`;

        timeElement.textContent = timeString;
        dateElement.textContent = dateString;
        dayElement.textContent = weekDay;
    }

    // Initial call to update clock
    updateClock();

    // Set interval to update clock every second
    setInterval(updateClock, 1000);
});
