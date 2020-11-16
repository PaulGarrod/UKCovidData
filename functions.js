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
        if(dateObject.cases.daily == null){
            casesTitle.innerHTML = 'Data not yet available'
        } else {
            casesTitle.innerHTML = dateObject.cases.daily.toLocaleString()
        }
        
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
        if (dateObject.deaths.daily == null) {
            deathsTitle.innerHTML = 'Data not yet available'
        } else {
            deathsTitle.innerHTML = dateObject.deaths.daily.toLocaleString()        
        }
        
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
        if (dateObject.cases.cumulative == null) {
            totalCasesTitle.innerHTML = 'Data not yet available'
        } else {
            totalCasesTitle.innerHTML = dateObject.cases.cumulative.toLocaleString()
        }
      
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
        if (dateObject.deaths.cumulative == null) {
            totalDeathsTitle.innerHTML = 'Data not yet available'
        } else {
            totalDeathsTitle.innerHTML = dateObject.deaths.cumulative.toLocaleString()
        }
    })
}

const clearSelectedDateData = () => {
    document.querySelector('#covidCasesOnThisDate').innerHTML = ''
    document.querySelector('#totalCasesOnThisDate').innerHTML = ''
    document.querySelector('#covidDeathsOnThisDate').innerHTML = ''
    document.querySelector('#totalDeathsOnThisDate').innerHTML = ''
    document.querySelector('#selectedDateHeader').innerHTML = ''
}