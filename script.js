
        // Get your API key from OpenWeatherMap
        const apiKey = '9e4a4e3f4ab7bfe5d4caeb3b0ba8e653';
        // Select the HTML elements
        const searchButton = document.querySelector('#search');
        const searchInput = document.querySelector('#input');
        const cityName = document.querySelector('#city-name');
        const temperature = document.querySelector('#temp');
        const description = document.querySelector('#desc');
        const weatherIcon = document.querySelector('#weather-icon');

        // Add an event listener to the search button
        searchButton.addEventListener('click', async () => {
            try {
              const city = searchInput.value;
              console.log(city);
              if (!city) {
                alert("Please enter a city name!");
                return;
              }
              let response = await fetch('https://api.openweathermap.org/data/2.5/weather?appid=' + apiKey + '&q=' + city + '&units=metric');
              if (!response.ok) {
                throw new Error("Failed to fetch data");
              }
              let data = await response.json();
              console.log(data);
              const nameValue = data.name;
              const tempValue = data.main.temp;
              const descValue = data.weather[0].description;
              const icon = data.weather[0].icon;

              // Set the values in the HTML
              cityName.innerHTML = nameValue;
              temperature.innerHTML = `${tempValue} °C`;
              description.innerHTML = descValue;

              weatherIcon.src = `http://openweathermap.org/img/w/${icon}.png`;
            } catch (error) {
              alert("Error: " + error.message);
            }
          });



