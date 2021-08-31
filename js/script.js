const loadData = () => {
    const search = document.getElementById('input-search');
    const searchValue = search.value;

    search.value = '';

    if (searchValue == '') {
        alert('Please input a city');
    }
    else {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=6ef95beb176a20df7b7537b514c9c6fd`
        fetch(url)
            .then(res => res.json())
            .then(data => displayData(data))
    }

}


const displayData = data => {
    console.log(data.weather[0].icon);
    const city = document.getElementById('weather-info');
    const temp = data.main.temp - 273;
    city.innerHTML = `
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
            <h1>${data.name}</h1>
            <h3><span>${temp.toFixed(2)}</span>&deg;C</h3>
            <h1 class="lead">${data.weather[0].main}</h1>
    `
}