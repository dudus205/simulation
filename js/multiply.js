const max_year = 214;

function multiply() {
    const multiValue = document.getElementById("multiply").value
    const continent = document.getElementById("continent-multiply").value
    const field = document.getElementById("field-multiply").value //income, life_exp

    for (let year = 0; year < max_year; year++)
        for (let country = 0; country < formattedData[year].length; country++) {
            if (continent === 'all')
                if (field !== 'all'){
                    formattedData[year][country][field] *= parseFloat(multiValue)
                }
                else {
                    formattedData[year][country]['income'] *= parseFloat(multiValue)
                    formattedData[year][country]['life_exp'] *= parseFloat(multiValue)
                }
            else if (formattedData[year][country]['continent'] === continent)
                if (field !== 'all'){
                    formattedData[year][country][field] *= parseFloat(multiValue)
                }
                else {
                    formattedData[year][country]['income'] *= parseFloat(multiValue)
                    formattedData[year][country]['life_exp'] *= parseFloat(multiValue)
                }
        }
    update(formattedData[time])

}

function reset() {
    load_data()
    $("#year")[0].innerHTML = 1800
    $("#date-slider").slider("value", Number(1800))
    time = 0
}
