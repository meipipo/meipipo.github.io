const numDays = 366;
const daySlider = document.getElementById('day-slider');
daySlider.setAttribute('max', numDays - 1);
daySlider.addEventListener('input', drawMarkersMap);

google.charts.load('current', {
    'packages': ['geochart'],
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
});
google.charts.setOnLoadCallback(drawMarkersMap);

const options = {
    region: 'JP',
    resolution: 'provinces',
    datalessRegionColor: 'white',
    backgroundColor: 'lightsteelblue',
    colorAxis: {
        colors: ['dodgerblue', 'white', 'tomato'],
        minValue: 0.5,
        maxValue: 3.5
    },
};

function drawMarkersMap(event) {
    const day = Number(daySlider.value);
    const currentDate = new Date(2019, 9, 1);
    currentDate.setDate(currentDate.getDate() + day);

    const dateString = currentDate.toISOString().substring(0, 10);
    var dateDisplay = document.getElementById('date-display');
    dateDisplay.innerText = dateString;

    var data = google.visualization.arrayToDataTable(ratioData[dateString]);

    var chart = new google.visualization.GeoChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}

