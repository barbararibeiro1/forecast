const TOKEN = import.meta.env.VITE_TOKEN;

const errorMessage = window.alert('Nenhuma cidade encontrada');

export const searchCities = async (term) => {
  const cities = fetch(`http://api.weatherapi.com/v1/search.json?key=${TOKEN}&q=${term}`)
    .then((response) => {
      const pesquisa = Object.entries(response);
      if (pesquisa.length === 0) {
        return errorMessage;
      }
    });
  return cities;
};

export const getWeatherByCity = (/* cityURL */) => {
//   seu código aqui
};
