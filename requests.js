// data API URL
const covidURL = 'https://api.coronavirus.data.gov.uk/v1/data?' +
'filters=areaType=nation;areaName=england&' +
'structure={"date":"date","cases":{"daily":"newCasesByPublishDate","cumulative":"cumCasesByPublishDate"},"deaths":{"daily":"newDeathsByDeathDate","cumulative":"cumDeathsByDeathDate"},"tests":{"daily":"newTestsByPublishDate","cumulative":"cumTestsByPublishDate"},"deathsIn28Days":{"daily":"newDeaths28DaysByPublishDate","cumulative":"cumDeaths28DaysByPublishDate"},"hospitalCases":"hospitalCases"}'

// get todats date
const currentDay = function(sp){
    let today = new Date();
    let dd = today.getDate()-1;
    let mm = today.getMonth()+1;
    let yyyy = today.getFullYear();
    
    if(dd<10) dd='0'+dd;
    if(mm<10) mm='0'+mm;
    return (dd+sp+mm+sp+yyyy.toString());
}

// get the data from the API
const getData = async () => {
    const response = await fetch (covidURL, {})

    if (response.status === 200 || response.status === 204) {
        const data = await response.json()
        // console.log(data)
        return data.data
    } else {
        throw new Error ('Whoops something went wrong with the respsonse!')
    }
}

//data from most recent days entry
const getTodaysData = async () => {
    let todaysData = await getData()
    todaysData = todaysData[1]
    // console.log(todaysData)
    return todaysData
}

//create and show data for the selected date
const selectedData = () => {
    let selectedDate = selectDate.options[selectDate.selectedIndex].text
    getData().then((data) => {
        let dateObject = data.find ((i) => i.date === selectedDate)
        
        const selectedDateHeader = document.createElement('h2')
        selectedDateHeader.innerHTML = (`Covid Data on ${selectedDate}`)
        document.querySelector('#selectedDateHeader').appendChild(selectedDateHeader)

        //case numbers on selected date
        const casesCard = document.createElement('div')
        document.querySelector('#covidCasesOnThisDate').appendChild(casesCard)
        casesCard.className = 'card border-dark mb-3'
        casesCard.id = 'casesCard'

        const casesHeader = document.createElement('div')
        document.querySelector('#casesCard').appendChild(casesHeader)
        casesHeader.className = 'card-header'
        casesHeader.innerHTML = 'Cases'

        const casesBody = document.createElement('div')
        document.querySelector('#casesCard').appendChild(casesBody)
        casesBody.className = 'card-body text-dark'
        casesBody.id = 'casesBody'

        const casesTitle = document.createElement('div')
        document.querySelector('#casesBody').appendChild(casesTitle)
        casesTitle.className = 'card-title'
        casesTitle.innerHTML = dateObject.cases.daily.toLocaleString()
        
        //death numbers on selected date
        const deathsCard = document.createElement('div')
        document.querySelector('#covidDeathsOnThisDate').appendChild(deathsCard)
        deathsCard.className = 'card border-dark mb-3'
        deathsCard.id = 'deathsCard'
        
        const deathsHeader = document.createElement('div')
        document.querySelector('#deathsCard').appendChild(deathsHeader)
        deathsHeader.className = 'card-header'
        deathsHeader.innerHTML = 'Deaths'
        
        const deathsBody = document.createElement('div')
        document.querySelector('#deathsCard').appendChild(deathsBody)
        deathsBody.className = 'card-body text-dark'
        deathsBody.id = 'deathsBody'
        
        const deathsTitle = document.createElement('div')
        document.querySelector('#deathsBody').appendChild(deathsTitle)
        deathsTitle.className = 'card-title'
        deathsTitle.innerHTML = dateObject.deaths.daily.toLocaleString()
        
        //Total cases on selected date
        const totalCasesCard = document.createElement('div')
        document.querySelector('#totalCasesOnThisDate').appendChild(totalCasesCard)
        totalCasesCard.className = 'card border-dark mb-3'
        totalCasesCard.id = 'totalCasesCard'

        const totalCasesHeader = document.createElement('div')
        document.querySelector('#totalCasesCard').appendChild(totalCasesHeader)
        totalCasesHeader.className = 'card-header'
        totalCasesHeader.id = 'totalCasesHeader'
        totalCasesHeader.innerHTML = 'Total Cases'

        const totalCasesBody = document.createElement('div')
        document.querySelector('#totalCasesCard').appendChild(totalCasesBody)
        totalCasesBody.className = 'card-body text-dark'
        totalCasesBody.id = 'totalCasesBody'

        const totalCasesTitle = document.createElement('div')
        document.querySelector('#totalCasesBody').appendChild(totalCasesTitle)
        totalCasesTitle.className = 'card-title'
        totalCasesTitle.innerHTML = dateObject.cases.cumulative.toLocaleString()
      
        //Total deaths on selected date
        const totalDeathsCard = document.createElement('div')
        document.querySelector('#totalDeathsOnThisDate').appendChild(totalDeathsCard)
        totalDeathsCard.className = 'card border-dark mb-3'
        totalDeathsCard.id = 'totalDeathsCard'
        
        const totalDeathsHeader = document.createElement('div')
        document.querySelector('#totalDeathsCard').appendChild(totalDeathsHeader)
        totalDeathsHeader.className = 'card-header'
        totalDeathsHeader.innerHTML = 'Deaths'
        
        const totalDeathsBody = document.createElement('div')
        document.querySelector('#totalDeathsCard').appendChild(totalDeathsBody)
        totalDeathsBody.className = 'card-body text-dark'
        totalDeathsBody.id = 'totalDeathsBody'
        
        const totalDeathsTitle = document.createElement('div')
        document.querySelector('#totalDeathsBody').appendChild(totalDeathsTitle)
        totalDeathsTitle.className = 'card-title'
        totalDeathsTitle.innerHTML = dateObject.deaths.cumulative.toLocaleString()
    })
}

const clearSelectedDateData = () => {
    document.querySelector('#covidCasesOnThisDate').innerHTML = ''
    document.querySelector('#totalCasesOnThisDate').innerHTML = ''
    document.querySelector('#covidDeathsOnThisDate').innerHTML = ''
    document.querySelector('#totalDeathsOnThisDate').innerHTML = ''
    document.querySelector('#selectedDateHeader').innerHTML = ''
}