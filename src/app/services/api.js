import axios from 'axios'

export async function getDataCity(value) {
  let result = {}

  try {
    await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=1cbf440408df24d6d38f840c33a5e908&lang=pt_br`)
    .then(response => {
      result = response.data;
  })
  } catch (error) {
      console.log(error);
  }
  return result;
}

export async function getForecastNextDays(value) {
  let resultForecast = {}

  try {
    await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${value}&units=metric&appid=e7f38425e5ffe30ed04f95a04e3eb292&lang=pt_br`)
    .then(response => {
      resultForecast = response.data;
  })
  } catch (error) {
    console.log(error);
  }
  return resultForecast;
}




