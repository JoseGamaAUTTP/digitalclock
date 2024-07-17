document.addEventListener("DOMContentLoaded", function() {
    const seasonElement = document.getElementById('season');
    const dateElement = document.getElementById('date');
    const dayElement = document.getElementById('day');
    const timeElement = document.getElementById('time');

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

        const seasons = [
            { name: 'Summer', start: new Date(year, 11, 21), end: new Date(year + 1, 2, 20) },
            { name: 'Autumn', start: new Date(year, 2, 21), end: new Date(year, 5, 20) },
            { name: 'Winter', start: new Date(year, 5, 21), end: new Date(year, 8, 20) },
            { name: 'Spring', start: new Date(year, 8, 21), end: new Date(year, 11, 20) }
        ];

        const currentSeason = seasons.find(season => now >= season.start && now <= season.end).name;
        seasonElement.textContent = currentSeason;
    }

    updateClock();
    setInterval(updateClock, 1000);
});
