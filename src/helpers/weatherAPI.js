const TOKEN = import.meta.env.VITE_TOKEN;

const errorMessage = window.alert('Nenhuma cidade encontrada');

export const searchCities = async (term) => {
  const response = await fetch(`http://api.weatherapi.com/v1/search.json?key=${TOKEN}&q=${term}`);
  const data = response.json();
  if (response.length === 0) {
    return errorMessage;
  }
  return data;
};

export const getWeatherByCity = async (promise) => {
  const array = await promise;
  const weatherData = await Promise.all(
    array.map(async ({ url }) => {
      const teste = await fetch(`http://api.weatherapi.com/v1/current.json?lang=pt&key=${TOKEN}&q=${url}`);
      const data = teste.json();
      data.url = url;
      return data;
    }),
  );
  return weatherData;
};
