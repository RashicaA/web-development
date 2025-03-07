// https://api.weatherapi.com/v1/current.json?key=7deee5c09c084e79999185404241206&q=Tokyo&aqi=no

async function fetchData(target) {
    try {
        const url = `https://api.weatherapi.com/v1/current.json?key=7deee5c09c084e79999185404241206&q=${target}&aqi=no`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)

        // extracted useful values from data JSON.
        const currentTemp = data.current.temp_c;
        const currentCondition = data.current.condition.text;
        const locationName = data.location.name;
        const localTime = data.location.localtime;
        const conditionEmoji = data.current.condition.icon;
        // identified DOM nodes
        const temperatureField = document.querySelector('.temp');
        const cityField = document.querySelector('.time_location p');
        const dateField = document.querySelector('.time_location span');
        const emojiField = document.querySelector('.weather_condition img');
        const weatherField = document.querySelector('.weather_condition span');

        // time handling

        // const exactTime = localTime.split(' ')[1];
        // const exactDate = localTime.split(' ')[0];

        const [exactDate, exactTime] = localTime.split(' ');
        console.log(exactDate, exactTime);
        const dayInNumber = new Date(exactDate).getDay();
        const exactDay = getFullDay(dayInNumber);

        // updateDOM
        dateField.innerText = `${exactTime} - ${exactDay} - ${exactDate}`
        temperatureField.innerText = currentTemp;
        cityField.innerText = locationName;

        weatherField.innerText = currentCondition;
        emojiField.src = conditionEmoji



    } catch (err) {
        console.log(err)
    }
}

const searchField = document.querySelector('.searchField');
const form = document.querySelector('form');

form.addEventListener('submit', searchCallback);

function searchCallback(ev) {
    ev.preventDefault();
    const target = searchField.value; // city name
    fetchData(target)
}


function getFullDay(num) {
    switch (num) {
        case 0:
            return 'sunday'
        case 1:
            return 'monday'
        case 2:
            return 'tuesday'
        case 3:
            return 'wednesday'
        case 4:
            return 'thursday'
        case 5:
            return 'friday'
        case 6:
            return 'saturday'
            break;

        default:
            return ''
    }
}