const form = document.getElementById("countryForm")
const input = document.getElementById("countryInput")
const card = document.getElementById("coronaCard")


form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const country = input.value.trim()
    if (!country) return;
    try {
        const res = await fetch(`https://disease.sh/v3/covid-19/countries/${country}`)
        const data = await res.json()

        card.innerHTML = 
        ` <div class="card text-dark bg-white shadow-lg mb-4">
        <div class="card-header bg-secondary text-white text-center">
            <h4>${data.country} <img src="${data.countryInfo.flag}" width="40" class="ms-2 rounded shadow-sm" alt="Flag" /></h4>
        </div>
        <div class="card-body ">
            <div class="row text-center">
                ${generateStat("Total Cases", data.cases, "danger")}
                ${generateStat("Recovered", data.recovered, "success")}
                ${generateStat("Deaths", data.deaths, "info")}
                ${generateStat("Active", data.active, "warning text-dark")}
            </div>
        </div>
    </div>`
    } catch (error) {
        card.innerHTML  = `<p class="text-danger">Data not found or API error. Please try another country.</p>`
    }
});

function generateStat(label, value, badgeClass) {
    return `
    <div class="col-md-12 mb-3">
        <div class="bg-dark text-light border rounded p-3 shadow-sm">
            <h6 class="text-light">${label}</h6>
            <span class="badge bg-${badgeClass} fs-5">${value.toLocaleString()}</span>
        </div>
    </div>
    `;
}