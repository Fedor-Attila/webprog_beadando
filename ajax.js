// Saját tárhelyen lévő API URL
const url = "http://webprogamf.nhely.hu/net/AjaxApi.php"; // <-- IDE írd be a saját Nethely domain-edet!
const code = "CCP9C6abc123"; // <-- IDE a saját Neptun kód + saját extra kiegészítés!

function loadData() {
    fetch(`${url}?op=read&code=${code}`)
        .then(response => response.json())
        .then(data => {
            let output = "";
            let sum = 0;
            let max = 0;

            if (data.list) {
                data.list.forEach(item => {
                    output += `<p>ID: ${item.id}, Név: ${item.name}, Magasság: ${item.height}, Súly: ${item.weight}</p>`;
                    sum += parseInt(item.height);
                    if (parseInt(item.height) > max) {
                        max = parseInt(item.height);
                    }
                });

                document.getElementById("dataList").innerHTML = output;
                if (data.list.length > 0) {
                    document.getElementById("statistics").innerText =
                        `Összeg: ${sum}, Átlag: ${(sum / data.list.length).toFixed(2)}, Maximum: ${max}`;
                } else {
                    document.getElementById("statistics").innerText = "Nincsenek adatok.";
                }
            } else {
                document.getElementById("dataList").innerText = "Hiba az adatok lekérésekor.";
            }
        })
        .catch(error => console.error('Hiba betöltéskor:', error));
}

function createData() {
    const name = document.getElementById('newName').value.trim();
    const height = document.getElementById('newHeight').value.trim();
    const weight = document.getElementById('newWeight').value.trim();

    if (!name || !height || !weight || name.length > 30) {
        alert("Hibás adatok! Üres mező vagy túl hosszú név.");
        return;
    }

    const formData = new FormData();
    formData.append('op', 'create');
    formData.append('name', name);
    formData.append('height', height);
    formData.append('weight', weight);
    formData.append('code', code);

    fetch(url, {
        method: 'POST',
        body: formData
    }).then(() => {
        document.getElementById('message').innerText = "Új adat sikeresen hozzáadva!";
        loadData();
    })
    .catch(error => console.error('Hiba létrehozáskor:', error));
}

function getDataForId() {
    const id = document.getElementById('updateId').value.trim();
    if (!id) {
        alert("Adj meg egy ID-t!");
        return;
    }

    fetch(`${url}?op=read&code=${code}`)
        .then(response => response.json())
        .then(data => {
            if (data.list) {
                const item = data.list.find(d => d.id === id);
                if (item) {
                    document.getElementById('updateName').value = item.name;
                    document.getElementById('updateHeight').value = item.height;
                    document.getElementById('updateWeight').value = item.weight;
                } else {
                    alert("Nincs ilyen ID.");
                }
            }
        })
        .catch(error => console.error('Hiba adat betöltéskor:', error));
}

function updateData() {
    const id = document.getElementById('updateId').value.trim();
    const name = document.getElementById('updateName').value.trim();
    const height = document.getElementById('updateHeight').value.trim();
    const weight = document.getElementById('updateWeight').value.trim();

    if (!name || !height || !weight || name.length > 30) {
        alert("Hibás adatok! Üres mező vagy túl hosszú név.");
        return;
    }

    const formData = new FormData();
    formData.append('op', 'update');
    formData.append('id', id);
    formData.append('name', name);
    formData.append('height', height);
    formData.append('weight', weight);
    formData.append('code', code);

    fetch(url, {
        method: 'POST',
        body: formData
    }).then(() => {
        document.getElementById('message').innerText = "Adat sikeresen módosítva!";
        loadData();
    })
    .catch(error => console.error('Hiba módosításkor:', error));
}

function deleteData() {
    const id = document.getElementById('deleteId').value.trim();
    if (!id) {
        alert("Adj meg egy ID-t!");
        return;
    }

    const formData = new FormData();
    formData.append('op', 'delete');
    formData.append('id', id);
    formData.append('code', code);

    fetch(url, {
        method: 'POST',
        body: formData
    }).then(() => {
        document.getElementById('message').innerText = "Adat sikeresen törölve!";
        loadData();
    })
    .catch(error => console.error('Hiba törléskor:', error));
}
