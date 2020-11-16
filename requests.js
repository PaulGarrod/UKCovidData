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