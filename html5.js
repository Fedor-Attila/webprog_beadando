// Web Storage példák
function saveToStorage() {
    const value = document.getElementById("storageInput").value;
    localStorage.setItem("myKey", value);
}

function loadFromStorage() {
    const value = localStorage.getItem("myKey");
    document.getElementById("storageResult").innerText = value ? value : "Nincs eltárolt adat.";
}

// Drag and Drop példák
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    ev.target.innerText = "Sikeres ejtés!";
    const dragged = document.getElementById(data);
    dragged.style.backgroundColor = "#66bb6a";
}

// Geolocation API példa
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                document.getElementById("locationResult").innerText =
                    "Szélesség: " + position.coords.latitude.toFixed(4) +
                    ", Hosszúság: " + position.coords.longitude.toFixed(4);
            },
            (error) => {
                document.getElementById("locationResult").innerText = "Helymeghatározás nem sikerült.";
            }
        );
    } else {
        document.getElementById("locationResult").innerText = "A böngésződ nem támogatja a Geolocation API-t.";
    }
}

// Canvas rajzolás
function drawCanvas() {
    const canvas = document.getElementById("myCanvas");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#3f51b5";
        ctx.fillRect(50, 50, 200, 50);
        ctx.strokeStyle = "red";
        ctx.strokeRect(50, 50, 200, 50);
        ctx.font = "16px Arial";
        ctx.fillStyle = "white";
        ctx.fillText("Canvas rajzolt szöveg", 70, 80);
    }
}
