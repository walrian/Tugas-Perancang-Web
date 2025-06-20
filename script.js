// Event listener untuk tombol Register
document.getElementById("registerBtn").addEventListener("click", function() {
    alert("Website Dalam Perbaikan");
});

// Event listener untuk tombol Login
document.getElementById("loginBtn").addEventListener("click", function() {
    alert("Website Dalam Perbaikan");
});

// Animasi perubahan genre
const genres = ["HORROR", "ACTION", "ROMANCE", "COMEDY"];
let index = 0;

setInterval(function() {
    index = (index + 1) % genres.length;
    document.getElementById("genre").textContent = genres[index];
}, 4000);