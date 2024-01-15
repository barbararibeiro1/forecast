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

export const getWeatherByCity = async (promise) => {
  const array = await promise;
  const weatherData = await Promise.all(
    array.map(async ({ url }) => {
      // console.log(url);
      const teste = await fetch(`http://api.weatherapi.com/v1/current.json?lang=pt&key=${TOKEN}&q=${url}`);
      const data = teste.json();
      data.url = url;
      return data;
    }),
  );
  return weatherData;
};
