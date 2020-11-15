//setting todays date
const todaysDate = document.querySelector("#currentDate")
todaysDate.textContent = currentDay('-')
document.querySelector('#todaysDate').innerHTML = `${currentDay('-')}`

//selecting elements
const totalCasesEl = document.querySelector("#totalCases")
const todaysCasesEl = document.querySelector("#todaysCases")
const totalDeathsEl = document.querySelector("#totalDeaths")
const todaysDeathsEl = document.querySelector("#todaysDeaths")
const todaysDateEl = document.querySelector("#todaysDate")
//select options
const selectDate = document.querySelector("#dates")

//set the information for todays cases
getTodaysData().then((data) => {
    todaysCasesEl.innerHTML = data.cases.daily.toLocaleString()
    totalCasesEl.innerHTML = data.cases.cumulative.toLocaleString()
    todaysDeathsEl.innerHTML = data.deaths.daily.toLocaleString()
    totalDeathsEl.innerHTML = data.deaths.cumulative.toLocaleString()
})

//append a list of dates to the select options
getData().then((data) => {
    data.forEach((i) => {
        const option = document.createElement('option')
        option.innerHTML = (i.date)
        document.querySelector('#dates').appendChild(option)
    })
})

//when date option is selected update information to reflect selected date
selectDate.addEventListener('change', () => {
    //clear previous selected date information
    clearSelectedDateData()
    //create elements and import data from selected date
    selectedData()
})

//Need to integrate this? 
const highestDeathDay = getData().then((data) => {
    let highestDeaths = Math.max.apply(Math, data.map (function (o) {return o.deaths.daily}))
    return highestDeaths
})