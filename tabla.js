function addRow() {
    const name = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value.trim();
    const city = document.getElementById('city').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!name || !age || !city || !email || name.length > 30) {
        alert("Hibás adatok! Üres mező vagy túl hosszú név.");
        return;
    }

    const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.insertCell(0).innerText = name;
    newRow.insertCell(1).innerText = age;
    newRow.insertCell(2).innerText = city;
    newRow.insertCell(3).innerText = email;
    newRow.insertCell(4).innerHTML = '<button onclick="deleteRow(this)">Törlés</button>';
}

function deleteRow(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function sortTable(columnIndex) {
    const table = document.getElementById('dataTable');
    let switching = true;
    let dir = "asc"; 
    let switchcount = 0;

    while (switching) {
        switching = false;
        const rows = table.rows;
        for (let i = 1; i < (rows.length - 1); i++) {
            let shouldSwitch = false;
            const x = rows[i].getElementsByTagName("TD")[columnIndex];
            const y = rows[i + 1].getElementsByTagName("TD")[columnIndex];
            if (dir === "asc") {
                if (x.innerText.toLowerCase() > y.innerText.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            } else if (dir === "desc") {
                if (x.innerText.toLowerCase() < y.innerText.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount++;
        } else {
            if (switchcount === 0 && dir === "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}

function searchTable() {
    const input = document.getElementById("search").value.toLowerCase();
    const rows = document.querySelectorAll("#dataTable tbody tr");

    rows.forEach(row => {
        const cells = Array.from(row.getElementsByTagName("td"));
        const match = cells.some(td => td.innerText.toLowerCase().includes(input));
        row.style.display = match ? "" : "none";
    });
}
