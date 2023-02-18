// fetch('https://api.openweathermap.org/data/2.5/weather?lat=33.20&lon=10.99&appid=1b12ad2006050c785e867f82fc72d3a8')
// 	.then(function (resp) { return resp.json })
// 	.then(function (data) {
// 		console.log(data)
// 		document.querySelector('.city-name').textContent = data.name
// 		document.querySelector('.temperature').textContent = data.main.temp
// 	})

fetch('https://api.openweathermap.org/data/2.5/weather?lat=55.75583&lon=37.6173&appid=93910f675ba7cd48f730899cb6ec2905')

	.then(function (resp) { return resp.json() })
	.then(function (data) {
		console.log(data)

		document.querySelector('.city-name').textContent = data.name
		document.querySelector('.temperature').textContent = Math.round(data.main.temp - 273) + '°'
		document.querySelector('.weather').textContent = data.weather[0]['description']
		document.querySelector('.icon').innerHTML = `<img src = 'https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png'>`
		document.querySelector('.wind').textContent = data.wind.speed
		document.querySelector('.humidity').textContent = data.main.humidity
		document.querySelector('.country').textContent = data.sys.country
		document.querySelector('.sunrise').textContent = data.sys.sunrise
		document.querySelector('.sunset').textContent = data.sys.sunset
	})