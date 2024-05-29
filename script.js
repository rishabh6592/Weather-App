document.getElementById('check-weather').addEventListener('click', function() {
    const city = document.getElementById('city').value.trim();
    if (city === '') {
        alert('Please enter a city name');
        return;
    }

    const apiKey = 'f5854bb2b2708fee69833a58f6d3dc8b';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            // console.log(data.wind.deg);
            document.getElementById('location').textContent = data.name;
            document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
            document.getElementById('description').textContent = `Description: ${data.weather[0].description}`;
            document.getElementById('deg').textContent = `Degree: ${data.wind.deg}°`;
            document.getElementById('Wind-speed').textContent = `Wind-speed: ${data.wind.speed} Km/h`;
        })
        .catch(error => {
            alert('City not found or you are enter wrong city name. Please try again.');
            document.getElementById('location').textContent = 'Location not found';
            document.getElementById('temperature').textContent = 'Temperature: --°C';
            document.getElementById('description').textContent = 'Description: --';
            document.getElementById('deg').textContent = 'deg: --';
            document.getElementById('Wind-speed').textContent = 'Speed: --';
            console.error('Error fetching the weather data:', error);
            
        });
        
});
