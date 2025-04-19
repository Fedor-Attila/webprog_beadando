function generateChart() {
    const table = document.getElementById("dataTableChart");
    const names = [];
    const values = [];

    for (let i = 1; i < table.rows.length; i++) {
        names.push(table.rows[i].cells[0].innerText);
        values.push(parseInt(table.rows[i].cells[1].innerText));
    }

    const ctx = document.getElementById('myChart').getContext('2d');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: names,
            datasets: [{
                label: 'Értékek',
                data: values,
                borderWidth: 2,
                borderColor: 'blue',
                backgroundColor: 'lightblue',
                tension: 0.3
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
