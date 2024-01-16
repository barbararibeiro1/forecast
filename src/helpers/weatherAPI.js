const TOKEN = import.meta.env.VITE_TOKEN;

export const searchCities = async (term) => {
  // const errorMessage = window.alert('Nenhuma cidade encontrada');
  const response = await fetch(`http://api.weatherapi.com/v1/search.json?key=${TOKEN}&q=${term}`);
  const data = await response.json();
  if (data.length === 0) {
    window.alert('Nenhuma cidade encontrada');
  }
  return data;
};

export const getWeatherByCity = async (cityUrl) => {
  const endPoint = `http://api.weatherapi.com/v1/current.json?lang=pt&key=${TOKEN}&q=${cityUrl}`;
  const desmember = await fetch(endPoint);
  const infor = await desmember.json();
  const infoCard = {
    name: infor.location.name,
    country: infor.location.country,
    temp: infor.current.temp_c,
    condition: infor.current.condition.text,
    icon: infor.current.condition.icon,
  };
  return infoCard;
};

export const weekForecast = async (url) => {
  const endPoint = `http://api.weatherapi.com/v1/forecast.json?lang=pt&key=${TOKEN}&q=${url}&days=7`;
  const requirement = await fetch(endPoint);
  const response = await requirement.json();
  const weekData = response.forecast.forecastday.map((el) => ({
    date: el.date,
    condition: el.day.condition.text,
    maxTemp: el.day.maxtemp_c,
    minTemp: el.day.mintemp_c,
    icon: el.day.condition.icon,
  }));
  return weekData;
};
