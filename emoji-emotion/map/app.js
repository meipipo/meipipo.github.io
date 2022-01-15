
const imgDir = 'imgs/'
const numDays = 23;

const daySlider = document.getElementById('day-slider');
daySlider.setAttribute('max', numDays - 1);

function inputChange(event) {
    const day = Number(daySlider.value);
    const currentDate = new Date(2019, 9, 1);
    currentDate.setDate(currentDate.getDate() + day);

    const imgPath = imgDir + currentDate.toISOString().substring(0, 10) + '-clr.png';
    const img = document.getElementById('map-img');
    img.setAttribute('src', imgPath);
}

daySlider.addEventListener('input', inputChange);
