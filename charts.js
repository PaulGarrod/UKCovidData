getData().then((data) => {
    let newCasesArray = [];
    let newDeathsArray =[];
    let cumulCasesArray =[];
    let cumulDeathsArray = [];
    let dateArray = [];
    data.forEach((i) => {
        newCasesArray.unshift(i.newCasesByPublishDate);
        newDeathsArray.unshift(i.newDeathsByDeathDate);
        cumulCasesArray.unshift(i.cumCasesByPublishDate);
        cumulDeathsArray.unshift(i.cumDeathsByDeathDate);
        dateArray.unshift(i.date);
    })

    var dailyChart = document.getElementById('myDailyChart').getContext('2d');
    
    var cumulChart = document.getElementById('myCumulChart').getContext('2d');
    
    new Chart(dailyChart, {
        type: 'bar',
        data: {
            labels: dateArray,
            datasets: [{
                label: '# New Cases per Day',
                data: newCasesArray,
                backgroundColor: 'rgba(54, 162, 235, 0.9)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 0
            },
            {
                label: '# New Deaths per Day',
                data: newDeathsArray,
                backgroundColor: 'rgba(255, 0, 0, 0.4)',
                borderColor: 'red',
                borderWidth: 1
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

    new Chart(cumulChart, {
        type: 'bar',
        data: {
            labels: dateArray,
            datasets: [{
                label: '# Total Cases',
                data: cumulCasesArray,
                backgroundColor: 'rgba(54, 162, 235, 0.9)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 0
            },
            {
                label: '# Total Deaths',
                data: cumulDeathsArray,
                backgroundColor: 'rgba(255, 0, 0, 0.2)',
                borderColor: 'red',
                borderWidth: 1
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
});