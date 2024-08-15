const searchIcon = document.getElementById('searchIcon');
const locationSearchBar = document.getElementById('locationSearchBar');

/* ************************
 *  Geolocation API Logic *
 * ************************  */
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
            locationSearchBar.value = `${latitude}, ${longitude}`;

        },
        (error) => {
            console.error("Error getting location:", error);
        }
    );
} else {
    console.error("Geolocation is not supported by this browser.");
}

/* ************************
 *  Search Icon Logic     *
 * ************************  */

searchIcon.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'stage2.html';
});